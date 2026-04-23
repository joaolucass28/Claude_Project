#!/usr/bin/env python3
import os
import sys

try:
    from openai import OpenAI
except ImportError:
    print("ERROR: openai package not installed. Run: pip install openai", file=sys.stderr)
    sys.exit(1)

api_key = os.environ.get("OPENAI_API_KEY")
if not api_key:
    print("ERROR: OPENAI_API_KEY environment variable not set.", file=sys.stderr)
    sys.exit(1)

if len(sys.argv) < 2 or not sys.argv[1].strip():
    print("ERROR: PROCESS_SUMMARY required as first argument.", file=sys.stderr)
    sys.exit(1)

process_summary = sys.argv[1]

SYSTEM_PROMPT = """Você é o OTMA Process Crystallizer. Sua função é transformar um resumo de processo em um arquivo Claude Code SKILL.md válido e reutilizável.

PRINCÍPIOS OTMA:
- Linguagem híbrida: legível por humanos E interpretável por IA
- Etapas nomeadas: cada etapa tem um nome único e intuitivo
- Zero teoria: cada etapa leva a uma ação prática
- Replicável: mesma estrutura, diferentes contextos de empresa
- "Não estamos ensinando do zero — estamos entregando a visão já estruturada."

FORMATO DE SAÍDA (retorne APENAS o conteúdo do SKILL.md, sem markdown extra):

---
name: [verbo-substantivo em kebab-case]
description: [uma linha — condição de ativação deste skill]
version: 1.0.0
---

[Instruções do skill escritas como diretiva ao Claude — segunda pessoa, tom direto]

## Etapas

### 1. [Nome da Etapa] — [objetivo da etapa]
[Instrução clara do que fazer]

### 2. [Nome da Etapa] — [objetivo da etapa]
[Instrução clara do que fazer]

[Continue para todas as etapas necessárias]

## Inputs Necessários
- [input 1]: [como coletar se não fornecido]
- [input 2]: [como coletar se não fornecido]

## Saída Esperada
[Descrição do entregável final que o skill produz]
"""

client = OpenAI(api_key=api_key)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": process_summary},
    ],
    temperature=0.3,
)

print(response.choices[0].message.content)
