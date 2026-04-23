# Brand Suite — Contrato de Sistema

Três skills. Um fluxo coerente. Este documento define como elas se conectam.

---

## 1. Sequência Recomendada

```
brand-dna → brand-os → scene-architect
```

| Posição | Skill | Função no sistema |
|---------|-------|-------------------|
| 1 | **brand-dna** | Extrai identidade. Produz o documento fundacional. |
| 2 | **brand-os** | Desenvolve a identidade em sistema de marca completo. |
| 3 | **scene-architect** | Traduz identidade em prompts visuais para produção de conteúdo. |

**Entradas alternativas válidas:**

| Cenário | Caminho correto |
|---------|----------------|
| Usuário tem material existente (TCC, deck, site) | brand-os ANÁLISE — sem brand-dna |
| Usuário só precisa de conteúdo visual, identidade já definida | brand-dna → scene-architect — sem brand-os |
| Usuário não tem identidade e quer gerar uma imagem agora | scene-architect (protocolo de referências) → oferecer brand-dna para formalizar |
| Usuário quer construir marca mas não sabe responder quem é | brand-dna primeiro — bloquear brand-os até documento pronto |

---

## 2. Regras de Handoff

### brand-dna → brand-os

**Quando:** ao final do Passo 4 do brand-dna, quando o documento de identidade estiver completo.

**O que passa:**
- Documento completo como contexto de entrada para brand-os CONSTRUÇÃO
- As respostas do Teste de Foco (quem é, o que faz, por que importa) devem ser consideradas respondidas — brand-os não re-interroga
- brand-os começa diretamente na pergunta de fase (ideia / protótipo / validando / escalando)

**Regra:** brand-os CONSTRUÇÃO não reaplica o Teste de Foco se o brand-dna já foi concluído. Ele confirma as três respostas em uma linha e avança.

---

### brand-dna → scene-architect

**Quando:** usuário quer produzir conteúdo visual sem passar pelo desenvolvimento de sistema completo do brand-os.

**O que passa:**
- **Seção 7 (Território Visual)** do documento brand-dna é a fonte de calibração para scene-architect — não é preciso re-perguntar sobre direção estética
- **Seção 5 (Tom de Voz)** alimenta o Bloco 6 (Atmosfera Final) e os adjetivos de textura
- **"O que a marca nunca diria"** (Seção 5) se converte diretamente em "o que nunca entra no prompt"
- **Seção 2 (Para Quem Não É)** informa composição e quem nunca aparece na cena

**Regra:** se o brand-dna estiver disponível, scene-architect não aplica o protocolo de referências. Usa o documento diretamente e declara as inferências no Bloco A antes de escrever.

---

### brand-os → scene-architect

**Quando:** usuário desenvolveu a marca via brand-os e quer iniciar produção visual.

**O que passa:**
- Output da Fase 2 (identidade, tom de voz, posicionamento, arquétipo) calibra scene-architect da mesma forma que o documento brand-dna
- Output da Fase 3 (narrativa por canal, gancho de identidade) informa composição e formato por plataforma — scene-architect deve perguntar para qual canal a imagem se destina e usar o gancho de identidade daquele canal como âncora visual

**Regra:** se brand-os Fase 2 estiver disponível mas Fase 3 não, scene-architect usa Fase 2 e pergunta o canal de destino. Se Fase 3 estiver disponível, usa o gancho de identidade do canal sem re-perguntar.

---

### scene-architect → brand-dna (caminho reverso)

**Quando:** usuário entra em scene-architect sem identidade formalizada e completa o protocolo de referências (3 positivas + 1 negativa).

**Regra:** ao final do output, scene-architect oferece:
> *"As referências que você deu revelam bastante sobre o posicionamento da marca. Quer formalizar isso num documento de identidade com o brand-dna?"*

As referências coletadas tornam-se insumo para o Bloco D do brand-dna — não se perdem.

---

## 3. Mapeamento Output → Input

| Output (origem) | Input (destino) | Campo de destino |
|-----------------|-----------------|-----------------|
| brand-dna Seção 1 (Essência) | brand-os | Resposta ao Teste de Foco — "quem é você" |
| brand-dna Seção 3 (Posicionamento) | brand-os | Resposta ao Teste de Foco — "o que faz e para quem" |
| brand-dna Seção 4 (Propósito) | brand-os | Resposta ao Teste de Foco — "por que importa" |
| brand-dna Seção 5 (Tom de Voz) | brand-os | Fase 2 — elemento Tom de Voz |
| brand-dna Seção 7 (Território Visual) | scene-architect | Campo de Direção de Arte + calibração do Bloco 6 |
| brand-dna Seção 5 "nunca diria" | scene-architect | Restrições implícitas — o que nunca entra no prompt |
| brand-os Fase 2 completa | scene-architect | Substituição completa do documento brand-dna quando brand-dna não existe |
| brand-os Fase 3 (gancho de identidade por canal) | scene-architect | Âncora visual por canal — alimenta Blocos 1 e 6 |
| scene-architect protocolo de referências | brand-dna | Insumo para Bloco D da interrogação |

