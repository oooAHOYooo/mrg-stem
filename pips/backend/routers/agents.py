from __future__ import annotations

from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

import state
from models import Message, Pip, PipCreate, PipUpdate
from services.llm import complete

router = APIRouter(prefix="/api/agents", tags=["agents"])


# ---- request body for chat ----
class ChatRequest(BaseModel):
    content: str


# ---- endpoints ----


@router.get("", response_model=list[Pip])
async def list_agents():
    return state.get_all_pips()


@router.get("/{pip_id}", response_model=Pip)
async def get_agent(pip_id: str):
    pip = state.get_pip(pip_id)
    if pip is None:
        raise HTTPException(status_code=404, detail="Pip not found")
    return pip


@router.post("", response_model=Pip, status_code=201)
async def create_agent(body: PipCreate):
    pip = Pip(**body.model_dump())
    return state.add_pip(pip)


@router.patch("/{pip_id}", response_model=Pip)
async def update_agent(pip_id: str, body: PipUpdate):
    updated = state.update_pip(pip_id, body.model_dump(exclude_unset=True))
    if updated is None:
        raise HTTPException(status_code=404, detail="Pip not found")
    return updated


@router.delete("/{pip_id}", status_code=204)
async def delete_agent(pip_id: str):
    if not state.delete_pip(pip_id):
        raise HTTPException(status_code=404, detail="Pip not found")


@router.post("/{pip_id}/chat", response_model=Message)
async def chat(pip_id: str, body: ChatRequest):
    pip = state.get_pip(pip_id)
    if pip is None:
        raise HTTPException(status_code=404, detail="Pip not found")

    # Record the user message
    user_msg = Message(pip_id=pip_id, role="user", content=body.content)
    state.chat_histories[pip_id].append(user_msg)

    # Update pip status
    state.update_pip(pip_id, {"status": "speaking"})

    # Get LLM response
    history = state.chat_histories[pip_id]
    response_text = await complete(pip, history)

    # Record the assistant message
    assistant_msg = Message(
        pip_id=pip_id,
        role="assistant",
        content=response_text,
        timestamp=datetime.now(timezone.utc),
    )
    state.chat_histories[pip_id].append(assistant_msg)

    # Reset status
    state.update_pip(pip_id, {"status": "idle"})

    return assistant_msg
