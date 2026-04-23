---
name: Glebas Rurais QA — Second Review
description: QA findings from second pre-delivery review of glebasrurais.com.br on 2026-04-01. Site is live on custom domain but still missing critical conversion elements.
type: project
---

Site is a Framer one-page landing for 3 rural lots in Brumadinho, MG. Positioning: "Campo com Conforto". Custom domain (glebasrurais.com.br) is now live. Significant progress since first review (2026-03-30) but site still not delivery-ready.

**Why:** Multiple sections planned in spec remain absent. The site has no contact mechanism — no CTA buttons, no WhatsApp, no form — making it impossible for a buyer to take action.

**How to apply:** When reviewing future revisions, compare against the full spec. Track which missing items from this review have been resolved.

---

## Current live structure (confirmed 2026-04-01)

Sections present:
1. Nav — logo + 3 anchor links (no CTA button)
2. Hero — headline + subtext (no CTA button)
3. Positioning ("Campo com Conforto") — 3 feature cards
4. Glebas — 3 cards with area/price/description (no CTA buttons on cards)
5. Brumadinho (Localização) — map image + 1 bullet item only
6. Infraestrutura — 7-item checklist
7. Footer — logo, nav links (all href="#"), copyright 2025 (wrong year), legal disclaimer

---

## Critical open items (must fix before delivery)

- **No CTA buttons anywhere on the page** — zero conversion paths for the buyer
- **No WhatsApp button** — placeholder number (5531XXXXXXXXX) never implemented
- **No contact form** — Formspree never configured
- **No contact email** — placeholder never replaced
- **Page title:** "Glebas Rurais - Seu Refúgio na Natureza" (set, but weak — misses "Campo com Conforto" positioning and BH distance hook)
- **Meta description:** "Terrenos a partir de 2ha em Brumadinho." (14 words, too short, no differentiator)
- **Footer links:** all href="#" — none link to correct anchors
- **Copyright year:** 2025 (should be 2026)
- **Images:** Hero, Gleba A/B/C photos not confirmed — fallback gradients likely showing
- **Brumadinho section:** only 1 of planned multiple location bullets is present
- **Missing planned sections:** FAQ, Formulário de Contato, CTA Final, Para Quem É, Transparência/APP, Galeria
- **Alt text:** No alt attributes on gleba card images (CSS background images, not <img>)
- **Favicon:** Status unknown from fetch — likely not set
- **Nav:** No "Agendar Visita" CTA button in nav (planned in spec)

---

## What is working well

- Custom domain live and resolving
- Design system clean: Cormorant Garamond + DM Sans, forest/earth palette consistent
- Copy quality is strong and on-brand throughout the sections present
- Section heading hierarchy (H1 → H2s) is correct and consistent
- Mobile responsive hook implemented in all sections
- overflowX: hidden on root prevents horizontal scroll
- Legal disclaimer in footer is appropriate for rural property sales
- Positioning section copy is clear and differentiating
- Infrastructure section (7 items) is thorough and builds confidence

---

## Recurring fragility patterns to watch

- GlebaCard images use CSS backgroundImage, not <img> — no alt text possible; SEO gap
- Footer nav links are hardcoded to href="#" — will always be broken unless individually updated
- Brumadinho section items array has only 1 entry — structural placeholder not filled in
- No WhatsApp float button component exists in the codebase — needs to be added, not configured
