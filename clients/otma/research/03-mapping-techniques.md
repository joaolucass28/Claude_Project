# 03 — Process Mapping Techniques

Process mapping transforms the invisible into the visible. A map is not documentation for its own sake — it is a diagnostic tool, a communication artifact, and the foundation of any improvement or automation effort. Choosing the wrong map type means showing people the wrong thing.

---

## Flowchart

**What It Shows:** A linear sequence of activities, decisions, and events from start to end within one dimension (typically one role or one department).

**When to Use:**
- First pass documentation of a simple, single-function process
- Training materials and SOPs
- When the audience is unfamiliar with process notation
- Communicating a process to a non-technical stakeholder

**How to Read It:**
- Rectangles: activities/tasks
- Diamonds: decision points (yes/no, approve/reject)
- Ovals/rounded rectangles: start and end events
- Arrows: flow direction

**Limitations:**
- No role visibility — doesn't show who does what
- Scales poorly beyond ~15 steps
- No time dimension
- Cannot represent concurrent activities well
- Hides handoffs (the most common source of process failure)

---

## Swimlane Diagram (Cross-Functional Flowchart)

**What It Shows:** A flowchart extended with horizontal or vertical lanes, each lane representing a role, department, or system. Every activity sits in the lane of whoever is responsible for it. Handoffs are visible as arrows crossing lane boundaries.

**When to Use:**
- Any cross-functional process (sales to delivery, request to fulfillment, incident to resolution)
- When accountability is unclear or contested
- To diagnose where delays and errors occur (almost always at handoff points)
- Early-stage process documentation for multi-departmental processes

**How to Read It:**
- Lane identity: the role/department responsible for activities in that lane
- Activity placement: activities must sit in exactly one lane (ambiguity here is itself a finding)
- Cross-lane arrows: handoffs — the primary diagnostic target
- Decision diamonds at lane boundaries: approval gates

**Limitations:**
- Can become visually complex beyond 4–5 lanes
- Does not show time, metrics, or data flows
- Does not differentiate between process instances
- Standard notation is informal — interpretations vary across organizations

---

## SIPOC

**What It Shows:** A one-page high-level view of a process in five columns: Suppliers → Inputs → Process → Outputs → Customers. Establishes scope and boundary before any detailed mapping.

**When to Use:**
- Project scoping — defining what is and isn't part of the process under analysis
- Before any detailed process mapping or improvement effort
- Aligning stakeholders on the same high-level understanding
- Presenting a process to executives or sponsors
- First step in DMAIC (Define phase)

**How to Read It:**

| Suppliers | Inputs | Process (Steps) | Outputs | Customers |
|-----------|--------|-----------------|---------|-----------|
| Who provides | What comes in | Major activities (4–7 steps) | What goes out | Who receives |

**Key Properties:**
- The "P" (Process) column is intentionally high-level: 4–7 steps maximum
- Suppliers and Customers include both internal and external parties
- Inputs include information, materials, and triggers
- Outputs include both the primary deliverable and byproducts

**Limitations:**
- Deliberately high-level — not a map of how work actually flows
- Does not show sequence within the process column in detail
- Does not show decision points, exceptions, or time

---

## Value Stream Mapping (VSM)

**What It Shows:** The complete flow of materials and information required to bring a product or service from request to delivery, with time and waste quantified at each step. A VSM shows both the current state (what is) and the future state (what should be).

**Origin:** Developed within the Toyota Production System. Formalized by Mike Rother and John Shook in *Learning to See* (1998). Primarily a Lean tool.

**When to Use:**
- Manufacturing and logistics processes with physical flow
- Service processes with high volume and measurable lead times
- When the primary goal is waste elimination and cycle time reduction
- When you need to build the business case for a Lean transformation
- When demonstrating the gap between value-added time and total lead time

**How to Read It:**
- **Process boxes**: each step in the value stream, with key metrics (cycle time, uptime, batch size)
- **Push arrows vs. pull arrows**: push = produced based on schedule; pull = produced based on downstream demand signal
- **Inventory triangles**: work-in-progress accumulation between steps (visible waste)
- **Timeline at bottom**: alternates between value-added time (time work is done) and non-value-added time (wait time). The ratio of these is the key finding.
- **Information flows**: how orders, schedules, and signals move (often depicted at top of the map)

**Key VSM Metrics:**
- **Lead Time**: total clock time from customer request to delivery
- **Process Time (Value-Added Time)**: time actually spent transforming the product/service
- **PCE (Process Cycle Efficiency)**: Process Time / Lead Time × 100%. World-class manufacturing: 25%+. Typical service processes: 5–15%.

**Limitations:**
- Requires going to the gemba — cannot be drawn from memory or interviews alone
- Works best with one product family at a time; complex with high-mix operations
- The future-state map is a hypothesis, not a plan
- Less applicable to highly variable, non-repeatable processes

---

## BPMN — Business Process Model and Notation

**What It Shows:** A formal, standardized notation for modeling business processes at any level of detail, including exception flows, parallel activities, message events, and system interactions.

**Origin:** Developed by the Business Process Management Initiative (BPMI); now maintained by the Object Management Group (OMG). Current version: BPMN 2.0 (2011). The ISO standard for business process modeling (ISO/IEC 19510).

**When to Use:**
- Process automation and system implementation projects
- Complex processes with multiple exceptions and parallel flows
- Documentation that must be read by both business stakeholders and IT teams
- Integration with BPMS (Business Process Management Suites) like Camunda, IBM BPM
- Compliance-heavy industries requiring formal documentation

