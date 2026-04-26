# Dhauz — Cliente OTMA

**Tipo de serviço:** Implementação de Infraestrutura de Rede  
**Fase atual:** Proposta entregue — aguardando aprovação Fase 1  
**Responsável OTMA:** João + Symon  
**Iniciado em:** Abril 2026

---

## Contexto

Dhauz é uma empresa com operação em dois andares. A vistoria identificou três redes separadas sem gestão central, consumo de banda descontrolado e cobertura inconsistente. A OTMA entregou o RPPI com proposta de unificação em duas fases.

## Fases do Projeto

| Fase | Escopo | Investimento | Status |
|------|--------|-------------|--------|
| **Fase 1** | Rede unificada (APs + controladora + Switch PoE + cabeamento) | R$ 5k – 7k | Proposta entregue |
| **Fase 2** | Servidor Dhauz (NAS → servidor completo) | R$ 8k – 25k+ | Planejado |

## Estrutura da Pasta

```
dhauz/
├── README.md                  ← este arquivo
├── briefing.md                ← contexto do cliente, contatos, ambiente
├── diagnosis/
│   └── rppi-abril-2026.md    ← vistoria + diagnóstico técnico estruturado
├── proposals/
│   ├── fase-1-rede.md        ← proposta formal Fase 1
│   └── fase-2-servidor.md    ← proposta Fase 2 (futura)
├── delivery/
│   └── fase-1/               ← Células de Entrega — semana a semana
├── handoff/                  ← Protocolo de Handoff por processo entregue
├── assets/                   ← diagramas de rede, fotos, notas fiscais
└── website/
    └── DhauzLandingPage.tsx  ← landing page Framer
```
