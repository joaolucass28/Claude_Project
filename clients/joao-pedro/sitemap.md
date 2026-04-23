# Sitemap — Joao Pedro Dashboard

## Navigation Structure

```
/ (root)
└── Redirect → /dashboard

/dashboard
├── KPI Cards (Receita MTD, Ocupação, Próx. Check-ins, Limpezas pendentes)
├── Próximos Check-ins widget (next 3 arrivals)
└── Property filter (all pages)

/reservas
├── Tabela de reservas (filterable, sortable)
│   Columns: Hóspede | Imóvel | Check-in | Check-out | Noites | Valor | Status
├── Filters: Status, Imóvel, Período
└── /reservas/[id]
    └── Detalhe da reserva (guest info, dates, notes, revenue breakdown)

/calendario
├── Grade mensal por imóvel
├── Blocos coloridos (Reservado / Bloqueado / Disponível)
├── Navegação de mês (← →)
└── Seletor de imóvel

/receita
├── Gráfico de barras (receita mensal por imóvel)
├── Tabela mensal (Bruto / Taxa Airbnb / Líquido / Ocupação %)
└── Toggle: Ano atual / Histórico completo

/limpeza
├── Tarefas agrupadas por imóvel
├── Status: Pendente → Em andamento → Concluída
├── Auto-geradas a partir de check-outs
└── Criação manual de tarefa
```

## Page Inventory

| Route | Name (PT) | Priority | Phase |
|-------|-----------|----------|-------|
| `/dashboard` | Visão Geral | P0 | 1 |
| `/reservas` | Reservas | P0 | 1 |
| `/reservas/[id]` | Detalhe da Reserva | P1 | 1 |
| `/calendario` | Calendário | P0 | 1 |
| `/receita` | Receita | P0 | 1 |
| `/limpeza` | Limpeza | P0 | 1 |
| `/configuracoes` | Configurações | P2 | 2 |
| `/login` | Login | P2 | 2 |

## Sidebar Navigation Order
1. Visão Geral (`/dashboard`) — Home icon
2. Reservas (`/reservas`) — Calendar icon
3. Calendário (`/calendario`) — Grid icon
4. Receita (`/receita`) — Chart icon
5. Limpeza (`/limpeza`) — Checklist icon

## Property Filter
- Persistent across all pages
- Options: "Todos os imóveis" + each property by name
- Stored in URL params or React context (not localStorage — simple scope)

## Data Flow Per Page

### /dashboard
- Reads: all reservations (next 7 days), revenue (current month), tasks (pending count)
- No mutations

### /reservas
- Reads: reservations filtered by property + status + date range
- Mutation: none (read-only in Phase 1)

### /calendario
- Reads: reservations for selected month + property
- Derives: which dates are booked/available

### /receita
- Reads: revenue entries by month + property
- Aggregates: total gross, total net, avg occupancy

### /limpeza
- Reads: cleaning tasks by property + status
- Mutation: update task status (Pending → In Progress → Done)
