# RPPI — Dhauz | Abril 2026
**Tipo:** Relatório de Proposta e Projeto de Implementação de Infraestrutura  
**Executado por:** OTMA  
**Data da vistoria:** Abril 2026  
**Ecossistema:** Ubiquiti UniFi (padrão corporativo)

---

## 1. Diagnóstico — O que foi encontrado

### Problemas identificados

| # | Problema | Impacto |
|---|----------|---------|
| 1 | 3 redes diferentes sem integração | Desorganização total, sem gestão central |
| 2 | Consumo de banda descontrolado | Origem não identificada, sem rastreabilidade |
| 3 | Cobertura inconsistente no andar de baixo | Zonas mortas, experiência irregular |
| 4 | Ausência de gestão central | Sem visibilidade, sem alertas, sem controle |

### Oportunidade identificada

- Unificar tudo em **uma única rede gerenciada** com topologia cabeada centralizada
- Criar controle total via painel UniFi OS (dispositivos, consumo, bloqueios, VLANs)
- Preparar a estrutura física e lógica para receber o servidor Dhauz na Fase 2 sem retrabalho

---

## 2. Arquitetura — Ecossistema Ubiquiti UniFi

### Por que UniFi

O ecossistema UniFi é o padrão ouro para demandas corporativas desse perfil. Diferente de sistemas mesh domésticos, o UniFi exige **topologia cabeada centralizada** — e é exatamente isso que garante estabilidade, performance e gestão real.

A Ubiquiti domina a camada de rede (roteamento, switching, Wi-Fi). Não fabricam servidores de aplicação — o servidor Dhauz (Fase 2) será hardware dedicado integrado via UniFi Switch.

---

## 3. Equipamentos — Fase 1

### Camada 1 — Roteamento e Gestão (o cérebro)

| Equipamento | Função | Estimativa |
|-------------|--------|-----------|
| **UniFi Cloud Gateway** (Dream Machine Pro ou Cloud Gateway Ultra) | Substitui o roteador da operadora. Faz roteamento, gestão unificada via UniFi OS, aplica regras de segurança e VLANs | ~R$ 1.000 |

### Camada 2 — Distribuição (Switch PoE)

| Equipamento | Função | Estimativa |
|-------------|--------|-----------|
| **UniFi Switch PoE** | Alimenta os APs com energia + dados pelo mesmo cabo. Mantém o rack organizado. Permite expansão futura. Servidor Dhauz (Fase 2) conecta aqui. | R$ 800 – 1.500 |

### Camada 3 — Transmissão Wi-Fi (Access Points)

| Local | Equipamento | Motivo | Estimativa |
|-------|-------------|--------|-----------|
| Andar de cima — Sala principal | **UniFi U6 Pro** | Antenas mais potentes para alta densidade de usuários | ~R$ 1.000 |
| Andar de baixo — Sala Arco + 3 pessoas | **UniFi U6 Lite ou U6+** | Cobertura central do andar | ~R$ 750 |
| Andar de baixo — Cozinha / Presotte | **UniFi U6 Lite ou U6+** | Cobertura complementar | ~R$ 750 |

### Cabeamento

| Item | Especificação | Estimativa |
|------|--------------|-----------|
| Cabo estruturado | Cat6 saindo do rack central para pontos de fixação dos APs no teto | R$ 500 – 1.500 |

---

## 4. Totais — Fase 1

| Item | Valor estimado |
|------|---------------|
| Cloud Gateway (controladora) | ~R$ 1.000 |
| Switch PoE | R$ 800 – 1.500 |
| U6 Pro × 1 | ~R$ 1.000 |
| U6 Lite/U6+ × 2 | ~R$ 1.500 |
| Cabeamento Cat6 + instalação | R$ 500 – 1.500 |
| **TOTAL FASE 1** | **R$ 4.800 – 7.000** |

---

## 5. O que a Fase 1 entrega

- 1 rede única gerenciada (fim dos 3 reinos)
- VLANs configuradas:
  - **VLAN 10 — Empresa:** acesso total à internet e ao futuro servidor
  - **VLAN 20 — Visitantes:** Client Isolation + limitação de banda + bloqueio ao servidor
  - **VLAN 30 — IoT:** isolamento total de smart TVs, Alexa e dispositivos vulneráveis
- Fast Roaming ativo — usuários transitam entre andares sem quedas
- Dashboard com identificação exata de quem consome banda e controle em tempo real
- **Base pronta para o servidor Dhauz (Fase 2) via porta dedicada no Switch PoE**

---

## 6. Servidor Dhauz — Fase 2 *(planejada)*

Com a rede UniFi estável e as VLANs configuradas, o ambiente está maduro para a Fase 2.

| Componente | Especificação | Estimativa |
|------------|--------------|-----------|
| Servidor / workstation dedicado | Hardware rodando **Proxmox** (hypervisor confiável) para VMs, banco de dados, automações | R$ 6.000 – 15.000 |
| Armazenamento | SSD + HD híbrido | R$ 2.000 – 6.000 |
| Backup | Local + cloud | R$ 500 – 2.000 |
| Conexão | Plugado diretamente no UniFi Switch (porta de alta velocidade) — sem gargalos no tráfego interno | — |
| Upgrade de internet | Fibra robusta + IP fixo | R$ 200 – 600/mês |
| **TOTAL FASE 2** | | **R$ 8.000 – 25.000+** |

**Decisão correta da Dhauz:** adiar Fase 2 até a rede estar estabilizada. Sem rede sólida, servidor vira problema — com ela, vira vantagem.

---

## 7. Próximos passos após aprovação

- [ ] Confirmar aprovação formal com decisor
- [ ] Agendar visita técnica pré-instalação (confirmar extensão do cabeamento)
- [ ] Adquirir equipamentos (U6 Pro + 2× U6 Lite/U6+ + Switch PoE + Cloud Gateway)
- [ ] Executar cabeamento Cat6 (rack → teto nos pontos de fixação dos APs)
- [ ] Instalar e adotar equipamentos no painel UniFi OS
- [ ] Configurar VLANs 10 / 20 / 30
- [ ] Escanear canais RF + ajustar potência + ativar Fast Roaming
- [ ] Identificar origem do consumo absurdo de banda
- [ ] Protocolo de Handoff com responsável técnico da Dhauz
- [ ] Extrair skill do processo → `/extract-skill`
