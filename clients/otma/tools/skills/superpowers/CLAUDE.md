# Superpowers — Reference Pack

**What it is:** A complete software development workflow built on composable skills. Automatically triggers spec → plan → subagent-driven implementation. Emphasizes TDD, YAGNI, DRY.

**Use as reference for:** subagent orchestration patterns, skill composition, spec-first development, plan structure, verification workflows, git worktree usage.

## Key Concepts to Extract

### How It Works
1. When you start building something, it stops and extracts a spec via conversation
2. Shows spec in digestible chunks for review and sign-off
3. Generates an implementation plan clear enough for a junior engineer to follow
4. Launches subagent-driven development — agents work through each task autonomously
5. Inspects and reviews work, continues forward without deviation

### Skills Library (`skills/`)

| Skill | Purpose |
|---|---|
| `using-superpowers` | Entry point — how to activate and use the system |
| `writing-plans` | How to create a good implementation plan |
| `executing-plans` | How to run a plan with subagents |
| `subagent-driven-development` | Core orchestration pattern |
| `dispatching-parallel-agents` | Run multiple agents in parallel |
| `test-driven-development` | Red/green TDD workflow |
| `systematic-debugging` | Step-by-step debugging approach |
| `verification-before-completion` | How to verify work before marking done |
| `receiving-code-review` | How to handle review feedback |
| `requesting-code-review` | How to request and structure reviews |
| `finishing-a-development-branch` | Branch completion checklist |
| `using-git-worktrees` | Parallel work via git worktrees |
| `brainstorming` | Structured ideation process |
| `writing-skills` | How to write new skills |

### Core Development Principles
- **Spec first** — never jump into code without a signed-off spec
- **TDD** — true red/green, tests written before implementation
- **YAGNI** — You Aren't Gonna Need It. No speculative features.
- **DRY** — Don't Repeat Yourself. Extract shared logic.
- **Subagent autonomy** — agents work hours without deviation once plan is locked

### Plan Structure
Plans are clear enough for an "enthusiastic junior with no project context" to follow. Each task in a plan has: clear inputs, clear outputs, verification criteria.

### Git Worktrees
Used for parallel feature development without context switching. Each worktree = isolated branch = separate agent workspace.

## Relevant Files Inside This Repo
- `skills/using-superpowers/` — Start here
- `skills/writing-plans/` — Plan format and best practices
- `skills/subagent-driven-development/` — Core orchestration pattern
- `skills/test-driven-development/` — TDD workflow
- `skills/verification-before-completion/` — Quality verification
- `GEMINI.md` — Gemini CLI configuration (parallel to this CLAUDE.md)
