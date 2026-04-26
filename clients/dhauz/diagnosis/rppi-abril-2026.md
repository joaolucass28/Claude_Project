# RPPI — Dhauz | Abril 2026
**Tipo:** Relatório de Proposta e Projeto de Implementação de Infraestrutura  
**Executado por:** OTMA  
**Data da vistoria:** Abril 2026

---

## 1. Diagnóstico — O que foi encontrado

### Problemas identificados

| # | Problema | Impacto |
|---|----------|---------|
| 1 | 3 redes diferentes na casa | Desorganização total, sem integração |
| 2 | Consumo de internet descontrolado | Algo puxando banda absurda, origem desconhecida |
| 3 | Internet inconsistente no andar de baixo | Cobertura deficiente em zonas críticas |
| 4 | Ausência de gestão central | Sem visibilidade, sem controle, sem alertas |

### Oportunidade identificada

- Unificar tudo em **uma única rede inteligente**
- Criar controle total de usuários e dispositivos
- Preparar estrutura para servidor futuro sem retrabalho

---

## 2. Proposta — Fase 1: Unificação da Rede

**Objetivo:** Uma rede única, estável e gerenciável com cobertura total em ambos os andares.

### Mapeamento por andar

**Andar de cima (área mais crítica)**
- Sala principal (muita gente) → AP mais forte
- Sala de reunião → cobertura compartilhada

**Andar de baixo**
- Sala Arco + sala das 3 pessoas → ponto central
- Região cozinha / Presotte → cobertura complementar

### Equipamentos definidos

| Equipamento | Especificação | Estimativa |
|-------------|--------------|-----------|
| AP forte | UniFi U6 Pro (sala principal) | ~R$ 1.000 |
| AP intermediário × 2 | UniFi U6 Lite | ~R$ 750 cada |
| Controladora | UniFi (gestão central) | ~R$ 1.000 |
| Switch PoE | 8–16 portas | R$ 800 – 1.500 |
| Cabeamento + instalação | Cabo + mão de obra | R$ 500 – 1.500 |

### Totais

| Item | Valor estimado |
|------|---------------|
| Access Points (3x) | R$ 2.500 – 3.000 |
| Controladora | R$ 1.000 |
| Switch PoE | R$ 800 – 1.500 |
| Cabeamento | R$ 500 – 1.500 |
| **TOTAL FASE 1** | **R$ 4.800 – 7.000** |

### O que a Fase 1 entrega

- 1 rede única (fim dos 3 reinos)
- VLANs separadas: Corporativa · Visitantes · IoT
- Controle total: quem está conectado, quanto consome, bloqueios e regras
- Base estruturada e pronta para servidor (Fase 2 sem retrabalho)

---

## 3. Proposta — Fase 2: Servidor Dhauz *(planejada)*

**Objetivo:** Transformar a operação em infraestrutura de dados escalável.

### Sub-fases

| Sub-fase | Escopo | Investimento |
|----------|--------|-------------|
| Fase 2A — NAS | Armazenamento central, backup, compartilhamento de arquivos | R$ 3k – 8k |
| Fase 2B — Servidor real | Aplicações, banco de dados, automações, controle de mídia | R$ 8k – 15k |
| Fase 2C — Infra completa | IP fixo, fibra robusta, servidor dedicado escalável | R$ 15k – 25k+ |

**Observação:** Fase 2 foi deliberadamente adiada. Decisão correta — sem rede estável, servidor vira problema.

---

## 4. Leitura estratégica

> A decisão de fazer a rede primeiro é a certa. Com rede estruturada, o servidor vira vantagem — sem ela, vira custo.

**Sequência recomendada:**
1. Fase 1 agora (~R$5k–7k) → resolve o caos atual
2. Fase 2A em 3–6 meses → NAS após rede estabilizada
3. Fase 2B/2C conforme crescimento da operação

---

## 5. Próximos passos após aprovação da Fase 1

- [ ] Confirmar aprovação formal com decisor
- [ ] Agendar início das obras / instalação de cabeamento
- [ ] Adquirir equipamentos (U6 Pro + 2x U6 Lite + Switch PoE + controladora)
- [ ] Executar instalação (usar Framework: Célula de Entrega)
- [ ] Configurar VLANs e controladora
- [ ] Protocolo de Handoff com responsável técnico da Dhauz
- [ ] Extrair skill do processo → `/extract-skill`
