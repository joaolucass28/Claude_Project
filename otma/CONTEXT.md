# OTMA — Project Context
**Last updated:** 2026-04-07

---

## What OTMA Is

OTMA is João's agency. It sells brand thinking, web execution, workflow optimization, automation builds, and AI agent systems to businesses that are ready to invest in getting those things done right.

Core rule: **better positioning before prettier execution. Better workflows before more tools.**

---

## Two-Folder Architecture

There are two OTMA folders in this project. They serve different purposes and should not be merged.

| Folder | Role | What lives here |
|--------|------|-----------------|
| `/otma/` | OTMA as a business — internal operating system | Offers, templates, agent configs, workflow maps, internal processes |
| `/clients/otma/` | OTMA as a client — brand and web deliverables | Brand foundation, site plan, offer copy, assets |

When working on OTMA's own brand or website → use `/clients/otma/`.
When working on how OTMA operates, onboards clients, or runs projects → use `/otma/`.

---

## The 5 Service Lines

Defined and stable. These are OTMA's packaged offers.

| # | Offer | Entry point for |
|---|-------|----------------|
| 1 | Brand Foundation Sprint | Business without clear identity or differentiation |
| 2 | Authority Website System | Brand ready, needs web presence that converts |
| 3 | Workflow Optimization Audit | Business with operational friction or manual repetition |
| 4 | Automation Build System | Business ready to automate specific processes |
| 5 | AI Agent Strategy & Implementation | Business wanting AI inside well-designed systems |

Full specs: `/otma/offers/offers-overview.md`

---

## Dependency Chain

Everything in `/clients/otma/` follows this sequence. Do not skip steps.

```
brand-foundation.md  ←  START HERE (answers unlock everything below)
        ↓
brand-os activation  ←  positioning, content strategy, presence logic
        ↓
site-plan.md         ←  sitemap, homepage sections, copy direction
        ↓
offers-v1.md         ←  service copy, pricing signal, proposal language
```

**Current status:** `brand-foundation.md` has the structure but zero answers filled. Nothing downstream can be built until those answers exist.

---

## What's Real vs. What's Skeleton

| File | State |
|------|-------|
| `/otma/initial-release-framework.md` | Real — master launch blueprint, phases 0–4 |
| `/otma/offers/offers-overview.md` | Real — 5 service lines defined |
| `/otma/templates/client-onboarding.md` | Real — usable template |
| `/clients/otma/brand/brand-foundation.md` | Structure real, content empty — **CURRENT BLOCKER** |
| `/clients/otma/website/site-plan.md` | Placeholder |
| `/clients/otma/offers/offers-v1.md` | Placeholder |
| `/otma/agents/agent-index.md` | Empty table |
| `/otma/workflows/workflow-index.md` | Empty table |

---

## How to Work Here

**For brand and positioning work:**
Use the skill sequence: `brand-dna` → `brand-os` → `scene-architect` (if visual)
Source brief: `/clients/otma/brand/brand-foundation.md`

**For new client intake:**
Copy `/otma/templates/client-onboarding.md` → `/otma/clients/[client-name]/onboarding.md`

**For any web deliverable:**
Don't start until brand-foundation answers exist. The site is downstream of positioning.

**General Claude instructions for this project:**
See `/clients/otma/CLAUDE.md`
