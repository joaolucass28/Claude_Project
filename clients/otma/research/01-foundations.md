# 01 — Process Management Foundations

## What Is a Process?

A **business process** is a defined sequence of activities that transforms one or more inputs into outputs of value to a customer (internal or external). It is repeatable, measurable, and has a clear start and end point.

Key formal definitions:
- **ISO 9000:2015**: "A process is a set of interrelated or interacting activities that transform inputs into outputs."
- **ABPMP BPM CBOK**: "A process is a defined set of activities or behaviors performed by humans or machines to achieve one or more goals."
- **Hammer & Champy (1993)**: "A collection of activities that takes one or more kinds of input and creates an output that is of value to the customer."

A process is defined by its **purpose**, **owner**, **inputs**, **outputs**, **customers**, **resources**, and **performance metrics** — not by its participants or departments.

---

## Process vs. Procedure vs. Activity vs. Workflow

| Term | Definition | Focus | Scope |
|------|-----------|--------|-------|
| **Process** | End-to-end sequence of activities delivering value | What and why | Cross-functional, strategic |
| **Procedure** | Documented instructions for executing part of a process | How (step-by-step) | Single role or function |
| **Activity** | A single discrete unit of work within a process | Action performed | Smallest unit of analysis |
| **Workflow** | Sequence of tasks to complete one instance of work | Routing and sequencing | Operational, often single department |

The distinction matters operationally: a **process** spans the organization; a **procedure** documents how one team executes their part; an **activity** is one task; a **workflow** is the mechanics of moving work from A to B. A single process may contain dozens of workflows and hundreds of procedures.

---

## Types of Processes

The standard classification (used in ISO 9001, APQC PCF, and most BPM frameworks) divides organizational processes into three categories:

### Core Processes (Value-Creating)
Directly deliver value to the external customer. These are the reason the organization exists.
- Examples: sales, order fulfillment, product development, service delivery, manufacturing.
- Characteristics: customer-facing, revenue-generating, differentiating.

### Support Processes (Enabling)
Enable core processes to operate. Do not directly create customer value but are necessary.
- Examples: HR management, IT support, accounting, procurement, legal compliance.
- Characteristics: internal-facing, cost centers, standardizable.

### Management Processes (Governing)
Coordinate, control, and align the other processes toward organizational objectives.
- Examples: strategic planning, performance management, risk management, budgeting, internal audit.
- Characteristics: cross-functional oversight, governance, typically owned by senior leadership.

---

## Process Thinking vs. Functional/Silo Thinking

| Dimension | Functional Thinking | Process Thinking |
|-----------|--------------------|--------------------|
| Unit of organization | Department / function | End-to-end process |
| Success metric | Departmental KPIs | Customer outcome |
| Accountability | Manager of function | Process owner |
| Optimization target | Local efficiency | Total flow |
| Failure mode | Handoff breakdowns | Under-performance at interfaces |
| Visibility | What my team does | What the customer experiences |

Most organizational dysfunction — delays, errors, rework, customer complaints — occurs **at handoff points** between departments, not inside them. Process thinking makes these interfaces visible and accountable. Functional thinking optimizes parts of a system while degrading the whole.

Michael Hammer's core insight: companies organized around functions automate and optimize activities that should not exist. Process thinking asks "what is the output the customer needs?" and redesigns work around that answer.

---

## Why Process Management Matters

Quantified evidence from industry data:

- **Motorola** attributed over $17 billion in savings to process improvement programs (Six Sigma) as of 2005.
- **GE** reported $350 million in cost savings from process-based improvement in 1998 alone.
- Organizations with mature BPM practices report **20–30% reductions** in process cycle time and **15–25% reductions** in operational cost (Gartner, various).
- **McKinsey (2020)**: Companies that invest in process management are 1.5x more likely to achieve above-average profit margins.
- **APQC benchmarks**: World-class companies execute order-to-cash in 4 days vs. 14 days at median companies — the gap is process design, not effort.

The underlying logic: an unmanaged process degrades over time as people improvise, shortcuts accumulate, and institutional knowledge concentrates in individuals. A managed process compounds improvement over time.

---

## Key Vocabulary

**Process Owner**
The individual accountable for end-to-end process performance. Distinct from functional managers (who manage people) and project managers (who manage time-bounded work). The process owner defines the process's KPIs, monitors performance, authorizes changes, and is responsible for outcomes regardless of which departments execute activities. ISO 9001:2015 explicitly requires process owners for each process in the QMS.

**Process Instance**
A single execution of a process. If "Invoice Approval" is the process, each individual invoice that travels through that sequence is one process instance. Analysis across thousands of instances reveals patterns: typical durations, common failure points, deviations from standard.

**Process Model**
A visual or formal representation of how a process operates — what activities occur, in what sequence, by whom, with what decisions. A model can be descriptive (shows what happens), prescriptive (shows what should happen), or analytical (used to simulate or calculate). Common notations: flowchart, BPMN, EPC, VSM.

**KPI (Key Performance Indicator)**
A quantified measure of process performance. Good process KPIs measure four dimensions:
- **Efficiency**: cost per instance, resource utilization
- **Effectiveness**: defect rate, customer satisfaction, output quality
- **Cycle time**: lead time, processing time, wait time
- **Compliance**: adherence to procedure, audit pass rate

---

## Apply + Authority

### Apply: How OTMA Deploys This With Clients
Process foundations are the diagnostic frame OTMA applies before any intervention. During a Diagnóstico Operacional, OTMA maps whether the client's organization recognizes processes as distinct from functions, whether process owners exist, and whether there is any measurement in place. Most SMEs in Brazil manage by function — they have a "marketing person" but no "lead-to-sale process." The foundational vocabulary (process vs. procedure, types of processes, process owner) becomes the common language that makes the rest of OTMA's delivery legible.

OTMA does not teach clients this vocabulary as a course. They introduce it operationally: "This is the name of what you're describing. The person who should own it is X. The measure we're going to install is Y." Foundations are deployed through structure, not lecture.

### Authority: What OTMA Can Say to Demonstrate Mastery
- "We don't reorganize departments. We redesign processes and assign ownership. Those are different problems."
- "Most of the friction your team feels happens at handoffs — that's not a people problem, it's a process architecture problem."
- "A procedure is not a process. You can have perfect SOPs and still have a broken process."
- Content angle: "Why your company has great people and bad results" — positions process thinking against hiring-more as the default Brazilian SME fix.
- Content angle: A one-pager showing the difference between a functional org chart and a process map of the same company — makes the case visually.
