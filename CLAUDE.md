# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

For complete project context, including:
- Project overview and tech stack
- Architecture and data layer (Mock/Prod modes)
- Design system (colors, typography, motion)
- Operational status and known hacks

See: `AGENTS.md`

## Commands

```bash
bun install   # Install dependencies
bun dev       # Start development server
bun run build # Build for production
```

## Firebase

Configure environment variables in `.env` (see `.env.example`). App runs in mock mode without Firebase keys.
