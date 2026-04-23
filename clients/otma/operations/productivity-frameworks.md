# FRAMEWORKS DE PRODUTIVIDADE OTMA
**Versão:** 1.0 | **Data:** Abril 2026 | **Escopo:** Operação interna + entrega a clientes

---

## LÓGICA DOS FRAMEWORKS

Cada framework segue o padrão OTMA:
- Nome estratégico (simples, intuitivo, memorável)
- Etapas nomeadas com função específica
- Linguagem híbrida — humano executa, IA interpreta
- Output concreto — não conceito, entregável

---

## FRAMEWORK 1 — FILTRO DE ENTRADA

**O que é:** Protocolo de qualificação em 20 minutos — decide se vale avançar antes de investir tempo em diagnóstico.

**Quando usar:** Primeiro contato com potencial cliente.

**Etapas:**

| # | Nome da Etapa | Ação |
|---|--------------|------|
| 1 | **DORES** | Ouvir o problema como o cliente descreve — sem propor ainda |
| 2 | **HISTÓRICO** | "Já tentaram resolver? O que não funcionou?" |
| 3 | **URGÊNCIA** | Há prazo ou consequência concreta se não resolver? |
| 4 | **DECISÃO** | Quem aprova? Quantas pessoas precisam dizer sim? |
| 5 | **ALINHAMENTO** | Querem execução ou querem aprender a fazer? |

**Regra de saída:**

```
3+ sim → avançar para Diagnóstico Operacional
"querem aprender" → desqualificar (educadamente, com firmeza)
"muitos aprovadores" → registrar como risco antes de prosseguir
```

**Output:** Decisão documentada — avançar / não avançar / risco identificado

**Duração:** 20 min máximo

---

## FRAMEWORK 2 — MAPA DE ESCOPO RÁPIDO

**O que é:** Sessão estruturada para ir de "problema descrito" a "processo mapeável" em uma reunião.

**Quando usar:** Após qualificação aprovada — antes de fechar proposta.

**Etapas:**

| # | Nome da Etapa | Pergunta-guia |
|---|--------------|---------------|
| 1 | **SITUAÇÃO ATUAL** | Como o processo acontece hoje? (step-by-step) |
| 2 | **PONTO DE QUEBRA** | Onde falha? O que acontece quando falha? |
| 3 | **ESTADO DESEJADO** | Como seria se funcionasse? Quem executa? Em quanto tempo? |
| 4 | **RESTRIÇÕES** | Ferramentas obrigatórias? Times envolvidos? Limitações técnicas? |
| 5 | **MEDIDA DE SUCESSO** | Como o cliente vai saber que funcionou? |

**Output:**
- Draft de escopo (1 página)
- Lista de processos a entregar
- Critério de encerramento do projeto

**Duração:** 60–90 min (1 sessão única)

---

## FRAMEWORK 3 — CÉLULA DE ENTREGA

**O que é:** Sprint semanal de implementação — a unidade básica de trabalho com um cliente ativo.

**Quando usar:** Durante a fase de Implementação de Sistema.

**Ciclo semanal:**

| Dia | Etapa | O que acontece | Duração |
|-----|-------|---------------|---------|
| Segunda | **BRIEFING** | Definir com o cliente qual processo será entregue nessa semana | 30 min |
| Quarta | **ENTREGA** | Processo documentado e enviado — nomeado, em etapas, pronto para executar | — |
| Quinta | **TESTE** | Cliente executa o processo pela primeira vez, sem OTMA presente | — |
| Sexta | **AJUSTE** | Refinamento com base no que não funcionou na execução real | 30 min |

**Regras inegociáveis:**
- Um processo por semana — não dois
- O cliente testa antes da semana fechar
- A semana só encerra com um processo rodando — não com um documento entregue

**Output:** 1 processo funcionando + skill extraída para o banco OTMA

---

## FRAMEWORK 4 — PROTOCOLO DE HANDOFF

**O que é:** Encerramento formal de cada entrega — garante que o cliente vai operar o processo sem depender da OTMA.

**Quando usar:** Ao final de cada processo entregue na Célula de Entrega.

**Etapas:**

| # | Nome da Etapa | O que acontece |
|---|--------------|----------------|
| 1 | **DEMONSTRE** | OTMA executa o processo ao vivo na frente do cliente |
| 2 | **EXECUTE** | Cliente executa com OTMA observando (sem intervir) |
| 3 | **VALIDE** | Confirmar: o cliente conseguiu completar sem intervenção? |
| 4 | **DOCUMENTE** | Processo fica salvo no ambiente do cliente — não só na OTMA |
| 5 | **NOMEIE O DONO** | Definir quem no time do cliente é responsável por manter o processo |

