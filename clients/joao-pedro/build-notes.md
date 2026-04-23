# Build Notes — Joao Pedro Dashboard

## App Setup

### Scaffold Command
```bash
cd clients/joao-pedro
npx create-next-app@latest app \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

### Additional Dependencies
```bash
cd app
npx shadcn@latest init
npx shadcn@latest add button badge card table tabs select dialog
npm install recharts date-fns lucide-react
```

---

## Mock Data Layer

### `USE_MOCK` flag
All service functions check `process.env.USE_MOCK !== 'false'`.
Default: mock is ON. When real integration is ready, set `USE_MOCK=false` in `.env.local` and implement the real fetch in each service.

### Mock Data Seed (`lib/mock-data.ts`)
Create 3 properties with realistic names and 15–20 reservations spread across 3 months.
Include a mix of statuses: confirmed, completed, cancelled.
Revenue should reflect realistic Airbnb host earnings (R$200–R$800/night range).

---

## Key Implementation Notes

### Property Filter
- Use React Context (`PropertyContext`) to share selected property ID across all pages
- Default: `'all'` (show all properties)
- Persist in URL search params: `?property=prop-1` so links are shareable

### Currency Formatting
```typescript
// lib/utils/currency.ts
export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
```

### Date Formatting
```typescript
// lib/utils/dates.ts
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(dateStr: string): string {
  return format(parseISO(dateStr), "d 'de' MMM, yyyy", { locale: ptBR })
}
```

### Cleaning Tasks — Auto-generation
Cleaning tasks are derived from reservations: when a reservation's `checkOut` date arrives, a corresponding `CleaningTask` should exist with `scheduledDate = checkOut`.
In the mock data layer, generate these automatically from the reservation list.

### Sidebar Mobile Behavior
- Desktop: fixed 240px left sidebar
- Mobile (< 768px): hidden by default, toggle with hamburger button in header
- Use `useState` + CSS transition for slide-in panel
- Overlay (`bg-black/50`) closes sidebar on click outside

---

## Component Library Decisions

### shadcn/ui components to use
| UI element | shadcn component |
|------------|-----------------|
| Tables | `Table`, `TableRow`, `TableCell` |
| Status pills | `Badge` (with custom variant colors) |
| Filter dropdowns | `Select` |
| Reservation detail | `Dialog` or dedicated page |
| Date range filter | `Popover` + `Calendar` |
| KPI cards | `Card` |

### Recharts setup
```tsx
// components/revenue/RevenueChart.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
// Use ResponsiveContainer for fluid width
// Format Y axis with formatBRL
```

---

## Integration Roadmap (Phase 2)

### Option A: Airbnb iCal
- Airbnb provides a private iCal URL per listing (`airbnb.com/calendar/ical/LISTING_ID.ics?...`)
- Parse with `ical.js` or `node-ical`
- Only provides: booked dates, not guest names or revenue
- Implement as Next.js API Route (`/api/sync-ical`) on a cron schedule
- **Limitation:** read-only, calendar data only — revenue/guest data must be entered manually

### Option B: Channel Manager API (Recommended for full features)
- **Hostaway:** REST API, full CRUD on reservations, revenue, messaging
- **Guesty:** Similar scope, more enterprise-focused
- **Lodgify:** Good for small portfolios
- Swap `lib/services/*.ts` implementations — UI stays unchanged
- Requires client to subscribe to a channel manager (monthly fee)

### Recommended Path
Start with iCal for quick calendar sync, then move to a channel manager for full features (guest info, revenue, messaging).

---

## Known Gaps / TODOs

- [ ] Authentication (no login system in Phase 1 — localhost/local network only)
- [ ] Manual reservation entry form (currently read-only)
- [ ] Airbnb review integration (Phase 3+)
- [ ] Push notifications for new bookings
- [ ] Multi-language (PT only for now)
- [ ] Guest messaging panel
- [ ] Expense tracking (for net profitability beyond platform fees)
