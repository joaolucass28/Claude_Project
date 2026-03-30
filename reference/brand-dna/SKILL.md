---
name: brand-dna
description: >
  Extrai a essência de uma marca através de interrogação profunda antes de gerar
  qualquer conteúdo, e entrega um documento de identidade completo e específico —
  sem respostas genéricas. Use esta skill quando o usuário quiser definir o DNA
  de uma marca, construir um briefing de identidade para clientes, documentar
  propósito, tom de voz e narrativa de forma que capture algo real e não clichês
  de branding. Ative também quando o usuário mencionar "briefing de marca",
  "documento de identidade", "quero definir minha marca", "preciso de um
  posicionamento", "identidade de marca para cliente", ou qualquer variação de
  "quero que Claude entenda minha marca antes de gerar qualquer coisa".
  O diferencial desta skill é recusar-se a gerar até ter extraído o suficiente.
---

# Brand DNA — Interrogação Profunda, Identidade Específica

> Posição no sistema: FUNDAÇÃO — primeira skill a ser usada.
> Produz o Documento de Identidade (8 seções) que alimenta brand-os e scene-architect.
> Não pule esta etapa se o usuário ainda não sabe responder quem é a marca, o que faz e por que importa.
> Próximo passo natural: brand-os (sistema completo) ou scene-architect (produção visual direta).

A causa de outputs genéricos é sempre a mesma: geração antes de compreensão.
Esta skill inverte a ordem — extrai antes de entregar.

---

## Princípio de Operação

**Nunca gere identidade antes de completar a interrogação.**

Respostas genéricas ("marca autêntica que conecta pessoas") são sintoma de
contexto insuficiente. Esta skill recusa entregar qualquer output de identidade
até ter respostas específicas o suficiente para que o documento final
soe como *aquela* marca — e não como qualquer marca.

O teste interno: se o output pudesse ser colado no site de um concorrente
sem parecer estranho, a interrogação não terminou.

---

## O Que é Uma Resposta Específica o Suficiente

Uma resposta passou do limiar de suficiência quando:
- **Não poderia descrever uma marca concorrente** sem adaptação significativa
- Contém pelo menos um elemento **comportamental ou de crença** (não só descritivo)
- Usa linguagem **própria do usuário**, não vocabulário padrão de branding

Exemplos do que ainda é genérico: "autêntica", "premium", "conecta pessoas", "propósito claro".
Exemplos do que é específico: "a distância dele vem de autossuficiência, não de carência mascarada", "nunca usaria tom de urgência, mesmo em liquidação", "para quem pesquisa 3 semanas antes de comprar qualquer coisa".

Quando uma resposta ainda está genérica, aprofunde antes de avançar. Não liste mais
perguntas — faça uma pergunta mais focada sobre o que ficou vago.

---

## Protocolo de Operação

### Passo 1 — Abertura (não pule)

Antes de qualquer pergunta, peça ao usuário uma descrição livre:

> "Me conta o que é essa marca com suas próprias palavras — sem se preocupar
> com formato ou linguagem de branding. O que ela é, o que faz, para quem,
> e o que você sente quando pensa nela?"

Leia a resposta com atenção. Identifique:
- O que foi dito com energia ou precisão (provável verdade da marca)
- O que soou vago ou ensaiado (área que precisa de escavação)
- O que *não* foi dito mas deveria estar (gap a explorar)

---

### Passo 2 — Interrogação Estruturada

Conduza a interrogação em blocos. Faça **uma pergunta por vez** — não liste
todas de uma vez. Adapte a sequência conforme as respostas anteriores.
Se uma resposta revelar algo inesperado, aprofunde antes de avançar.

#### Técnica de Espelhamento (obrigatória antes de cada pergunta de follow-up)

Antes de formular a próxima pergunta, identifique a linha mais precisa e
energizada da resposta anterior — a frase que soou mais verdadeira, mais
específica, ou mais carregada de significado. Cite-a de volta ao usuário e
conecte a próxima pergunta a partir dela.

Formato:
> "[Frase exata do usuário]"
> [Próxima pergunta que aprofunda ou expande esse ponto]

Isso serve três funções: confirma que o usuário foi ouvido com precisão,
direciona a escavação para o ponto mais fértil, e cria continuidade
entre as perguntas em vez de uma sequência mecânica.

