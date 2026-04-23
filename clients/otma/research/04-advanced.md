# 04 — Advanced Process Systems

## Six Sigma

### Origin
Developed by Bill Smith at **Motorola** in 1986 as a quality management framework targeting near-zero defect rates. Adopted and scaled by **GE under Jack Welch** in the 1990s, which transformed it from a quality tool into a company-wide management system. By 2005, Motorola reported over **$17 billion in savings** attributable to Six Sigma. GE reported **$350 million in savings** in 1998 alone.

### Philosophy
Six Sigma targets a defect rate of **3.4 defects per million opportunities (DPMO)** — the statistical equivalent of 6 standard deviations between the process mean and the nearest specification limit (hence "six sigma"). The underlying premise: variation is the enemy. Every defect, delay, or failure is caused by uncontrolled variation in a process, and variation can be measured and reduced through statistical methods.

Six Sigma is not a philosophy of incremental improvement — it is a project-based, data-driven system that requires dedicated resources, defined roles, and measurable financial outcomes.

### Statistical Basis
- **Sigma level**: measures how many standard deviations fit between the process mean and specification limit
- **1σ**: 690,000 DPMO | **3σ**: 66,800 DPMO | **6σ**: 3.4 DPMO
- Core statistical tools: control charts, capability analysis (Cp, Cpk), hypothesis testing, regression analysis, measurement system analysis (MSA/Gauge R&R), design of experiments (DOE)

### DMAIC — Full Breakdown

**Define**
- Problem statement: describes the gap between current and desired performance, in measurable terms
- Project charter: scope, goals, timeline, team, business case
- SIPOC: scopes the process
- Voice of Customer (VOC): what customers actually require, translated into Critical to Quality (CTQ) characteristics
- Key output: agreement on what problem is being solved and what success looks like

**Measure**
- Current state data collection: process map of as-is, data collection plan
- Measurement System Analysis (MSA): verifies that the measurement system is reliable before trusting data
- Baseline capability: Cp, Cpk, sigma level, DPMO
- Key output: a defensible, quantified baseline

**Analyze**
- Fishbone (Ishikawa) diagram: hypothesis generation for potential root causes
- 5 Whys: iterative causal analysis
- Statistical analysis: correlation, regression, hypothesis testing to confirm causes
- Pareto analysis: identifies the vital few causes (80/20)
- Key output: statistically confirmed root causes

**Improve**
- Solution generation: brainstorming, benchmarking
- Solution selection: impact/effort matrix, failure mode analysis (FMEA)
- Pilot: small-scale test of the proposed solution
- Results measurement: confirms improvement against baseline
- Key output: validated solution with quantified improvement

**Control**
- Control plan: documents what, how, when, and who monitors
- Statistical Process Control (SPC): control charts that signal when a process moves out of control
- Standard operating procedures updated
- Handoff to process owner
- Key output: mechanisms that make regression detectable and recoverable

### DMADV (Design for Six Sigma — DFSS)
Used when a process or product does not exist yet or requires complete redesign (not incremental improvement).
- **Define** → **Measure** (customer needs) → **Analyze** (concepts) → **Design** → **Verify**
- Applied when DMAIC would be "improving" a fundamentally inadequate design

### Belt Levels

| Belt | Training | Role |
|------|----------|------|
| White Belt | 1–2 hours | Awareness; team member support |
| Yellow Belt | 1–2 days | Supports projects; collects data |
| Green Belt | 1–2 weeks | Leads smaller projects; works part-time on Six Sigma |
| Black Belt | 4+ weeks | Full-time project leader; statistical expert |
| Master Black Belt | Months/years | Program leader; trains and coaches Black Belts; strategic deployment |
| Champion | Executive | Sponsors projects; removes organizational barriers |

---

## Lean Manufacturing

### Origin: Toyota Production System (TPS)
Developed at Toyota between the 1940s and 1970s. Key architects: **Taiichi Ohno** (system creator and VP of Production) and **Shigeo Shingo** (error-proofing and SMED). Documented and named "Lean Production" by Womack, Jones, and Roos in *The Machine That Changed the World* (1990). The five Lean principles were later formalized by Womack and Jones in *Lean Thinking* (1996).

Toyota's original imperative: rebuild post-war production capacity without the capital Toyota assumed American manufacturers had. The solution was eliminating waste rather than adding resources.

### The 8 Wastes (DOWNTIME)
Taiichi Ohno originally identified 7 wastes (*muda*). An 8th — non-utilized talent — was added as Lean expanded beyond manufacturing.

