# Agency Automate

**What this is:** A process for wiring a consulting agency to run on scheduled agents — one that generates content, preps partner syncs, monitors the market, and crystallizes its own processes automatically at session end.

---

## Steps

| # | Step | Function |
|---|------|----------|
| 1 | **OS Document** | Write a single file (`OTMA-OS.md`) that acts as the agency brain: identity, positioning, tone rules, service structure, tool index, and AI instructions. Any human or agent entering the project reads this first. |
| 2 | **Agent Stack Design** | Define which agents the agency needs, their trigger mechanism (cloud routine vs. local hook), schedule, and output path. One table. No agent without a named output file. |
| 3 | **Agent Prompts** | Write one prompt file per agent. Each prompt: states its role, reads state before acting, rotates to prevent repetition, saves output to a predictable path, and updates state after. No open-ended loops. |
| 4 | **Rotation State** | Create a `rotation-state.md` that tracks the last framework and variation used. Content agents read this before generating; they write to it after. Prevents repetitive output without human intervention. |
| 5 | **Stop Hook** | Wire a shell script to `.claude/settings.json` Stop hook. Script detects which `clients/[agency]/` files changed, then runs the Skill Crystallizer in background — silently, without blocking session exit. |
| 6 | **Skill Extractor** | Build a Python script + SKILL.md that accepts a `PROCESS_SUMMARY` string, calls GPT-4o, and writes a structured `SKILL.md` to `tools/skills/[process-name]/`. Triggered manually via `/extract-skill` or automatically via stop hook. |

---

## Inputs Required

- Agency identity: name, partners, positioning, tone rules
- Framework list: named operational processes the agency uses or teaches
- Agent definitions: what runs, when, what it produces
- `OPENAI_API_KEY` in environment (for skill extractor)
- Claude Code with Stop hook support (`.claude/settings.json`)

---

## Output

After applying this skill, the following exist and run:

```
clients/[agency]/
├── [AGENCY]-OS.md                  ← single source of truth for any agent or human
├── agents/
│   ├── README.md                   ← stack overview table
│   ├── content-engine.md           ← weekday post generator prompt
│   ├── sync-prep.md                ← weekly partner meeting pre-fill prompt
│   └── brand-monitor.md            ← weekly competitive intelligence prompt
├── content/
│   ├── rotation-state.md           ← framework + hook type tracker
│   └── posts/                      ← daily posts land here (auto-generated)
├── operations/syncs/               ← weekly sync docs land here
├── research/market/                ← brand pulse reports land here
└── tools/
    ├── skill-crystallizer-hook.sh  ← fires on every session end
    ├── skill-extractor/
    │   ├── SKILL.md                ← /extract-skill command definition
    │   └── extract.py              ← GPT-4o caller
    └── skills/
        └── auto-[DATE]/SKILL.md   ← auto-extracted from this session
```

Agents run on schedule without human input. Every session that touches the agency folder produces a crystallized skill. Content never repeats framework+hook combinations consecutively.

---

## Anti-pattern

Do not install agents before the OS document exists. Agents without a shared identity document produce inconsistent tone and positioning — each agent optimizes locally with no agency-level coherence.
