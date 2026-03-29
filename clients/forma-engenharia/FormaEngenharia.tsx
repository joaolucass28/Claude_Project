// ============================================================
// FORMA ENGENHARIA — Landing Page
// Paste this into Framer: Assets → Code → + New File
//
// BEFORE PASTING:
//   1. Add fonts in Framer → Site Settings → Fonts:
//      • Cormorant Garamond (Light 300, Regular 400, Italic)
//      • Inter (Regular 400, Medium 500)
//   2. Replace YOUR_EMAIL with the real contact email
//   3. Replace YOUR_WHATSAPP with e.g. 5531999999999
//   4. Replace placeholder images with real project photos
//   5. Fill in all [PLACEHOLDER] values with real data
// ============================================================

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

// ─── DESIGN TOKENS ───────────────────────────────────────────
const C = {
    offwhite:  "#F8F7F4",
    surface:   "#FFFFFF",
    charcoal:  "#1A1A1A",
    dark:      "#111111",
    gold:      "#B8965A",
    mid:       "#6B6B6B",
    border:    "#E0DDD8",
    overlay:   "rgba(17,17,17,0.52)",
}

const SERIF = "'Cormorant Garamond', Georgia, 'Times New Roman', serif"
const SANS  = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"

const fadeUp = {
    hidden:  { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
    }),
}

// ─── MOBILE HOOK ─────────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [breakpoint])
    return isMobile
}

// ─── HELPERS ─────────────────────────────────────────────────
function AnimBlock({ delay = 0, children, style = {} }: { delay?: number; children: React.ReactNode; style?: React.CSSProperties }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={delay}
            style={style}
        >
            {children}
        </motion.div>
    )
}

function Section({ id, bg = C.offwhite, children, style = {} }: {
    id?: string
    bg?: string
    children: React.ReactNode
    style?: React.CSSProperties
}) {
    const isMobile = useIsMobile()
    return (
        <section
            id={id}
            style={{
                background: bg,
                width: "100%",
                padding: isMobile ? "64px 24px" : "120px 48px",
                boxSizing: "border-box",
                ...style,
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
        </section>
    )
}

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <p style={{
            fontFamily: SANS,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase" as const,
            color: light ? C.gold : C.gold,
            margin: "0 0 20px",
        }}>
            {children}
        </p>
    )
}

function H2({ children, light = false, center = false }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
    return (
        <h2 style={{
            fontFamily: SERIF,
            fontSize: "clamp(32px, 3.5vw, 44px)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: light ? C.surface : C.charcoal,
            margin: 0,
            textAlign: center ? "center" : "left",
        }}>
            {children}
        </h2>
    )
}

