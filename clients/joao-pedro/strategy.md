# Strategy — Joao Pedro Dashboard

## Product Positioning
A private operations hub for a hands-on Airbnb host. Not a SaaS product — a personal tool built to the exact workflow of one operator with a small portfolio.

## Core UX Principles

1. **Glanceable first** — the dashboard home should answer "what do I need to do today?" in under 5 seconds
2. **Property-aware** — every view supports filtering by property; the host thinks in properties, not abstract data
3. **Action-oriented** — the cleaning module drives action (status changes), not just display
4. **Mobile-accessible** — the host may check this on a phone between visits; sidebar must collapse cleanly

## Information Hierarchy

```
Home (KPIs + next check-ins)
  └── Reservations (full list + detail)
  └── Calendar (occupancy grid)
  └── Revenue (charts + table)
  └── Cleaning (task management)
```

## Key Decisions

### Mock-First Architecture
Build the full UI against a typed mock data layer. Each service function (`getReservations`, `getTasks`, etc.) is abstracted — when the real integration is chosen, only `lib/services/` files change. The UI is integration-agnostic.

### Portuguese UI
All labels, headings, and status text in Portuguese. Code stays in English. This is a personal tool for a Brazilian client.

| English | Portuguese |
|---------|------------|
| Reservations | Reservas |
| Calendar | Calendário |
| Revenue | Receita |
| Cleaning | Limpeza |
| Confirmed | Confirmada |
| Pending | Pendente |
| Cancelled | Cancelada |
| Check-in | Check-in |
| Check-out | Check-out |
| Tasks | Tarefas |

### Currency
All monetary values in BRL (R$). Use `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.

## Scope Boundaries

**In scope (Phase 1):**
- All 5 dashboard pages with mock data
- Property filter across all pages
- Cleaning task status toggling
- Responsive layout (mobile sidebar)

**Out of scope (Phase 1):**
- Authentication / login system
- Real Airbnb data connection
- Push notifications
- Guest messaging
- Multi-user roles
