# Agency Launch

**What this is:** A process for transitioning an AI-powered agency from infrastructure setup to live operation — confirming every component is wired, running the first cycle of each agent, and enabling GitHub issues as the async work queue between sessions.

---

## Steps

| # | Step | Function |
|---|------|----------|
| 1 | **Stack Audit** | Read the agents README. For each agent: confirm CronCreate routine exists (scheduled agents) or stop hook fires (event-driven agents). If any agent has a prompt but no schedule, it is not running — wire it or remove it from the README. No phantom agents. |
| 2 | **Label Schema** | Create GitHub issue labels that map 1:1 to the agency's operational domains. Each label names one domain and one domain only: `content`, `brand`, `research`, `operations`, `agent`. Labels are the routing layer — the @claude trigger uses them to scope context before acting. |
| 3 | **Issue Queue** | Open a test issue on GitHub with one domain label and a `@claude` comment. Verify the Action fires, reads the OS document, and produces output in the correct domain folder. This is the acceptance test — if it produces wrong output or writes to the wrong path, the OS document's folder structure is unclear to the agent. Fix the OS, not the agent. |
| 4 | **OS Verification** | Read the OS document as if arriving cold. Confirm it answers: (a) what the agency does, (b) what each domain folder contains, (c) which skills are installed and their slash commands, (d) what agents run and where their output lands. If any agent entering the project would not know where to write its output, add one line to the OS. The OS is the cold-start context — not a brand document. |
| 5 | **Handoff Declaration** | Add a `## Status` block to the OS document: agent stack is live (with date), GitHub Action is active, stop hook is configured, first issue cycle verified. This marks the boundary between setup and operation. After this point, new work is initiated via issues or scheduled agents — not ad-hoc sessions. |

---

## Inputs Required

- Completed agents/ README with schedule table
- GitHub repository with Actions enabled and `ANTHROPIC_API_KEY` secret set
- OS document with domain folder structure defined
- GitHub issue labels created for each agency domain
- CronCreate routines created for scheduled agents

---

## Output

After applying this skill, the following exist and are confirmed live:

```
.github/
└── workflows/
    └── claude.yml              ← @claude responds to issue/PR comments

GitHub issue labels:
    content, brand, research, operations, agent

clients/[agency]/
├── [AGENCY]-OS.md              ← Status block added: "System live YYYY-MM-DD"
└── agents/
    └── README.md               ← All agents show schedule + verified output path
```

Agency operates in three modes simultaneously, all live:
- **Scheduled** — content, sync prep, brand monitoring run on CronCreate
- **Event-driven** — session end triggers Skill Crystallizer via stop hook
- **Issue-driven** — partners assign work via GitHub issues; @claude acts between sessions

Partners can now assign tasks without opening a Claude Code session. The agency runs between sessions.

---

## Anti-pattern

Do not declare the system live before running the issue queue test. The @claude Action reads the OS document cold — if the folder structure in the OS differs from what is on disk, the agent writes output to a path that does not exist. The acceptance test catches this before it becomes a silent failure pattern.
