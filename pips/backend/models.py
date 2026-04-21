from __future__ import annotations

import uuid
from datetime import datetime, timezone
from typing import Literal, Optional

from pydantic import BaseModel, Field


class Position(BaseModel):
    x: float = 0.0
    y: float = 0.0
    z: float = 0.0


class Pip(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    color: str = "#88cc44"
    personality: str = "friendly"
    position: Position = Field(default_factory=Position)
    provider: Literal["openai", "anthropic", "ollama"] = "ollama"
    model: str = "llama3"
    system_prompt: str = "You are a helpful creature living in a magical glade."
    status: Literal["idle", "speaking", "gathering"] = "idle"


class PipCreate(BaseModel):
    name: str
    color: str = "#88cc44"
    personality: str = "friendly"
    position: Position = Field(default_factory=Position)
    provider: Literal["openai", "anthropic", "ollama"] = "ollama"
    model: str = "llama3"
    system_prompt: str = "You are a helpful creature living in a magical glade."


class PipUpdate(BaseModel):
    name: Optional[str] = None
    color: Optional[str] = None
    personality: Optional[str] = None
    position: Optional[Position] = None
    provider: Optional[Literal["openai", "anthropic", "ollama"]] = None
    model: Optional[str] = None
    system_prompt: Optional[str] = None
    status: Optional[Literal["idle", "speaking", "gathering"]] = None


class Message(BaseModel):
    pip_id: str
    role: Literal["user", "assistant"] = "user"
    content: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class CouncilEvent(BaseModel):
    type: Literal["start", "message", "end"]
    pip_id: Optional[str] = None
    content: Optional[str] = None
