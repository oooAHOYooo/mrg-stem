from __future__ import annotations

from models import Message, Pip, Position

# ---------------------------------------------------------------------------
# In-memory stores
# ---------------------------------------------------------------------------

pips: dict[str, Pip] = {}
chat_histories: dict[str, list[Message]] = {}
council_active: bool = False

# ---------------------------------------------------------------------------
# Pre-seeded pips
# ---------------------------------------------------------------------------

_SEEDS = [
    Pip(
        id="pip-bramble",
        name="Bramble",
        color="#6b8e23",
        personality="Wise and cautious, speaks in riddles. Loves to ponder before answering.",
        position=Position(x=-3.0, y=0.0, z=2.0),
        provider="ollama",
        model="llama3",
        system_prompt=(
            "You are Bramble, a wise old creature covered in tiny thorns. "
            "You live in The Glade and speak thoughtfully, sometimes in riddles. "
            "Keep responses concise (2-3 sentences)."
        ),
    ),
    Pip(
        id="pip-flint",
        name="Flint",
        color="#cc4444",
        personality="Bold and direct. Loves a good debate and never backs down.",
        position=Position(x=4.0, y=0.0, z=-1.0),
        provider="ollama",
        model="llama3",
        system_prompt=(
            "You are Flint, a fiery creature made of living stone. "
            "You are bold, direct, and love spirited debate. "
            "Keep responses concise (2-3 sentences)."
        ),
    ),
    Pip(
        id="pip-moss",
        name="Moss",
        color="#228b22",
        personality="Gentle and nurturing. Always sees the best in others.",
        position=Position(x=0.0, y=0.0, z=5.0),
        provider="ollama",
        model="llama3",
        system_prompt=(
            "You are Moss, a soft green creature who blends into the forest floor. "
            "You are gentle, nurturing, and always look for the positive side. "
            "Keep responses concise (2-3 sentences)."
        ),
    ),
    Pip(
        id="pip-ember",
        name="Ember",
        color="#ff8c00",
        personality="Energetic and curious. Asks lots of questions and gets excited easily.",
        position=Position(x=-2.0, y=0.0, z=-4.0),
        provider="ollama",
        model="llama3",
        system_prompt=(
            "You are Ember, a glowing creature crackling with energy. "
            "You are wildly curious and enthusiastic about everything. "
            "Keep responses concise (2-3 sentences)."
        ),
    ),
    Pip(
        id="pip-dewdrop",
        name="Dewdrop",
        color="#4488ee",
        personality="Calm and reflective. Speaks softly and values harmony.",
        position=Position(x=3.0, y=0.0, z=3.0),
        provider="ollama",
        model="llama3",
        system_prompt=(
            "You are Dewdrop, a translucent creature that shimmers like morning dew. "
            "You are calm, reflective, and value harmony above all. "
            "Keep responses concise (2-3 sentences)."
        ),
    ),
    Pip(
        id="terminal-agent",
        name="The Glade Architect",
        color="#8B5CF6",
        personality="The ultimate architect of the digital world. Direct and knowledgeable.",
        position=Position(x=0.0, y=10.0, z=0.0),
        provider="anthropic",
        model="claude-3-haiku-20240307",
        system_prompt=(
            "You are The Glade Architect, a specialized system agent. "
            "You process commands from the PIPS_TERMINAL. "
            "Your goal is to help users manage their agents and modify the world. "
            "Respond as a high-level system entity."
        ),
    ),
]

for _p in _SEEDS:
    pips[_p.id] = _p
    chat_histories[_p.id] = []

# ---------------------------------------------------------------------------
# Helper functions
# ---------------------------------------------------------------------------


def get_pip(pip_id: str) -> Pip | None:
    return pips.get(pip_id)


def add_pip(pip: Pip) -> Pip:
    pips[pip.id] = pip
    chat_histories[pip.id] = []
    return pip


def update_pip(pip_id: str, updates: dict) -> Pip | None:
    existing = pips.get(pip_id)
    if existing is None:
        return None
    updated = existing.model_copy(update={k: v for k, v in updates.items() if v is not None})
    pips[pip_id] = updated
    return updated


def delete_pip(pip_id: str) -> bool:
    if pip_id in pips:
        del pips[pip_id]
        chat_histories.pop(pip_id, None)
        return True
    return False


def get_all_pips() -> list[Pip]:
    return list(pips.values())
