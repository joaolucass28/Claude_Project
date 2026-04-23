# OTMA — Initial Release Framework
**Version:** 1.0
**Created:** 2026-04-07
**Status:** Active — in progress

---

## What This Document Is

A ground-zero blueprint for OTMA's initial release. It covers:
1. The client-facing methodology (how we work)
2. The internal buildout sequence (what needs to exist before we launch)
3. Phase-by-phase deliverables with clear owners and dependencies

**Direction reference:** Edra AI (edra.ai) — borrowed their phased methodology logic, entry-point product design, and principle of deriving signal from what already exists rather than starting from blank abstraction.

---

## Core Principle (borrowed and adapted from Edra)

> Edra doesn't ask clients to document their processes. It reads what already exists — tickets, logs, messages — and surfaces the reality of how the business runs.

**OTMA's version:**
> OTMA doesn't ask clients to define what they want. It analyzes what they already have — their current brand, site, workflow friction — and surfaces the clearest path forward.

This shifts the framing from "tell us about yourself" to "give us access and we'll show you what's actually happening." It makes OTMA faster to onboard, harder to confuse, and immediately valuable.

---

## Client-Facing Methodology: Diagnose → Build → Transfer

Every OTMA engagement, regardless of service line, follows this three-stage structure.

### Stage 1 — Diagnose
**Goal:** Understand the real problem from what already exists, not from what the client thinks the problem is.

What we do:
- Analyze existing brand materials, site, communications, or workflows
- Map the gap between current state and where they need to be
- Identify the single highest-leverage intervention
- Produce a **Situation Report** — the client's clearest picture of their problem and the proposed path

What the client gets at the end of Diagnose:
- Written summary of findings (not a slide deck with vague insights)
- Prioritized action list: what to do first, what to do later, what not to do
- A decision point: proceed with Build, or take the plan and execute elsewhere

> This stage is the entry product. It runs in 3 days. It is called the **Clarity Sprint** (see Offer Architecture below).

---

### Stage 2 — Build
**Goal:** Execute the agreed scope with complete transparency and zero handoff friction.

What we do:
- Work from the Situation Report produced in Diagnose
- Deliver the output in full — no "phases" that require future spending to complete
- Show work in progress (not at the end) — client can redirect mid-build if needed
- Document everything the client needs to own and operate the output

What the client gets at the end of Build:
- The finished deliverable (brand system, website, automation flow, agent architecture)
- A handoff document: what was built, how it works, what to do next
- No dependency on OTMA to use what was built

---

### Stage 3 — Transfer (+ optional Operate)
**Goal:** Client leaves with something they can run independently. Retainer is optional, not required.

What we do:
- Walk through every deliverable until the client is confident
- Document the operation manual (if applicable: how to update, how to expand, how to debug)
- Identify what would benefit from ongoing support — and be honest if nothing would

What the client gets:
- Full ownership of every file, system, and process
- Option to add a monthly check-in or retainer (defined below under Ongoing)
- No lock-in

---

## Offer Architecture

### Entry Point — Clarity Sprint
**Price:** R$1.500 – R$2.500 (fixed)
**Duration:** 3 business days
**What it is:** A focused diagnosis of one specific problem — brand, website, or workflow.

How it works:
1. Client shares access (existing materials, site, tools, or process description)
2. OTMA analyzes and maps the current state
3. Day 3: delivery of the Situation Report + 60-minute walkthrough call

What makes it work:
- Low barrier to start — the client commits to the sprint, not to a full project
- It produces real output, not just a sales conversation
- Most sprints convert naturally into a core engagement because the client now sees the problem clearly

What the sprint is NOT:
- A free discovery call with a fancy name
- A hook to sell more hours
- A document full of generic recommendations

---

### Core Engagements — The 5 Service Lines

Each service line has three fixed attributes:
- **Trigger**: the situation that makes this the right offer
- **Deliverable**: what the client receives
- **Duration**: working days to complete

| # | Offer | Trigger | Core Deliverable | Duration |
|---|-------|---------|-----------------|----------|
| 1 | Brand Foundation Sprint | No clear positioning, commodity look, losing business to differentiation | Brand DNA document + positioning statement + visual direction brief | 10 days |
| 2 | Authority Website System | Brand exists but website doesn't convert or doesn't reflect it | Full website design + Framer build + copy | 15 days |
| 3 | Workflow Optimization Audit | Team doing manual work that should be automated or systematized | Process map + bottleneck report + optimization roadmap | 5 days |
| 4 | Automation Build System | Specific process identified, ready to automate | Working n8n flows + documentation + handoff | 10 days |
| 5 | AI Agent Strategy & Implementation | Business wants AI inside existing systems, not on top | Agent architecture + implementation + evaluation report | 15 days |

**Pricing signal:** Core engagements range from R$4.500 (Workflow Audit) to R$18.000 (AI Agent Implementation). Exact pricing defined per client based on scope — but these are the floors. Never below.

---

### Ongoing — Retainer (Optional)
**Price:** R$1.800 – R$3.500/month
**What it covers:** One monthly check-in (60min), async support on what was built, minor updates or iterations

**When to offer it:**
- After a core engagement that produced a live system (website, automation, agents)
- Only when there is a real reason to maintain continuity
- Never as a default close — some projects are genuinely complete

---

## Internal Buildout Sequence

