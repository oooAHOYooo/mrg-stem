# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pips ("The Glade Network") is an interactive 3D frontend for orchestrating AI agents. Projects are visualized as island worlds (Glades) inhabited by AI agents (Pips). Built with Vue 3 + Three.js frontend and Python FastAPI backend.

## Commands

### Frontend (from `frontend/`)
- `npm run dev` — Start Vite dev server (proxies `/api` → localhost:8000, `/ws` → ws://localhost:8000)
- `npm run build` — Production build

### Backend (from `backend/`)
- `python main.py` — Start FastAPI server with uvicorn on port 8000

### Setup
1. Copy `backend/.env.example` → `backend/.env`, configure LLM provider (ollama/anthropic/openai)
2. `cd frontend && npm install`
3. `pip install -r backend/requirements.txt`

## Architecture

### Frontend (`frontend/src/`)
- **Entry**: `main.js` → `App.vue` — Root component managing mode system (Explore F1, Build F2, Playful F3, Wizard F4, About F5), UI panels, player inventory, Glade switching
- **`components/`** — `GladeCanvas.vue` (Three.js 3D scene), `ChatWindow.vue` (Pip chat + Council mode), `PipOverlay.vue`, `CouncilButton.vue`, `NebulaIntro.vue` (onboarding)
- **`composables/`** — `useScene.js` (global reactive state), `useApi.js` (HTTP to backend), `useWebSocket.js` (Council WebSocket), `useDraggable.js` (UI panel positioning via localStorage)
- **`three/`** — Terrain generation, Pip mesh rendering with animations/eye-tracking, camera controls, raycasting/picking, gathering mechanics

### Backend (`backend/`)
- **`main.py`** — FastAPI app with CORS (all origins)
- **`routers/agents.py`** — CRUD + chat endpoints at `/api/agents`
- **`routers/council.py`** — WebSocket at `/ws/council` for multi-agent discussions
- **`services/llm.py`** — Unified `complete()` function abstracting Ollama, OpenAI, and Anthropic; falls back to mock responses on failure
- **`state.py`** — In-memory store with 5 pre-seeded Pips (Bramble, Flint, Moss, Ember, Dewdrop), chat histories, council state
- **`models.py`** — Pydantic schemas
- **`config.py`** — Environment-based settings (LLM_PROVIDER, LLM_MODEL, LLM_API_KEY)

### Key Patterns
- Gamification: Hat system changes Pip's LLM provider/model, XP system with evolution at Level 4
- Pokeball capture mechanics for wild Pips/Fairies with physics-based projectiles
- All HUD panels are draggable with positions persisted to localStorage
- Pointer-lock FPS-style locomotion with sprint in Explore mode

## Deployment
Netlify deploys from `frontend/` directory (see `netlify.toml`). Node 20. SPA with all routes redirecting to `index.html`.
