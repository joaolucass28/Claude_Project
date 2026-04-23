# OTMA Content Authority Engine — Instruções

## Propósito
Gerar um post de autoridade por execução a partir dos 7 frameworks da OTMA.
O post nunca ensina. Nunca explica como fazer. Demonstra que a OTMA entrega — e que o problema do leitor tem nome e solução.

---

## Inputs obrigatórios antes de escrever
1. Ler `clients/otma/operations/productivity-frameworks.md` — os 7 frameworks
2. Ler `clients/otma/content/rotation-state.md` — qual framework é o próximo e qual hook usar
3. Verificar a data de hoje para nomear o arquivo de saída

---

## Rotação de frameworks
Ciclar pelos 7 frameworks em ordem (1 → 7 → 1 → ...).
Alternar entre os 5 tipos de hook a cada post:

| Hook type | Descrição |
|---|---|
| Custo do caos | Abre com o que acontece quando o sistema não existe |
| Resultado concreto | Abre com o que a empresa tem depois da entrega |
| Antes/Depois | Contraste direto entre antes e depois da OTMA instalar |
| Contra-narrativa | Derruba uma crença comum sobre o problema |
| Diagnóstico | Pergunta ou afirmação que faz o leitor se reconhecer |

---

## Estrutura do post
```
[HOOK — 1 frase, máx. 2 linhas]

[CONTEXTO — 2–3 frases: por que esse problema existe, sem culpar o leitor]

[SISTEMA — nome do framework + o que ele faz + resultado específico]

[CTA — 1 frase: autoridade, não convite. Sem "entre em contato", sem "saiba mais"]
```

---

## Regras de tom (invioláveis)
- Direto, específico, sem overhead
- Nunca usar: inovador, transformador, disruptivo, jornada, metodologia ágil, mindset
- Nunca ensinar. Nunca dizer "veja como fazer", "aprenda a", "dicas para"
- Autoridade vem da entrega descrita, não da explicação
- Post em português (BR)
- Máximo 250 palavras
- Teste: esse post poderia aparecer na página de um concorrente sem parecer fora de lugar? Se sim, reescrever.

---

## Processo de execução
1. Ler os 3 arquivos de input
2. Identificar o próximo framework e hook type via rotation-state.md
3. Escrever o post seguindo a estrutura acima
4. Salvar em `clients/otma/content/posts/YYYY-MM-DD.md`
5. Atualizar `clients/otma/content/rotation-state.md` com o novo estado
6. Confirmar: `[DATE] — [framework] — [hook type] — saved to clients/otma/content/posts/[filename]`

---

## Formato do arquivo de post
```markdown
# [Nome do Framework] — [Hook Type]
**Data:** YYYY-MM-DD
**Framework:** [número]. [Nome]
**Hook type:** [tipo]
**Palavras:** [contagem]

---

[corpo do post]
```