This is what needs to exist before OTMA can launch publicly. Nothing downstream is built until its dependency is complete.

```
PHASE 0 — Brand Foundation (Week 1)
│
├── Fill brand-foundation.md answers
│   → All [→ FILL] sections completed in conversational format
│   → Output: positioning statement, audience definition, tone of voice
│
├── Derive brand-dna.md
│   → Run brand-dna skill after foundation is complete
│   → Output: full Brand DNA document
│
└── Lock visual direction
    → Register, palette sensations, reference brands
    → Not final visual identity — direction for briefings

↓

PHASE 1 — Offer Architecture (Week 1–2)
│
├── Clarity Sprint offer sheet
│   → One-pager: what it is, what it produces, price, how to buy
│
├── Core offer copy (per service line)
│   → Description, trigger, deliverable, timeline, price signal
│   → Source: offers-overview.md + brand-foundation positioning
│
└── Proposal template
    → Single template adaptable to all 5 service lines
    → Sections: situation, scope, deliverables, timeline, investment

↓

PHASE 2 — Digital Presence (Week 2–4)
│
├── site-plan.md (clients/otma/website/)
│   → Sitemap: Home, Work, Services, About, Contact
│   → Homepage section sequence
│   → Copy direction per section
│
├── copy-home.md (clients/otma/website/)
│   → Full homepage copy in final form
│   → Hero, methodology, services, proof, CTA
│
└── Framer build
    → Build from approved copy and visual direction
    → Mobile-first, single CTA throughout
    → No build starts until copy is approved

↓

PHASE 3 — Operations Setup (Week 2–3, parallel with Phase 2)
│
├── Delivery workflow per service line
│   → Step-by-step what happens from purchase to handoff
│   → Templates: Situation Report, Handoff Document, Retainer Scope
│
├── Client onboarding template (update existing)
│   → Add: Problem Statement section, Clarity Sprint field, Stage tracker
│
└── Agent configs (agents/agent-index.md)
    → Identify which parts of delivery can be assisted by agents
    → Build and evaluate before deploying on real clients

↓

PHASE 4 — Initial Release (Week 4–6)
│
├── Soft launch (2 clients max)
│   → Run full Diagnose → Build → Transfer with 2 real engagements
│   → Document everything that breaks or is missing
│
├── Iterate on workflow and templates
│   → Fix based on real delivery, not assumptions
│
└── Full release
    → Website live
    → Clarity Sprint offered publicly
    → Social presence aligned (if applicable)
```

---

## Phase 0 — First Priority: Filling Brand Foundation

Nothing in Phase 1 or beyond can be written until these answers exist. This is the single blocker.

**How to complete it:**
Work through `clients/otma/brand/brand-foundation.md` section by section in conversation. Don't try to write it formally — talk through each question. The goal is to surface the specific, non-generic version of each answer.

**Order of priority:**
1. Brand Essence (Section 1) — the internal declaration
2. Positioning (Section 3) — who, what problem, why OTMA
3. Value Proposition (Section 5) — the core promise
4. Audience (Section 2) — behavioral, not demographic
5. Tone of Voice (Section 8) — adjectives + examples
6. Visual Direction (Section 9) — register + references
7. Everything else

**Time to complete (conversational):** 60–90 minutes across 2 sessions.

---

## Launch Readiness Checklist

### Brand
- [ ] brand-foundation.md fully answered
- [ ] brand-dna.md derived and validated
- [ ] Positioning statement finalized (one sentence)
- [ ] Tone of voice documented with examples

### Offers
- [ ] Clarity Sprint one-pager written
- [ ] Core offer copy for all 5 service lines written
- [ ] Pricing floors confirmed
- [ ] Proposal template ready

### Website
- [ ] site-plan.md complete
- [ ] Homepage copy approved
- [ ] Framer build complete
- [ ] Mobile reviewed
- [ ] CTA flow tested (contact/inquiry → response)

### Operations
- [ ] Delivery workflow for each service line documented
- [ ] Situation Report template ready
- [ ] Handoff Document template ready
- [ ] Client onboarding template updated
- [ ] At least 1 agent configured and evaluated

### Soft Launch
- [ ] 2 pilot engagements completed
- [ ] Gaps in workflow identified and fixed
- [ ] At least 1 case study documented (even if anonymized)

---

## What OTMA Borrows from Edra (and Why)

| Edra principle | OTMA adaptation |
|----------------|-----------------|
| Read existing data instead of asking for documentation | Analyze what the client already has before proposing anything |
| One-week pilot as entry product | Clarity Sprint (3 days) — low commitment, real output |
| Three-stage structure: Discover → Automate → Learn | Diagnose → Build → Transfer |
| Human-readable outputs clients can own | Handoff document + operation manual per engagement |
| Results framed in concrete before/after terms | Every deliverable defined by what changed, not what was done |
| Deploy fast, refine in production | Soft launch with 2 real clients before full release |

**What OTMA does NOT borrow:**
- SaaS/platform framing (OTMA is a services business, not a product)
- Enterprise IT focus (OTMA's clients are founders and growing businesses)
- Automated discovery (OTMA's diagnosis is human — that's the differentiator)

---

## Next Action

Start Phase 0. Open `clients/otma/brand/brand-foundation.md` and work through Section 1 (Brand Essence) conversationally. Everything else follows from there.