// ─── BUTTONS ─────────────────────────────────────────────────
function BtnPrimary({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) {
    const [hov, setHov] = useState(false)
    const style: React.CSSProperties = {
        display: "inline-block",
        background: hov ? "#2A2A2A" : C.charcoal,
        color: C.surface,
        fontFamily: SANS,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "16px 36px",
        textDecoration: "none",
        cursor: "pointer",
        border: "none",
        transition: "background 0.2s",
        outline: "none",
    }
    if (href) return (
        <a href={href} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            {children}
        </a>
    )
    return (
        <button style={style} onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            {children}
        </button>
    )
}

function BtnGhost({ children, href }: { children: React.ReactNode; href?: string }) {
    const [hov, setHov] = useState(false)
    const style: React.CSSProperties = {
        display: "inline-block",
        background: hov ? C.charcoal : "transparent",
        color: hov ? C.surface : C.charcoal,
        fontFamily: SANS,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "15px 35px",
        border: `1px solid ${C.charcoal}`,
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.2s",
    }
    return (
        <a href={href} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            {children}
        </a>
    )
}

// ─── NAV ─────────────────────────────────────────────────────
function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const isMobile = useIsMobile()

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40)
        window.addEventListener("scroll", handler)
        return () => window.removeEventListener("scroll", handler)
    }, [])

    // Close menu on scroll
    useEffect(() => {
        if (scrolled) setMenuOpen(false)
    }, [scrolled])

    const navStyle: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isMobile ? "0 24px" : "0 48px",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled || menuOpen ? "rgba(248,247,244,0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled || menuOpen ? `1px solid ${C.border}` : "none",
        transition: "all 0.35s ease",
        boxSizing: "border-box",
    }

    const linkStyle: React.CSSProperties = {
        fontFamily: SANS,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: scrolled ? C.charcoal : C.surface,
        textDecoration: "none",
        transition: "color 0.2s",
    }

    const logoColor = scrolled || menuOpen ? C.charcoal : C.surface

    return (
        <>
            <nav style={navStyle}>
                <a href="#" style={{ textDecoration: "none" }}>
                    <span style={{
                        fontFamily: SERIF,
                        fontSize: 20,
                        fontWeight: 400,
                        letterSpacing: "0.06em",
                        color: logoColor,
                        transition: "color 0.2s",
                    }}>
                        Forma Engenharia
                    </span>
                </a>

                {isMobile ? (
                    // Mobile: hamburger button
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: 8,
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                        }}
                    >
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: "block",
                                width: 22,
                                height: 1.5,
                                background: logoColor,
                                transition: "all 0.25s",
                                transform: menuOpen
                                    ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                                    : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                                    : "scaleX(0)"
                                    : "none",
                            }} />
                        ))}
                    </button>
                ) : (
                    // Desktop: full nav links
                    <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
                        <a href="#projetos" style={linkStyle}>Projetos</a>
                        <a href="#processo" style={linkStyle}>Como trabalhamos</a>
                        <a href="#contato" style={linkStyle}>Contato</a>
                        <a
                            href="#contato"
                            style={{
                                fontFamily: SANS,
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: scrolled ? C.charcoal : C.surface,
                                textDecoration: "none",
                                border: `1px solid ${scrolled ? C.charcoal : C.surface}`,
                                padding: "10px 22px",
                                transition: "all 0.2s",
                            }}
                        >
                            Agende uma conversa
                        </a>
                    </div>
                )}
            </nav>

            {/* Mobile dropdown menu */}
            {isMobile && (
                <div style={{
                    position: "fixed",
                    top: 72,
                    left: 0,
                    right: 0,
                    zIndex: 99,
                    background: "rgba(248,247,244,0.98)",
                    backdropFilter: "blur(12px)",
                    borderBottom: `1px solid ${C.border}`,
                    padding: menuOpen ? "24px 24px 32px" : "0 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: menuOpen ? 24 : 0,
                    maxHeight: menuOpen ? 300 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease, padding 0.35s ease",
                }}>
                    {["#projetos:Projetos", "#processo:Como trabalhamos", "#contato:Contato"].map(item => {
                        const [href, label] = item.split(":")
                        return (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    fontFamily: SANS,
                                    fontSize: 14,
                                    fontWeight: 500,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: C.charcoal,
                                    textDecoration: "none",
                                }}
                            >
                                {label}
                            </a>
                        )
                    })}
                    <a
                        href="#contato"
                        onClick={() => setMenuOpen(false)}
                        style={{
                            marginTop: 8,
                            display: "inline-block",
                            background: C.charcoal,
                            color: C.surface,
                            fontFamily: SANS,
                            fontSize: 12,
                            fontWeight: 500,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            padding: "14px 28px",
                            textDecoration: "none",
                            textAlign: "center",
                        }}
                    >
                        Agende uma conversa
                    </a>
                </div>
            )}
        </>
    )
}

// ─── HERO ─────────────────────────────────────────────────────
function Hero() {
    const isMobile = useIsMobile()
    return (
        <section style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            minHeight: 640,
            display: "flex",
            alignItems: "flex-end",
            padding: isMobile ? "0 24px 80px" : "0 48px 96px",
            boxSizing: "border-box",
            overflow: "hidden",
        }}>
            {/* Background image — replace with real project photo */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }} />
            {/* Overlay */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(17,17,17,0.72) 0%, rgba(17,17,17,0.18) 60%, transparent 100%)",
            }} />

            <div style={{ position: "relative", maxWidth: 1200, width: "100%", margin: "0 auto" }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        fontFamily: SANS,
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: C.gold,
                        margin: "0 0 20px",
                    }}
                >
                    Incorporação e Construção · Belo Horizonte
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontFamily: SERIF,
                        fontSize: isMobile ? "clamp(38px, 10vw, 48px)" : "clamp(44px, 6vw, 80px)",
                        fontWeight: 300,
                        lineHeight: 1.08,
                        letterSpacing: "-0.02em",
                        color: C.surface,
                        margin: "0 0 24px",
                        maxWidth: 760,
                    }}
                >
                    Engenharia de alto padrão.
                    <br />
                    Do projeto à entrega.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    style={{
                        fontFamily: SANS,
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,0.78)",
                        margin: "0 0 40px",
                        maxWidth: 520,
                    }}
                >
                    A Forma Engenharia projeta e constrói imóveis de alto luxo em Belo Horizonte com controle total do processo — porque cada detalhe é resultado de uma decisão técnica.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <BtnPrimary href="#contato">Agende uma conversa</BtnPrimary>
                </motion.div>
            </div>
        </section>
    )
}