---

**Bloco A — Essência e Personalidade**

*Território: quem essa marca é, como ela se comporta, onde estão seus limites.*

Perguntas orientadoras (use 2, adapte a ordem):
- Se essa marca fosse uma pessoa que você cruzasse numa festa, como ela seria?
  O que ela diria? O que ela *não* diria? Como ela se vestiria? O que estaria
  fazendo no canto da sala?
- Qual é a coisa que essa marca nunca faria, mesmo que fosse lucrativo?

**Limiar de suficiência para avançar do Bloco A:**
Você tem pelo menos dois elementos específicos — um sobre personalidade
(comportamento, tom, atitude) e um sobre limite (o que a marca recusa fazer
ou ser). Ambos devem ser específicos o suficiente para excluir concorrentes.

---

**Bloco B — Diferença e Crença**

*Território: por que alguém escolhe essa marca, quem ela exclui,
e o que ela acredita que o mercado está errando.*

Perguntas orientadoras (use 2–3, adapte a ordem):
- Quando um cliente escolhe essa marca em vez de um concorrente,
  qual é o pensamento verdadeiro que está por trás dessa escolha?
- O que essa marca acredita que a maioria das pessoas no mercado está fazendo errado?
- Que tipo de pessoa *não* é o cliente dessa marca?
  (a exclusão define tanto quanto a inclusão)
- Tem alguma coisa que essa marca faz que parece pequena mas que os clientes notam e valorizam?

**Limiar de suficiência para avançar do Bloco B:**
Você sabe (1) o pensamento real por trás da escolha do cliente,
(2) quem essa marca não serve, e (3) pelo menos uma crença não-óbvia
que a marca carrega sobre o mercado ou o mundo.

---

#### Checkpoint Intermediário (após Blocos A e B)

Antes de avançar para os Blocos C e D, verifique internamente:

- [ ] Tenho uma descrição de personalidade que é *específica* — não "autêntica" ou "humana"
- [ ] Sei o que essa marca *não* é ou *não* faz
- [ ] Sei para quem essa marca *não* é
- [ ] Tenho pelo menos uma crença ou posição não-óbvia que a marca carrega

Se qualquer item estiver vazio, faça mais uma rodada focada no gap antes
de avançar. Informe ao usuário:
> "Ainda preciso entender melhor [X] — mais uma pergunta antes de continuar."

Se todos estiverem preenchidos, avance para os Blocos C e D.

---

**Bloco C — Tensão e Propósito**

*Território: por que essa marca existe, o que o mundo perderia sem ela,
e o que o fundador vê que os outros não veem.*

Perguntas orientadoras (use 1–2):
- Que problema ou contradição no mundo essa marca existe para resolver?
- Se essa marca desaparecesse amanhã, o que o público perderia que não
  encontraria em outro lugar?
- O que o fundador ou criador acredita sobre o mundo que a maioria
  das pessoas não acredita?

---

**Bloco D — Presença e Expressão**

*Território: como a marca soa, o que ela jamais diria, e com quem ela se alinha esteticamente.*

Perguntas orientadoras (use 2):
- Como a marca soa quando está no seu melhor? Me dá um exemplo real —
  um post, uma frase, uma interação com cliente que capturou exatamente o tom certo.
- O que essa marca jamais postaria, mesmo que fosse relevante para o nicho?
- Que marcas — dentro ou fora do segmento — você admira e gostaria de ter
  alguma qualidade similar? (não para copiar — para entender o território estético)

---

### Passo 3 — Checklist Final de Suficiência

Antes de gerar o documento, confirme internamente:

- [ ] Tenho uma descrição de personalidade *específica* (não "autêntica" ou "humana")
- [ ] Sei o que essa marca *não* é ou *não* faz — a borda define o centro
- [ ] Tenho pelo menos uma tensão cultural ou crença não-óbvia que a marca carrega
- [ ] Tenho exemplos reais de tom de voz (frases, posts, interações) — não só descrições
- [ ] Sei para quem essa marca *não* é tanto quanto para quem é
- [ ] O output que vou gerar não poderia descrever um concorrente direto sem adaptação

Se qualquer item estiver incompleto, faça mais uma rodada de perguntas
focada especificamente no gap identificado. Informe ao usuário:
> "Ainda preciso entender melhor [X] antes de gerar o documento."