| Waste | Description | Example |
|-------|-------------|---------|
| **D** — Defects | Errors requiring rework or scrap | Wrong invoice, returned product |
| **O** — Overproduction | Producing more than demand requires | Printing 500 brochures for a 50-person event |
| **W** — Waiting | Idle time waiting for input, approval, or machine | Email approval chain, machine changeover |
| **N** — Non-utilized Talent | Skills and knowledge unused or ignored | Expert doing admin work |
| **T** — Transportation | Unnecessary movement of materials or information | Multiple document handoffs across floors |
| **I** — Inventory | Excess WIP, supplies, or information queued | Leads not followed up, open tickets backlog |
| **M** — Motion | Unnecessary movement of people | Searching for files, walking to shared printer |
| **E** — Extra Processing | Steps that don't add customer value | Triple approval for low-risk tasks |

### Five Principles of Lean (Womack & Jones)
1. **Specify Value** — Define value from the customer's perspective. Value is what the customer is willing to pay for.
2. **Identify the Value Stream** — Map all steps required to deliver value. Eliminate those that don't contribute.
3. **Create Flow** — Make value-creating steps flow continuously without interruption or batching.
4. **Establish Pull** — Produce only what the customer pulls (demands), not based on forecasts or schedules.
5. **Pursue Perfection** — No end state; the pursuit of zero waste is continuous.

### Key Lean Tools

**Kanban**
A visual pull signal system. Each kanban card represents a unit of work or inventory. When consumed downstream, the card triggers replenishment upstream. Prevents overproduction by limiting WIP to visible, demand-driven quantities. Now widely applied in knowledge work (software, project management).

**Poka-Yoke (Error Proofing)**
Devices or design changes that make it impossible (or immediately obvious) to perform an operation incorrectly. Examples: USB connectors with only one valid orientation, checklist that cannot be bypassed in software, physical jigs that reject incorrectly positioned parts.

**Heijunka (Production Leveling)**
Smooths production volume and mix over time to prevent demand spikes and valleys. Rather than producing 100 units of A then 100 of B, Heijunka produces ABABAB... at smaller batch sizes. Reduces WIP, improves flow, reduces overburden on workers and equipment.

**Andon**
A visual management tool that signals abnormal conditions. Operators pull a cord (or press a button) to alert supervisors to a problem. The line stops; the problem is addressed before production continues. Embodies the principle: surface problems immediately rather than accumulate defects.

**Standard Work**
Documents the current best-known method for performing a task, with defined sequence, timing, and WIP quantities. Foundation of all Lean improvement — you cannot improve what is not standardized.

---

## Theory of Constraints (TOC)

### Origin
Eliyahu M. Goldratt introduced TOC in his business novel *The Goal* (1984). Formalized in *Theory of Constraints* (1990). The TOC Institute continues to develop applications.

### Philosophy
Any system has exactly one constraint (bottleneck) that limits its throughput. All other resources are subordinate to that constraint. Improving anything other than the constraint does not improve system performance — it creates the illusion of improvement while producing more WIP at the constraint.

The three core questions of TOC:
1. What to change?
2. What to change to?
3. How to cause the change?

### Five Focusing Steps (POOGI — Process of On-Going Improvement)
1. **Identify** the system's constraint — find the resource, policy, or rule that limits throughput
2. **Exploit** the constraint — get maximum output from it without additional investment (eliminate waste at the bottleneck)
3. **Subordinate** everything else — align all other processes to support the constraint's rhythm
4. **Elevate** the constraint — if exploitation is insufficient, add capacity (buy equipment, hire, redesign)
5. **Repeat** — once the constraint is broken, a new one emerges; return to step 1

### Drum-Buffer-Rope (DBR)
A production scheduling methodology based on TOC:
- **Drum**: the constraint. Its pace sets the beat for the entire system. The drum should never be idle.
- **Buffer**: time and inventory cushion in front of the constraint to protect it from upstream variability.
- **Rope**: a signal released by the constraint that authorizes material release into the system. Prevents WIP buildup ahead of the constraint.

### Thinking Processes
A set of logical tools for diagnosing complex systemic problems:
- **Current Reality Tree (CRT)**: maps cause-and-effect to identify the root cause (the "core conflict") behind multiple negative symptoms
- **Evaporating Cloud**: structures and resolves dilemmas by exposing their underlying assumptions
- **Future Reality Tree (FRT)**: tests whether a proposed solution actually addresses the root cause
- **Prerequisite Tree**: identifies obstacles to implementation and orders them
- **Transition Tree**: creates a step-by-step action plan

---

## Lean Six Sigma (LSS)

### Integration
Lean and Six Sigma address different root causes of process failure:
- **Lean** targets *waste and flow* — it asks "are we doing the right things efficiently?"
- **Six Sigma** targets *variation and defects* — it asks "are we doing things consistently and correctly?"

Together, LSS provides a complete toolkit:
- Use Lean tools to eliminate waste, reduce cycle time, and improve flow
- Use Six Sigma tools to reduce variation and defects in the remaining value-added steps
- Use DMAIC as the structured framework within which Lean tools are deployed