// ─── DIFERENCIAIS ─────────────────────────────────────────────
const DIFERENCIAIS = [
    {
        num: "01",
        title: "Controle do processo",
        body: "Da incorporação à entrega, tudo sob nossa gestão. Sem terceirização das etapas que definem a qualidade.",
    },
    {
        num: "02",
        title: "Rigor técnico",
        body: "Projetos desenvolvidos com equipe própria de engenharia. Cada especificação é escolhida, não aceita.",
    },
    {
        num: "03",
        title: "Acabamento de excelência",
        body: "Trabalhamos com fornecedores e materiais que sustentam o padrão prometido — e documentamos cada escolha.",
    },
    {
        num: "04",
        title: "Prazo como compromisso",
        body: "Cronograma é parte do produto. Cumprimos porque planejamos para cumprir.",
    },
]

function Diferenciais() {
    return (
        <Section id="diferenciais" bg={C.offwhite}>
            <AnimBlock>
                <Label>Por que a Forma</Label>
                <H2>O que define nosso trabalho</H2>
            </AnimBlock>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 1,
                marginTop: 64,
                background: C.border,
            }}>
                {DIFERENCIAIS.map((d, i) => (
                    <AnimBlock key={d.num} delay={i * 0.1} style={{ background: C.offwhite, padding: "48px 40px" }}>
                        <p style={{
                            fontFamily: SERIF,
                            fontSize: 36,
                            fontWeight: 300,
                            color: C.gold,
                            margin: "0 0 20px",
                            lineHeight: 1,
                        }}>
                            {d.num}
                        </p>
                        <h3 style={{
                            fontFamily: SANS,
                            fontSize: 15,
                            fontWeight: 500,
                            letterSpacing: "0.04em",
                            color: C.charcoal,
                            margin: "0 0 12px",
                        }}>
                            {d.title}
                        </h3>
                        <p style={{
                            fontFamily: SANS,
                            fontSize: 15,
                            fontWeight: 400,
                            lineHeight: 1.7,
                            color: C.mid,
                            margin: 0,
                        }}>
                            {d.body}
                        </p>
                    </AnimBlock>
                ))}
            </div>
        </Section>
    )
}

// ─── PROCESSO ────────────────────────────────────────────────
const ETAPAS = [
    {
        n: "1",
        title: "Briefing e viabilidade",
        body: "Entendemos o que você quer construir e avaliamos a viabilidade técnica e financeira antes de qualquer compromisso.",
    },
    {
        n: "2",
        title: "Projeto executivo",
        body: "Desenvolvemos o projeto completo internamente — arquitetura, estrutura, instalações. Sem lacunas entre os projetos.",
    },
    {
        n: "3",
        title: "Obra gerenciada",
        body: "Execução com equipe própria, cronograma detalhado e relatórios periódicos. Você acompanha sem precisar estar presente.",
    },
    {
        n: "4",
        title: "Entrega e pós-obra",
        body: "Vistoria técnica, documentação completa e suporte pós-entrega. O relacionamento não termina na entrega das chaves.",
    },
]

