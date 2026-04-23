# 02 — Process Improvement Methodologies

## SDCA — Standardize, Do, Check, Act

**Origin:** Derived from the PDCA cycle; formalized in Japanese quality management as the prerequisite stabilization cycle before improvement begins. Associated with the Toyota Production System and codified by Masaaki Imai in *Kaizen* (1986).

**Core Logic:** You cannot improve what is not stable. SDCA fixes the current standard, makes it the baseline, and confirms the organization can execute it consistently before any improvement loop begins. Without SDCA, PDCA improvements degrade — teams improve to a new level then drift back because there is no locked standard.

**Steps:**
1. **Standardize** — Document the current best-known method as the official standard. Create SOPs, visual aids, checklists.
2. **Do** — Execute the standard consistently across all instances and personnel.
3. **Check** — Measure whether the standard is being followed and whether it produces the expected output.
4. **Act** — If the standard is not being followed: investigate deviation and reinforce. If the standard is insufficient: escalate to PDCA for improvement.

**When to Use:**
- Before launching any improvement initiative
- When a process exists but results are inconsistent
- During onboarding — ensuring new staff execute at the defined standard
- Post-improvement to lock in gains from a PDCA cycle

**Real Results:** Organizations that implement standardized work before improvement cycles see 30–50% reduction in result variance. Toyota's standardized work documentation is the foundation of their ability to run 5 million improvement suggestions annually (Kaizen events) without causing chaos.

---

## PDCA — Plan, Do, Check, Act

**Origin:** Walter Shewhart introduced the concept in the 1930s as a statistical control loop. W. Edwards Deming popularized it in Japan in the 1950s — where it became known as the "Deming Cycle." The Japanese re-elaborated it in 1951 and Kaoru Ishikawa refined it further in 1985.

**Core Logic:** A scientific method for process improvement. Hypothesize a change (Plan), test it at small scale (Do), measure outcomes vs. hypothesis (Check), then institutionalize or revise (Act). The cycle repeats — each full rotation produces a new, higher standard.

**Steps:**
1. **Plan** — Define the problem, collect data, identify root cause, formulate improvement hypothesis, set targets, design the test.
2. **Do** — Implement the change at small scale (pilot). Document what was done. Measure results.
3. **Check** — Compare results to the hypothesis. Did the change produce the expected improvement? What were side effects?
4. **Act** — If successful: standardize the change (hand off to SDCA). If unsuccessful: return to Plan with new insights. Do not skip Act — unresolved cycles are the most common failure mode.

**When to Use:**
- Continuous improvement on an existing process
- Root cause investigation of recurring defects or delays
- Testing process changes before organization-wide rollout
- Any structured improvement project without the statistical complexity of DMAIC

**Real Results:** Companies using PDCA as systematic management practice (not as a one-off event) report compounding improvements. Toyota attributes much of its manufacturing quality (defect rates below 100 PPM) to decades of systematic PDCA cycles. Healthcare applications have shown 40–60% reductions in patient adverse events using PDCA frameworks.

---

## SDCA + PDCA: How They Work Together

The relationship is sequential and recursive:

```
SDCA → [stable baseline] → PDCA → [improved standard] → SDCA → [locks new standard] → PDCA → ...
```

SDCA is maintenance; PDCA is improvement. Running PDCA without a prior SDCA cycle means you are improving a moving target — results will not hold. Running SDCA without PDCA means you are locking in the status quo indefinitely.

The practical implication for process deployment: **when entering a client's operation, always run SDCA before PDCA.** Stabilize first, then improve. Organizations that skip this step launch improvement projects only to find the "improved" process performing worse than the previous one because the baseline was never stable.

---

## Kaizen — Continuous Improvement Philosophy

**Origin:** The Japanese word *kaizen* (改善) means "change for the better." Emerged in post-WWII Japan in the 1950s, shaped by American quality management teachings (Deming, Juran) and Toyota's internal culture. Codified by Masaaki Imai in 1986. Adopted globally as a management philosophy and a set of tools.

**Core Logic:** Improvement should be continuous, incremental, and owned by the people who do the work — not reserved for specialists or large projects. Every employee is expected to identify waste, propose improvements, and implement small changes. Volume of improvement matters as much as magnitude.

**Key Principles:**
- Eliminate waste (*muda*) — any activity not adding value to the customer
- Respect for people — the people closest to the work have the best knowledge of it
- Go to the *gemba* — go to the place where value is created, observe directly
- Make problems visible — abnormalities should surface, not be hidden
- Improvement never ends — every standard is temporary

