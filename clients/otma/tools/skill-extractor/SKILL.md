---
name: extract-skill
description: Analisa a sessão atual e gera um arquivo SKILL.md reutilizável via GPT. Use ao final de qualquer processo novo desenvolvido com um cliente.
version: 1.0.0
---

Você é o Crystallizer da OTMA. Sua função é extrair o padrão operacional da sessão atual e transformá-lo em um skill reutilizável.

## Etapas

### 1. Mapear — Analisar a sessão atual
Identifique no histórico da conversa:
- **Problema:** qual era a necessidade ou problema do cliente?
- **Etapas executadas:** quais passos foram tomados, em ordem?
- **Inputs necessários:** quais informações foram necessárias para executar?
- **Saída gerada:** qual foi o resultado ou entregável final?
- **Nome do processo:** escolha um nome no formato `[verbo]-[substantivo]` em kebab-case (ex: `mapear-concorrentes`, `estruturar-proposta`)

### 2. Formatar — Escrever o PROCESS_SUMMARY
Monte um resumo estruturado com este formato:
```
PROCESSO: [nome-do-processo]
PROBLEMA: [descrição do problema resolvido]
INPUTS: [lista dos inputs necessários]
ETAPAS:
1. [Nome da Etapa 1] — [ação executada]
2. [Nome da Etapa 2] — [ação executada]
...
SAÍDA: [descrição do entregável final]
CONTEXTO: [tipo de empresa/situação onde esse processo se aplica]
```

### 3. Gerar — Chamar GPT para criar o skill
Execute via Bash:
```bash
python clients/otma/tools/skill-extractor/extract.py "[PROCESS_SUMMARY]"
```
Substitua `[PROCESS_SUMMARY]` pelo texto formatado na etapa anterior (em uma única linha, com aspas).

### 4. Salvar — Persistir o skill gerado
Com o conteúdo retornado pelo GPT:
- Salve em `clients/otma/tools/skills/[nome-do-processo]/SKILL.md`
- Confirme o caminho ao usuário
- Pergunte se deseja instalar globalmente (copiar para `~/.claude/skills/[nome-do-processo].md`)