function Processo() {
    return (
        <Section id="processo" bg={C.surface}>
            <AnimBlock>
                <Label>Nosso processo</Label>
                <H2>Como trabalhamos</H2>
            </AnimBlock>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 48,
                marginTop: 64,
            }}>
                {ETAPAS.map((e, i) => (
                    <AnimBlock key={e.n} delay={i * 0.12}>
                        <div style={{
                            width: 1,
                            height: 40,
                            background: C.gold,
                            marginBottom: 24,
                        }} />
                        <p style={{
                            fontFamily: SERIF,
                            fontSize: 13,
                            fontWeight: 400,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: C.gold,
                            margin: "0 0 8px",
                        }}>
                            Etapa {e.n}
                        </p>
                        <h3 style={{
                            fontFamily: SANS,
                            fontSize: 16,
                            fontWeight: 500,
                            color: C.charcoal,
                            margin: "0 0 12px",
                        }}>
                            {e.title}
                        </h3>
                        <p style={{
                            fontFamily: SANS,
                            fontSize: 15,
                            fontWeight: 400,
                            lineHeight: 1.7,
                            color: C.mid,
                            margin: 0,
                        }}>
                            {e.body}
                        </p>
                    </AnimBlock>
                ))}
            </div>
        </Section>
    )
}

// ─── PORTFÓLIO ───────────────────────────────────────────────
const PROJETOS = [
    {
        title: "Residência [Nome]",
        location: "Serra, BH",
        type: "Residencial",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
        title: "Residência [Nome]",
        location: "Belvedere, BH",
        type: "Residencial",
        img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    },
    {
        title: "Residência [Nome]",
        location: "Mangabeiras, BH",
        type: "Residencial",
        img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    },
]

function Portfolio() {
    const isMobile = useIsMobile()
    return (
        <Section id="projetos" bg={C.offwhite}>
            <AnimBlock style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "flex-end",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 24 : 0,
                marginBottom: 16,
            }}>
                <div>
                    <Label>Portfólio</Label>
                    <H2>Projetos selecionados</H2>
                    <p style={{
                        fontFamily: SANS,
                        fontSize: 15,
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: C.mid,
                        margin: "16px 0 0",
                        maxWidth: 520,
                    }}>
                        Cada obra é uma referência técnica. Apresentamos um recorte do que construímos — não o volume, mas o que representa nosso padrão.
                    </p>
                </div>
                {!isMobile && <BtnGhost href="#contato">Ver portfólio completo</BtnGhost>}
            </AnimBlock>

            {isMobile ? (
                // Mobile: horizontal scroll carousel with snap
                <div style={{
                    display: "flex",
                    gap: 12,
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    marginTop: 32,
                    marginLeft: -24,
                    marginRight: -24,
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingBottom: 4,
                }}>
                    {PROJETOS.map((p, i) => (
                        <div key={i} style={{ minWidth: "78vw", scrollSnapAlign: "start", flexShrink: 0 }}>
                            <ProjectCard project={p} delay={0} />
                        </div>
                    ))}
                </div>
            ) : (
                // Desktop: grid
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 2,
                    background: C.border,
                    marginTop: 48,
                }}>
                    {PROJETOS.map((p, i) => (
                        <ProjectCard key={i} project={p} delay={i * 0.1} />
                    ))}
                </div>
            )}

            {isMobile && (
                <div style={{ marginTop: 32 }}>
                    <BtnGhost href="#contato">Ver portfólio completo</BtnGhost>
                </div>
            )}
        </Section>
    )
}

function ProjectCard({ project, delay }: { project: typeof PROJETOS[0]; delay: number }) {
    const [hov, setHov] = useState(false)
    return (
        <AnimBlock delay={delay}>
            <div
                style={{
                    position: "relative",
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    cursor: "pointer",
                    background: C.charcoal,
                }}
                onMouseEnter={() => setHov(true)}
                onMouseLeave={() => setHov(false)}
            >
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url('${project.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: hov ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.6s ease",
                }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: hov
                        ? "linear-gradient(to top, rgba(17,17,17,0.82) 0%, rgba(17,17,17,0.1) 70%)"
                        : "linear-gradient(to top, rgba(17,17,17,0.55) 0%, transparent 60%)",
                    transition: "background 0.4s ease",
                }} />
                <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "32px 28px",
                }}>
                    <p style={{
                        fontFamily: SANS,
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: C.gold,
                        margin: "0 0 6px",
                    }}>
                        {project.type} · {project.location}
                    </p>
                    <p style={{
                        fontFamily: SERIF,
                        fontSize: 22,
                        fontWeight: 400,
                        color: C.surface,
                        margin: 0,
                    }}>
                        {project.title}
                    </p>
                </div>
            </div>
        </AnimBlock>
    )
}

