# OTMA Agent Stack

**Status:** Active | **Built:** April 2026

---

## Stack Overview

| Agent | Mechanism | Schedule | Output |
|-------|-----------|----------|--------|
| Content Authority Engine | Cloud routine | Weekdays 9am | `content/posts/YYYY-MM-DD.md` |
| Weekly Sync Prep | Cloud routine | Mondays 7:30am | `operations/syncs/YYYY-MM-DD-sync.md` |
| Skill Crystallizer | Local stop hook | After any session touching `clients/otma/` | `tools/skills/auto-[DATE]/SKILL.md` |
| Brand Monitoring | Cloud routine | Fridays 8am | `research/market/YYYY-MM-DD-market-pulse.md` |

---

## Agent Prompts

- `content-engine.md` — Content Authority Engine (weekday LinkedIn post generation)
- `sync-prep.md` — Weekly Sync Prep (Monday partner meeting pre-fill)
- `brand-monitor.md` — Brand Monitoring (Friday competitive intelligence)

Skill Crystallizer runs via `.claude/settings.json` Stop hook — no prompt file needed.

---

## Output Directories

```
clients/otma/
├── content/
│   ├── posts/           ← daily posts land here
│   └── rotation-state.md ← tracks framework + hook type rotation
├── operations/
│   └── syncs/           ← weekly sync docs land here
├── research/
│   └── market/          ← weekly brand pulse reports land here
└── tools/
    └── skills/          ← extracted skills from sessions
        └── auto-[DATE]/ ← auto-crystallized from stop hook
```

---

## Skill Crystallizer Hook

Configured in `.claude/settings.json` → `hooks.Stop`.
Script: `clients/otma/tools/skill-crystallizer-hook.sh`

Fires when any `clients/otma/` file is modified in a session. Runs silently in background.

---

## Rotation State

Framework rotation for the content engine is tracked in `content/rotation-state.md`.
7 frameworks rotate in sequence. Hook type (observation/outcome/contrast/specificity) rotates independently.
