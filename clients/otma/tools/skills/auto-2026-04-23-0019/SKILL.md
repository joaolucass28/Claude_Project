# Agency Bootstrap

**What this is:** A process for taking a consulting firm from concept to live AI-powered operation in one structured session — brand foundation, research base, agent stack, skill library, stakeholder deliverables, and autonomous work queue all built in sequence and confirmed running before the session ends.

---

## Steps

| # | Step | Skill | Function |
|---|------|-------|----------|
| 1 | **OS First** | (manual) | Write the agency's OS document before touching any tool. It answers: what the firm does, what each folder contains, which agents run and where output lands. Every downstream agent reads this cold — it must be complete enough that no agent needs to ask a clarifying question. |
| 2 | **Authority Ground** | `Authority Ground` | Build the formal research base behind the firm's service domain. One file per knowledge tier. Each file produces two outputs: an *Apply* answer (how the firm uses it in delivery) and an *Authority* answer (what can be said publicly to demonstrate mastery without teaching). |
| 3 | **Agency Brief** | `Agency Brief` | Write the brand foundation document as a live brief, not a finished asset. Every unconfirmed section is marked `[→ VALIDAR]`. The brief is the source of truth for all agents, copy, and design. It is versioned and used immediately — markers do not block. |
| 4 | **Agency Arm** | `Agency Arm` | Audit the skill marketplace. Install only skills with recurring use. Wire the GitHub Action for `@claude` trigger on issues and PRs. Create domain labels. Add a `## Tools` section to the OS. The agency now has three operating modes: local, scheduled, and remote. |
| 5 | **Agency Autopilot** | `Agency Autopilot` | Write one execution-script prompt per scheduled agent (content, sync prep, monitoring). Initialize rotation state. Install the stop hook via `settings.json`. Deploy cloud routines with `CronCreate`. Run each agent manually once before enabling the schedule. |
| 6 | **OS to Pitch** | `OS to Pitch` | Strip the OS of internal wiring. Write three versions: MVP brief (prospect), pitch deck (partner/investor), lay version (personal network). Export to HTML and PDF. Store in `notes/` — these are working documents. |
| 7 | **Agency Launch** | `Agency Launch` | Verify every agent has a live schedule or a confirmed hook. Open a test GitHub issue with a domain label and `@claude` comment. Confirm output lands in the correct folder. Add a `## Status` block to the OS: "System live [DATE]." Work now initiates via issues or scheduled agents — not ad-hoc sessions. |

---

## Inputs Required

- Two founders with named delivery experience (the origin story is a proof point, not background)
- A git repository with GitHub Actions enabled and `ANTHROPIC_API_KEY` as a secret
- Agreement on what the firm will never say and never sell (required before brief, before agent prompts)
- At least three recurring agency outputs to assign to agents (content, meeting prep, monitoring is the minimum viable stack)

---

## Output

After applying this skill, the following exist and are confirmed live:

```
clients/[agency]/
├── [AGENCY]-OS.md                ← cold-start context for any session or agent
├── brand/
│   └── brand-foundation.md       ← live brief with [→ VALIDAR] markers as partner agenda
├── research/
│   ├── 00-index.md through 06-[agency]-application.md
│   └── (methodology → tier → client language mapping table)
├── agents/
│   ├── content-engine.md
│   ├── sync-prep.md
│   ├── brand-monitor.md
│   └── README.md                 ← agent / schedule / output / status table
├── content/
│   └── rotation-state.md         ← initialized, agent reads and writes this
├── notes/
│   ├── [agency]-mvp-brief.html
│   ├── [agency]-mvp-deck.html
│   ├── [agency]-mvp-deck.pdf
│   └── apresentacao-[audience].html
└── tools/
    ├── skill-crystallizer-hook.sh
    └── skills/                   ← curated install: brand-suite, superpowers, claude-mem, etc.

.github/workflows/claude.yml      ← @claude active on issues and PRs
GitHub labels: content, brand, research, operations, agent
CronCreate routines: 3 agents scheduled, confirmed running
Stop hook: confirmed firing, auto-crystallizing sessions
```

The agency operates in three modes simultaneously: scheduled (CronCreate), event-driven (stop hook), issue-driven (@claude). Partners assign work via GitHub issues between sessions. The system runs without a local session open.

---

## Anti-pattern

Do not build the agent stack before writing the OS document. Agents read the OS cold — if the OS is incomplete when agents deploy, every agent run writes to a path that does not match what is on disk. Also: do not install skills before mapping the agency's own delivery structure. Skills should extend what the agency already does, not define it. Sequence: OS → brand → research → tools → agents → pitch → launch. Reversing any pair in this sequence produces rework.
