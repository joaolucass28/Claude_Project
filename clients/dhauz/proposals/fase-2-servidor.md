# Proposta Fase 2 — Servidor Dhauz *(planejada)*

**Status:** Planejada — iniciar após Fase 1 estabilizada (3–6 meses)  
**Pré-requisito:** Rede UniFi operando de forma estável, VLANs configuradas

---

## Contexto

A Ubiquiti UniFi domina a camada de rede — roteamento, switching e Wi-Fi. Não fabricam servidores de aplicação geral. O Servidor Dhauz é hardware dedicado que se integra à rede via UniFi Switch: uma porta de alta velocidade reservada na Fase 1 garante que o tráfego interno flua sem gargalos quando o servidor entrar.

---

## Arquitetura

```
UniFi Switch PoE → [porta dedicada] → Servidor Dhauz
                                       └── Proxmox (hypervisor)
                                            ├── VM: banco de dados
                                            ├── VM: aplicações internas
                                            ├── VM: automações
                                            └── Storage: SSD + HD híbrido
```

O servidor estará na **VLAN 10 (Empresa)**, acessível apenas pela rede interna — sem exposição direta à internet.

---

## Sub-fases

### Fase 2A — NAS *(ponto de entrada)*

Para quem quer começar simples antes de comprometer com servidor completo.

| Entrega | Descrição |
|---------|-----------|
| NAS configurado | Armazenamento central acessível por toda a VLAN Empresa |
| Backup automático | Rotina local + cloud |
| Compartilhamento interno | Pastas por equipe, acesso controlado por usuário |
| Acesso remoto seguro | VPN ou tunnel via UniFi |

**Investimento:** R$ 3.000 – 8.000 (NAS + HDs)  
**Prazo:** 1–2 semanas

---

### Fase 2B — Servidor real

| Componente | Especificação | Estimativa |
|------------|--------------|-----------|
| Hardware | Servidor dedicado ou workstation de alta performance | R$ 6.000 – 15.000 |
| Hypervisor | **Proxmox VE** — gerencia VMs, armazenamento e snapshots | gratuito |
| Armazenamento | SSD (OS + VMs ativas) + HD (arquivos pesados, backup local) | R$ 2.000 – 6.000 |
| Backup | Local (HD interno) + cloud (off-site) | R$ 500 – 2.000 |

**VMs planejadas:**

| VM | Função |
|----|--------|
| Banco de dados | PostgreSQL / MySQL para sistemas internos |
| Aplicações | Sistemas da operação Dhauz |
| Automações | Scripts, tarefas agendadas, integrações |
| Mídia / arquivos pesados | Armazenamento e gerenciamento centralizado |

**Investimento:** R$ 8.000 – 15.000  
**Prazo:** 2–4 semanas

---

### Fase 2C — Infraestrutura completa

| Item | Estimativa |
|------|-----------|
| Servidor dedicado (top) | R$ 10.000 – 15.000 |
| Storage híbrido completo | R$ 4.000 – 6.000 |
| Backup redundante | R$ 1.000 – 2.000 |
| Fibra de alta capacidade + IP fixo | R$ 200 – 600/mês |
| **Total** | **R$ 15.000 – 25.000+** |

---

## Tabela resumo

| Sub-fase | O que entrega | Investimento | Quando |
|----------|--------------|-------------|--------|
| 2A — NAS | Armazenamento e backup centralizado | R$ 3k – 8k | 3–6 meses após Fase 1 |
| 2B — Servidor Proxmox | VMs, banco de dados, automações | R$ 8k – 15k | Após 2A ou direto |
| 2C — Infra completa | Operação digital escalável | R$ 15k – 25k+ | Decisão estratégica |

---

## Integração com a Fase 1

Ao conectar o servidor no Switch PoE (porta reservada):
- Tráfego interno (VLAN 10) flui sem gargalos — sem passar pelo link de internet
- Visitantes (VLAN 20) e IoT (VLAN 30) continuam isolados — sem acesso ao servidor
- Cloud Gateway aplica as regras de firewall automaticamente
- Nenhuma alteração no cabeamento ou na topologia existente

---

## Notas

- Proxmox é open-source e confiável — sem custo de licença
- Cada sub-fase pode ser aprovada e executada de forma independente
- A decisão de adiar a Fase 2 foi correta: rede instável transforma servidor em problema, não em vantagem
