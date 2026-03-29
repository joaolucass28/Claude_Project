# Visual Direction — Glebas Rurais

## Mood
Editorial, grounded, premium rural. Referência: *Monocle* travel meets Minas countryside. Clean, honest, quiet confidence. Três palavras: Claridade · Credibilidade · Campo.

## Color Palette
| Token | Hex | Use |
|---|---|---|
| `--color-base` | `#F8F5F0` | Page background (warm off-white) |
| `--color-surface` | `#FFFFFF` | Cards, overlays |
| `--color-forest` | `#2A3D2E` | Primary accent, headlines, CTA, footer |
| `--color-earth` | `#8B7355` | Secondary accent, labels |
| `--color-stone` | `#C4BFB5` | Borders, dividers |
| `--color-graphite` | `#2C2C2C` | Body text |
| `--color-mid` | `#6B6B6B` | Secondary text, captions |
| `--color-light` | `#E8E3DC` | Subtle section backgrounds (Glebas section) |

## Typography
| Role | Font | Weight | Size (desktop) |
|---|---|---|---|
| Display / H1 | Cormorant Garamond (alt: Playfair Display) | 400–600 | 64–80px |
| Section H2 | Cormorant Garamond | 400 | 40–48px |
| Subheading H3 | DM Sans | 500 | 20–24px |
| Body | DM Sans | 400 | 16–18px |
| Label / UI | DM Sans | 500 | 12px, uppercase, letter-spacing 0.12em |
| Caption | DM Sans | 400 | 12–14px |
| Price | Cormorant Garamond | 500 | 32px |
| Button | DM Sans | 600 | 14px, letter-spacing 0.06em |

**Rule:** Serif for headlines and prices only. Sans-serif for everything else.

## Spacing & Borders
- Section padding desktop: 120px top/bottom
- Section padding mobile: 64px top/bottom
- Container max-width: 1200px
- Card radius: 4px (subtle, never bubbly)
- Button radius: 2px (sharp, editorial)
- Grid gap: 24px
- Shadows: card resting `0 2px 16px rgba(0,0,0,0.06)`, hover `0 8px 32px rgba(0,0,0,0.10)`

## Photography Style
- Natural light, unsaturated colors, golden hour (7h–9h or 16h–18h)
- Aerial/drone for hero and gleba cards; intimate vertical for "Por Que Brumadinho" column
- No people, no logos, no watermarks
- Palette: natural greens, ochres, earthy soil, grey stone road, natural sky
- Style: honest, documentary, editorial — not glamorized real estate photography
- See `04-image-direction.md` for full prompts and photographer checklist

## Layout Style
- One-page landing, full-width sections with alternating backgrounds
- Editorial grid (not portal-style): centered text blocks, 3-col cards, 2-col alternating
- Transparency section: intentional dark full-width break (Forest #2A3D2E)
- Motion: fade-in + slide-up (40–60px), easing `cubic-bezier(0.16,1,0.3,1)`, 400ms elements / 600ms sections

## References
- `/references/` folder currently empty — to be filled with visual references
- Inspiration direction: Monocle magazine editorial, Kinfolk land/property shoots, premium MG rural publications

## Framer-Specific Notes
- Breakpoints: Desktop ≥ 1200px / Tablet 768–1199px / Mobile < 768px
- Mobile font sizes: Display 40px, H2 32px, H3 18px, Price 28px
- Nav: sticky + backdrop-filter blur 12px
- Hero: parallax on background image (10–15% scroll offset)
- Gleba cards: reusable component, CMS-ready (future)
- FAQ: variant toggle (Closed/Open), animate height
- Icons: Phosphor / Feather / Heroicons, outline style, 24px in cards, Forest color
