# Guia de Implementação — Fase 1 | Rede UniFi Dhauz

**Referência:** Para uso durante a execução em campo  
**Pré-requisito:** Equipamentos adquiridos e aprovação formal recebida

---

## Checklist pré-instalação

- [ ] Cloud Gateway (Dream Machine Pro ou Cloud Gateway Ultra)
- [ ] Switch PoE UniFi
- [ ] UniFi U6 Pro × 1
- [ ] UniFi U6 Lite ou U6+ × 2
- [ ] Cabo Cat6 suficiente para o percurso rack → APs
- [ ] Ferramentas: alicate de crimpar, testador de cabo, furadeira, fixadores para teto

---

## Etapa 1 — Cabeamento Estruturado *(Camada Física)*

**Regra:** Toda a performance do UniFi depende de cabos bons. Cat6 é o mínimo.

**O que fazer:**

1. Definir localização do **rack central** (preferencialmente no andar de baixo, próximo à entrada do link de internet)
2. Lançar cabos Cat6 do rack para os pontos de fixação dos APs:
   - Andar de cima — teto da sala principal → U6 Pro
   - Andar de baixo — teto central (Sala Arco / 3 pessoas) → U6 Lite
   - Andar de baixo — região cozinha/Presotte → U6 Lite
3. Testar continuidade de cada cabo antes de fixar os equipamentos
4. Reservar **1 cabo extra no rack** para o servidor Dhauz (Fase 2)

**Atenção:** APs UniFi são fixados no teto — não em parede. Isso garante irradiação omnidirecional e cobertura máxima por área.

---

## Etapa 2 — Instalação e Adoção no Rack Central

**Sequência de montagem:**

```
Link de internet → Cloud Gateway → Switch PoE → APs (via cabo Cat6)
```

1. Conectar o link de internet à porta WAN do Cloud Gateway
2. Conectar Cloud Gateway ao Switch PoE (porta uplink)
3. Conectar cada cabo Cat6 dos APs às portas PoE do Switch
4. APs ligam automaticamente ao receber energia pelo cabo (sem fonte externa)
5. Acessar o painel **UniFi OS** no IP do Cloud Gateway
6. Clicar em **Adopt** (Adotar) para cada AP e para o Switch — a controladora assume o gerenciamento unificado de todos os dispositivos

---

## Etapa 3 — Criação das VLANs e Redes Lógicas

No painel UniFi OS → Networks → criar 3 redes:

| VLAN ID | Nome | Configuração |
|---------|------|-------------|
| 10 | Empresa | Acesso total à internet · sem restrições · SSID: `Dhauz_Corp` |
| 20 | Visitantes | **Client Isolation ativo** · limite de banda (ex: 20 Mbps down/up) · SSID: `Dhauz_Guest` · bloqueio de acesso ao servidor |
| 30 | IoT | Isolamento total · sem visibilidade de outros dispositivos · SSID: `Dhauz_IoT` (pode ficar oculto) |

**Regras de firewall a aplicar:**
- VLAN 20 não acessa VLAN 10 nem VLAN 30
- VLAN 30 não acessa VLAN 10 nem VLAN 20
- VLAN 10 acessa internet + (futuramente) servidor na porta reservada do Switch

---

## Etapa 4 — Escaneamento de RF e Fast Roaming

**Por que isso importa:** APs em modo "Automático" geram interferência mútua. Ajuste manual garante cobertura sem sobreposição excessiva.

**O que fazer:**

1. No painel UniFi OS → RF Environment: identificar canais menos congestionados no ambiente
2. Atribuir canais manualmente a cada AP:
   - U6 Pro (2,4 GHz): canal menos congestionado identificado
   - U6 Pro (5 GHz): canal menos congestionado identificado
   - Repetir para cada U6 Lite
3. Ajustar potência de transmissão para que as áreas de cobertura se **sobreponham levemente** (20–30% de overlap) — sem sobreposição excessiva (que gera interferência) nem gap (que gera zona morta)
4. Ativar **Fast Roaming** (BSS Transition + 802.11r) nas configurações do SSID — garante troca de AP sem queda de chamada enquanto o usuário se move entre andares

---

## Etapa 5 — Diagnóstico do consumo de banda

Com a rede no ar, identificar a origem do consumo absurdo:

1. UniFi OS → Clients: ordenar por "Usage" — o dispositivo problemático aparece no topo
2. Verificar se é dispositivo corporativo, IoT desconfigurado ou invasor
3. Isolar o dispositivo na VLAN correta ou bloquear acesso conforme o caso
4. Registrar o diagnóstico no `delivery/fase-1/semana-01.md`

---

## Etapa 6 — Testes finais antes do Handoff

| Teste | Esperado |
|-------|---------|
| Conectar dispositivo em `Dhauz_Corp` | Acesso total à internet |
| Conectar dispositivo em `Dhauz_Guest` | Acesso à internet · sem acesso a dispositivos internos |
| Conectar dispositivo em `Dhauz_IoT` | Acesso à internet · isolado das outras VLANs |
| Caminhar do andar de cima para o de baixo com chamada ativa | Sem queda (Fast Roaming) |
| Dashboard UniFi OS | Dispositivos identificados por VLAN, consumo visível em tempo real |

---

## Etapa 7 — Protocolo de Handoff

Ver `handoff/rede-unificada.md` para o protocolo completo.

**Critério mínimo:** Responsável técnico Dhauz executa no painel — identifica dispositivos, acessa VLANs, realiza um bloqueio — sem intervenção da OTMA.

---

## Pós-entrega

- [ ] Credenciais do UniFi OS salvas no ambiente da Dhauz (não só na OTMA)
- [ ] Responsável técnico nomeado
- [ ] `semana-01.md` preenchido
- [ ] `/extract-skill` executado → skill salva em `clients/otma/tools/skills/`
