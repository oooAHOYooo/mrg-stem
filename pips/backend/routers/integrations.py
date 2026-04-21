from __future__ import annotations

from fastapi import APIRouter
from pydantic import BaseModel

from services.llm import test_connection

router = APIRouter(prefix="/api/integrations", tags=["integrations"])


class IntegrationTestRequest(BaseModel):
    provider: str
    model: str | None = None


class IntegrationTestResponse(BaseModel):
    ok: bool
    provider: str
    model: str | None = None
    error: str | None = None


@router.post("/test", response_model=IntegrationTestResponse)
async def test(body: IntegrationTestRequest):
    ok, err = await test_connection(body.provider, body.model)
    return IntegrationTestResponse(ok=ok, provider=body.provider, model=body.model, error=err)