**Critério de encerramento:**
> O handoff só está completo quando alguém do time do cliente executa o processo sem ajuda, em tempo real, na frente da OTMA.

**Output:** Processo no ambiente do cliente + dono nomeado + registro de conclusão

---

## FRAMEWORK 5 — SYNC DOS SÓCIOS

**O que é:** Reunião semanal fixa de João + Symon — alinhamento operacional sem overhead.

**Quando usar:** Toda semana, mesmo sem pautas óbvias.

**Formato:** 30 min assíncrono (antes) + 15 min ao vivo

**Pré-sync — cada sócio preenche individualmente:**
```
- O que avancei essa semana?
- O que travou?
- O que preciso do outro sócio essa semana?
```

**Ao vivo (15 min) — 4 blocos fixos:**

| # | Bloco | Tempo |
|---|-------|-------|
| 1 | **CLIENTES** — Status de cada projeto ativo (1 linha por projeto) | 5 min |
| 2 | **PIPELINE** — Leads em andamento: avançar ou desqualificar? | 4 min |
| 3 | **SISTEMA** — Algum processo interno que precisa ajuste? | 3 min |
| 4 | **DECISÃO** — Uma decisão pendente que precisa de resolução hoje | 3 min |

**Regra de ouro:**
> Se saíram sem uma decisão tomada, a reunião foi custo, não investimento.

**Output:** Uma decisão por semana + lista de status atualizada

---

## FRAMEWORK 6 — CRISTALIZAÇÃO DE PROCESSO

**O que é:** Protocolo para transformar o trabalho de qualquer sessão em skill reutilizável — ativa o Skill Extractor no momento certo.

**Quando usar:** Ao final de qualquer sessão que gerou processo novo ou variação relevante.

**Etapas:**

| # | Nome da Etapa | Ação |
|---|--------------|------|
| 1 | **IDENTIFIQUE** | Esse processo é novo ou variação de algo já feito? |
| 2 | **NOMEIE** | Dê nome ao processo (padrão: substantivo + ação — "Filtro de Entrada", "Mapa de Escopo") |
| 3 | **DOCUMENTE** | Escreva as etapas em linguagem híbrida: simples o suficiente para humano, estruturada o suficiente para IA |
| 4 | **EXTRAIA** | Execute `/extract-skill` para cristalizar em arquivo `.skill` |
| 5 | **CLASSIFIQUE** | Salve em `clients/otma/tools/skills/` com tag de área |

**Tags de área disponíveis:**
```
operação | IA | atendimento | onboarding | qualificação | entrega
```

**Regra de cristalização:**
> Se você executou o mesmo raciocínio duas vezes, está na hora de cristalizar.

**Output:** Arquivo `.skill` salvo + banco de processos OTMA atualizado

---

## FRAMEWORK 7 — DIAGNÓSTICO RÁPIDO

**O que é:** Entregável de entrada — mapeia o estado atual da empresa e entrega um processo estruturado para um problema específico. Funciona como porta de entrada antes da Implementação de Sistema.

**Quando usar:** Tier de entrada — cliente quer testar antes de comprometer.

**Estrutura da entrega (3 blocos):**

**BLOCO 1 — MAPEAMENTO** (usa Framework 2 como base)
- Estado atual documentado (como é hoje)
- Ponto de quebra identificado (onde e por que falha)
- Estado desejado acordado (como deve ser)

**BLOCO 2 — PROCESSO**
- 1 processo estruturado, nomeado, em etapas
- Linguagem híbrida — operável pelo time, interpretável por IA
- Ferramentas definidas (do mercado — sem lock-in)

**BLOCO 3 — PRÓXIMO PASSO**
- Se o processo funcionar: o que vem depois? (gancho para Implementação de Sistema)
- Se não funcionar: qual o ajuste necessário? (não é falha — é dado)

**Output:** Documento de 2–3 páginas + processo pronto para executar na semana seguinte

**Duração total:** 1–2 semanas

---

## REFERÊNCIA RÁPIDA

| Framework | Quando | Duração |
|-----------|--------|---------|
| Filtro de Entrada | 1º contato com lead | 20 min |
| Mapa de Escopo Rápido | Pós-qualificação | 60–90 min |
| Diagnóstico Rápido | Tier de entrada | 1–2 semanas |
| Célula de Entrega | Implementação ativa | 1 semana/processo |
| Protocolo de Handoff | Final de cada processo | 30–60 min |
| Sync dos Sócios | Semanal (João + Symon) | 45 min |
| Cristalização de Processo | Pós-sessão com novo processo | 15 min |

---

## REGRA DE USO

> Nenhum desses frameworks substitui julgamento. Eles eliminam o custo de decidir como estruturar o que já é recorrente — para que o julgamento reste onde importa.
