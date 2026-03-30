# Git workflow ideal para Claude Code

## Objetivo
Usar Git como camada de segurança, comparação e reversão no seu workspace, especialmente ao deixar o Claude editar arquivos `.tsx`, prompts, agents e scripts.

---

## Os 5 comandos que você mais vai usar

```bash
git status
git diff
git diff -- [arquivo]
git restore [arquivo]
git add . && git commit -m "mensagem"
```

---

## Workflow diário

### 1. Ver o estado antes de mexer
```bash
git status
```

Use isso para saber se já existe alguma mudança pendente antes de pedir algo ao Claude.

---

### 2. Criar um checkpoint antes de pedir mudança grande
```bash
git add .
git commit -m "Checkpoint before [change]"
```

Exemplos:

```bash
git commit -m "Checkpoint before PL footer update"
git commit -m "Checkpoint before Forma hero rewrite"
```

Esse commit funciona como um ponto seguro para voltar se a mudança ficar ruim.

---

### 3. Depois que o Claude editar, ver exatamente o que mudou

#### Projeto inteiro
```bash
git diff
```

#### Arquivo específico
```bash
git diff -- clients/pl-representacoes/PLRepresentacoes_50.tsx
```

Use isso para conferir o que realmente foi alterado, sem depender só do que o Claude disse.

---

### 4. Decidir

#### Se ficou bom
```bash
git add .
git commit -m "Apply [change]"
```

Exemplos:

```bash
git commit -m "Apply footer logo width fix for PL"
git commit -m "Update email agent workflow"
```

#### Se ficou ruim

##### Desfazer um arquivo específico
```bash
git restore clients/pl-representacoes/PLRepresentacoes_50.tsx
```

##### Desfazer tudo que ainda não foi commitado
```bash
git restore .
```

---

### 5. Ver histórico rápido
```bash
git log --oneline
```

Isso mostra seus commits de forma compacta e ajuda a entender a evolução do projeto.

---

## Fluxos práticos

### Caso 1: ajuste visual em TSX
1. `git status`
2. `git add . && git commit -m "Checkpoint before footer fix"`
3. Pedir a mudança ao Claude
4. `git diff -- clients/pl-representacoes/PLRepresentacoes_50.tsx`
5. Se gostou: `git add . && git commit -m "Apply footer fix"`
6. Se não gostou: `git restore clients/pl-representacoes/PLRepresentacoes_50.tsx`

---

### Caso 2: mudança em agents ou no `CLAUDE.md`
1. `git status`
2. Criar checkpoint
3. Deixar o Claude editar
4. `git diff -- CLAUDE.md`
5. `git diff -- .claude/agents/...`
6. Aprovar com commit ou restaurar

---

### Caso 3: fim de uma sessão boa
Se você terminou uma sessão e deixou tudo certo:

```bash
git add .
git commit -m "End of session updates"
```

---

## Regra prática
- Antes de mudança importante: **commit**
- Depois da mudança: **diff**
- Se ruim: **restore**
- Se bom: **commit**

---

## Por que isso é útil no seu caso
Git funciona como:

- backup inteligente
- histórico de versões
- auditoria do que o Claude realmente mudou
- botão de desfazer profissional
- proteção contra erros em `.tsx`, prompts, agents e scripts

---

## Sugestão de mensagens de commit

### Checkpoints
- `Checkpoint before PL footer update`
- `Checkpoint before Forma copy revision`
- `Checkpoint before agent prompt changes`

### Aplicação de mudanças
- `Apply footer logo width fix for PL`
- `Apply mobile spacing adjustment for PL footer`
- `Update website strategy agent instructions`
- `Refine email draft workflow`

### Sessões
- `End of session updates`
- `Organize client files and notes`

---

## Resumo em uma linha
**Antes de mudar: commit. Depois de mudar: diff. Se ruim: restore. Se bom: commit.**