**Core Elements:**

| Element | Symbol | Purpose |
|---------|--------|---------|
| Task | Rectangle | A unit of work performed |
| Event | Circle | Start, intermediate, or end event |
| Gateway | Diamond | Decision, parallelism, or synchronization |
| Sequence Flow | Solid arrow | Connects activities within a pool |
| Message Flow | Dashed arrow | Communication between pools (organizations) |
| Pool | Large rectangle | A participant (organization, system) |
| Lane | Subdivision of pool | A role or department within a participant |

**BPMN Notation Levels:**
- **Descriptive**: basic tasks, events, gateways — sufficient for business audience
- **Analytical**: adds more event types and gateway variations — for process analysts
- **Executable**: full notation with data, service calls, error handling — for IT implementation

**Limitations:**
- Steep learning curve; incorrectly drawn BPMN is worse than no diagram
- Over-engineering risk: not every process needs BPMN
- Poor choice for strategic/conceptual communication — too granular
- Requires modeling tools (Camunda Modeler, Bizagi, Signavio, ARIS)

---

## EPC — Event-Driven Process Chain

**What It Shows:** A process as alternating events and functions (activities), connected by logical operators (AND, OR, XOR). Particularly designed to show what triggers an activity and what that activity produces.

**Origin:** Developed by August-Wilhelm Scheer at the University of Saarland (Germany) in the early 1990s. Became the standard notation within SAP's ARIS platform and is widely used in SAP implementation projects.

**When to Use:**
- SAP or ERP implementation and configuration projects
- Business process reengineering in German-speaking business culture
- When trigger/event relationships are central to the documentation
- Integration with ARIS tooling

**How to Read It:**
- **Events** (hexagons): states that trigger or result from functions — "Invoice received," "Order confirmed"
- **Functions** (rounded rectangles): activities performed — "Approve invoice," "Create purchase order"
- **Connectors**: AND (all paths active), OR (one or more paths active), XOR (exactly one path active)
- Sequence: Event → Function → Event → Function...

**Limitations:**
- Less intuitive for non-technical audiences than flowcharts or swimlanes
- Less expressive than BPMN 2.0 for complex orchestration
- Largely confined to ARIS/SAP ecosystem
- Difficult to represent exception handling and subprocesses cleanly

---

## Process Hierarchy — How to Level Processes

A process hierarchy organizes all organizational processes from strategic to operational, enabling navigation from "what the company does" down to "how a specific task is executed."

**Standard Levels:**

| Level | Name | Description | Owner | Example |
|-------|------|-------------|-------|---------|
| **L0** | Process Landscape / Value Chain | The entire company's process universe, organized by major category | CEO / Leadership | "Order to Cash," "Recruit to Retire," "Plan to Produce" |
| **L1** | Process Group / Value Stream | Major end-to-end flows | VP / Director | "Sales Process," "Operations Process," "HR Process" |
| **L2** | Process | A named, bounded process with defined inputs, outputs, owner, and KPIs | Process Owner | "Lead Qualification," "Invoice Approval," "Onboarding" |
| **L3** | Sub-Process | A cohesive cluster of activities within a process | Team Lead | "Credit check," "Document verification," "Approval routing" |
| **L4** | Activity / Task | A single discrete action | Individual contributor | "Send email," "Update CRM," "Sign document" |

**Rules for Good Process Hierarchy:**
- Each level answers a different question: L0 = "what business are we in?"; L2 = "what work crosses functions?"; L4 = "what does a person do?"
- Processes at the same level should be comparable in scope
- A process should have a single, named owner
- Decomposition stops when the next level would be a system action or a single-person task
- Most organizations need 3–4 levels; L0+L1 for strategy, L2+L3 for management, L4 for training

**Common Frameworks for L0:**
- **APQC Process Classification Framework (PCF)**: universal L0/L1 template across industries
- **SCOR** (Supply Chain Operations Reference): L0–L3 for supply chain
- **SAP Reference Content**: industry-specific L0–L4 for ERP implementations

---

## Apply + Authority

### Apply: How OTMA Deploys These With Clients
OTMA's mapping selection is diagnostic-first: the right map is the one that makes the right problem visible to the right audience.

- **SIPOC** at every engagement start — scoping the process and aligning stakeholders before detail work begins
- **Swimlane diagrams** as the primary documentation artifact for L2–L3 processes — shows accountability and handoffs
- **VSM** for clients with physical flow (logistics, distribution, light manufacturing) or high-volume service delivery — used to quantify waste and build the improvement business case
- **Process hierarchy (L0–L3)** as architecture for clients undergoing full operational design — ensures every process is named, owned, and logically placed
- **BPMN** reserved for automation-bound processes or clients integrating with enterprise software
- **Flowcharts** for training materials and SOP documentation after the process is designed

### Authority: What OTMA Can Say to Demonstrate Mastery
- "We don't map processes to have documentation. We map to make the right problem visible."
- "Most handoff failures are invisible on an org chart. They only appear on a swimlane — which is why we draw one before we recommend anything."
- "A SIPOC in 90 minutes produces more alignment than six months of email threads."
- Content angle: "The map you're missing: why org charts hide the problems VSMs and swimlanes reveal"
- Content angle: "5 process maps, 5 different answers — how to choose the right tool for the right question"