---

## 4. Fonte Única de Verdade para Direção Visual

**A fonte de verdade visual é sempre brand-dna Seção 7 — Território Visual.**

Quando o documento brand-dna existe:
- scene-architect usa Seção 7 como base de calibração sem re-perguntar
- brand-os usa Seção 7 como ponto de partida para Fase 2 (Identidade Visual), não como substituto

Quando o documento brand-dna não existe mas brand-os Fase 2 foi concluída:
- brand-os Fase 2 é a fonte de verdade visual provisória
- Deve ser tratada como equivalente funcional à Seção 7 para efeitos de calibração em scene-architect

Quando nenhum documento existe:
- scene-architect aplica o protocolo de referências e declara as inferências no Bloco A
- Essas inferências são provisórias — a fonte de verdade só existe após brand-dna ser concluído

**Regra de conflito:** se o briefing do usuário contradiz a direção visual documentada, scene-architect sinaliza o conflito antes de prosseguir. Não silencia.

---

## 5. Vocabulário Compartilhado

Termos que aparecem em mais de uma skill — significado canônico para uso consistente:

| Termo | Significado canônico no sistema |
|-------|--------------------------------|
| **Identidade** | O que a marca é — personalidade, essência, crença central. Produzida por brand-dna. |
| **Posicionamento** | O espaço que a marca ocupa em relação ao que existe. Seção 3 do brand-dna. |
| **Tom de voz** | Como a marca fala — adjetivos precisos + exemplos reais + anti-exemplos. Seção 5 do brand-dna. |
| **Território visual** | Direção estética da marca — registro, paleta de sensações, referências, o que nunca aparece. Seção 7 do brand-dna. Fonte de verdade visual. |
| **Arquétipo** | Personalidade da marca traduzida em padrão comportamental e simbólico. Usado em brand-os Fase 2 e como âncora de composição em scene-architect. |
| **Gancho de identidade** | Elemento visual ou verbal recorrente que torna o conteúdo reconhecível fora de contexto. Definido em brand-os Fase 3 por canal. |
| **Documento de identidade** | Output completo do brand-dna — as 8 seções. É o documento fundacional do sistema. |
| **Sentimento desejado** | O estado emocional que uma imagem deve provocar no espectador. Input obrigatório do scene-architect. Deve ter tensão ou referência concreta — adjetivos genéricos isolados são rejeitados. |
| **O que nunca entra** | Restrição explícita derivada de "o que a marca nunca diria" (brand-dna Seção 5) ou "o que o visual nunca deve comunicar" (brand-dna Seção 7). Usado como filtro negativo em scene-architect. |

---

## 6. Notas de Posição no Sistema

Texto compacto pronto para inserção no topo de cada SKILL.md, após o frontmatter:

---

**Para brand-dna:**
```
> Posição no sistema: FUNDAÇÃO — primeira skill a ser usada.
> Produz o Documento de Identidade (8 seções) que alimenta brand-os e scene-architect.
> Não pule esta etapa se o usuário ainda não sabe responder quem é a marca, o que faz e por que importa.
> Próximo passo natural: brand-os (sistema completo) ou scene-architect (produção visual direta).
```

**Para brand-os:**
```
> Posição no sistema: DESENVOLVIMENTO — segunda skill na sequência padrão.
> Recebe o Documento de Identidade do brand-dna como entrada ou analisa material existente (modo ANÁLISE).
> Se brand-dna não foi concluído, aplique o Teste de Foco; se o usuário travar, redirecione para brand-dna.
> Próximo passo natural: scene-architect (produção de conteúdo visual a partir da identidade desenvolvida).
```

**Para scene-architect:**
```
> Posição no sistema: PRODUÇÃO — terceira skill na sequência padrão.
> Recebe calibração visual de brand-dna Seção 7 (fonte de verdade) ou brand-os Fase 2.
> Se não houver documento de identidade, aplica o protocolo de referências e oferece brand-dna ao final.
> Não tem próximo passo dentro da suite — é o ponto de saída para geração de imagem.
```
