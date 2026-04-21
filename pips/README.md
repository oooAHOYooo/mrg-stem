# Pips: The Glade Network

Pips is an interactive, 3D visual frontend acting as an orchestration layer for underlying AI processes, LLMs, and real-world project management.

## What it Does

Pips visualizes your real-world projects—like "Ahoy Indie Media" or "The Film Project"—as dynamic island worlds called **Glades**. Each Glade is inhabited by **Pips**, which represent dedicated AI agents (e.g., a SysAdmin, an Editor, a Director). 

Think of each Pip as a socket or API connection to an LLM running locally or in the cloud. When you chat with a Pip in the 3D environment, your input is sent to the backend server, processed by that specific agent with its assigned project context, and the response is streamed directly back as an interactive chat bubble.

By separating agents into distinct Glades, Pips seamlessly containerizes their context limits, allowing you to orchestrate multiple autonomous agent teams operating simultaneously across different projects without their memory overlapping!

## Features

- **Explore Mode (F1)**: Fly around your network of 3D island Glades.
- **Build Mode (F2)**: Drop farm tools, lanterns, and totems to customize the environments and control the spawn behaviors of new computational AI agents.
- **Playful Mode (F3)**: Arcade flight tuning to soar rapidly across the landscape.
- **Wizard Mode (F4)**: Dynamically generate new project domains, rendering new Glades on the fly.
- **About Mode (F5)**: Quick in-game reference on the local AI agent architecture.

## Getting Started

To boot up the 3D visualizer locally:
```bash
cd frontend
npm install
npm run dev
```

*Step into the vortex and watch your projects come to life!*