### When Each Dominates
- **Lean dominant**: process has large amounts of obvious waste, long cycle times, complex flow (transportation, waiting, inventory problems)
- **Six Sigma dominant**: process has high defect rates, complex root causes, measurement-sensitive quality requirements
- **LSS together**: most real improvement projects — Lean maps the value stream and eliminates waste; Six Sigma stabilizes the critical steps that remain

---

## ISO 9001:2015 — Process Approach

### What It Is
ISO 9001:2015 is the international standard for Quality Management Systems (QMS). It does not specify what processes an organization must have — it specifies that the organization must identify, manage, measure, and continually improve whatever processes are necessary to deliver quality products and services.

### Process Approach (Clause 4.4)
ISO 9001:2015 formally requires a **process approach** — organizations must:
- Identify all processes needed for the QMS and their interactions
- Define inputs, outputs, sequence, and interactions for each process
- Assign process owners (responsibility and authority)
- Determine resources needed
- Manage risks and opportunities within each process
- Establish monitoring, measurement, and evaluation criteria
- Act on opportunities to improve

### What It Demands (Practically)
- A documented **process map** or process architecture showing all QMS processes
- Evidence that each process has defined inputs, outputs, and measurable performance criteria
- Named **process owners** who can demonstrate control
- Records showing the process is operating as designed (or that deviations are identified and corrected)
- Audit readiness: auditors will walk processes end-to-end, verify documentation, test whether staff understand the process

### Certification Logic
Organizations are not certified for having perfect processes — they are certified for having a **functioning system of process management**. The standard asks: "Do you know what your processes are? Do you control them? Do you measure them? Do you improve them?" Certification is evidence of a disciplined process management system, not a guarantee of product quality.

---

## BPM — Business Process Management (as a Discipline)

### What It Is
BPM is the discipline of managing organizational processes as strategic assets — defining, modeling, executing, monitoring, and optimizing them systematically over time. It is not a methodology like DMAIC or a philosophy like Kaizen — it is the **management discipline** within which methodologies are applied.

Key distinction: BPM is the management layer; Lean, Six Sigma, SDCA/PDCA are the improvement tools deployed within it.

### BPM Lifecycle

| Phase | Activity | Output |
|-------|----------|--------|
| **Design** | Define process purpose, scope, activities, roles, KPIs | Process model (as-designed) |
| **Model** | Create visual representation, simulate scenarios, identify risk | BPMN diagram, simulation data |
| **Execute** | Deploy process in operation; assign tasks, activate workflows | Live process instances |
| **Monitor** | Track KPIs in real-time; detect deviations and bottlenecks | Dashboards, alerts, conformance data |
| **Optimize** | Apply PDCA/DMAIC/Lean to improve process performance | Updated model, new standard |

The lifecycle is continuous — Optimize feeds back into Design, creating a permanent improvement loop.

### BPM as Organizational Capability
BPM maturity models (e.g., CMMI for BPM, Gartner BPM Maturity) describe five levels:
1. **Initial**: processes exist informally; outcomes are unpredictable
2. **Managed**: processes are documented and controlled within projects
3. **Standardized**: organization-wide process standards with measurement
4. **Predictable**: processes are quantitatively managed; variation is controlled
5. **Optimizing**: processes are continuously improved using data and feedback loops

Most Brazilian SMEs that OTMA engages are at Level 1 or 2.

---

## Apply + Authority

### Apply: How OTMA Deploys These With Clients
OTMA positions itself at the intersection of BPM (the discipline), Lean (the waste-elimination lens), and SDCA/PDCA (the stabilization-improvement sequence). Six Sigma statistical tools are deployed selectively — useful when data maturity exists; replaced by structured observation and Lean VSM when it doesn't.

For ISO 9001 clients, OTMA's process architecture deliverables (process hierarchy, SIPOC, swimlanes with KPIs, named process owners) directly satisfy Clause 4.4 requirements — reducing the gap between "what consultants deliver" and "what the certification auditor needs."

TOC is used diagnostically: identifying the one constraint that is causing the most operational pain before recommending any improvement work. This prevents the classic error of optimizing everything except the bottleneck.

### Authority: What OTMA Can Say to Demonstrate Mastery
- "Every company has a bottleneck. Most don't know where it is. We find it in the first week."
- "ISO certification is not about perfect processes. It's about proving you manage what you have. We build the management system — certification follows."
- "Lean without Six Sigma eliminates waste efficiently. Six Sigma without Lean improves a step inside a broken flow. Together they fix both."
- "BPM is not a tool you buy. It's a management capability you build. We install the capability."
- Content angle: "Why your operation has no bottleneck — and why that's the biggest red flag" (TOC diagnostic positioning)
- Content angle: "The ISO 9001 audit checklist no one gives you" — authority content that demonstrates process management mastery
