# Glebas Rurais — Creative Direction & Concept

## 1. Creative Direction Summary

**Core idea:** "Campo com Conforto"

This is not a flashy luxury launch. It is a quiet, confident presentation of three well-documented rural plots in one of Minas Gerais' most accessible and beautiful regions. The site must feel like a serious offer from a serious seller — no hype, no fake urgency, no clichés.

The visual language should reference editorial land and nature publications more than real estate portals. Think: *Monocle* travel editorial meets Minas countryside. Clean. Honest. Premium.

**Three words that must govern every design decision:**
- **Claridade** — clarity in space, copy, and information
- **Credibilidade** — everything communicates trust
- **Campo** — nature is the product; show it

---

## 2. Full Page Structure (One-Page Landing)

```
01 — NAV (sticky, semi-transparent)
02 — HERO
03 — POSICIONAMENTO / PROPOSTA DE VALOR
04 — GLEBAS DISPONÍVEIS (3 cards)
05 — POR QUE BRUMADINHO
06 — PARA QUEM É
07 — INFRAESTRUTURA & DOCUMENTAÇÃO
08 — TRANSPARÊNCIA
09 — GALERIA VISUAL
10 — FAQ
11 — CONTATO / FORMULÁRIO
12 — CTA FINAL
13 — RODAPÉ
```

---

## 3. Design System

### Colors

| Token | Hex | Use |
|---|---|---|
| `--color-base` | `#F8F5F0` | Page background (warm off-white) |
| `--color-surface` | `#FFFFFF` | Cards, overlays |
| `--color-forest` | `#2A3D2E` | Primary accent, headlines |
| `--color-earth` | `#8B7355` | Secondary accent, highlights |
| `--color-stone` | `#C4BFB5` | Borders, dividers |
| `--color-graphite` | `#2C2C2C` | Body text |
| `--color-mid` | `#6B6B6B` | Secondary text, captions |
| `--color-light` | `#E8E3DC` | Subtle section backgrounds |
| `--color-cta` | `#2A3D2E` | Primary button |
| `--color-cta-hover` | `#1A2A1E` | Button hover state |

### Typography

| Role | Font | Weight | Size (desktop) |
|---|---|---|---|
| Display / Hero H1 | Playfair Display or Cormorant Garamond | 400–600 | 64–80px |
| Section Headline H2 | Playfair Display | 400 | 40–48px |
| Subheading H3 | DM Sans or Inter | 500 | 20–24px |
| Body | DM Sans or Inter | 400 | 16–18px |
| Caption / Label | DM Sans | 400 | 12–14px |
| Nav | DM Sans | 500 | 14px |
| Button | DM Sans | 600 | 14px |
| Price display | Playfair Display | 500 | 32px |

**Font pairing rule:** Serif for headlines and prices only. Sans-serif for everything else. Never mix them in the same visual weight.

### Spacing Scale

```
2px / 4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 96px / 128px / 160px
```

Section padding (desktop): `120px` top/bottom
Section padding (mobile): `64px` top/bottom
Container max-width: `1200px`
Card inner padding: `40px`
Grid gap: `24px`

### Border Radius

| Element | Radius |
|---|---|
| Cards | `4px` (subtle, not bubbly) |
| Buttons | `2px` (sharp, editorial) |
| Image containers | `0px` or `4px` |
| Form inputs | `2px` |
| FAQ items | `2px` |

**Design principle:** Keep corners sharp or very slightly rounded. Avoid circular or heavily rounded elements — they feel cheap on this brand.

### Shadows

| Level | Value |
|---|---|
| Card resting | `0 2px 16px rgba(0,0,0,0.06)` |
| Card hover | `0 8px 32px rgba(0,0,0,0.10)` |
| Nav | `0 1px 0 rgba(0,0,0,0.08)` |
| Form input focus | `0 0 0 2px rgba(42,61,46,0.20)` |

### Button Styles

**Primary (CTA principal)**
```
Background: #2A3D2E
Text: #FFFFFF
Padding: 14px 32px
Font: DM Sans, 600, 14px, Letter-spacing: 0.08em
Border: none
Border-radius: 2px
Hover: background #1A2A1E, subtle lift with box-shadow
Transition: 200ms ease
```

**Secondary (outline)**
```
Background: transparent
Text: #2A3D2E
Border: 1.5px solid #2A3D2E
Padding: 13px 31px
Hover: background #2A3D2E, text #FFFFFF
Transition: 200ms ease
```

**Ghost (light on dark backgrounds)**
```
Background: transparent
Text: #FFFFFF
Border: 1.5px solid rgba(255,255,255,0.6)
Padding: 13px 31px
Hover: background rgba(255,255,255,0.15)
```

---

## 4. Section Layout Guidance (Section by Section)

