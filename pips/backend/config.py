from dataclasses import dataclass, field
import os

from dotenv import load_dotenv

load_dotenv()


@dataclass
class Settings:
    HOST: str = os.getenv("HOST", "0.0.0.0")
    PORT: int = int(os.getenv("PORT", "8000"))
    LLM_PROVIDER: str = os.getenv("LLM_PROVIDER", "ollama")
    LLM_API_KEY: str = os.getenv("LLM_API_KEY", "")
    LLM_MODEL: str = os.getenv("LLM_MODEL", "llama3")


settings = Settings()
