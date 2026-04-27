# Proposta Fase 1 — Rede Unificada Dhauz (Ecossistema UniFi)

**Status:** Entregue — aguardando aprovação  
**Data:** Abril 2026  
**Validade:** 30 dias

---

## O que será entregue

Uma rede corporativa unificada, gerenciada centralmente pelo ecossistema Ubiquiti UniFi — com cobertura sem pontos cegos nos dois andares, VLANs segmentadas e dashboard de monitoramento em tempo real.

---

## Arquitetura

```
[Internet] → Cloud Gateway → Switch PoE → U6 Pro (andar de cima)
                                        → U6 Lite (andar de baixo — sala)
                                        → U6 Lite (andar de baixo — cozinha)
                                        → [porta reservada — Servidor Dhauz, Fase 2]
```

---

## Equipamentos

| Camada | Equipamento | Qtd | Função | Estimativa |
|--------|-------------|-----|--------|-----------|
| **Gestão** | UniFi Cloud Gateway (Dream Machine Pro ou Cloud Gateway Ultra) | 1 | Roteamento + painel UniFi OS + regras de segurança | ~R$ 1.000 |
| **Distribuição** | UniFi Switch PoE | 1 | Alimenta APs com energia + dados pelo mesmo cabo. Porta reservada para servidor Fase 2. | R$ 800 – 1.500 |
| **Wi-Fi** | UniFi U6 Pro | 1 | Sala principal — alta densidade, antenas potentes | ~R$ 1.000 |
| **Wi-Fi** | UniFi U6 Lite ou U6+ | 2 | Cobertura andar de baixo (sala + cozinha) | ~R$ 750 cada |
| **Física** | Cabeamento Cat6 | — | Rack → teto (ponto de fixação de cada AP) | R$ 500 – 1.500 |

---

## Configuração inclusa

### VLANs

| VLAN | Nome | Acesso | Limitações |
|------|------|--------|-----------|
| 10 | Empresa | Internet + servidor Fase 2 | Nenhuma |
| 20 | Visitantes | Apenas internet | Client Isolation ativo · limite de banda · sem acesso ao servidor |
| 30 | IoT | Apenas internet | Isolado do restante · Alexa e smart devices aqui |

### Otimizações de RF

- Escaneamento de canais para identificar frequências menos congestionadas no ambiente
- Ajuste de potência por AP para sobreposição controlada de cobertura
- **Fast Roaming ativado** — usuários transitam entre andares sem quedas de chamada

### Monitoramento

- Dashboard UniFi OS com dispositivos conectados em tempo real
- Identificação de consumo por usuário/dispositivo (resolve o problema da banda descontrolada)
- Bloqueios e regras aplicáveis em tempo real pelo painel

---

## Investimento

| Item | Valor estimado |
|------|---------------|
| Cloud Gateway | ~R$ 1.000 |
| Switch PoE | R$ 800 – 1.500 |
| U6 Pro × 1 | ~R$ 1.000 |
| U6 Lite/U6+ × 2 | ~R$ 1.500 |
| Cabeamento Cat6 + instalação | R$ 500 – 1.500 |
| **Total** | **R$ 4.800 – 7.000** |

*Valor final após visita técnica para medir extensão do cabeamento.*

---

## Prazo

| Etapa | Estimativa |
|-------|-----------|
| Aquisição dos equipamentos | 3–7 dias |
| Visita técnica + cabeamento | 1–2 dias |
| Instalação, adoção no UniFi OS e configuração | 1 dia |
| Testes (Fast Roaming, VLANs, monitoramento) | meio dia |
| Handoff com responsável técnico Dhauz | 1 sessão (30–60 min) |
| **Total** | **~2 semanas após aprovação** |

---

## O que NÃO está incluso

- Obras de alvenaria para passagem de cabos (se necessário)
- Upgrade do plano de internet ou contratação de IP fixo
- Servidor / NAS / Proxmox (Fase 2 — proposta separada)
- Suporte contínuo pós-handoff (pode ser contratado como Ongoing OTMA)

---

## Critério de encerramento

> A entrega estará concluída quando o responsável técnico da Dhauz acessar o painel UniFi OS, identificar dispositivos conectados por VLAN e executar um bloqueio de acesso — sem assistência da OTMA.

---

## Aprovação

**Decisor:** [→ preencher]  
**Aprovado em:** [→ preencher]  
**Valor acordado:** [→ preencher]
