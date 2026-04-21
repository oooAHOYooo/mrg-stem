from __future__ import annotations

import httpx

from config import settings
from models import Message, Pip

async def test_connection(provider: str, model: str | None = None) -> tuple[bool, str | None]:
    """Lightweight connectivity check for provider+model.

    Returns (ok, error). Designed for UX ceremonies; does NOT mutate state.
    """
    provider = (provider or "").lower()
    model = model or settings.LLM_MODEL

    try:
        if provider == "openai":
            api_key = settings.LLM_API_KEY
            if not api_key:
                return False, "Missing LLM_API_KEY (OpenAI)"
            async with httpx.AsyncClient(timeout=20.0) as client:
                resp = await client.post(
                    "https://api.openai.com/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {api_key}",
                        "Content-Type": "application/json",
                    },
                    json={
                        "model": model,
                        "messages": [{"role": "user", "content": "ping"}],
                        "max_tokens": 1,
                    },
                )
                resp.raise_for_status()
            return True, None

        if provider == "anthropic":
            api_key = settings.LLM_API_KEY
            if not api_key:
                return False, "Missing LLM_API_KEY (Anthropic)"
            async with httpx.AsyncClient(timeout=20.0) as client:
                resp = await client.post(
                    "https://api.anthropic.com/v1/messages",
                    headers={
                        "x-api-key": api_key,
                        "anthropic-version": "2023-06-01",
                        "Content-Type": "application/json",
                    },
                    json={
                        "model": model,
                        "system": "You are a connection test. Reply with a single character.",
                        "messages": [{"role": "user", "content": "ping"}],
                        "max_tokens": 1,
                    },
                )
                resp.raise_for_status()
            return True, None

        if provider == "ollama":
            # Just check local endpoint is responding.
            async with httpx.AsyncClient(timeout=10.0) as client:
                resp = await client.post(
                    "http://localhost:11434/api/chat",
                    json={
                        "model": model,
                        "messages": [{"role": "user", "content": "ping"}],
                        "stream": False,
                    },
                )
                resp.raise_for_status()
            return True, None

        return False, f"Unknown provider: {provider}"
    except Exception as exc:
        return False, str(exc)


async def complete(pip: Pip, messages: list[Message]) -> str:
    """Call the appropriate LLM provider and return the assistant response text."""

    provider = pip.provider
    model = pip.model

    # Build the message list in OpenAI-compatible format
    formatted: list[dict] = [{"role": "system", "content": pip.system_prompt}]
    for m in messages:
        formatted.append({"role": m.role, "content": m.content})

    try:
        if provider == "openai":
            return await _openai(model, formatted)
        elif provider == "anthropic":
            return await _anthropic(pip.system_prompt, model, formatted)
        elif provider == "ollama":
            return await _ollama(model, formatted)
    except Exception as exc:
        # Fall back to mock if the real call fails
        return _mock(pip, messages, error=str(exc))

    return _mock(pip, messages)


async def _openai(model: str, messages: list[dict]) -> str:
    api_key = settings.LLM_API_KEY
    if not api_key:
        raise ValueError("No LLM_API_KEY configured for OpenAI")

    async with httpx.AsyncClient(timeout=60.0) as client:
        resp = await client.post(
            "https://api.openai.com/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json={
                "model": model,
                "messages": messages,
                "max_tokens": 512,
            },
        )
        resp.raise_for_status()
        data = resp.json()
        return data["choices"][0]["message"]["content"]


async def _anthropic(system_prompt: str, model: str, messages: list[dict]) -> str:
    api_key = settings.LLM_API_KEY
    if not api_key:
        raise ValueError("No LLM_API_KEY configured for Anthropic")

    # Anthropic uses a separate system field; strip the system message from the list
    user_messages = [m for m in messages if m["role"] != "system"]

    async with httpx.AsyncClient(timeout=60.0) as client:
        resp = await client.post(
            "https://api.anthropic.com/v1/messages",
            headers={
                "x-api-key": api_key,
                "anthropic-version": "2023-06-01",
                "Content-Type": "application/json",
            },
            json={
                "model": model,
                "system": system_prompt,
                "messages": user_messages,
                "max_tokens": 512,
            },
        )
        resp.raise_for_status()
        data = resp.json()
        return data["content"][0]["text"]


async def _ollama(model: str, messages: list[dict]) -> str:
    async with httpx.AsyncClient(timeout=120.0) as client:
        resp = await client.post(
            "http://localhost:11434/api/chat",
            json={
                "model": model,
                "messages": messages,
                "stream": False,
            },
        )
        resp.raise_for_status()
        data = resp.json()
        return data["message"]["content"]


def _mock(pip: Pip, messages: list[Message], error: str | None = None) -> str:
    last = messages[-1].content if messages else "hello"
    prefix = f"[mock - {pip.name}]"
    if error:
        prefix += f" (LLM error: {error})"
    return f"{prefix} You said: {last}"