### Section 01 — NAV
- **Layout:** Full-width, fixed to top, `backdrop-filter: blur(12px)`, background `rgba(248,245,240,0.88)`
- **Left:** Project name in serif, small — "Glebas Rurais"
- **Center:** Anchor links — Glebas · Infraestrutura · Localização · Contato
- **Right:** Primary CTA button — "Agendar Visita"
- **Mobile:** Hamburger menu, full-screen overlay nav
- **Framer:** Use Framer's built-in `sticky` + `blur` container. Nav links use smooth anchor scroll.

---

### Section 02 — HERO
- **Layout:** Full viewport height (`100vh`), split or full-bleed image
- **Option A (recommended):** Full-bleed image behind dark overlay `rgba(20,30,20,0.40)`, text center-left
- **Option B:** 60/40 split — left text, right full-height image
- **Image area:** Placeholder for aerial/drone landscape of Brumadinho hills
- **Text hierarchy:**
  - Small label above headline: "Brumadinho, Minas Gerais"
  - H1: Main headline
  - Subheadline paragraph
  - Two CTAs: primary + secondary
- **Framer:** Use Framer Image component with overlay. Animate headline with stagger-in (fade + slide up, 60px offset).

---

### Section 03 — POSICIONAMENTO
- **Layout:** Centered text block, max-width 760px, generous padding
- **Structure:**
  - Small uppercase label: "Campo com Conforto"
  - H2 headline
  - 2–3 paragraph body copy
  - 3-column horizontal feature row below (icons + short text)
- **Framer:** Use `Auto Layout` vertical stack, center-aligned. Feature row uses 3-column `Grid`.

---

