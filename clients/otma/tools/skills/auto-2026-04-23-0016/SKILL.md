# OS to Pitch

**What this is:** A process for converting an internal agency OS document into stakeholder-facing deliverables — MVP brief, pitch deck, and lay-person explanation — at three levels of depth, without losing positioning integrity or leaking operational detail.

---

## Steps

| # | Step | Function |
|---|------|----------|
| 1 | **Audience Map** | List every person who needs to understand the agency and assign a depth level: (a) **partner/investor** — full model, proof, offer logic; (b) **prospect** — problem + gap + what gets delivered; (c) **personal network** — what the agency does, in plain language, without jargon. Do not write the same document for all three. |
| 2 | **Layer Strip** | Read the OS document. Remove: internal tool names, agent stack details, folder structure, methodology names, pricing placeholders, anything marked `[→ VALIDAR]`. What remains is the signal: positioning, the gap, the proof of origin, the core promise, the offer tiers. |
| 3 | **MVP Brief** | Write a one-pager: (1) the problem in client language, (2) why existing alternatives fail, (3) what the agency delivers and how it differs, (4) the offer entry point. No bullet soup. Each section is one strong paragraph. This is the prospect-facing document. |
| 4 | **Pitch Deck** | Write a slide sequence: Problem → Failed Alternatives → Agency's Approach → Proof of Origin → Offer Structure → What the client gets on day one. Each slide = one idea. The deck reads the same without verbal narration — no "as you can see" dependencies. |
| 5 | **Lay Version** | Write the personal-network explanation as a story, not a pitch. Lead with the real-world situation the founders came from. Say what they do in one sentence a non-businessperson can repeat. Avoid: "B2B", "go-to-market", "methodology", "consulting". This version travels by word of mouth — write it like it should be spoken. |
| 6 | **Format Bridge** | Export each document to HTML and PDF. Self-contained files — no login, no tool, no live link dependency. Name by audience: `[agency]-mvp-brief.html`, `[agency]-mvp-deck.html`, `[agency]-mvp-deck.pdf`, `apresentacao-[audience].html`. Store in `notes/` — these are working documents, not final brand assets. |

---

## Inputs Required

- Internal OS document with identity, positioning, offer structure, and tone rules
- Named offer tiers (even if pricing is still `[→ VALIDAR]`)
- Proof of origin statement (where the founders tested this before it became a product)
- Tone rules: what the brand never says, and what it always says

---

## Output

After applying this skill, the following exist:

```
clients/[agency]/notes/
├── [agency]-mvp-brief.html       ← prospect-facing one-pager
├── [agency]-mvp-deck.html        ← partner/investor slide sequence
├── [agency]-mvp-deck.pdf         ← offline export of same
└── apresentacao-[audience].html  ← lay-person version (personal network)
```

Three versions of the same agency — same positioning, same proof, different depth. A partner can read the deck. A prospect gets the brief. A family member gets the story. None of them see the internal wiring.

---

## Anti-pattern

Do not write the pitch deck from the OS document directly. The OS contains internal logic that explains how the agency operates — not why a client should hire it. Running OS → deck without stripping first produces documents that read like onboarding manuals. Strip first, then write. The pitch is what survives the stripping.
