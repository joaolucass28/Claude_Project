// Dhauz — Landing Page
// Paste into Framer > Assets > Code > New Component
// Drag onto a Frame set to 100% width / Fill height

import React from "react"

export default function DhauzLandingPage() {
  const colors = {
    bg: "#0A0A0F",
    surface: "#111118",
    card: "#16161F",
    border: "#1E1E2E",
    accent: "#5B8CFF",
    accentGlow: "rgba(91,140,255,0.15)",
    accentSoft: "rgba(91,140,255,0.08)",
    cyan: "#4ECDC4",
    text: "#F0F0F8",
    muted: "#8888A8",
    faint: "#44445A",
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const s: Record<string, any> = {
    page: {
      fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
      background: colors.bg,
      color: colors.text,
      minHeight: "100vh",
      overflowX: "hidden",
    },

    // ─── NAV ───────────────────────────────────────────────────────────
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px 64px",
      borderBottom: `1px solid ${colors.border}`,
      position: "sticky" as const,
      top: 0,
      background: "rgba(10,10,15,0.85)",
      backdropFilter: "blur(16px)",
      zIndex: 100,
    },
    logo: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: "-0.5px",
      color: colors.text,
    },
    logoDot: { color: colors.accent },
    navLinks: {
      display: "flex",
      gap: 40,
      fontSize: 14,
      color: colors.muted,
    },
    navCta: {
      background: colors.accent,
      color: "#fff",
      border: "none",
      borderRadius: 8,
      padding: "10px 22px",
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
    },

    // ─── HERO ──────────────────────────────────────────────────────────
    hero: {
      textAlign: "center" as const,
      padding: "120px 64px 100px",
      position: "relative" as const,
    },
    heroBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: colors.accentSoft,
      border: `1px solid ${colors.border}`,
      borderRadius: 100,
      padding: "6px 16px",
      fontSize: 12,
      fontWeight: 600,
      color: colors.accent,
      letterSpacing: "0.5px",
      textTransform: "uppercase" as const,
      marginBottom: 32,
    },
    heroDot: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: colors.cyan,
      display: "inline-block",
    },
    heroTitle: {
      fontSize: 68,
      fontWeight: 800,
      letterSpacing: "-2px",
      lineHeight: 1.05,
      margin: "0 auto 24px",
      maxWidth: 800,
    },
    heroAccent: {
      color: colors.accent,
    },
    heroSub: {
      fontSize: 20,
      color: colors.muted,
      maxWidth: 560,
      margin: "0 auto 48px",
      lineHeight: 1.7,
    },
    heroCtas: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
    },
    btnPrimary: {
      background: colors.accent,
      color: "#fff",
      border: "none",
      borderRadius: 10,
      padding: "16px 36px",
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      letterSpacing: "-0.2px",
    },
    btnSecondary: {
      background: "transparent",
      color: colors.text,
      border: `1px solid ${colors.border}`,
      borderRadius: 10,
      padding: "16px 36px",
      fontSize: 16,
      fontWeight: 600,
      cursor: "pointer",
    },
    heroGlow: {
      position: "absolute" as const,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -60%)",
      width: 600,
      height: 400,
      background: `radial-gradient(ellipse at center, ${colors.accentGlow} 0%, transparent 70%)`,
      pointerEvents: "none" as const,
      zIndex: 0,
    },

    // ─── STATS BAR ─────────────────────────────────────────────────────
    statsBar: {
      display: "flex",
      justifyContent: "center",
      gap: 0,
      borderTop: `1px solid ${colors.border}`,
      borderBottom: `1px solid ${colors.border}`,
    },
    statItem: {
      flex: 1,
      maxWidth: 280,
      padding: "40px 32px",
      textAlign: "center" as const,
      borderRight: `1px solid ${colors.border}`,
    },
    statNumber: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: "-1.5px",
      color: colors.text,
      lineHeight: 1,
    },
    statAccent: { color: colors.accent },
    statLabel: {
      fontSize: 13,
      color: colors.muted,
      marginTop: 8,
      lineHeight: 1.5,
    },

    // ─── SECTION SHARED ────────────────────────────────────────────────
    section: {
      padding: "96px 64px",
    },
    sectionLabel: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase" as const,
      color: colors.accent,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 44,
      fontWeight: 800,
      letterSpacing: "-1.5px",
      lineHeight: 1.1,
      marginBottom: 16,
      maxWidth: 600,
    },
    sectionSub: {
      fontSize: 18,
      color: colors.muted,
      lineHeight: 1.7,
      maxWidth: 540,
      marginBottom: 56,
    },

    // ─── PROBLEM ───────────────────────────────────────────────────────
    problemGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 16,
      maxWidth: 900,
    },
    problemCard: {
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: 16,
      padding: "28px 32px",
      display: "flex",
      alignItems: "flex-start",
      gap: 20,
    },
    problemIcon: {
      width: 42,
      height: 42,
      borderRadius: 10,
      background: "rgba(255,80,80,0.1)",
      border: "1px solid rgba(255,80,80,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      flexShrink: 0,
    },
    problemTitle: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 6,
      color: colors.text,
    },
    problemText: {
      fontSize: 13,
      color: colors.muted,
      lineHeight: 1.6,
    },

    // ─── SOLUTION ──────────────────────────────────────────────────────
    solutionLayout: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center",
    },
    featureList: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 20,
    },
    featureItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16,
    },
    featureIconWrap: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: colors.accentSoft,
      border: `1px solid ${colors.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      flexShrink: 0,
    },
    featureTitle: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 4,
    },
    featureDesc: {
      fontSize: 13,
      color: colors.muted,
      lineHeight: 1.6,
    },
    networkVisual: {
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: 20,
      padding: 40,
      display: "flex",
      flexDirection: "column" as const,
      gap: 12,
    },
    networkTitle: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "uppercase" as const,
      color: colors.muted,
      marginBottom: 8,
    },
    vlanRow: {
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderRadius: 10,
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    vlanLeft: {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    vlanDot: (color: string): React.CSSProperties => ({
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: color,
      flexShrink: 0,
    }),
    vlanName: {
      fontSize: 14,
      fontWeight: 600,
    },
    vlanBadge: (color: string): React.CSSProperties => ({
      fontSize: 11,
      fontWeight: 700,
      color,
      background: `${color}18`,
      border: `1px solid ${color}30`,
      borderRadius: 6,
      padding: "3px 10px",
    }),
    controllerBox: {
      background: colors.accentSoft,
      border: `1px solid ${colors.accent}30`,
      borderRadius: 10,
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 8,
    },
    controllerIcon: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: colors.accent,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
    },
    controllerLabel: {
      fontSize: 14,
      fontWeight: 700,
      color: colors.accent,
    },
    controllerSub: {
      fontSize: 12,
      color: colors.muted,
    },

    // ─── INVESTMENT ────────────────────────────────────────────────────
    investSection: {
      background: colors.surface,
      borderTop: `1px solid ${colors.border}`,
      borderBottom: `1px solid ${colors.border}`,
    },
    phaseGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 24,
      marginTop: 0,
    },
    phaseCard: (highlighted: boolean): React.CSSProperties => ({
      background: highlighted ? colors.accent : colors.card,
      border: `1px solid ${highlighted ? colors.accent : colors.border}`,
      borderRadius: 20,
      padding: "36px 32px",
      position: "relative" as const,
      overflow: "hidden" as const,
    }),
    phaseLabel: (highlighted: boolean): React.CSSProperties => ({
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "uppercase" as const,
      color: highlighted ? "rgba(255,255,255,0.7)" : colors.muted,
      marginBottom: 12,
    }),
    phaseTitle: (highlighted: boolean): React.CSSProperties => ({
      fontSize: 24,
      fontWeight: 800,
      letterSpacing: "-0.5px",
      color: highlighted ? "#fff" : colors.text,
      marginBottom: 8,
    }),
    phasePrice: (highlighted: boolean): React.CSSProperties => ({
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: "-1.5px",
      color: highlighted ? "#fff" : colors.text,
      marginBottom: 24,
      lineHeight: 1,
    }),
    phasePriceSuffix: (highlighted: boolean): React.CSSProperties => ({
      fontSize: 16,
      fontWeight: 500,
      color: highlighted ? "rgba(255,255,255,0.6)" : colors.muted,
    }),
    phaseItems: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 10,
    },
    phaseItem: (highlighted: boolean): React.CSSProperties => ({
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 14,
      color: highlighted ? "rgba(255,255,255,0.85)" : colors.muted,
    }),
    phaseCheck: (highlighted: boolean): React.CSSProperties => ({
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: highlighted ? "rgba(255,255,255,0.2)" : colors.accentSoft,
      border: `1px solid ${highlighted ? "rgba(255,255,255,0.3)" : colors.accent + "40"}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      flexShrink: 0,
      color: highlighted ? "#fff" : colors.accent,
    }),

    // ─── ROADMAP ───────────────────────────────────────────────────────
    roadmap: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 0,
      maxWidth: 700,
      margin: "0 auto",
    },
    roadmapStep: {
      display: "flex",
      gap: 32,
      paddingBottom: 48,
      position: "relative" as const,
    },
    roadmapLine: {
      position: "absolute" as const,
      left: 19,
      top: 42,
      bottom: 0,
      width: 2,
      background: colors.border,
    },
    roadmapDot: (active: boolean): React.CSSProperties => ({
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: active ? colors.accent : colors.card,
      border: `2px solid ${active ? colors.accent : colors.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      flexShrink: 0,
      fontWeight: 700,
      color: active ? "#fff" : colors.muted,
      zIndex: 1,
      position: "relative" as const,
    }),
    roadmapContent: {
      paddingTop: 8,
      flex: 1,
    },
    roadmapPhase: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "uppercase" as const,
      color: colors.accent,
      marginBottom: 6,
    },
    roadmapTitle: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 8,
    },
    roadmapDesc: {
      fontSize: 14,
      color: colors.muted,
      lineHeight: 1.7,
    },

    // ─── CTA ───────────────────────────────────────────────────────────
    ctaSection: {
      textAlign: "center" as const,
      padding: "96px 64px",
    },
    ctaCard: {
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: 24,
      padding: "80px 64px",
      maxWidth: 800,
      margin: "0 auto",
      position: "relative" as const,
      overflow: "hidden" as const,
    },
    ctaGlow: {
      position: "absolute" as const,
      bottom: -100,
      left: "50%",
      transform: "translateX(-50%)",
      width: 400,
      height: 300,
      background: `radial-gradient(ellipse, ${colors.accentGlow} 0%, transparent 70%)`,
      pointerEvents: "none" as const,
    },
    ctaTitle: {
      fontSize: 52,
      fontWeight: 800,
      letterSpacing: "-2px",
      marginBottom: 20,
    },
    ctaSub: {
      fontSize: 18,
      color: colors.muted,
      lineHeight: 1.7,
      maxWidth: 480,
      margin: "0 auto 40px",
    },
    ctaBtns: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
    },

    // ─── FOOTER ────────────────────────────────────────────────────────
    footer: {
      borderTop: `1px solid ${colors.border}`,
      padding: "32px 64px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    footerLogo: {
      fontSize: 18,
      fontWeight: 700,
    },
    footerText: {
      fontSize: 13,
      color: colors.faint,
    },
    footerTag: {
      fontSize: 12,
      color: colors.faint,
    },
  }

  return (
    <div style={s.page}>
      {/* ── NAV ── */}
      <nav style={s.nav}>
        <div style={s.logo}>
          Dhauz<span style={s.logoDot}>.</span>
        </div>
        <div style={s.navLinks}>
          <span>Solução</span>
          <span>Infraestrutura</span>
          <span>Roadmap</span>
          <span>Investimento</span>
        </div>
        <button style={s.navCta}>Falar com a equipe</button>
      </nav>

      {/* ── HERO ── */}
      <section style={s.hero}>
        <div style={s.heroGlow} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={s.heroBadge}>
            <span style={s.heroDot} />
            Infraestrutura Digital Inteligente
          </div>
          <h1 style={s.heroTitle}>
            Sua rede.<br />
            <span style={s.heroAccent}>Reinventada.</span>
          </h1>
          <p style={s.heroSub}>
            Transformamos ambientes corporativos em infraestrutura de dados
            de alta performance — com rede unificada, controle total e
            preparação para o futuro.
          </p>
          <div style={s.heroCtas}>
            <button style={s.btnPrimary}>Ver o plano →</button>
            <button style={s.btnSecondary}>Como funciona</button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={s.statsBar}>
        {[
          { n: "1", unit: " rede", label: "Unificação total de todos os pontos de acesso" },
          { n: "3", unit: " VLANs", label: "Empresa · Visitantes · IoT segmentadas" },
          { n: "R$5k", unit: "", label: "Investimento inicial para transformar a estrutura" },
          { n: "∞", unit: "", label: "Escalabilidade para crescer sem retrabalho" },
        ].map((stat, i) => (
          <div key={i} style={{ ...s.statItem, borderRight: i < 3 ? `1px solid ${colors.border}` : "none" }}>
            <div style={s.statNumber}>
              <span style={s.statAccent}>{stat.n}</span>{stat.unit}
            </div>
            <div style={s.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── PROBLEM ── */}
      <section style={s.section}>
        <div style={s.sectionLabel}>O diagnóstico</div>
        <h2 style={s.sectionTitle}>O caos que travava a operação</h2>
        <p style={s.sectionSub}>
          Antes da transformação, a infraestrutura funcionava no limite —
          sem visibilidade, sem controle, sem escala.
        </p>
        <div style={s.problemGrid}>
          {[
            { icon: "🔀", title: "3 redes diferentes", text: "Desorganização total — múltiplos pontos de acesso sem integração ou gestão central." },
            { icon: "📡", title: "Consumo descontrolado", text: "Algo consumindo banda de forma absurda, sem rastreabilidade ou monitoramento." },
            { icon: "📶", title: "Cobertura inconsistente", text: "Sinal fraco no andar de baixo, zonas mortas e experiência irregular para todos." },
            { icon: "🔧", title: "Zero gestão centralizada", text: "Ninguém sabe o que está acontecendo na rede — sem dashboards, sem alertas, sem controle." },
          ].map((p, i) => (
            <div key={i} style={s.problemCard}>
              <div style={s.problemIcon}>{p.icon}</div>
              <div>
                <div style={s.problemTitle}>{p.title}</div>
                <div style={s.problemText}>{p.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section style={{ ...s.section, background: colors.surface, borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
        <div style={s.sectionLabel}>A solução</div>
        <div style={s.solutionLayout}>
          <div>
            <h2 style={s.sectionTitle}>Uma rede. Controle total.</h2>
            <p style={s.sectionSub}>
              Arquitetura profissional Ubiquiti com Access Points de alta
              performance, controladora centralizada e segmentação
              completa por VLAN.
            </p>
            <div style={s.featureList}>
              {[
                { icon: "⚡", title: "Access Points profissionais", desc: "U6 Pro na sala principal + U6 Lite nas demais áreas — cobertura sem pontos cegos." },
                { icon: "🧠", title: "Controladora central", desc: "Gestão completa: monitore dispositivos, bloqueie acessos e defina regras em tempo real." },
                { icon: "🔌", title: "Switch PoE integrado", desc: "Energia e dados no mesmo cabo — menos complexidade, mais confiabilidade e expansão fácil." },
                { icon: "🔒", title: "Segmentação por VLAN", desc: "Redes separadas para empresa, visitantes e IoT — segurança e performance sem interferência." },
              ].map((f, i) => (
                <div key={i} style={s.featureItem}>
                  <div style={s.featureIconWrap}>{f.icon}</div>
                  <div>
                    <div style={s.featureTitle}>{f.title}</div>
                    <div style={s.featureDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={s.networkVisual}>
            <div style={s.networkTitle}>Arquitetura Dhauz Network</div>
            {[
              { color: "#5B8CFF", name: "Corporativa", badge: "Empresa", badgeColor: "#5B8CFF" },
              { color: "#4ECDC4", name: "Visitantes", badge: "Guest", badgeColor: "#4ECDC4" },
              { color: "#FFB347", name: "IoT / Dispositivos", badge: "IoT", badgeColor: "#FFB347" },
            ].map((v, i) => (
              <div key={i} style={s.vlanRow}>
                <div style={s.vlanLeft}>
                  <div style={s.vlanDot(v.color)} />
                  <span style={s.vlanName}>{v.name}</span>
                </div>
                <div style={s.vlanBadge(v.badgeColor)}>{v.badge}</div>
              </div>
            ))}
            <div style={s.controllerBox}>
              <div style={s.controllerIcon}>🧠</div>
              <div>
                <div style={s.controllerLabel}>UniFi Controller</div>
                <div style={s.controllerSub}>Gestão centralizada · Monitoramento 24/7</div>
              </div>
            </div>
            <div style={{ marginTop: 16, padding: "12px 16px", background: colors.bg, borderRadius: 10, border: `1px dashed ${colors.faint}` }}>
              <div style={{ fontSize: 11, color: colors.muted, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" as const, marginBottom: 6 }}>Preparado para</div>
              <div style={{ fontSize: 13, color: colors.muted }}>🖥️ Servidor Dhauz · NAS · Automações · Aplicações</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ── */}
      <section style={{ ...s.section, ...s.investSection }}>
        <div style={{ textAlign: "center" as const, marginBottom: 56 }}>
          <div style={s.sectionLabel}>Investimento</div>
          <h2 style={{ ...s.sectionTitle, margin: "0 auto 16px" }}>Dois momentos. Uma visão.</h2>
          <p style={{ ...s.sectionSub, margin: "0 auto" }}>
            Estrutura pensada para crescer em fases — sem retrabalho,
            sem desperdício.
          </p>
        </div>
        <div style={s.phaseGrid}>
          {/* Phase 1 */}
          <div style={s.phaseCard(false)}>
            <div style={s.phaseLabel(false)}>Fase 1 · Agora</div>
            <div style={s.phaseTitle(false)}>Rede Unificada</div>
            <div style={s.phasePrice(false)}>
              R$ 5–7k<span style={s.phasePriceSuffix(false)}></span>
            </div>
            <div style={s.phaseItems}>
              {["1 rede única (fim dos 3 reinos)", "2–3 Access Points profissionais", "Controladora central UniFi", "Switch PoE + cabeamento estruturado", "VLANs: Empresa / Visitantes / IoT", "Base pronta para servidor futuro"].map((item, i) => (
                <div key={i} style={s.phaseItem(false)}>
                  <div style={s.phaseCheck(false)}>✓</div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Phase 2 */}
          <div style={s.phaseCard(true)}>
            <div style={s.phaseLabel(true)}>Fase 2 · Estratégico</div>
            <div style={s.phaseTitle(true)}>Servidor Dhauz</div>
            <div style={s.phasePrice(true)}>
              R$ 8–25k<span style={s.phasePriceSuffix(true)}>+</span>
            </div>
            <div style={s.phaseItems}>
              {["NAS para armazenamento e backup", "Servidor local de aplicações", "Banco de dados e automações", "Controle de mídia e arquivos pesados", "IP fixo + fibra de alta capacidade", "Infraestrutura escalável para empresas"].map((item, i) => (
                <div key={i} style={s.phaseItem(true)}>
                  <div style={s.phaseCheck(true)}>✓</div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section style={{ ...s.section }}>
        <div style={{ textAlign: "center" as const, marginBottom: 72 }}>
          <div style={s.sectionLabel}>Roadmap</div>
          <h2 style={{ ...s.sectionTitle, margin: "0 auto 16px" }}>Do caos à central digital</h2>
          <p style={{ ...s.sectionSub, margin: "0 auto" }}>
            Cada etapa construída sobre a anterior — sem atalhos,
            sem retrabalho.
          </p>
        </div>
        <div style={s.roadmap}>
          {[
            {
              active: true,
              phase: "Imediato",
              title: "Organizar a rede",
              desc: "Instalar Access Points, controladora e Switch PoE. Criar VLANs separadas. Eliminar os 3 reinos e consolidar tudo em uma rede gerenciável.",
            },
            {
              active: true,
              phase: "Curto prazo",
              title: "Monitoramento ativo",
              desc: "Dashboard com visibilidade completa: dispositivos conectados, consumo por usuário, alertas automáticos. Gestão sem surpresas.",
            },
            {
              active: false,
              phase: "Médio prazo",
              title: "NAS — Armazenamento central",
              desc: "Servidor de arquivos com backup redundante. Compartilhamento interno de dados e acesso remoto seguro.",
            },
            {
              active: false,
              phase: "Longo prazo",
              title: "Servidor Dhauz completo",
              desc: "Infraestrutura real para aplicações, automações, banco de dados e operações digitais. Central de dados da empresa — pronta para escalar.",
            },
          ].map((step, i) => (
            <div key={i} style={s.roadmapStep}>
              {i < 3 && <div style={s.roadmapLine} />}
              <div style={s.roadmapDot(step.active)}>{i + 1}</div>
              <div style={s.roadmapContent}>
                <div style={s.roadmapPhase}>{step.phase}</div>
                <div style={s.roadmapTitle}>{step.title}</div>
                <div style={s.roadmapDesc}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={s.ctaSection}>
        <div style={s.ctaCard}>
          <div style={s.ctaGlow} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={s.ctaTitle}>
              Pronto para<br />
              <span style={{ color: colors.accent }}>transformar</span>?
            </h2>
            <p style={s.ctaSub}>
              Comece pela rede — a base de tudo. O restante da
              infraestrutura Dhauz se constrói em cima disso.
            </p>
            <div style={s.ctaBtns}>
              <button style={s.btnPrimary}>Iniciar a Fase 1 →</button>
              <button style={s.btnSecondary}>Ver proposta completa</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={s.footer}>
        <div style={s.footerLogo}>
          Dhauz<span style={{ color: colors.accent }}>.</span>
        </div>
        <div style={s.footerText}>Infraestrutura Digital Inteligente</div>
        <div style={s.footerTag}>Implementado por OTMA · 2025</div>
      </footer>
    </div>
  )
}
