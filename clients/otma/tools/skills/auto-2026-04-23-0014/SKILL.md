# Agency Arm

**What this is:** A process for extending an agency's operating system with a curated skill library and a GitHub automation layer — so the agency can be operated by both local Claude sessions and remote @claude triggers on issues and PRs.

---

## Steps

| # | Step | Function |
|---|------|----------|
| 1 | **Skill Audit** | List every recurring task the agency does in Claude sessions (brand work, content, research, process design, visual direction). For each: does a public skill exist? Check `antigravity-awesome-skills` marketplace and GitHub. Do not build what already exists. |
| 2 | **Skill Install** | Install selected skills into `tools/skills/[skill-name]/`. For each: verify the SKILL.md exists and the slash command works locally. Group by function: `brand-suite` (brand-dna, brand-os, scene-architect), `ops-suite` (superpowers, claude-mem, get-shit-done), `tech-suite` (ui-ux-pro-max, research-processes). |
| 3 | **GitHub Action** | Add `.github/workflows/claude.yml` using the official `anthropics/claude-code-action`. Configure: trigger on `issue_comment` and `pull_request` when body contains `@claude`. Grant write permissions for issues, pull-requests, and contents. This enables remote task delegation without a local session. |
| 4 | **Label Schema** | Create GitHub issue labels that map to agency functions: `content`, `brand`, `research`, `operations`, `agent`. Labels let the GitHub Action understand scope before dispatching. One label = one domain. |
| 5 | **OS Reference** | Add a `## Tools` section to the agency OS document. List each installed skill, its slash command, and its trigger context. Any agent or human entering the project now knows which tools are available without exploring the filesystem. |

---

## Inputs Required

- Agency OS document with defined service domains
- GitHub repository with Actions enabled
- `ANTHROPIC_API_KEY` as a repository secret
- Antigravity skill marketplace access (for discovery)

---

## Output

After applying this skill, the following exist:

```
clients/[agency]/
└── tools/
    └── skills/
        ├── brand-dna/          ← /brand-dna slash command
        ├── brand-os/           ← /brand-os slash command
        ├── brand-suite/        ← /brand-suite slash command
        ├── scene-architect/    ← /scene-architect slash command
        ├── superpowers/        ← superpowers:* command suite
        ├── claude-mem/         ← /claude-mem slash command
        ├── get-shit-done/      ← /get-shit-done slash command
        ├── ui-ux-pro-max-skill/← /ui-ux-pro-max slash command
        └── research-processes/ ← /research-processes slash command

.github/
└── workflows/
    └── claude.yml              ← @claude trigger via issue/PR comments

GitHub issue labels:
    content, brand, research, operations, agent
```

Agency can now be operated in three modes: local session (Claude Code), scheduled cloud routine (CronCreate agents), and remote trigger (GitHub @claude). All three share the same OS document and skill library.

---

## Anti-pattern

Do not install skills that duplicate each other's function. If two skills both claim to do brand positioning, pick one and document which one is authoritative in the OS document. A fragmented skill library produces inconsistent agency output faster than no library at all.
