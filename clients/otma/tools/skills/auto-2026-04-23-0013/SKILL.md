# Authority Ground

**What this is:** A process for anchoring a consulting firm's delivery in formal methodology — building a research knowledge base that backs every service decision and generates authority content, without exposing academic vocabulary to clients.

---

## Steps

| # | Step | Function |
|---|------|----------|
| 1 | **Inventory First** | List the firm's named delivery layers and service phases in plain language *before* touching any formal methodology. Map the firm's own structure — not the textbook's. Prevents methodology from overwriting the actual delivery model. |
| 2 | **Domain Survey** | Research the formal/academic body behind the service domain. Build one file per knowledge tier: `foundations`, `methodologies`, `mapping-techniques`, `advanced`, `academic`. Each file answers two questions explicitly: (a) *Apply* — how does the firm deploy this in delivery? (b) *Authority* — what can be said about this that demonstrates mastery without teaching? |
| 3 | **Delivery Map** | Write the synthesis file: one mapping table linking each methodology → service tier → what the client sees and experiences. For each delivery phase, name the formal stack running underneath and write the suppressed client-facing version — the sentence that communicates the result without naming the methodology. |
| 4 | **Language Filter** | Define explicitly when to name methodologies (enterprise procurement, compliance, technical buyers) vs. suppress them (website copy, SME founders, initial calls). Write both versions for each methodology. The suppressed version must pass the test: *would naming this make the client want to Google it and do it themselves?* |
| 5 | **OS Integration** | Embed the delivery map into the agency OS document. Each service tier gets: formal methodology stack, what gets delivered, client's experiential description. The research becomes invisible infrastructure — not curriculum. |
| 6 | **Content Angles** | Extract 4–6 authority content angles from the delivery map. Each angle: a recognizable client failure mode → the formal mechanism underneath → the agency as installer of the fix — without naming the methodology in the post. |

---

## Inputs Required

- Firm's named delivery layers and service phases (what exists before research begins)
- Access to a research agent or knowledge source for the formal domain
- List of client failure modes or symptoms the agency addresses
- Brand tone rules: what language is allowed vs. prohibited in client-facing copy

---

## Output

After applying this skill, the following exist:

```
clients/[agency]/research/
├── 00-index.md                  ← file map + research lens summary
├── 01-foundations.md            ← what a process is, core concepts
├── 02-methodologies.md          ← core improvement cycles (PDCA, SDCA, Kaizen…)
├── 03-mapping-techniques.md     ← visualization methods (SIPOC, swimlane, VSM…)
├── 04-advanced.md               ← full optimization systems (Lean, TOC, Six Sigma…)
├── 05-academic.md               ← emerging research, AI integration, BPM lifecycle
└── 06-[agency]-application.md   ← delivery map: methodology → tier → client language
```

Agency OS updated with:
- Each service tier linked to its formal methodology stack
- Client-facing language that communicates methodology without naming it
- Authority content angles extracted and ready for the content engine

The agency can now answer "what's your methodology?" in two registers: precise (for procurement/compliance) and experiential (for everyone else) — without ever confusing the two.

---

## Anti-pattern

Do not build the research base before mapping the firm's own delivery layers. Research first → you build what textbooks say, not what the firm actually does. The mapping must run firm→methodology, not methodology→firm. Also: do not map methodology to service tier without writing the suppressed version. Naming PDCA, SIPOC, or BPMN in client-facing copy signals "consulting that teaches" — the opposite of OTMA's positioning.
