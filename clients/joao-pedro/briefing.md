# Briefing — Joao Pedro / Airbnb Monitoring Dashboard

## Business Overview
Private dashboard for a short-term rental host managing 1–3 Airbnb properties. The goal is to consolidate all property management into one interface — replacing manual tracking across Airbnb's app, spreadsheets, and messages.

## Client
- **Name:** Joao Pedro
- **Role:** Airbnb host / property manager
- **Portfolio:** 1–3 properties (small, managed personally)

## Goals
- Single view of all reservations across properties
- Track revenue and occupancy without exporting CSVs
- Manage cleaning tasks between check-out and check-in
- Monitor calendar availability per property

## Target Audience
Internal tool — used exclusively by Joao Pedro (and potentially a cleaner/assistant).

## Features Requested
1. **Reservations overview** — upcoming and past bookings
2. **Calendar / availability** — monthly view, occupancy blocks
3. **Revenue tracking** — monthly/annual summaries with charts
4. **Cleaning task management** — tasks tied to checkout dates

## Properties
- Up to 3 Airbnb listings
- All managed under one account (assumed)
- Location: TBD (assumed Brazil — currency BRL)

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Recharts (charts)
- date-fns (date logic)

## Data Integration
- **Status:** TBD — starting with mock data
- **Options being evaluated:**
  - Airbnb iCal export (read-only, calendar only)
  - Channel manager API (Hostaway, Guesty, Lodgify)
- Services are abstracted behind a `USE_MOCK` flag — swap-ready

## Timeline
- Phase 1: UI + mock data (current)
- Phase 2: Real data integration (after client picks channel)

## Notes
- Currency: BRL
- Language: Portuguese (UI labels and copy)
- No public-facing component — no SEO, no landing page
