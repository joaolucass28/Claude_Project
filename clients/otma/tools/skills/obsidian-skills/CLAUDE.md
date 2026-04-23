# Obsidian Skills — Reference Pack

**What it is:** A collection of agent skills for working with Obsidian vaults. Follows the Agent Skills specification (agentskills.io) — compatible with Claude Code, Codex CLI, and OpenCode.

**Use as reference for:** skill file structure, Obsidian Flavored Markdown syntax, JSON Canvas format, how to structure agent skills for file-based tools.

## Skills Available

| Skill | Purpose | File Format |
|---|---|---|
| `obsidian-markdown` | Create/edit Obsidian Flavored Markdown | `.md` |
| `obsidian-bases` | Create/edit Obsidian Bases (database views) | `.base` |
| `json-canvas` | Create/edit JSON Canvas files | `.canvas` |
| `obsidian-cli` | Interact with Obsidian via CLI | — |
| `defuddle` | Extract clean markdown from web pages | — |

## Key Concepts to Extract

### Obsidian Flavored Markdown Features
- Wikilinks: `[[Page Name]]` and `[[Page Name|Alias]]`
- Embeds: `![[file.md]]`, `![[image.png]]`
- Callouts: `> [!note]`, `> [!warning]`, `> [!tip]`
- Properties (YAML frontmatter): `---\ntags: []\ndate: \n---`
- Block references: `^block-id`
- Tags: `#tag`, `#nested/tag`

### JSON Canvas Format (jsoncanvas.org)
Canvas files with nodes, edges, groups, and connections.
Nodes: text, file, link, group types.
Edges: connect nodes with optional labels and direction.

### Obsidian Bases (`.base` files)
Database-like views over vault files.
Supports: filters, formulas, summaries, multiple view types.

### Defuddle
Strips clutter from web pages → clean markdown for token efficiency.
Useful for research ingestion into Obsidian vaults.

### Skill File Structure (Agent Skills spec)
Each skill lives in `skills/{skill-name}/SKILL.md`.
Skills are self-contained instruction files for agents.

## Relevant Files Inside This Repo
- `skills/obsidian-markdown/SKILL.md` — Markdown authoring rules
- `skills/obsidian-bases/SKILL.md` — Bases syntax reference
- `skills/json-canvas/SKILL.md` — Canvas format spec
- `skills/obsidian-cli/SKILL.md` — CLI interaction guide
- `skills/defuddle/SKILL.md` — Web extraction guide
