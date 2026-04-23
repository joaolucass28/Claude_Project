# Visual Direction — Joao Pedro Dashboard

## Style
Clean, professional SaaS dashboard. Dark sidebar + light content area. Inspired by Linear, Vercel Dashboard, and Stripe.

No decorative elements — data is the focus. Every visual decision serves readability and speed.

## Color System

### Base Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `sidebar-bg` | `#0F172A` | Sidebar background (slate-900) |
| `sidebar-text` | `#94A3B8` | Inactive nav items (slate-400) |
| `sidebar-active` | `#FFFFFF` | Active nav item text |
| `sidebar-active-bg` | `#1E293B` | Active nav item background (slate-800) |
| `content-bg` | `#F8FAFC` | Page background (slate-50) |
| `card-bg` | `#FFFFFF` | Card/panel background |
| `border` | `#E2E8F0` | Dividers and card borders (slate-200) |
| `text-primary` | `#0F172A` | Headings (slate-900) |
| `text-secondary` | `#64748B` | Subtext, labels (slate-500) |

### Accent & Status Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | `#6366F1` | Active states, CTAs, links (indigo-500) |
| `accent-light` | `#EEF2FF` | Accent backgrounds (indigo-50) |
| `success` | `#22C55E` | Confirmed, Done (green-500) |
| `success-light` | `#F0FDF4` | Success backgrounds |
| `warning` | `#F59E0B` | Pending, In progress (amber-500) |
| `warning-light` | `#FFFBEB` | Warning backgrounds |
| `danger` | `#EF4444` | Cancelled, Overdue (red-500) |
| `danger-light` | `#FEF2F2` | Danger backgrounds |

## Typography

**Font:** Inter (Google Fonts or system fallback)

| Role | Size | Weight | Color |
|------|------|--------|-------|
| Page title | 24px / 1.5rem | 600 | text-primary |
| Section heading | 18px / 1.125rem | 600 | text-primary |
| Card label | 13px / 0.8125rem | 500 | text-secondary |
| KPI value | 32px / 2rem | 700 | text-primary |
| Table header | 12px / 0.75rem | 600 | text-secondary, uppercase |
| Table cell | 14px / 0.875rem | 400 | text-primary |
| Badge text | 12px / 0.75rem | 500 | varies by status |

## Component Specs

### Cards
```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 12px;
padding: 24px;
box-shadow: 0 1px 3px rgba(0,0,0,0.05);
```

### KPI Cards
- Large metric value (32px bold)
- Small label above (12px, uppercase, slate-500)
- Optional trend indicator (arrow + percentage)
- Icon in top-right corner (accent color)

### Status Badges
```
Confirmada  → bg: #F0FDF4  text: #16A34A  border: #BBF7D0
Pendente    → bg: #FFFBEB  text: #D97706  border: #FDE68A
Cancelada   → bg: #FEF2F2  text: #DC2626  border: #FECACA
Concluída   → bg: #EEF2FF  text: #4F46E5  border: #C7D2FE
```

### Sidebar
- Width: 240px (desktop), full-width slide-in on mobile
- Logo/name at top (white text)
- Nav items: icon + label, 40px height, 8px border-radius
- Active item: `#1E293B` background, white text, indigo left border (3px)
- Bottom: User info section

### Tables
- Header: `#F8FAFC` background, uppercase 12px labels
- Rows: 48px height, hover: `#F8FAFC`
- Alternating: subtle even-row background (`#FAFAFA`)
- Sticky header on scroll

## Spacing Scale
```
4px   (space-1)  — inner gap, tight
8px   (space-2)  — icon margins
12px  (space-3)  — tag padding
16px  (space-4)  — card inner gap
24px  (space-6)  — card padding
32px  (space-8)  — section gap
48px  (space-12) — page vertical padding
```

## Charts (Recharts)
- Bar chart for monthly revenue: indigo bars (`#6366F1`), grouped by property
- Tooltip: white card, shadow, formatted BRL values
- Grid lines: `#E2E8F0`, no axis borders
- Legend: below chart, dot + label

## Calendar Grid
- Day cells: 40px × 40px minimum
- Booked: `#6366F1` background, white text
- Blocked/unavailable: `#CBD5E1` background, slate text
- Available: white, hover `#F8FAFC`
- Today: indigo ring border

## Mobile Considerations
- Sidebar collapses to hamburger menu (slides in as overlay)
- KPI cards stack vertically (1 column)
- Tables scroll horizontally
- Calendar cells shrink (min 32px)
- Bottom nav bar optional (Phase 2)
