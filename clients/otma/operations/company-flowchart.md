# OTMA — Company Flowchart

Visual map of the agency's structure, service tracks, and client workflow.
Built for Miro import (Mermaid diagram) or manual recreation.

---

## How to use in Miro

1. Open Miro → New board
2. Add widget → Embed → paste the Mermaid code block
3. Or use [mermaid.live](https://mermaid.live) to export as SVG/PNG → import into Miro
4. Use the **Color Guide** below to apply OTMA brand colors per zone

---

## Color Guide (for Miro manual build)

| Zone               | Fill        | Border      |
|--------------------|-------------|-------------|
| Entry / Lead       | `#F5F0EB`   | `#C4A882`   |
| Brand Track        | `#EAF0FB`   | `#4A7FD4`   |
| Website Track      | `#F0F7EE`   | `#4CAF50`   |
| Content Track      | `#FDF5E6`   | `#E8A838`   |
| Delivery / Output  | `#F9ECEC`   | `#D94F4F`   |
| Operations / Tools | `#F4F4F4`   | `#888888`   |

---

## Mermaid Diagram

```mermaid
flowchart TD

  %% ─── ENTRY ───────────────────────────────────────────────
  subgraph ENTRY["⬛ ENTRADA DE CLIENTES"]
    direction TB
    L["🔍 Lead\n(indicação / inbound)"]
    BI["📋 Briefing Inicial\nclient-brief-template"]
    PR["📄 Proposta & Contrato\nscopo + prazo + valor"]
  end

  L --> BI --> PR

  %% ─── DISCOVERY ───────────────────────────────────────────
  subgraph DISC["🔎 DISCOVERY"]
    direction TB
    DNA["🧬 brand-dna\nDocumento de Identidade\n(8 seções)"]
    BOS["⚙️ brand-os\nDiagnóstico Cultural\n+ Teste de Foco"]
  end

  PR --> DNA --> BOS

  %% ─── SERVICE TRACKS ──────────────────────────────────────
  subgraph TRACKS["🛤️ TRILHAS DE SERVIÇO"]
    direction LR

    subgraph BRAND["🏷️ BRAND STRATEGY"]
      direction TB
      B1["Posicionamento\n+ Propósito"]
      B2["Tom de Voz\n+ Narrativa Central"]
      B3["Território Visual\n(direção estética)"]
      B1 --> B2 --> B3
    end

    subgraph WEB["🌐 WEBSITE"]
      direction TB
      W1["Sitemap\n+ Estratégia de Conteúdo"]
      W2["Copy Homepage\n(copy-framework)"]
      W3["Direção Visual\n(visual-direction.md)"]
      W4["Build Framer\n(TSX components)"]
      W5["QA & Entrega\n(framer-qa-checklist)"]
      W1 --> W2 --> W3 --> W4 --> W5
    end

    subgraph CONTENT["📣 CONTEÚDO"]
      direction TB
      C1["Calendário Editorial\n+ Temas Macro"]
      C2["Criação de Conteúdo\n(scene-architect)"]
      C3["Distribuição\npor Canal"]
      C1 --> C2 --> C3
    end
  end

  BOS --> BRAND
  BOS --> WEB
  BOS --> CONTENT

  %% ─── DELIVERY ────────────────────────────────────────────
  subgraph DELIVERY["📦 ENTREGA"]
    direction TB
    D1["Entrega Final\n+ Aprovação do Cliente"]
    D2["Rodada de Revisões"]
    D3["Handoff\n(arquivos, acessos, docs)"]
  end

  B3 --> D1
  W5 --> D1
  C3 --> D1
  D1 --> D2 --> D3

  %% ─── POST-DELIVERY ───────────────────────────────────────
  subgraph POST["🔄 PÓS-ENTREGA"]
    direction TB
    P1["Retainer / Manutenção"]
    P2["Novos Projetos\n(upsell / expansão)"]
    P3["Referência / Indicação"]
  end

  D3 --> P1 & P2 & P3

  %% ─── OPERATIONS ──────────────────────────────────────────
  subgraph OPS["⚙️ OPERAÇÕES INTERNAS"]
    direction LR
    O1["🤖 Claude Code\n(agente de build e estratégia)"]
    O2["🖼️ Framer\n(plataforma de build)"]
    O3["📁 Estrutura de Projeto\nbrand / website / offers\ncontent / operations / assets"]
    O4["📧 Email Workflow\ndraft_mail.sh → aprovação → envio"]
  end

  OPS -.->|"suporte transversal"| TRACKS
  OPS -.-> DELIVERY

  %% ─── SPECIALIST MODULES ──────────────────────────────────
  subgraph SPEC["🧩 MÓDULOS ESPECIALISTAS (brand-os)"]
    direction LR
    S1["Analista Cultural"]
    S2["Estrategista de Identidade"]
    S3["Especialista em Naming"]
    S4["Diretor Criativo"]
    S5["Arquiteto de Narrativa"]
    S6["Gestor de Comunidade"]
    S7["Analista de Coerência"]
  end

  SPEC -.->|"ativados por fase"| BRAND
  SPEC -.->|"ativados por fase"| WEB
  SPEC -.->|"ativados por fase"| CONTENT
```

---

## Narrative Summary

OTMA operates as a branding and web design agency built around a systematic,
AI-assisted methodology. Every client project passes through three phases:

1. **Entry** — Lead capture, briefing, and scoping.
2. **Discovery** — Deep brand interrogation via `brand-dna` and cultural diagnosis
   via `brand-os`. This phase produces the identity document that feeds all
   downstream work.
3. **Execution** — Three parallel service tracks activate based on project scope:
   - **Brand Strategy**: positioning, voice, visual territory
   - **Website**: sitemap → copy → design → Framer build → QA
   - **Content**: editorial calendar → production → distribution
4. **Delivery** — Unified handoff with revision rounds and full documentation.
5. **Post-delivery** — Retainer, upsell, and referral loop.

Specialist modules from `brand-os` are activated at each phase as needed —
never all at once. Internal operations (Claude, Framer, scripts) support every
track without being visible to the client.
