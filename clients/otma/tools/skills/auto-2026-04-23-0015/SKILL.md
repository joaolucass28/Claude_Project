# Agency Brief

**What this is:** A process for writing a single brand foundation document that acts as both a partner validation instrument and the source of truth for all agents, copy, and design decisions — built as a live brief where every section is either a confirmed decision or a marked hypothesis.

---

## Steps

| # | Step | Function |
|---|------|----------|
| 1 | **Anti-Pattern Test First** | Before writing any section, state the test: *could this sentence appear on a competitor's page without feeling out of place?* If yes, it's not specific enough. Write this test into the document header so every section author applies it. |
| 2 | **Brand Essence** | One sentence. Not a slogan — an internal declaration of what the firm believes about the market. Start from the client's failed alternative (what they tried before), not from the firm's capabilities. |
| 3 | **Audience (Behavioral)** | Define by behavior and values, not demographics. Write two explicit groups: *who this is for* and *who this is not for*. The exclusion list is as important as the inclusion — it forces positioning decisions. |
| 4 | **Positioning and Purpose** | Positioning = the gap between existing alternatives and what the firm delivers. Purpose = the market belief that makes that gap worth closing. Write both in one paragraph each. Mark any claim that needs partner confirmation with `[→ VALIDAR]`. |
| 5 | **Service Logic** | One table: Tier / Name / What it is / Who it's for. This is where positioning becomes sellable product. Do not write pricing — write the *filtering signal* pricing creates. Mark hypothetical tiers `[→ VALIDAR]`. |
| 6 | **Tone Table** | Three columns: Situation / What the firm says / What the firm never says. At least 3 rows. Each row must be a real scenario where the wrong answer damages positioning. Also write a prohibition list: words and phrases the firm never publishes. |
| 7 | **Executive Summary** | Exactly 5 lines. Forces every positioning decision to compress into what can be said in 30 seconds. Write this last — it reveals what's still vague. If the 5 lines feel generic, the positioning is not done. |
| 8 | **Validation Sweep** | Count all `[→ VALIDAR]` markers. These become the agenda for the next partner session. Ship the document as a versioned draft (`v0.x`) with markers intact — not as a finished brief requiring sign-off before use. |

---

## Inputs Required

- The firm's named services (even if just working titles)
- At least one client archetype: how they arrived, what they tried before, what they needed
- The firm's founding context — what operational experience predates the agency
- Partner agreement on what the firm will never say or never sell

---

## Output

After applying this skill, the following exists:

```
clients/[agency]/brand/
└── brand-foundation.md         ← live brief, versioned (v0.x until partners validate)
```

Document sections, in order:
1. How to Use (anti-pattern test)
2. Brand Essence
3. Audience (primary + exclusion list)
4. Positioning / Purpose
5. Value Proposition (core promise + reasons to believe)
6. Differentiators
7. Service Logic (tier table)
8. Tone of Voice (tone table + prohibition list)
9. Visual Direction (register + palette of sensations + anti-pattern)
10. Narrative Central (3 paragraphs: market gap → origin → result)
11. Executive Summary (5 lines)

All downstream agents, copy, and design briefs reference this document as source of truth. Every `[→ VALIDAR]` marker is a standing agenda item — not a blocker.

---

## Anti-pattern

Do not write the executive summary first. Writing it first produces a generic pitch. The summary is a compression test — it only works after the other sections force specific decisions. Also: do not remove `[→ VALIDAR]` markers to make the document look more finished. Markers are operational — they are the partner meeting agenda.
