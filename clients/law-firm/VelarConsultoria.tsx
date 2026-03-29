// Velar Consultoria Jurídica — Meridian Direction v2.0
// ─────────────────────────────────────────────────────────────────────────
// Como usar no Framer:
//   1. Assets → Code → + New Component → cole este arquivo
//   2. Arraste "VelarConsultoria" para o canvas (Width: 1440, Height: auto)
//
// PERSONALIZAÇÃO — edite as constantes abaixo:
//   • Marca:    BRAND_NAME, BRAND_TAGLINE, BRAND_FULL
//   • Contato:  BRAND_PHONE, BRAND_EMAIL, BRAND_WHATSAPP, BRAND_ADDRESS
//   • Registro: BRAND_OAB, BRAND_CNPJ
//   • Seções:   arrays AREAS, DIFERENCIAIS, PASSOS

import { useState, useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── BRAND ───────────────────────────────────────────────────────────────
const BRAND_NAME     = "Velar"
const BRAND_TAGLINE  = "Consultoria Jurídica"
const BRAND_FULL     = "Velar Consultoria Jurídica"
const BRAND_OAB      = "OAB/XX 000.000"
const BRAND_CNPJ     = "CNPJ 00.000.000/0001-00"
const BRAND_PHONE    = "+55 (00) 00000-0000"
const BRAND_EMAIL    = "contato@velar.adv.br"
const BRAND_WHATSAPP = "https://wa.me/5500000000000"
const BRAND_ADDRESS  = "São Paulo — SP"

// ─── NAV — lowercase, no CTA button ──────────────────────────────────────
const NAV_ITEMS = [
    { href: "#sobre",        label: "sobre"        },
    { href: "#areas",        label: "áreas"        },
    { href: "#diferenciais", label: "diferenciais" },
    { href: "#processo",     label: "processo"     },
    { href: "#contato",      label: "contato"      },
]

// ─── ÁREAS ───────────────────────────────────────────────────────────────
const AREAS = [
    { num: "01", name: "Consultoria Empresarial",   desc: "Estruturação jurídica de negócios, revisão contratual e suporte decisório contínuo para empresas em crescimento." },
    { num: "02", name: "Contratos Estratégicos",    desc: "Elaboração, análise e negociação de contratos de alto valor e complexidade, com foco em proteção e clareza." },
    { num: "03", name: "Planejamento Societário",   desc: "Organização da estrutura societária, proteção patrimonial e sucessão empresarial planejada com antecedência." },
    { num: "04", name: "Compliance e Governança",   desc: "Implementação de políticas de conformidade, códigos de conduta e gestão de integridade corporativa." },
    { num: "05", name: "Gestão de Riscos Jurídicos",desc: "Mapeamento, avaliação e mitigação preventiva de exposição jurídica antes que riscos se materializem." },
    { num: "06", name: "Consultoria Preventiva",    desc: "Identificação antecipada de vulnerabilidades legais, evitando litígios e protegendo a continuidade do negócio." },
]

// ─── DIFERENCIAIS ────────────────────────────────────────────────────────
const DIFERENCIAIS = [
    { title: "Visão integrada",        desc: "Jurídico e estratégico em uma só perspectiva. Não entregamos apenas pareceres — entregamos orientação aplicável à realidade do seu negócio." },
    { title: "Resposta ágil",          desc: "Disponibilidade real e comunicação direta. Suas questões têm atenção prioritária, sem intermediários desnecessários." },
    { title: "Rigor e precisão",       desc: "Cada análise é construída com método, profundidade e atenção ao contexto específico. Sem respostas genéricas ou soluções padronizadas." },
    { title: "Parceria de longo prazo",desc: "Construímos relacionamentos, não apenas contratos. Crescemos junto com os negócios que assessoramos ao longo do tempo." },
]

// ─── PROCESSO ────────────────────────────────────────────────────────────
const PASSOS = [
    { num: "01", title: "Primeiro contato",    desc: "Reunião inicial para compreender o cenário, o contexto e os objetivos do cliente." },
    { num: "02", title: "Diagnóstico",         desc: "Análise aprofundada da situação jurídica e mapeamento de exposições e oportunidades." },
    { num: "03", title: "Proposta estratégica",desc: "Apresentação das soluções recomendadas com clareza sobre escopo, prazo e abordagem." },
    { num: "04", title: "Execução contínua",   desc: "Implementação com suporte proativo e comunicação regular sobre andamentos e resultados." },
]

// ─── PALETTE — warm neutrals, single sienna accent ───────────────────────
const C = {
    ink:         "#1A1814",
    void:        "#0F0D0B",
    parchment:   "#F2EDE4",
    sienna:      "#8B5E3C",
    stone:       "#9E9689",
    rule:        "#D8D2C7",
    ruleVoid:    "rgba(255,255,255,0.07)",
    textLight:   "#F2EDE4",
    textFaint:   "rgba(242,237,228,0.48)",
    siennaHover: "rgba(139,94,60,0.028)",
}

// ─── FONT HELPERS ─────────────────────────────────────────────────────────
const SENTIENT = "'Sentient', Georgia, serif"
const SWITZER  = "'Switzer', 'Helvetica Neue', Arial, sans-serif"
const ARRAY    = "'Array', 'Courier New', monospace"

// ─── STYLES ───────────────────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
    root: {
        fontFamily: SWITZER,
        background: C.parchment,
        color: C.ink,
        overflowX: "hidden",
        width: "100%",
    },

    // ── NAV ────────────────────────────────────────────────────────────
    nav: {
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 100px",
        height: 56,
        background: "rgba(242,237,228,0.96)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${C.rule}`,
    },
    navWordmark: {
        fontFamily: SENTIENT,
        fontSize: 17,
        fontWeight: 400,
        color: C.ink,
        letterSpacing: "0.28em",
        textDecoration: "none",
        lineHeight: 1,
    },
    navLinks: {
        display: "flex",
        gap: 36,
        alignItems: "center",
        listStyle: "none",
        margin: 0,
        padding: 0,
    },
    navLink: {
        fontFamily: SWITZER,
        color: C.stone,
        textDecoration: "none",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.04em",
        transition: "color 0.2s",
    },

    // ── HERO ───────────────────────────────────────────────────────────
    hero: {
        minHeight: "100vh",
        background: C.void,
        display: "flex",
        position: "relative",
        overflow: "hidden",
    },
    heroTexture: {
        position: "absolute",
        inset: 0,
        backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(255,255,255,0.022) 31px, rgba(255,255,255,0.022) 32px)",
        pointerEvents: "none",
        zIndex: 1,
    },
    heroLeft: {
        flex: "0 0 58%",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "center",
        padding: "80px 80px 100px 100px",
        position: "relative",
        zIndex: 2,
    },
    heroRight: {
        flex: "0 0 42%",
        borderLeft: "1px solid rgba(255,255,255,0.055)",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "flex-end",
        padding: "80px 100px 100px 80px",
        position: "relative",
        zIndex: 2,
    },
    heroEyebrow: {
        fontFamily: ARRAY,
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "0.18em",
        color: C.stone,
        textTransform: "uppercase" as const,
        margin: "0 0 52px 0",
    },
    heroSiennaRule: {
        width: 56,
        height: 1,
        background: C.sienna,
        display: "block",
        margin: "36px 0",
    },
    heroSub: {
        fontFamily: SWITZER,
        fontSize: 15,
        fontWeight: 300,
        color: C.textFaint,
        lineHeight: 1.85,
        maxWidth: 400,
        margin: "0 0 44px 0",
    },
    heroScroll: {
        position: "absolute",
        bottom: 44,
        left: 100,
        zIndex: 2,
    },
    heroScrollChar: {
        fontFamily: ARRAY,
        fontSize: 11,
        color: "rgba(255,255,255,0.16)",
    },
    heroMeta: {
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "flex-end",
        gap: 2,
    },
    heroMetaItem: {
        fontFamily: ARRAY,
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "0.14em",
        color: C.stone,
        textTransform: "uppercase" as const,
        lineHeight: 2.2,
    },

    // ── SOBRE ──────────────────────────────────────────────────────────
    sobre: {
        background: C.parchment,
        padding: "160px 100px",
    },
    sobreInner: {
        maxWidth: 1320,
        margin: "0 auto",
    },
    sobreStatement: {
        fontFamily: SENTIENT,
        fontWeight: 400,
        color: C.ink,
        maxWidth: 860,
        lineHeight: 1.18,
        letterSpacing: "-0.015em",
        margin: "0 0 80px 0",
    },
    sobreGrid: {
        display: "grid",
        gridTemplateColumns: "40fr 60fr",
        gap: "0 80px",
        alignItems: "start",
    },
    sobreLeftDecor: {
        display: "flex",
        flexDirection: "column" as const,
        gap: 16,
        paddingTop: 4,
    },
    sobreLeftRule: {
        width: 3,
        height: 40,
        background: C.sienna,
        display: "block",
    },
    sobreLeftLabel: {
        fontFamily: ARRAY,
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "0.18em",
        color: C.stone,
        textTransform: "uppercase" as const,
    },
    sobreP: {
        fontFamily: SWITZER,
        fontSize: 15,
        fontWeight: 300,
        color: C.stone,
        lineHeight: 1.85,
        margin: "0 0 20px 0",
    },

    // ── ÁREAS ──────────────────────────────────────────────────────────
    areas: {
        background: C.parchment,
        borderTop: `1px solid ${C.rule}`,
        padding: "0 100px 160px",
    },
    areasInner: {
        maxWidth: 1320,
        margin: "0 auto",
        paddingTop: 80,
    },
    areasCounter: {
        fontFamily: ARRAY,
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "0.14em",
        color: C.stone,
        display: "block",
        marginBottom: 12,
    },
    areasH2: {
        fontFamily: SENTIENT,
        fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" as any,
        fontWeight: 700,
        color: C.ink,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        margin: "0 0 56px 0",
    },

    // ── STATEMENT ──────────────────────────────────────────────────────
    statement: {
        background: C.void,
        padding: "160px 100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    statementInner: {
        maxWidth: 900,
        textAlign: "center" as const,
    },
    statementText: {
        fontFamily: SENTIENT,
        fontWeight: 400,
        fontStyle: "italic",
        color: C.textLight,
        lineHeight: 1.22,
        letterSpacing: "-0.01em",
        margin: 0,
    },
    statementRule: {
        width: 56,
        height: 1,
        background: C.sienna,
        margin: "48px auto 0",
        display: "block",
    },

    // ── DIFERENCIAIS ───────────────────────────────────────────────────
    diferenciais: {
        background: C.parchment,
        borderTop: `1px solid ${C.rule}`,
        padding: "160px 100px",
    },
    diferenciaisInner: {
        maxWidth: 1320,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "40fr 60fr",
        gap: "0 80px",
        alignItems: "start",
    },
    diferenciaisLeftSticky: {
        position: "sticky" as const,
        top: 80,
    },
    diferenciaisCounter: {
        fontFamily: ARRAY,
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "0.14em",
        color: C.stone,
        display: "block",
        marginBottom: 12,
    },
    diferenciaisH2: {
        fontFamily: SENTIENT,
        fontSize: "clamp(1.5rem, 2.2vw, 2rem)" as any,
        fontWeight: 700,
        color: C.ink,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        margin: "0 0 20px 0",
    },
    diferenciaisSub: {
        fontFamily: SWITZER,
        fontSize: 14,
        fontWeight: 300,
        color: C.stone,
        lineHeight: 1.75,
        margin: 0,
    },

    // ── PROCESSO ───────────────────────────────────────────────────────
    processo: {
        background: C.parchment,
        borderTop: `1px solid ${C.rule}`,
        padding: "0 100px 160px",
    },
    processoInner: {
        maxWidth: 1320,
        margin: "0 auto",
        paddingTop: 80,
    },
    processoCounter: {
        fontFamily: ARRAY,
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "0.14em",
        color: C.stone,
        display: "block",
        marginBottom: 12,
    },
    processoH2: {
        fontFamily: SENTIENT,
        fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" as any,
        fontWeight: 700,
        color: C.ink,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        margin: "0 0 60px 0",
    },

    // ── CONTATO ────────────────────────────────────────────────────────
    contato: {
        background: C.void,
        padding: "160px 100px",
    },
    contatoInner: {
        maxWidth: 1320,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0 80px",
        alignItems: "start",
    },
    contatoCounter: {
        fontFamily: ARRAY,
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "0.14em",
        color: "rgba(242,237,228,0.28)",
        display: "block",
        marginBottom: 12,
    },
    contatoH2: {
        fontFamily: SENTIENT,
        fontWeight: 700,
        color: C.textLight,
        letterSpacing: "-0.025em",
        lineHeight: 1.04,
        margin: "0 0 20px 0",
    },
    contatoSub: {
        fontFamily: SWITZER,
        fontSize: 15,
        fontWeight: 300,
        color: C.textFaint,
        lineHeight: 1.8,
        margin: "0 0 56px 0",
    },
    contatoItem: {
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "18px 0",
        display: "flex",
        flexDirection: "column" as const,
        gap: 5,
        textDecoration: "none",
    },
    contatoItemLabel: {
        fontFamily: ARRAY,
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "0.18em",
        color: "rgba(242,237,228,0.28)",
        textTransform: "uppercase" as const,
    },
    contatoItemValue: {
        fontFamily: SWITZER,
        fontSize: 14,
        fontWeight: 400,
        color: "rgba(242,237,228,0.68)",
    },
    contatoRegData: {
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: 18,
        marginTop: 4,
        display: "flex",
        flexDirection: "column" as const,
        gap: 5,
    },
    contatoRegItem: {
        fontFamily: ARRAY,
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "0.14em",
        color: "rgba(242,237,228,0.18)",
        textTransform: "uppercase" as const,
    },
    formArea: {
        paddingTop: 8,
    },
    formH3: {
        fontFamily: SENTIENT,
        fontSize: 19,
        fontWeight: 400,
        color: "rgba(242,237,228,0.55)",
        margin: "0 0 36px 0",
        letterSpacing: "-0.01em",
    },

    // ── FOOTER ─────────────────────────────────────────────────────────
    footer: {
        background: C.ink,
        borderTop: "1px solid rgba(255,255,255,0.05)",
        height: 64,
        display: "flex",
        alignItems: "center",
        padding: "0 100px",
    },
    footerInner: {
        width: "100%",
        maxWidth: 1320,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: "0 40px",
    },
    footerWordmark: {
        fontFamily: ARRAY,
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "0.32em",
        color: "rgba(242,237,228,0.32)",
        textTransform: "uppercase" as const,
    },
    footerCopy: {
        fontFamily: SWITZER,
        fontSize: 11,
        fontWeight: 400,
        color: "rgba(242,237,228,0.22)",
        margin: 0,
        whiteSpace: "nowrap" as const,
    },
    footerOab: {
        fontFamily: ARRAY,
        fontSize: 9,
        fontWeight: 400,
        letterSpacing: "0.14em",
        color: "rgba(242,237,228,0.16)",
        textAlign: "right" as const,
        textTransform: "uppercase" as const,
        margin: 0,
    },
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────

