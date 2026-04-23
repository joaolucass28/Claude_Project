# Agency Cold Start

**What this is:** A sequenced build order for constructing a fully automated AI agency OS from zero in a single session — identity, research base, skill library, agent stack, automation layer, and stakeholder documents — assembled in dependency order so no component is built without the context it requires.

---

## Steps

| # | Step | Function |
|---|------|----------|
| 1 | **OS First** | Write `[AGENCY]-OS.md` before any other artifact. Define: what the agency does, who it's for, what it explicitly rejects, service tiers, folder structure, and AI operation instructions. Every downstream component — agents, skills, content — reads this file cold. If it doesn't exist yet, every downstream component is incoherent. |
| 2 | **Brand Foundation** | Write `brand/brand-foundation.md` as a live brief. Mark unconfirmed claims `[→ VALIDAR]`. Do not wait for partner validation — markers are the validation queue, not a blocker. Ship as `v0.x`. |
| 3 | **Authority Research** | Build `research/` — one file per knowledge tier (foundations → methodologies → mapping → advanced → academic → agency-application). For each methodology: write the formal definition and the suppressed client-facing version. Embed the delivery map into the OS. |
| 4 | **Skill Library** | Audit public skills before building. Install to `tools/skills/`. Register each skill's slash command in the OS `## Tools` section. Group by function. No skill installs without an OS entry — a skill not in the OS does not exist for agents. |
| 5 | **Agent Stack** | Design agents with three constraints each: trigger mechanism (schedule or hook), exact output path (named file pattern), rotation guard (how repetition is prevented). Write one prompt file per agent. No agent without all three constraints. |
| 6 | **Automation Layer** | Wire stop hook in `.claude/settings.json`. Add GitHub Action for `@claude` issue and PR triggers. Create label schema (one label per domain). Run acceptance test: open one labeled issue, confirm output lands in the correct folder path. If wrong, fix the OS — not the agent. |
| 7 | **Stakeholder Documents** | Strip the OS to three audience depths: partner brief (one-pager), pitch deck (slide sequence), lay version (spoken story). Export to HTML + PDF. Store in `notes/` — not `brand/`. |
| 8 | **Status Declaration** | Add `## Status` to the OS: date, agent stack live, GitHub Action active, stop hook configured, first issue cycle verified. After this point, new work enters via issues or scheduled agents — not ad-hoc sessions. |

---

## Sequence Constraints

Steps 1 → 2 → 3 run in order. Steps 4, 5, 6 can parallelize after step 1. Step 7 requires steps 1–3. Step 8 requires all prior steps.

Do not run step 5 before step 1. Do not run step 7 before step 2 has at least one confirmed positioning claim. Do not run step 8 before the acceptance test in step 6 passes.

---

## Inputs Required

- Agency name, partners, founding context (what the partners did before the agency existed)
- At least one client archetype: what they tried before, why it failed
- What the agency will never say and never sell
- `ANTHROPIC_API_KEY` as GitHub repository secret
- `OPENAI_API_KEY` in local environment (for skill extractor)

---

## Output

After applying this skill, the following exist and run:

```
clients/[agency]/
├── [AGENCY]-OS.md                  ← single source of truth; Status block added
├── brand/brand-foundation.md       ← live brief v0.x with [→ VALIDAR] markers
├── research/00-index.md … 06-[agency]-application.md
├── agents/
│   ├── README.md                   ← stack table: agent / trigger / output path
│   ├── content-engine.md
│   ├── sync-prep.md
│   └── brand-monitor.md
├── content/rotation-state.md
├── notes/
│   ├── [agency]-mvp-brief.html
│   ├── [agency]-mvp-deck.html + .pdf
│   └── apresentacao-[audience].html
└── tools/
    ├── skill-crystallizer-hook.sh
    ├── skill-extractor/SKILL.md + extract.py
    └── skills/                     ← curated library + auto-[DATE]/ entries

.github/workflows/claude.yml        ← @claude issue/PR trigger
GitHub labels: content, brand, research, operations, agent
```

Agency runs in three modes simultaneously: scheduled (content, sync, monitoring), reactive (skill crystallizer on session end), issue-driven (@claude between sessions). All three share the same OS document. No mode requires a human to initiate it after setup.

---

## Anti-pattern

Do not install the agent stack before the OS document exists. Agents without a shared identity document produce inconsistent tone — each agent optimizes locally with no agency-level coherence. Also: do not skip the acceptance test before declaring status live. A scheduled agent or @claude trigger that writes to a non-existent path fails silently — the acceptance test is the only way to catch this before it becomes a recurring silent failure.
