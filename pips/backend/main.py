from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import settings
from routers.agents import router as agents_router
from routers.council import router as council_router
from routers.integrations import router as integrations_router

app = FastAPI(title="The Glade - AI Agent Playground", version="0.1.0")

# CORS - allow all for MVP
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(agents_router)
app.include_router(council_router)
app.include_router(integrations_router)


@app.get("/health")
async def health():
    return {"status": "ok", "provider": settings.LLM_PROVIDER, "model": settings.LLM_MODEL}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host=settings.HOST, port=settings.PORT, reload=True)