function AreaRow({
    num,
    name,
    desc,
    forceExpand = false,
}: {
    num: string
    name: string
    desc: string
    forceExpand?: boolean
}) {
    const [hovered, setHovered] = useState(false)
    const expanded = forceExpand || hovered

    return (
        <div
            style={{
                borderTop: `1px solid ${C.rule}`,
                borderBottom: `1px solid ${expanded ? C.sienna : "transparent"}`,
                background: expanded ? C.siennaHover : "transparent",
                transition: "background 0.25s, border-bottom-color 0.25s",
                display: "grid",
                gridTemplateColumns: "64px 1fr 20px",
                gap: "0 32px",
                alignItems: "start",
                padding: "24px 0",
                cursor: "default",
            }}
            onMouseEnter={() => !forceExpand && setHovered(true)}
            onMouseLeave={() => !forceExpand && setHovered(false)}
        >
            {/* Counter */}
            <span
                style={{
                    fontFamily: ARRAY,
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    color: expanded ? C.sienna : C.stone,
                    transition: "color 0.25s",
                    lineHeight: 1.6,
                    paddingTop: 3,
                    display: "block",
                }}
            >
                {num}
            </span>

            {/* Name + revealed description */}
            <div>
                <p
                    style={{
                        fontFamily: SENTIENT,
                        fontSize: 19,
                        fontWeight: 400,
                        color: C.ink,
                        margin: 0,
                        lineHeight: 1.3,
                    }}
                >
                    {name}
                </p>
                <div
                    style={{
                        overflow: "hidden",
                        maxHeight: expanded ? 120 : 0,
                        opacity: expanded ? 1 : 0,
                        transition: "max-height 0.35s ease, opacity 0.3s ease",
                    }}
                >
                    <p
                        style={{
                            fontFamily: SWITZER,
                            fontSize: 13,
                            fontWeight: 300,
                            color: C.stone,
                            margin: "10px 0 0 0",
                            lineHeight: 1.72,
                        }}
                    >
                        {desc}
                    </p>
                </div>
            </div>

            {/* Arrow */}
            <span
                style={{
                    fontFamily: SWITZER,
                    fontSize: 13,
                    color: C.sienna,
                    opacity: expanded ? 1 : 0,
                    transition: "opacity 0.25s",
                    paddingTop: 4,
                    display: "block",
                }}
            >
                →
            </span>
        </div>
    )
}

function DiferencialItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div
            style={{
                borderTop: `1px solid ${C.rule}`,
                padding: "40px 0",
            }}
        >
            <p
                style={{
                    fontFamily: SENTIENT,
                    fontSize: 18,
                    fontWeight: 700,
                    color: C.ink,
                    margin: "0 0 14px 0",
                    lineHeight: 1.25,
                }}
            >
                {title}
            </p>
            <p
                style={{
                    fontFamily: SWITZER,
                    fontSize: 14,
                    fontWeight: 300,
                    color: C.stone,
                    margin: 0,
                    lineHeight: 1.78,
                }}
            >
                {desc}
            </p>
        </div>
    )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────

export default function VelarConsultoria({
    formSlot,
}: {
    formSlot?: React.ReactNode
}) {
    const [isMobile, setIsMobile] = useState(false)
    const [navOpen, setNavOpen]   = useState(false)
    const [ctaHov,  setCtaHov]   = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    useEffect(() => {
        const fontId = "velar-meridian-fonts"
        if (!document.getElementById(fontId)) {
            const link = document.createElement("link")
            link.id   = fontId
            link.rel  = "stylesheet"
            link.href =
                "https://api.fontshare.com/v2/css?f[]=sentient@400,400i,700&f[]=switzer@300,400,500&f[]=array@400&display=swap"
            document.head.appendChild(link)
        }
        const styleId = "velar-meridian-focus"
        if (!document.getElementById(styleId)) {
            const s = document.createElement("style")
            s.id          = styleId
            s.textContent =
                "a:focus-visible,button:focus-visible{outline:2px solid #8B5E3C;outline-offset:2px;}"
            document.head.appendChild(s)
        }
    }, [])

    const mp = isMobile

    return (
        <div style={styles.root}>

            {/* ── NAV ─────────────────────────────────────────────────── */}
            <nav
                style={{
                    ...styles.nav,
                    ...(mp ? { padding: "0 24px" } : {}),
                }}
            >
                <a href="#" style={styles.navWordmark}>
                    {BRAND_NAME}
                </a>

                <ul
                    style={{
                        ...styles.navLinks,
                        ...(mp ? { display: "none" } : {}),
                    }}
                >
                    {NAV_ITEMS.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href} style={styles.navLink}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {mp && (
                    <button
                        onClick={() => setNavOpen((o) => !o)}
                        aria-label="Menu"
                        aria-expanded={navOpen}
                        aria-controls="mobile-nav"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 8,
                            fontFamily: ARRAY,
                            fontSize: 20,
                            color: C.ink,
                            lineHeight: 1,
                        }}
                    >
                        —
                    </button>
                )}
            </nav>

            {/* Mobile backdrop */}
            {mp && navOpen && (
                <div
                    onClick={() => setNavOpen(false)}
                    aria-hidden="true"
                    style={{ position: "fixed", inset: 0, zIndex: 98 }}
                />
            )}

            {/* Mobile dropdown */}
            {mp && navOpen && (
                <div
                    id="mobile-nav"
                    role="navigation"
                    aria-label="Menu de navegação"
                    style={{
                        position: "fixed",
                        top: 56,
                        left: 0,
                        right: 0,
                        background: C.parchment,
                        borderBottom: `1px solid ${C.rule}`,
                        zIndex: 99,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {NAV_ITEMS.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setNavOpen(false)}
                            style={{
                                padding: "15px 24px",
                                fontFamily: SWITZER,
                                fontSize: 13,
                                fontWeight: 500,
                                color: C.ink,
                                textDecoration: "none",
                                borderBottom: `1px solid ${C.rule}`,
                                letterSpacing: "0.04em",
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}

            {/* ── HERO ────────────────────────────────────────────────── */}
            <section
                style={{
                    ...styles.hero,
                    ...(mp
                        ? {
                              flexDirection: "column",
                              justifyContent: "flex-end",
                              minHeight: "92vh",
                          }
                        : {}),
                }}
            >
                {/* Horizontal hairline texture */}
                <div style={styles.heroTexture} aria-hidden="true" />

                {/* Left column */}
                <div
                    style={{
                        ...styles.heroLeft,
                        ...(mp
                            ? {
                                  flex: "none",
                                  width: "100%",
                                  boxSizing: "border-box",
                                  padding: "52px 24px 72px",
                                  justifyContent: "flex-end",
                              }
                            : {}),
                    }}
                >
                    <p style={styles.heroEyebrow}>{BRAND_ADDRESS}</p>

                    {/* Headline — line 2 offset by 2ch on desktop */}
                    <div
                        style={{
                            fontFamily: SENTIENT,
                            fontWeight: 700,
                            lineHeight: 1.02,
                            letterSpacing: "-0.022em",
                            color: C.textLight,
                            fontSize: "clamp(3.4rem, 6vw, 7rem)",
                        }}
                    >
                        <div>Consultoria</div>
                        <div style={{ paddingLeft: mp ? 0 : "2ch" }}>
                            Jurídica.
                        </div>
                    </div>

                    {/* Sienna rule */}
                    <span style={styles.heroSiennaRule} aria-hidden="true" />

                    {/* Sub */}
                    <p
                        style={{
                            ...styles.heroSub,
                            ...(mp ? { maxWidth: "100%", fontSize: 14 } : {}),
                        }}
                    >
                        Assessoria especializada para empresas que exigem
                        precisão jurídica, confidencialidade e parceria
                        estratégica de longo prazo.
                    </p>

                    {/* CTA — text link, no button box */}
                    <a
                        href="#contato"
                        style={{
                            fontFamily: SWITZER,
                            fontSize: 13,
                            fontWeight: 500,
                            letterSpacing: "0.06em",
                            color: C.sienna,
                            textDecoration: ctaHov ? "underline" : "none",
                            textUnderlineOffset: "4px",
                            display: "inline-block",
                        }}
                        onMouseEnter={() => setCtaHov(true)}
                        onMouseLeave={() => setCtaHov(false)}
                    >
                        Agendar conversa →
                    </a>
                </div>

                {/* Right column — deliberate negative space */}
                {!mp && (
                    <div style={styles.heroRight}>
                        <div style={styles.heroMeta}>
                            <span style={styles.heroMetaItem}>
                                {BRAND_ADDRESS}
                            </span>
                            <span style={styles.heroMetaItem}>
                                {BRAND_OAB}
                            </span>
                            <span style={styles.heroMetaItem}>
                                {BRAND_TAGLINE}
                            </span>
                        </div>
                    </div>
                )}

                {/* Scroll indicator */}
                {!mp && (
                    <div style={styles.heroScroll} aria-hidden="true">
                        <span style={styles.heroScrollChar}>↓</span>
                    </div>
                )}
            </section>

            {/* ── SOBRE ───────────────────────────────────────────────── */}
            <section
                id="sobre"
                style={{
                    ...styles.sobre,
                    ...(mp ? { padding: "80px 24px" } : {}),
                }}
            >
                <div style={styles.sobreInner}>
                    {/* Large editorial positioning statement */}
                    <p
                        style={{
                            ...styles.sobreStatement,
                            fontSize: "clamp(1.7rem, 3vw, 3.2rem)" as any,
                            ...(mp ? { marginBottom: 52 } : {}),
                        }}
                    >
                        Assessoria jurídica que pensa como parceiro de
                        negócios — não como prestador de serviços.
                    </p>

                    {/* 40/60 two-column */}
                    <div
                        style={{
                            ...styles.sobreGrid,
                            ...(mp
                                ? { gridTemplateColumns: "1fr", gap: 40 }
                                : {}),
                        }}
                    >
                        {/* Left — sienna rule + label */}
                        <div style={styles.sobreLeftDecor}>
                            <span
                                style={styles.sobreLeftRule}
                                aria-hidden="true"
                            />
                            <span style={styles.sobreLeftLabel}>
                                sobre o escritório
                            </span>
                        </div>

                        {/* Right — body copy */}
                        <div>
                            <p style={styles.sobreP}>
                                A {BRAND_FULL} é uma consultoria jurídica
                                independente focada em empresas que precisam de
                                mais do que respostas técnicas — precisam de
                                orientação estratégica, antecipação de riscos e
                                um interlocutor de confiança em cada decisão
                                relevante.
                            </p>
                            <p style={styles.sobreP}>
                                Atuamos de forma integrada ao contexto de cada
                                cliente, combinando rigor jurídico com visão de
                                negócios para entregar soluções práticas, claras
                                e duradouras.
                            </p>
                            <p style={{ ...styles.sobreP, margin: 0 }}>
                                Nossa atuação é marcadamente preventiva:
                                identificamos vulnerabilidades antes que se
                                tornem litígios, e estruturamos operações com
                                solidez desde o início.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ÁREAS DE ATUAÇÃO — annual-report table ──────────────── */}
            <section
                id="areas"
                style={{
                    ...styles.areas,
                    ...(mp ? { padding: "0 24px 80px" } : {}),
                }}
            >
                <div style={styles.areasInner}>
                    <span style={styles.areasCounter}>03</span>
                    <h2 style={styles.areasH2}>Áreas de atuação</h2>

                    <div>
                        {AREAS.map((a) => (
                            <AreaRow
                                key={a.num}
                                {...a}
                                forceExpand={mp}
                            />
                        ))}
                        {/* closing bottom rule */}
                        <div style={{ borderBottom: `1px solid ${C.rule}` }} />
                    </div>
                </div>
            </section>

            {/* ── STATEMENT — rest moment ──────────────────────────────── */}
            <section
                style={{
                    ...styles.statement,
                    ...(mp ? { padding: "100px 24px" } : {}),
                }}
            >
                <div style={styles.statementInner}>
                    <p
                        style={{
                            ...styles.statementText,
                            fontSize:
                                "clamp(1.5rem, 3vw, 3.2rem)" as any,
                        }}
                    >
                        "Advocacia preventiva não é cautela —
                        <br />
                        é vantagem competitiva."
                    </p>
                    <span
                        style={styles.statementRule}
                        aria-hidden="true"
                    />
                </div>
            </section>

            {/* ── DIFERENCIAIS — sticky left heading ──────────────────── */}
            <section
                id="diferenciais"
                style={{
                    ...styles.diferenciais,
                    ...(mp ? { padding: "80px 24px" } : {}),
                }}
            >
                <div
                    style={{
                        ...styles.diferenciaisInner,
                        ...(mp
                            ? { gridTemplateColumns: "1fr", gap: 52 }
                            : {}),
                    }}
                >
                    {/* Left — sticky */}
                    <div
                        style={{
                            ...styles.diferenciaisLeftSticky,
                            ...(mp ? { position: "static" } : {}),
                        }}
                    >
                        <span style={styles.diferenciaisCounter}>05</span>
                        <h2 style={styles.diferenciaisH2}>
                            O que nos define
                        </h2>
                        <p style={styles.diferenciaisSub}>
                            Uma consultoria que entende o seu negócio antes
                            de entender o seu problema jurídico.
                        </p>
                    </div>

                    {/* Right — stacked items with rules */}
                    <div>
                        {DIFERENCIAIS.map((d) => (
                            <DiferencialItem key={d.title} {...d} />
                        ))}
                        <div
                            style={{
                                borderBottom: `1px solid ${C.rule}`,
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── PROCESSO — 4-column with vertical hairlines ─────────── */}
            <section
                id="processo"
                style={{
                    ...styles.processo,
                    ...(mp ? { padding: "0 24px 80px" } : {}),
                }}
            >
                <div style={styles.processoInner}>
                    <span style={styles.processoCounter}>06</span>
                    <h2 style={styles.processoH2}>Como trabalhamos</h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: mp
                                ? "1fr"
                                : "repeat(4, 1fr)",
                        }}
                    >
                        {PASSOS.map((p, i) => (
                            <div
                                key={p.num}
                                style={{
                                    borderRight:
                                        !mp && i < PASSOS.length - 1
                                            ? `1px solid ${C.rule}`
                                            : "none",
                                    borderTop: mp
                                        ? `1px solid ${C.rule}`
                                        : "none",
                                    padding: mp
                                        ? "28px 0"
                                        : i === 0
                                        ? "0 40px 0 0"
                                        : i === PASSOS.length - 1
                                        ? "0 0 0 40px"
                                        : "0 40px",
                                    boxSizing: "border-box",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: ARRAY,
                                        fontSize: 10,
                                        letterSpacing: "0.14em",
                                        color: C.stone,
                                        display: "block",
                                        marginBottom: 24,
                                    }}
                                >
                                    {p.num}
                                </span>
                                <p
                                    style={{
                                        fontFamily: SENTIENT,
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: C.ink,
                                        margin: "0 0 12px 0",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {p.title}
                                </p>
                                <p
                                    style={{
                                        fontFamily: SWITZER,
                                        fontSize: 13,
                                        fontWeight: 300,
                                        color: C.stone,
                                        margin: 0,
                                        lineHeight: 1.72,
                                    }}
                                >
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CONTATO ─────────────────────────────────────────────── */}
            <section
                id="contato"
                style={{
                    ...styles.contato,
                    ...(mp ? { padding: "80px 24px" } : {}),
                }}
            >
                <div
                    style={{
                        ...styles.contatoInner,
                        ...(mp
                            ? { gridTemplateColumns: "1fr", gap: 56 }
                            : {}),
                    }}
                >
                    {/* Left — info */}
                    <div>
                        <span style={styles.contatoCounter}>07</span>
                        <h2
                            style={{
                                ...styles.contatoH2,
                                fontSize: mp
                                    ? "clamp(2rem, 10vw, 3rem)" as any
                                    : "clamp(2.4rem, 4vw, 4.2rem)" as any,
                            }}
                        >
                            Vamos
                            <br />
                            conversar.
                        </h2>
                        <p style={styles.contatoSub}>
                            Entre em contato para conhecer nosso portfólio,
                            solicitar uma avaliação inicial ou discutir uma
                            parceria estratégica.
                        </p>

                        <a
                            href={BRAND_WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.contatoItem}
                        >
                            <span style={styles.contatoItemLabel}>
                                WhatsApp
                            </span>
                            <span style={styles.contatoItemValue}>
                                {BRAND_PHONE}
                            </span>
                        </a>
                        <a
                            href={`mailto:${BRAND_EMAIL}`}
                            style={styles.contatoItem}
                        >
                            <span style={styles.contatoItemLabel}>
                                E-mail
                            </span>
                            <span style={styles.contatoItemValue}>
                                {BRAND_EMAIL}
                            </span>
                        </a>
                        <div style={styles.contatoItem}>
                            <span style={styles.contatoItemLabel}>
                                Localização
                            </span>
                            <span style={styles.contatoItemValue}>
                                {BRAND_ADDRESS}
                            </span>
                        </div>

                        <div style={styles.contatoRegData}>
                            <span style={styles.contatoRegItem}>
                                {BRAND_OAB}
                            </span>
                            <span style={styles.contatoRegItem}>
                                {BRAND_CNPJ}
                            </span>
                        </div>
                    </div>

                    {/* Right — form slot */}
                    <div style={styles.formArea}>
                        <h3 style={styles.formH3}>Envie uma mensagem</h3>

                        {/*
              ──────────────────────────────────────────────
              FRAMER FORM SLOT
              No canvas: selecione este componente → painel
              direito → propriedade "Formulário" → arraste
              um Form nativo do Framer.

              Campos sugeridos:
                • Nome      (text)
                • Empresa   (text)
                • E-mail    (email)
                • Assunto   (text)
                • Mensagem  (textarea)
              ──────────────────────────────────────────────
            */}
                        <div
                            style={{
                                width: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden",
                            }}
                        >
                            {formSlot ?? (
                                <div
                                    style={{
                                        border:
                                            "1px solid rgba(255,255,255,0.07)",
                                        padding: "44px 32px",
                                        textAlign: "center" as const,
                                        color: "rgba(242,237,228,0.18)",
                                        fontSize: 11,
                                        fontFamily: ARRAY,
                                        letterSpacing: "0.1em",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: 16,
                                            marginBottom: 12,
                                            opacity: 0.35,
                                        }}
                                    >
                                        ⬇
                                    </div>
                                    Arraste um Form nativo do Framer
                                    <br />
                                    via painel de propriedades
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER — single ruled line ───────────────────────────── */}
            <footer
                style={{
                    ...styles.footer,
                    ...(mp
                        ? {
                              height: "auto",
                              padding: "24px",
                          }
                        : {}),
                }}
            >
                <div
                    style={{
                        ...styles.footerInner,
                        ...(mp
                            ? {
                                  gridTemplateColumns: "1fr",
                                  gap: 8,
                              }
                            : {}),
                    }}
                >
                    <span style={styles.footerWordmark}>{BRAND_NAME}</span>
                    <p style={styles.footerCopy}>
                        © 2025 {BRAND_FULL} · Todos os direitos reservados
                    </p>
                    <p style={styles.footerOab}>{BRAND_OAB}</p>
                </div>
            </footer>

        </div>
    )
}

addPropertyControls(VelarConsultoria, {
    formSlot: {
        type: ControlType.ComponentInstance,
        title: "Formulário",
    },
})