### Section 04 — GLEBAS DISPONÍVEIS
- **Layout:** 3-column grid, equal cards, full-width section
- **Background:** `--color-light` (#E8E3DC) to visually separate section
- **Card anatomy:**
  - Top: Image placeholder (aspect ratio 4:3, slight overlay with gleba letter)
  - Body: Gleba name + area badge
  - Price in serif
  - 4–5 feature tags (small pills)
  - Short description
  - CTA button
- **Card hover:** Subtle lift + image slight zoom (scale 1.02)
- **Framer:** Each card as a reusable component. CMS-linkable for future updates.

---

### Section 05 — POR QUE BRUMADINHO
- **Layout:** Two-column. Left: large landscape image (full height). Right: text content with scroll.
- **Content:** Region callouts — 4 key points with icons
- **Background:** White
- **Framer:** Use sticky image on scroll on desktop. Collapse to single column on mobile.

---

### Section 06 — PARA QUEM É
- **Layout:** 2×2 grid of profile cards (on desktop). Single scroll on mobile.
- **Card style:** Minimal. Icon top, title, 2-line description. No photography — illustration or icon only.
- **Background:** `--color-base`

---

### Section 07 — INFRAESTRUTURA & DOCUMENTAÇÃO
- **Layout:** Alternating left/right items (zigzag) or clean 2-column grid
- **Each item:** Icon · Title · Short description
- **Items:** Acesso pavimentado · Água municipal · Poço artesiano · Energia elétrica · Registro individual · Documentação regular · INCRA
- **Background:** White
- **Framer:** Icon + text stack, with a subtle horizontal divider between items.

---

### Section 08 — TRANSPARÊNCIA
- **Layout:** Centered, contained. Different background: `--color-forest` (#2A3D2E), light text.
- **Structure:**
  - Small label: "Clareza antes de tudo"
  - H2
  - Body copy (2 paragraphs)
  - Subtle divider
  - Note about APP and documentation
- **Framer:** This section intentionally contrasts the page. Dark bg, white text, full-width.

---

### Section 09 — GALERIA
- **Layout:** Masonry or editorial grid. Mix of portrait and landscape image slots.
- **Suggested grid:** 2 large + 3 small on desktop. Horizontal scroll on mobile.
- **Caption area below each image (optional)**
- **Framer:** Use Framer's lightbox component or custom overlay on click.

---

### Section 10 — FAQ
- **Layout:** Single column, accordion style. Max-width 760px, centered.
- **Item style:** Question bold, answer reveals below with smooth animation
- **Background:** `--color-base`
- **Framer:** Use Framer's variants to toggle open/closed state.

---

### Section 11 — FORMULÁRIO DE CONTATO
- **Layout:** 2-column on desktop. Left: contact context text + WhatsApp CTA. Right: form.
- **Form fields:** Nome · Telefone/WhatsApp · E-mail · Gleba de interesse (select) · Mensagem
- **Background:** White
- **Input style:** Borderless bottom-only line style, or full border with 2px radius
- **Framer:** Connect form to Formspree or native Framer form. Add success state component.

---

### Section 12 — CTA FINAL
- **Layout:** Full-width, centered. Background: large landscape image with dark overlay.
- **Content:** Headline + short line + two CTAs
- **Feel:** Quiet but inviting. Not aggressive.

---

### Section 13 — RODAPÉ
- **Layout:** 3 columns: brand · links · contact info
- **Background:** `--color-forest` (#2A3D2E), white text
- **Bottom bar:** Copyright + legal note

---

## 5. Framer Component Breakdown

```
Components to create in Framer:

NavBar
  ├── NavLogo
  ├── NavLinks (anchor scroll)
  └── NavCTA (button)

HeroSection
  ├── HeroImage (full-bleed with overlay)
  ├── HeroLabel (small uppercase)
  ├── HeroHeadline
  ├── HeroSubheadline
  └── HeroCTAGroup (primary + secondary)

GlebaCard (×3)
  ├── CardImage
  ├── CardBadge (gleba letter)
  ├── CardTitle
  ├── CardArea
  ├── CardPrice
  ├── CardFeatureTags (×4–5)
  ├── CardDescription
  └── CardCTA

FeatureItem (used in infra + positioning)
  ├── FeatureIcon
  ├── FeatureTitle
  └── FeatureDescription

ProfileCard (×4, used in "Para Quem É")
  ├── ProfileIcon
  ├── ProfileTitle
  └── ProfileDescription

FAQItem
  ├── FAQQuestion
  └── FAQAnswer (toggle)

ContactForm
  ├── FormInput (×5)
  ├── FormSelect
  ├── FormTextarea
  └── FormSubmitButton

TransparencySection (standalone dark section)

GalleryGrid
  ├── GalleryItem (image + caption)
  └── GalleryLightbox

Footer
  ├── FooterBrand
  ├── FooterLinks
  └── FooterLegalNote
```

---

## 6. Motion & Interaction Suggestions

### Global principles
- Never use movement for decoration alone — every animation should aid comprehension or confirm interaction
- Prefer `fade-in + slide-up (40–60px)` as the universal entrance
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — fast start, smooth settle
- Duration: `400ms` for elements, `600ms` for sections
- Stagger: `80ms` between sibling elements

### Specific interactions

| Element | Animation |
|---|---|
| Hero headline | Fade in + slide up 60px, delay 200ms |
| Hero subheadline | Same, delay 350ms |
| Hero CTAs | Same, delay 500ms |
| Nav on scroll | Background opacity from 0→88%, blur activates |
| Gleba cards | Fade in on scroll, stagger 100ms per card |
| Card hover | `scale(1.02)` on image, `shadow` deepens, 200ms |
| FAQ item | Height animate open/close, 300ms ease |
| Section headings | Fade in + slide up 40px on scroll entry |
| Feature icons | Subtle scale pop on entry, stagger 80ms |
| Form inputs | Border color transition on focus, 150ms |
| CTA buttons | Background color transition 200ms |
| Transparency section | No motion — static, calm, intentional |

### Framer scroll effects
- Hero image: subtle `parallax` (10–15% scroll offset) for depth
- "Por Que Brumadinho" left image: sticky on desktop scroll
- Gallery items: stagger entrance as user scrolls down

---

## 7. Future Improvements & Expansion

### Phase 2 features (ready to add in Framer)

1. **PDF Download CTA**
   - Add a "Solicitar Memorial Descritivo" button
   - Link to a hosted PDF or trigger form with file delivery
   - Suggested placement: inside each Gleba card + CTA final section

2. **WhatsApp CTA (floating)**
   - Fixed bottom-right floating button: WhatsApp icon + "Conversar"
   - `position: fixed`, appears after 3s scroll
   - Links to `wa.me/` with pre-filled message

3. **Map Section**
   - Embed Google Maps iframe (Brumadinho area)
   - Add overlay with distance callouts: "50km de BH · 40 min pela BR-040"
   - Style map container to match brand (minimal)

4. **Enhanced Lead Capture**
   - Add a `lead magnet`: "Baixe o dossiê completo das glebas"
   - Form triggers email delivery of PDF
   - Integrate with Mailchimp, Brevo, or native Framer CMS

5. **Gallery Upgrade**
   - Replace placeholders with drone + ground photos
   - Add Framer lightbox with keyboard navigation
   - Caption each image with location context

6. **Testimonials / Social Proof**
   - When available: add a section after Infraestrutura
   - Format: short quote + name + relation to project
   - No photos needed — text-only cards work well on this brand

7. **CMS Integration (Framer native)**
   - Connect Gleba cards to Framer CMS collection
   - Fields: name, area, price, description, features, status (disponível/reservado/vendido)
   - Allows non-developer to update listing status instantly

8. **Status Badges**
   - Add "Disponível", "Em negociação", "Vendido" badge to each card
   - Color-coded: green / amber / gray
   - Update via CMS without touching design

9. **Comparison Table**
   - Side-by-side table of all 3 glebas
   - Useful for analytical buyers
   - Place after the gleba cards section

10. **SEO / Meta Tags**
    - Page title: "Glebas Rurais · Brumadinho, MG"
    - Meta description: Concise pitch in Portuguese
    - OG image: Hero landscape crop
    - Structured data for real estate listing (optional)
```