// ─── NÚMEROS ─────────────────────────────────────────────────
const STATS = [
    { value: "[XX]", label: "anos de mercado" },
    { value: "[XX]", label: "projetos entregues" },
    { value: "[XX.XXX]", label: "m² construídos" },
    { value: "[XX]%", label: "clientes que voltam" },
]

function Numeros() {
    const isMobile = useIsMobile()
    return (
        <Section bg={C.dark} style={{ padding: isMobile ? "64px 24px" : "96px 48px" }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 2,
                background: "rgba(255,255,255,0.06)",
            }}>
                {STATS.map((s, i) => (
                    <AnimBlock key={i} delay={i * 0.1} style={{
                        background: C.dark,
                        padding: isMobile ? "40px 24px" : "56px 40px",
                        textAlign: "center",
                    }}>
                        <p style={{
                            fontFamily: SERIF,
                            fontSize: "clamp(40px, 4vw, 56px)",
                            fontWeight: 300,
                            color: C.surface,
                            margin: "0 0 8px",
                            lineHeight: 1,
                        }}>
                            {s.value}
                        </p>
                        <p style={{
                            fontFamily: SANS,
                            fontSize: 12,
                            fontWeight: 400,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: C.mid,
                            margin: 0,
                        }}>
                            {s.label}
                        </p>
                    </AnimBlock>
                ))}
            </div>
        </Section>
    )
}

// ─── DEPOIMENTO ──────────────────────────────────────────────
function Depoimento() {
    return (
        <Section bg={C.surface}>
            <AnimBlock style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                <p style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: C.charcoal,
                    margin: "0 0 32px",
                }}>
                    "A Forma foi a única empresa que me apresentou um cronograma detalhado antes de assinar o contrato — e cumpriu. Isso, por si só, já justificou a escolha."
                </p>
                <div style={{ width: 40, height: 1, background: C.gold, margin: "0 auto 20px" }} />
                <p style={{
                    fontFamily: SANS,
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: C.mid,
                    margin: 0,
                }}>
                    Cliente · Residência Alto Padrão, Serra/BH
                </p>
            </AnimBlock>
        </Section>
    )
}

// ─── CTA FINAL ───────────────────────────────────────────────
function CTAFinal() {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")
    const [sent, setSent] = useState(false)
    const [focusedField, setFocusedField] = useState<string | null>(null)
    const isMobile = useIsMobile()

    const inputStyle = (fieldName: string): React.CSSProperties => ({
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: `1px solid ${focusedField === fieldName ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)"}`,
        padding: "14px 0",
        fontFamily: SANS,
        fontSize: 15,
        color: C.surface,
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 0.2s",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Replace with real form endpoint — Formspree, Netlify Forms, or mailto fallback
        const mailtoHref = `mailto:YOUR_EMAIL?subject=Contato via site — Forma Engenharia&body=Nome: ${name}%0AContato: ${contact}%0AMensagem: ${message}`
        window.location.href = mailtoHref
        setSent(true)
    }

    return (
        <Section id="contato" bg={C.charcoal} style={{ padding: isMobile ? "64px 24px" : "120px 48px" }}>
            <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 48 : 96,
                alignItems: "start",
            }}>
                <AnimBlock>
                    <Label light>Contato</Label>
                    <h2 style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(32px, 3.5vw, 48px)",
                        fontWeight: 300,
                        lineHeight: 1.15,
                        color: C.surface,
                        margin: "0 0 24px",
                    }}>
                        Pronto para construir com quem domina cada etapa?
                    </h2>
                    <p style={{
                        fontFamily: SANS,
                        fontSize: 16,
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.58)",
                        margin: 0,
                    }}>
                        Uma conversa é suficiente para entendermos o que você precisa — e para você entender como trabalhamos.
                    </p>
                </AnimBlock>

                <AnimBlock delay={0.15}>
                    {sent ? (
                        <div style={{
                            padding: "48px 0",
                            fontFamily: SERIF,
                            fontSize: 22,
                            fontWeight: 300,
                            color: C.surface,
                        }}>
                            Mensagem enviada. Entraremos em contato em breve.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            <input
                                style={inputStyle("nome")}
                                placeholder="Nome"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onFocus={() => setFocusedField("nome")}
                                onBlur={() => setFocusedField(null)}
                                required
                                autoComplete="name"
                            />
                            <input
                                style={inputStyle("contato")}
                                type="tel"
                                placeholder="Telefone ou e-mail"
                                value={contact}
                                onChange={e => setContact(e.target.value)}
                                onFocus={() => setFocusedField("contato")}
                                onBlur={() => setFocusedField(null)}
                                required
                                autoComplete="tel"
                            />
                            <textarea
                                style={{ ...inputStyle("mensagem"), resize: "none", minHeight: 80 }}
                                placeholder="Mensagem (opcional)"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                onFocus={() => setFocusedField("mensagem")}
                                onBlur={() => setFocusedField(null)}
                                rows={3}
                            />
                            <div>
                                <button
                                    type="submit"
                                    style={{
                                        background: C.gold,
                                        color: C.surface,
                                        fontFamily: SANS,
                                        fontSize: 12,
                                        fontWeight: 500,
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        padding: "16px 40px",
                                        border: "none",
                                        cursor: "pointer",
                                        width: isMobile ? "100%" : "auto",
                                        outline: "none",
                                    }}
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    )}
                </AnimBlock>
            </div>
        </Section>
    )
}

