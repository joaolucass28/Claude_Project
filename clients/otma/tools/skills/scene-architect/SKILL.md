---
name: scene-architect
description: >
  Transforma qualquer briefing de conteúdo visual em um prompt de imagem estruturado
  e pronto para geração. Use esta skill quando o usuário disser: "cria um prompt para
  gerar essa imagem", "como descrevo essa cena para o Midjourney", "quero gerar uma
  foto de campanha para [marca]", "transforma esse briefing em prompt de imagem",
  "preciso de uma imagem que transmita X", "gera o prompt pra mim", "me ajuda a
  descrever essa cena", "quero usar IA para criar imagem de [produto/marca/campanha]",
  ou qualquer variação de "preciso de uma imagem que mostre / transmita / represente".
  Funciona para qualquer gerador de imagem (Midjourney, DALL-E, Stable Diffusion,
  Flux, Higgsfield, Firefly). Independente de nicho — moda, gastronomia, arquitetura,
  produto, lifestyle, editorial, campanha publicitária.
  Ative também quando o usuário já tiver a identidade da marca definida (via brand-dna
  ou brand-os) e quiser começar a produzir conteúdo visual coerente com ela.
---

# Scene Architect — Arquiteto de Prompts Visuais

> Posição no sistema: PRODUÇÃO — terceira skill na sequência padrão.
> Recebe calibração visual de brand-dna Seção 7 (fonte de verdade) ou brand-os Fase 2.
> Se não houver documento de identidade, aplica o protocolo de referências e oferece brand-dna ao final.
> Não tem próximo passo dentro da suite — é o ponto de saída para geração de imagem.

Transforma contexto simples em descrição de cena estruturada.
Uma entrada, dois outputs: estrutura editável + prompt pronto para geração.

---

## Princípio de Operação

**Prompt de imagem não é descrição literal — é construção de atmosfera.**

A diferença entre um prompt que gera resultado genérico e um que gera
resultado preciso está na especificidade de cada camada da cena. Esta skill
decompõe qualquer briefing nas seis camadas que os geradores de imagem
respondem melhor — e depois reconstrói tudo em texto corrido otimizado.

O usuário vê o raciocínio antes do resultado. Pode editar bloco por bloco.
Aprende a descrever cenas ao longo do tempo.

**O que esta skill nunca faz:**
- Gerar prompt sem saber o uso da imagem e o sentimento desejado
- Inventar elementos visuais não solicitados que distorçam o posicionamento da marca
- Entregar só o prompt final sem a estrutura — a estrutura é o trabalho real
- Prometer resultado específico de gerador — o prompt é o melhor insumo possível,
  o output final depende do modelo e das iterações do usuário

---

## Protocolo de Entrada

Antes de estruturar a cena, a skill precisa de dois inputs obrigatórios.
Se o usuário não os forneceu, pergunte diretamente — não tente inferir.

**Input 1 — Uso da imagem:**
Para onde vai essa imagem? (post de Instagram, campanha, lookbook, banner, editorial, produto)
O contexto de uso determina composição, formato e nível de detalhe do prompt.

**Input 2 — Sentimento desejado:**
O que essa imagem deve fazer o espectador sentir? (não o que deve mostrar — o que deve provocar)
Uma palavra ou frase curta é suficiente: "luxo despreocupado", "energia urbana jovem",
"confiança silenciosa", "pertencimento exclusivo".

**Guardrail para sentimento vago:** se o usuário responder com um adjetivo genérico
isolado ("elegância", "modernidade", "sofisticação"), não prossiga. Faça uma das
duas perguntas abaixo:
- *"Que contraste define esse sentimento? Por exemplo: elegância contida vs.
  elegância exuberante são visuais completamente diferentes."*
- *"Tem uma marca, campanha ou imagem que já transmite esse sentimento do jeito que você quer?"*

Um sentimento bem especificado tem tensão ou contraste interno — ou uma referência concreta.

**Inputs opcionais que melhoram o resultado:**
- Contexto da marca (identidade, posicionamento, paleta) — ver seção de integração
- Direção de arte (rendering style, tratamento fotográfico) — ver campo abaixo
- Referência visual (marca, fotógrafo, campanha que admira)
- Restrições técnicas (proporção, sem texto, fundo limpo para recorte)
- Gerador de destino (alguns têm sintaxe preferencial)

**Campo opcional — Direção de Arte:**
Antes de estruturar a cena, pergunte se o usuário tem preferência de tratamento visual:
- **Estilo de renderização**: fotografia realista / ilustração / pintura / CGI / colagem
- **Tratamento fotográfico**: editorial limpo / grain de filme / low-key / high-key /
  luz de estúdio / luz natural / luz disponível
- **Câmera e lente** (quando relevante): close-up, grande angular, médio formato,
  lente 85mm retrato, perspectiva aérea