---

### Passo 4 — Geração do Documento de Identidade

Com a interrogação completa, gere o documento. Use linguagem específica
extraída das respostas do usuário — não padrões de branding.

Ao finalizar o documento, ofereça o próximo passo:
> "Com o DNA definido, posso usar o **brand-os** para construir as fases de
> identidade, narrativa e presença digital a partir daqui. Quer continuar?"

---

## Documento de Identidade — Estrutura de Entrega

O documento final é uma entrega profissional para clientes.
Formato limpo, linguagem direta, sem jargão desnecessário.

---

### 1. Essência da Marca
*Uma frase. Não um slogan — uma declaração interna de o que a marca é.*

Deve capturar a crença central da marca em linguagem que os fundadores
reconheceriam como verdadeira. Não deve soar como marketing.

Exemplo do que evitar: "Uma marca que inspira pessoas a viverem melhor."
Exemplo do que buscar: "Uma marca que parte do princípio que qualidade
não precisa gritar pra ser percebida."

---

### 2. Para Quem É (e Para Quem Não É)
*Dois parágrafos curtos.*

**Cliente primário**: descrição comportamental e de valores, não demográfica.
Não "mulheres de 25–35 anos da classe B" — mas "pessoas que pesquisam
muito antes de comprar e se sentem mal quando compram algo que não dura."

**Quem não é o cliente**: definição explícita da borda. Quem essa marca
não serve bem — e por quê isso é uma escolha, não uma limitação.

---

### 3. Posicionamento
*O espaço que a marca ocupa na mente do público — em relação ao que existe.*

Estrutura: [Marca] é para [público] que [situação/crença/necessidade],
diferente de [alternativas], porque [razão genuína e específica].

---

### 4. Propósito
*O porquê que vai além do produto.*

Não confunda propósito com missão corporativa. Propósito é a tensão ou
crença no mundo que fez essa marca existir. Deve ser ligeiramente
desconfortável de declarar — se for confortável para todos, é genérico.

---

### 5. Tom de Voz
*Como a marca fala — com exemplos reais e anti-exemplos.*

Descreva em 3–4 adjetivos precisos (não "humano", "autêntico", "próximo").
Depois mostre, não apenas diga:

**A marca diz**: [exemplo de frase no tom certo]
**A marca não diz**: [exemplo de frase que seria errado para essa marca]

Repita o par para 2–3 situações diferentes (post de produto, resposta a
reclamação, apresentação institucional).

---

### 6. Narrativa Central
*A história que a marca conta sobre si mesma — não o histórico da empresa.*

Toda marca forte tem uma narrativa de origem que explica por que ela
existe e por que importa. Não é linha do tempo — é uma história com
tensão, ponto de virada e posição no mundo.

Estrutura sugerida:
- O mundo como era (ou como ainda é para a maioria)
- O que essa marca viu diferente
- O que ela passou a fazer por causa disso
- O que isso muda para quem se conecta com ela

---

### 7. Território Visual (orientação, não especificação)
*Direção estética para briefings criativos — não um manual de identidade.*

Com base na personalidade e no posicionamento:
- Registro visual predominante (minimalista/denso, sério/lúdico, etc.)
- Paleta de sensações (não cores específicas — temperatura, contraste, peso)
- Referências de marcas com territórios visuais admiráveis para essa direção
- O que o visual desta marca *nunca* deve comunicar

---

### 8. Síntese Executiva
*Máximo 5 linhas. O coração do documento.*

Para uso em briefings, apresentações e alinhamento de equipe.
Deve ser memorizável e reconhecível como *aquela* marca específica.

---

## Notas para Uso com Clientes

- O documento final deve ser entregue em formato limpo e profissional.
  Se o usuário pedir, gere também em `.docx` usando a skill de documentos.
- Ao apresentar para clientes, ofereça validar cada seção antes de finalizar.
- Este documento é ponto de partida — não substitui o processo criativo
  de naming, identidade visual ou estratégia de conteúdo.
- Se o cliente quiser expandir para presença digital e narrativa de conteúdo,
  ative o **brand-os** em modo construção a partir deste documento como base.
  Para produção de conteúdo visual, ative o **scene-architect**.
