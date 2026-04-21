from __future__ import annotations

import asyncio
import json
from datetime import datetime, timezone

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

import state
from models import CouncilEvent, Message
from services.llm import complete

router = APIRouter()

# Active WebSocket connections
_connections: set[WebSocket] = set()


async def _broadcast(event: dict) -> None:
    payload = json.dumps(event, default=str)
    dead: list[WebSocket] = []
    for ws in _connections:
        try:
            await ws.send_text(payload)
        except Exception:
            dead.append(ws)
    for ws in dead:
        _connections.discard(ws)


@router.websocket("/ws/council")
async def council_ws(ws: WebSocket):
    await ws.accept()
    _connections.add(ws)
    try:
        while True:
            raw = await ws.receive_text()
            try:
                data = json.loads(raw)
                event = CouncilEvent(**data)
            except Exception:
                await ws.send_text(json.dumps({"error": "invalid event"}))
                continue

            if event.type == "start":
                await _handle_start(event)
            elif event.type == "end":
                await _handle_end()
            elif event.type == "message":
                # Client-sent message during council (optional extension)
                pass

    except WebSocketDisconnect:
        pass
    finally:
        _connections.discard(ws)


async def _handle_start(event: CouncilEvent) -> None:
    state.council_active = True

    topic = event.content or "Discuss something interesting about the glade."

    await _broadcast({
        "type": "start",
        "content": topic,
    })

    # Set all pips to gathering
    for pip_id in list(state.pips):
        state.update_pip(pip_id, {"status": "gathering"})

    # Iterate through each pip and get their council contribution
    council_messages: list[dict] = []

    for pip in state.get_all_pips():
        if not state.council_active:
            break

        state.update_pip(pip.id, {"status": "speaking"})

        # Build context: the council topic + what others have said so far
        context_msgs = [
            Message(
                pip_id=pip.id,
                role="user",
                content=(
                    f"The council has gathered to discuss: {topic}\n\n"
                    + (
                        "Here is what others have said so far:\n"
                        + "\n".join(
                            f"- {m['name']}: {m['content']}" for m in council_messages
                        )
                        if council_messages
                        else "You are the first to speak."
                    )
                    + "\n\nShare your thoughts briefly."
                ),
            )
        ]

        response_text = await complete(pip, context_msgs)

        council_messages.append({"name": pip.name, "content": response_text})

        await _broadcast({
            "type": "message",
            "pip_id": pip.id,
            "content": response_text,
        })

        state.update_pip(pip.id, {"status": "gathering"})

        # Small pause between speakers for natural feel
        await asyncio.sleep(0.3)

    # Reset all pips to idle
    for pip_id in list(state.pips):
        state.update_pip(pip_id, {"status": "idle"})

    # Auto-end after all pips have spoken
    if state.council_active:
        await _handle_end()


async def _handle_end() -> None:
    state.council_active = False

    for pip_id in list(state.pips):
        state.update_pip(pip_id, {"status": "idle"})

    await _broadcast({"type": "end"})