**Kaizen Events (Kaizen Blitz):**
Intensive 3–5 day workshops where a cross-functional team focuses entirely on improving one specific process or area. Typically follows: prepare → observe → analyze → implement → review → document.

**Real Results:**
- Toyota receives approximately 1 million improvement suggestions per year from employees; over 90% are implemented.
- Companies running structured Kaizen programs report 10–30% productivity gains within 6–12 months.
- Lean Enterprise Institute studies: organizations with active Kaizen cultures sustain improvement gains 2–3x longer than one-time reengineering projects.

---

## 5S — Workplace and Process Organization

**Origin:** Developed within the Toyota Production System in the 1960s. Based on five Japanese words: Seiri, Seiton, Seiso, Seiketsu, Shitsuke. Formalized and exported globally as foundational Lean infrastructure.

**Core Logic:** A disorganized environment creates invisible waste: time lost searching for tools, errors caused by misplaced items, safety risks, and cognitive overhead. 5S creates a visual, self-regulating environment where anything out of place is immediately apparent.

**The Five Steps:**
1. **Sort (Seiri)** — Remove everything not needed for current operations. Tag and eliminate unnecessary items.
2. **Set in Order (Seiton)** — Assign a designated place for every item. "A place for everything and everything in its place." Visual labels, floor markings, shadow boards.
3. **Shine (Seiso)** — Clean the environment to baseline. Cleaning is inspection — deterioration becomes visible.
4. **Standardize (Seiketsu)** — Establish standards for the first three S's. Schedules, checklists, visual controls. Make it impossible to not maintain.
5. **Sustain (Shitsuke)** — Build discipline. Audits, habits, leadership reinforcement. The most difficult S.

**Applied Beyond Manufacturing:** In services and knowledge work, 5S applies to digital environments (file structures, inbox management, shared drives), meeting rooms, information workflows, and customer-facing spaces.

**Real Results:**
- Manufacturing plants applying 5S report 25–50% reduction in search time, 10–30% productivity improvements, and significant reductions in workplace accidents.
- 5S is typically the first intervention in any Lean transformation — it creates visible, immediate change that builds organizational confidence for deeper improvement work.

---

## DMAIC — Overview

**Origin:** Developed within Six Sigma at Motorola in the 1980s; systematized by GE under Jack Welch in the 1990s. DMAIC is Six Sigma's core improvement roadmap for **existing processes** with measurable defects or performance gaps.

**Core Logic:** Apply statistical rigor to process improvement. Don't guess the root cause — measure it. Don't claim an improvement — prove it with data. Full breakdown in `04-advanced.md`. Brief summary here:

| Phase | Question Answered |
|-------|------------------|
| **Define** | What problem are we solving? For whom? With what business impact? |
| **Measure** | What is the current baseline? How is the process performing today? |
| **Analyze** | What are the root causes? What drives the defects? |
| **Improve** | What changes eliminate root causes? Do they work? |
| **Control** | How do we prevent regression? How do we lock in the gain? |

**When to Use DMAIC vs. PDCA:**
- DMAIC: complex processes, statistically significant defect rates, large financial impact, requires formal root cause quantification
- PDCA: simpler improvement cycles, lower complexity, faster iterations, team-level improvement

---

## Apply + Authority

### Apply: How OTMA Deploys These With Clients
OTMA's core delivery sequence mirrors the SDCA → PDCA arc. The Diagnóstico Operacional identifies whether the client has any documented standards (SDCA foundation). The Implementação de Sistema phase installs the standard, trains execution, and measures adherence (SDCA). Only once stable performance is established does OTMA introduce improvement cycles (PDCA). Kaizen logic runs continuously underneath — OTMA's delivery model surfaces employee knowledge of what's broken and formalizes it into actionable improvement.

5S is often deployed early in physical-environment clients (retail, light manufacturing, logistics) because it produces fast, visible results that build organizational confidence for the less visible process work that follows.

DMAIC is referenced when clients have data systems mature enough to support statistical analysis — typically in larger organizations or at later phases of engagement.

### Authority: What OTMA Can Say to Demonstrate Mastery
- "Most companies try to improve before they stabilize. The result is permanently mediocre performance with a lot of improvement theater."
- "Kaizen is not a workshop you run once. It's a condition of the operation — either it's happening continuously or it isn't happening at all."
- "PDCA without a prior SDCA cycle is like building on sand. You improve to a new level, then drift back because there's no standard holding the gain."
- Content angle: "Why your last improvement project didn't stick" — SDCA as the missing piece most Brazilian SMEs skip.
- Content angle: "5S for service companies" — makes the methodology legible to non-manufacturing clients.