Se o usuário não souber responder, infira a partir do uso (Input 1) e do sentimento (Input 2)
e declare a escolha no bloco A antes de escrever: *"Tratei como [estilo]. Quer mudar?"*

Se o usuário não tiver documento de identidade de marca, mas mencionar uma marca:
ver seção de integração para o protocolo de direção simbólica por referências.

---

## Output — Estrutura Fixa em Dois Blocos

Sempre entregue nesta ordem. Nunca pule o bloco A para ir direto ao B.

---

### (A) Estrutura em 6 Blocos

Decomponha a cena nas seis camadas. Seja específico em cada uma —
evite adjetivos genéricos como "bonito", "elegante", "moderno" sem âncora.

**1. Ambiente e clima**
Onde a cena acontece. Tipo de espaço, horário, qualidade de luz, sensação geral.
*Não: "ambiente elegante." Sim: "campo de golfe ao entardecer, luz dourada rasante,
gramado perfeitamente cortado, céu com nuvens esparsas e tons alaranjados."*

**2. Elementos principais**
Quem ou o quê aparece. Quantidade, foco, hierarquia visual.
Personagens: quantidade, posição, distância da câmera, foco principal.
Objetos: o que está presente, onde está posicionado.

**3. Aparência e estilo**
Roupas, acessórios, cores predominantes, estilo geral.
Para moda: tecidos visíveis, caimento, detalhes de acabamento.
Para produto: material, acabamento, contexto de uso.
Inclua aqui o tratamento de arte se não foi declarado como campo separado.

**4. Ação / movimento**
O que está acontecendo. Postura, gesto, olhar, direção do movimento.
Cenas estáticas também têm ação: "olha para fora do quadro com expressão neutra"
é mais preciso do que "está parado".

**5. Detalhes de textura**
Superfícies, materiais, detalhes visuais que adicionam profundidade.
Reflexos, desgaste, tecido com textura, asfalto, couro, madeira, metal.
Esta camada é frequentemente omitida — e é o que separa prompts medianos de prompts ricos.

**6. Atmosfera final**
O frame emocional que governa a leitura de tudo que foi descrito acima.
Não é um resumo dos blocos anteriores — é uma camada interpretativa nova.
Deve revelar algo que os blocos 1–5 mostram mas não nomeiam.
*"Luxo despretensioso de quem vive o lado bom da vida sem precisar provar nada."*
Se o bloco 6 apenas repete o que já foi dito, reescreva — ele está falhando.

---

### (B) Prompt Final Unificado

Texto corrido em 1–2 parágrafos em **inglês**, juntando os 6 blocos de forma fluida.

Por padrão, o prompt final é escrito em inglês — geradores de imagem têm
melhor performance com prompts em inglês. Se o usuário precisar em português
(para ferramenta específica), informe e adapte.

O prompt unificado não é uma lista dos blocos concatenados. É uma descrição
que flui como uma cena de roteiro ou texto de direção de fotografia.
Priorize: especificidade visual > adjetivos de qualidade.

**Formato de entrega:**

```
(A) ESTRUTURA EM 6 BLOCOS

1. Ambiente e clima:
[texto]

2. Elementos principais:
[texto]

3. Aparência e estilo:
[texto]

4. Ação / movimento:
[texto]

5. Detalhes de textura:
[texto]

6. Atmosfera final:
[texto]

---

(B) PROMPT FINAL UNIFICADO

[Texto corrido em inglês, 1–2 parágrafos]
```

---

## Iteração e Ajuste

Após entregar o output, ofereça:

> "Quer ajustar algum bloco antes de gerar? Posso recalibrar a atmosfera,
> mudar a composição ou adaptar o estilo para outro gerador."

Se o usuário trouxer resultado gerado e quiser melhorar:
- Peça o output atual (imagem ou descrição do problema)
- Identifique qual dos 6 blocos está falhando
- Reescreva especificamente aquele bloco — não o prompt inteiro

---

## Integração com brand-os e brand-dna

Quando o usuário já tem identidade de marca definida (via brand-dna ou brand-os),
use o documento de identidade para calibrar automaticamente:

- **Tom de voz da marca** → atmosfera final e adjetivos de textura
- **Território visual** → ambiente, estilo, paleta implícita
- **Arquétipo / posicionamento** → composição e ação (quem aparece, como se comporta)
- **O que a marca nunca diria** → o que nunca entra no prompt

Se a calibração gerar uma decisão não óbvia ou potencialmente conflitante com o
briefing do usuário, sinalize brevemente antes de prosseguir:
*"Baseado na identidade da marca, tratei [X] como [Y] — faz sentido para você?"*
Para decisões diretas e não ambíguas, aplique sem interromper o fluxo.

**Quando não há documento de identidade formalizado:**

Se o usuário mencionar uma marca mas não tiver identidade formalizada, não bloqueie
o workflow. Use o protocolo de direção simbólica por referências:

> "Para calibrar o prompt com o posicionamento da marca, me dá três referências
> rápidas: 3 marcas ou imagens que já transmitem o que você quer (referências positivas)
> e 1 que representa o que você definitivamente não quer (referência negativa)."

Use as referências positivas para inferir: território visual, tom, arquétipo, paleta implícita.
Use a referência negativa para definir o que nunca entra no prompt.
Declare as inferências no bloco A antes de escrever: *"Inferências de referência: [lista breve]."*

---

## Referência de Uso — Exemplo Completo

**Entrada do usuário:**
> "Um velhinho com uma jaqueta no estilo golfe club em posição caricaturada
> tem um charuto em uma mão e um taco de golfe dourado em outra. Está de costas
> para a cena. Essa foto será uma imagem de campanha representando um sentimento
> de luxúria e gozar do lado bom da vida. O charuto vai até sua boca e ele torce
> o corpo com um olhar de quem não dá a mínima para nada."

**Output esperado:**

```
(A) ESTRUTURA EM 6 BLOCOS

1. Ambiente e clima:
Campo de golfe luxuoso ao entardecer, com luz dourada intensa criando brilhos
elegantes sobre o gramado e sobre os elementos metálicos da cena.
Clima indulgente, rico e cheio de personalidade.

2. Elementos principais:
Um velhinho posicionado de costas, ocupando o centro da imagem. O charuto
encostado à boca e o taco de golfe dourado na outra mão. Seu corpo gira
parcialmente, permitindo ver um pouco do rosto e um olhar despreocupado,
de quem "não liga pra nada". A jaqueta de golf fica totalmente visível pelas costas.

3. Aparência e estilo:
Jaqueta clássica de clube de golfe, espessa, com bordado grande e luxuoso
nas costas — brasão elegante, detalhes dourados e ar de exclusividade.
Calça clara impecável, sapatos lustrados. Estilo refinado com atitude irreverente.
Tratamento: fotografia editorial realista, luz dourada de hora mágica, grain sutil.

4. Ação / movimento:
Ele dá uma leve torção no corpo, charuto na boca enquanto olha por cima do
ombro com expressão debochada e autoconfiante. O taco dourado repousa no
ombro de maneira exagerada e caricatural, quase como se estivesse posando
sem fazer esforço algum.

5. Detalhes de textura:
Fumaça suave subindo do charuto, brilho intenso no taco dourado, tecido
espesso e bordado com alto relevo na jaqueta, luz do entardecer criando
reflexos quentes no couro dos sapatos e no gramado perfeitamente aparado.

6. Atmosfera final:
Luxo despretensioso, irreverente e cheio de charme — a imagem de alguém
que chegou onde queria e nem se lembra mais do esforço que custou.
(Nota: este bloco não resume a cena — nomeia o estado emocional que ela provoca.)

---

(B) PROMPT FINAL UNIFICADO

A luxurious sunset golf-course scene shows an elderly man standing with his back
to the viewer, fully displaying the richly embroidered back of his classic golf-club
jacket. He twists his body slightly, allowing a glimpse of his face as he holds a
cigar at his mouth and casts a carefree, irreverent look over his shoulder — the
expression of someone who "doesn't give a damn." In one hand he holds the cigar,
and in the other a shiny golden golf club resting exaggeratedly on his shoulder.
Warm golden light highlights the detailed embroidery of the jacket, the metallic
glow of the club, the rising cigar smoke and the perfectly trimmed grass.
The atmosphere is indulgent, humorous and unmistakably luxurious, capturing
the pleasure of living the good life with absolute nonchalance. Shot in editorial
style, golden hour light, subtle film grain.
```

---

## Notas Técnicas por Gerador

Adaptações opcionais quando o usuário especificar a ferramenta:

**Midjourney**: adicionar parâmetros ao final do prompt unificado se relevante
(`--ar 4:5` para Instagram feed, `--style raw` para fotografia realista,
`--no text` para remover texto gerado automaticamente).

**DALL-E / ChatGPT**: prompt funciona bem como está. Para maior controle
de estilo fotográfico, adicionar "shot on [câmera], [lente]mm, [estilo fotográfico]"
antes da última frase.

**Higgsfield / geradores de vídeo**: o bloco 4 (Ação / movimento) ganha
importância extra — descrever o movimento com início, meio e fim da ação.

**Stable Diffusion**: prompt mais curto tende a performar melhor. Considere
condensar o prompt unificado em 1 parágrafo e adicionar negative prompt
baseado no bloco de restrições do usuário.

---

## Estilo de Resposta

- Entregue sempre os dois blocos — nunca só o prompt final
- Use linguagem de direção de fotografia ou roteiro, não de marketing
- Bloco A em português; Prompt Final (B) em inglês por padrão
- Após entregar, ofereça iteração — não encerre como resposta final
- Se a identidade da marca estiver disponível, aplique-a sem interromper o fluxo
  para decisões óbvias; sinalize brevemente apenas quando a decisão for não óbvia
  ou potencialmente conflitante com o briefing
