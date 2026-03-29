---
name: Forma Engenharia Build State
description: Current build status for Forma Engenharia Framer landing page — what is done, what is blocked, what needs code fixes
type: project
---

Forma Engenharia is a Framer landing page for a high-end construction/engineering firm in Belo Horizonte, MG. All source files are in `clients/forma-engenharia/`. The main component is `FormaEngenharia.tsx`.

**Why:** The project was at a partial delivery state — structurally complete but blocked by client-side data and several mobile/code gaps.

**Current state (2026-03-29):** All 8 sections are built and structurally correct. Copy is faithful to `copy-home.md`. Design tokens match `visual-direction.md` exactly. The component is NOT yet delivery-ready.

**Hard blockers requiring client data:**
- `YOUR_EMAIL` in form mailto handler
- 4 stat values in Numeros section (all `[XX]` placeholders)
- 3 real project names and photos for Portfolio cards (currently Unsplash stock)
- CREA-MG registration number in footer
- Real Instagram and LinkedIn URLs in footer
- Real client testimonial for Depoimento section
- Email and phone contact details for footer (absent from code entirely)

**Code gaps to fix now (no client needed):**
1. Missing portfolio subtitle paragraph from copy-home.md section 05
2. Email + phone missing from Footer — add them
3. Mobile nav: no hamburger or compact pattern — will overflow at 375px
4. Mobile portfolio: must be horizontal snap-scroll carousel per visual-direction.md; currently uses auto-fit grid at all breakpoints
5. MobileCTA uses `display: none` with a CSS class comment that never fires inside a Framer code component — needs JS viewport check or injected `<style>`
6. Form phone field needs `type="tel"` + `inputMode="tel"`
7. Form inputs need visible `focus` states (currently `outline: none`)

**Pending client decision:** Preferred contact method — Framer native form, Calendly, or mailto fallback.

**Logo:** Not yet received as SVG. Currently using text "Forma Engenharia" in serif as wordmark.

**How to apply:** In any future session on this project, start by checking if the client placeholders have been filled and which of the code gap items have been resolved. Do not treat the component as delivery-ready until both lists are cleared.