// ─── FOOTER ──────────────────────────────────────────────────
function Footer() {
    const isMobile = useIsMobile()
    return (
        <footer style={{
            background: C.dark,
            padding: isMobile ? "40px 24px" : "48px 48px",
            boxSizing: "border-box",
            borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                flexDirection: isMobile ? "column" : "row",
                flexWrap: "wrap",
                gap: 24,
            }}>
                <div>
                    <span style={{
                        fontFamily: SERIF,
                        fontSize: 18,
                        fontWeight: 400,
                        letterSpacing: "0.06em",
                        color: C.surface,
                        display: "block",
                        marginBottom: 8,
                    }}>
                        Forma Engenharia
                    </span>
                    <span style={{
                        fontFamily: SANS,
                        fontSize: 12,
                        color: C.mid,
                    }}>
                        Belo Horizonte, MG
                    </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <a href="mailto:YOUR_EMAIL" style={{
                        fontFamily: SANS,
                        fontSize: 13,
                        fontWeight: 400,
                        color: C.mid,
                        textDecoration: "none",
                    }}>
                        [E-mail]
                    </a>
                    <a href="tel:YOUR_PHONE" style={{
                        fontFamily: SANS,
                        fontSize: 13,
                        fontWeight: 400,
                        color: C.mid,
                        textDecoration: "none",
                    }}>
                        [Telefone]
                    </a>
                </div>

                <div style={{ display: "flex", gap: 32 }}>
                    {["Instagram", "LinkedIn"].map(link => (
                        <a key={link} href="#" style={{
                            fontFamily: SANS,
                            fontSize: 12,
                            fontWeight: 400,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: C.mid,
                            textDecoration: "none",
                        }}>
                            {link}
                        </a>
                    ))}
                </div>

                <p style={{
                    fontFamily: SANS,
                    fontSize: 12,
                    color: C.mid,
                    margin: 0,
                    width: isMobile ? "100%" : "auto",
                }}>
                    © 2026 Forma Engenharia · CREA-MG [número]
                </p>
            </div>
        </footer>
    )
}

// ─── MOBILE CTA BAR ──────────────────────────────────────────
function MobileCTA() {
    const isMobile = useIsMobile()
    if (!isMobile) return null
    return (
        <div style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 90,
            padding: "12px 16px",
            background: C.charcoal,
            borderTop: `1px solid rgba(255,255,255,0.08)`,
        }}>
            <a href="#contato" style={{
                display: "block",
                textAlign: "center",
                fontFamily: SANS,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.surface,
                textDecoration: "none",
                padding: "14px",
                background: C.gold,
            }}>
                Agende uma conversa
            </a>
        </div>
    )
}

// ─── ROOT ────────────────────────────────────────────────────
export default function FormaEngenharia() {
    return (
        <div style={{ fontFamily: SANS, background: C.offwhite, overflowX: "hidden" }}>
            <Nav />
            <Hero />
            <Diferenciais />
            <Processo />
            <Portfolio />
            <Numeros />
            <Depoimento />
            <CTAFinal />
            <Footer />
            <MobileCTA />
        </div>
    )
}
