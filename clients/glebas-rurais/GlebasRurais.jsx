// ============================================================
// GLEBAS RURAIS — Landing Page
// Paste this into Framer: Assets → Code → + New File
//
// BEFORE PASTING:
//   1. Add fonts in Framer → Site Settings → Fonts:
//      • Cormorant Garamond (Regular 400, Medium 500, SemiBold 600)
//      • DM Sans (Regular 400, Medium 500, SemiBold 600)
//   2. Replace YOUR_WHATSAPP_NUMBER with e.g. 5531999999999
//   3. Replace YOUR_EMAIL with your real email
//   4. Replace placeholder images with real Unsplash or uploaded photos
// ============================================================

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

// ─── DESIGN TOKENS ───────────────────────────────────────────
const C = {
    base: "#F8F5F0",
    surface: "#FFFFFF",
    forest: "#2A3D2E",
    earth: "#8B7355",
    stone: "#C4BFB5",
    graphite: "#2C2C2C",
    mid: "#6B6B6B",
    light: "#E8E3DC",
}

const SERIF = "'Cormorant Garamond', Georgia, serif"
const SANS = "'DM Sans', system-ui, sans-serif"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
    }),
}

// ─── SECTION WRAPPER ─────────────────────────────────────────
function Section({ id, bg = C.surface, children, style = {} }) {
    return (
        <section
            id={id}
            style={{
                background: bg,
                width: "100%",
                padding: "120px 48px",
                boxSizing: "border-box",
                ...style,
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
        </section>
    )
}

// ─── ANIMATED SECTION HEADING ─────────────────────────────────
function SectionLabel({ children }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    return (
        <motion.p
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
            style={{
                fontFamily: SANS,
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.earth,
                margin: "0 0 16px",
            }}
        >
            {children}
        </motion.p>
    )
}

function SectionHeading({ children, light = false, center = false }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    return (
        <motion.h2
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.1}
            style={{
                fontFamily: SERIF,
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: light ? C.surface : C.forest,
                margin: 0,
                textAlign: center ? "center" : "left",
            }}
        >
            {children}
        </motion.h2>
    )
}

// ─── BUTTONS ──────────────────────────────────────────────────
function BtnPrimary({ children, href, onClick }) {
    const [hov, setHov] = useState(false)
    const style = {
        display: "inline-block",
        background: hov ? "#1A2A1E" : C.forest,
        color: C.surface,
        fontFamily: SANS,
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textDecoration: "none",
        padding: "14px 32px",
        borderRadius: 2,
        border: "none",
        cursor: "pointer",
        transition: "background 200ms ease, box-shadow 200ms ease",
        boxShadow: hov ? "0 4px 16px rgba(42,61,46,0.28)" : "none",
    }
    return href ? (
        <a href={href} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            {children}
        </a>
    ) : (
        <button style={style} onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            {children}
        </button>
    )
}

function BtnOutline({ children, href, dark = false }) {
    const [hov, setHov] = useState(false)
    const border = dark ? "rgba(255,255,255,0.6)" : C.forest
    const style = {
        display: "inline-block",
        background: hov ? (dark ? "rgba(255,255,255,0.12)" : C.forest) : "transparent",
        color: hov && !dark ? C.surface : dark ? C.surface : C.forest,
        fontFamily: SANS,
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textDecoration: "none",
        padding: "13px 31px",
        borderRadius: 2,
        border: `1.5px solid ${border}`,
        cursor: "pointer",
        transition: "all 200ms ease",
    }
    return (
        <a href={href} style={style} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            {children}
        </a>
    )
}

// ─── NAV ──────────────────────────────────────────────────────
function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn)
    }, [])

    const links = [
        { label: "Glebas", href: "#glebas" },
        { label: "Infraestrutura", href: "#infraestrutura" },
        { label: "Localização", href: "#brumadinho" },
        { label: "Contato", href: "#contato" },
    ]

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    height: 72,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 48px",
                    background: scrolled ? "rgba(248,245,240,0.92)" : "transparent",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    borderBottom: scrolled ? `1px solid rgba(196,191,181,0.35)` : "1px solid transparent",
                    transition: "all 350ms ease",
                    boxSizing: "border-box",
                }}
            >
                {/* Logo */}
                <a
                    href="#hero"
                    style={{
                        fontFamily: SERIF,
                        fontSize: 20,
                        fontWeight: 500,
                        color: scrolled ? C.forest : C.surface,
                        textDecoration: "none",
                        letterSpacing: "0.02em",
                        transition: "color 350ms ease",
                    }}
                >
                    Glebas Rurais
                </a>

                {/* Links desktop */}
                <div
                    style={{
                        display: "flex",
                        gap: 40,
                        // hide on narrow screens via CSS is tricky inline — hide at 900px
                    }}
                >
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            style={{
                                fontFamily: SANS,
                                fontSize: 14,
                                fontWeight: 500,
                                color: scrolled ? C.graphite : "rgba(255,255,255,0.85)",
                                textDecoration: "none",
                                transition: "color 200ms ease",
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="#contato"
                    style={{
                        fontFamily: SANS,
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.07em",
                        color: scrolled ? C.surface : C.surface,
                        background: scrolled ? C.forest : "rgba(255,255,255,0.18)",
                        border: scrolled ? "none" : "1.5px solid rgba(255,255,255,0.5)",
                        padding: "10px 24px",
                        borderRadius: 2,
                        textDecoration: "none",
                        transition: "all 300ms ease",
                    }}
                >
                    Agendar Visita
                </a>
            </nav>
        </>
    )
}

// ─── HERO ─────────────────────────────────────────────────────
function Hero() {
    return (
        <section
            id="hero"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                minHeight: 600,
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-end",
            }}
        >
            {/* Background image */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(160deg, #2A3D2E 0%, #4a6741 50%, #6b8a62 100%)`,
                    // Replace below with: backgroundImage: "url('YOUR_HERO_IMAGE_URL')"
                    // backgroundSize: "cover",
                    // backgroundPosition: "center",
                }}
            />

            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15,22,15,0.72) 0%, rgba(15,22,15,0.25) 60%, transparent 100%)",
                }}
            />

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: 760,
                    padding: "0 80px 96px",
                    boxSizing: "border-box",
                }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontFamily: SANS,
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.65)",
                        margin: "0 0 20px",
                    }}
                >
                    Brumadinho, Minas Gerais
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(48px, 6.5vw, 80px)",
                        fontWeight: 400,
                        lineHeight: 1.05,
                        color: C.surface,
                        margin: 0,
                    }}
                >
                    Campo com estrutura.
                    <br />
                    Silêncio com acesso.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontFamily: SANS,
                        fontSize: 17,
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: "rgba(255,255,255,0.78)",
                        margin: "28px 0 0",
                        maxWidth: 520,
                    }}
                >
                    Três glebas registradas individualmente em Brumadinho, MG.
                    Infraestrutura instalada, documentação em ordem.
                    A 50 km de Belo Horizonte.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.72, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "flex", gap: 16, marginTop: 44, flexWrap: "wrap" }}
                >
                    <BtnPrimary href="#glebas">Conhecer as Glebas</BtnPrimary>
                    <BtnOutline href="#contato" dark>Agendar uma Visita</BtnOutline>
                </motion.div>
            </div>
        </section>
    )
}

// ─── POSITIONING ──────────────────────────────────────────────
function Positioning() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    const features = [
        {
            icon: "⬟",
            title: "Acesso pavimentado",
            desc: "Via em pedra fincada até as glebas — durável, de baixa manutenção.",
        },
        {
            icon: "◎",
            title: "Água e energia",
            desc: "Rede municipal + poço artesiano. Energia elétrica disponível para conexão.",
        },
        {
            icon: "▣",
            title: "Documentação regular",
            desc: "Registro individual por gleba. Conformidade INCRA. Documentos disponíveis.",
        },
    ]

    return (
        <Section id="posicionamento" bg={C.surface}>
            <div style={{ maxWidth: 760, margin: "0 auto 80px", textAlign: "center" }}>
                <SectionLabel>Campo com Conforto</SectionLabel>
                <SectionHeading center>Um lugar que já funciona.</SectionHeading>
                <motion.p
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.2}
                    style={{
                        fontFamily: SANS,
                        fontSize: 17,
                        lineHeight: 1.7,
                        color: C.mid,
                        marginTop: 28,
                    }}
                >
                    Estas glebas não são terra bruta à espera de investimentos. São propriedades
                    com acesso pavimentado em pedra, abastecimento de água municipal e poço artesiano,
                    energia elétrica disponível e registro individual já regularizado. Tudo que transforma
                    um lote em um lugar de uso real.
                </motion.p>
                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.3}
                    style={{
                        fontFamily: SANS,
                        fontSize: 17,
                        lineHeight: 1.7,
                        color: C.mid,
                        marginTop: 20,
                    }}
                >
                    A proposta é simples: áreas rurais em Brumadinho que já estão prontas para
                    receber uma casa de campo, um projeto de moradia permanente ou um uso rural
                    de pequena escala — sem a burocracia e os custos típicos de uma propriedade
                    sem infraestrutura.
                </motion.p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 40,
                    borderTop: `1px solid ${C.light}`,
                    paddingTop: 56,
                }}
            >
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        custom={0.2 + i * 0.1}
                        style={{ display: "flex", flexDirection: "column", gap: 12 }}
                    >
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                background: "rgba(42,61,46,0.08)",
                                borderRadius: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 18,
                                color: C.forest,
                            }}
                        >
                            {f.icon}
                        </div>
                        <p style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: C.graphite, margin: 0 }}>
                            {f.title}
                        </p>
                        <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.6, color: C.mid, margin: 0 }}>
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

// ─── GLEBA CARD ───────────────────────────────────────────────
function GlebaCard({ name, area, price, description, delay = 0, bg }) {
    const [hov, setHov] = useState(false)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })

    const features = [
        "Registro individual",
        "Acesso pavimentado",
        "Água disponível",
        "Energia disponível",
    ]

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={delay}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                background: C.surface,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: hov ? "0 12px 40px rgba(0,0,0,0.12)" : "0 2px 16px rgba(0,0,0,0.06)",
                transform: hov ? "translateY(-6px)" : "translateY(0)",
                transition: "all 280ms ease",
            }}
        >
            {/* Image placeholder */}
            <div
                style={{
                    height: 240,
                    background: bg || "linear-gradient(135deg, #3d5c3f 0%, #6b8a62 100%)",
                    position: "relative",
                    overflow: "hidden",
                    // Replace with: backgroundImage: "url('...')", backgroundSize: "cover", backgroundPosition: "center"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        background: "rgba(248,245,240,0.94)",
                        padding: "6px 14px",
                        borderRadius: 2,
                        fontFamily: SANS,
                        fontSize: 12,
                        fontWeight: 600,
                        color: C.forest,
                        letterSpacing: "0.06em",
                    }}
                >
                    {name}
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: "32px 32px 36px" }}>
                <p style={{ fontFamily: SANS, fontSize: 13, color: C.mid, margin: 0 }}>{area}</p>
                <p
                    style={{
                        fontFamily: SERIF,
                        fontSize: 34,
                        fontWeight: 500,
                        color: C.forest,
                        margin: "8px 0 0",
                        lineHeight: 1,
                    }}
                >
                    {price}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                    {features.map((f) => (
                        <span
                            key={f}
                            style={{
                                fontFamily: SANS,
                                fontSize: 11,
                                color: C.forest,
                                border: `1px solid ${C.stone}`,
                                padding: "4px 10px",
                                borderRadius: 2,
                            }}
                        >
                            {f}
                        </span>
                    ))}
                </div>

                <p
                    style={{
                        fontFamily: SANS,
                        fontSize: 15,
                        lineHeight: 1.65,
                        color: C.mid,
                        margin: "20px 0 28px",
                    }}
                >
                    {description}
                </p>

                <a
                    href="#contato"
                    style={{
                        display: "block",
                        textAlign: "center",
                        fontFamily: SANS,
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        color: C.forest,
                        border: `1.5px solid ${C.forest}`,
                        padding: "13px",
                        borderRadius: 2,
                        textDecoration: "none",
                        transition: "all 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = C.forest
                        e.currentTarget.style.color = C.surface
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent"
                        e.currentTarget.style.color = C.forest
                    }}
                >
                    Solicitar Informações →
                </a>
            </div>
        </motion.div>
    )
}

function Glebas() {
    const glebas = [
        {
            name: "Gleba A",
            area: "2,0063 ha",
            price: "R$ 450.000",
            description:
                "A menor das três glebas em extensão, com a melhor relação entre área e custo por hectare. Ideal para quem busca uma propriedade rural funcional com estrutura instalada.",
            bg: "linear-gradient(135deg, #3d5c3f 0%, #5a7a5c 100%)",
        },
        {
            name: "Gleba B",
            area: "2,0441 ha",
            price: "R$ 500.000",
            description:
                "Gleba intermediária, com configuração de terreno equilibrada e boa proporção entre área utilizável e preservação natural. Flexível para diferentes projetos de uso.",
            bg: "linear-gradient(135deg, #4a6741 0%, #6b8a62 100%)",
        },
        {
            name: "Gleba C",
            area: "2,0796 ha",
            price: "R$ 550.000",
            description:
                "A maior das três glebas, com maior área e potencial de aproveitamento. Recomendada para quem deseja mais espaço para um projeto de moradia rural ou uso produtivo de pequena escala.",
            bg: "linear-gradient(135deg, #556b44 0%, #7a9a6a 100%)",
        },
    ]

    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <Section id="glebas" bg={C.light}>
            <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
                <SectionLabel>Disponíveis</SectionLabel>
                <SectionHeading center>
                    Três glebas, cada uma com
                    <br />
                    registro próprio.
                </SectionHeading>
                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.2}
                    style={{
                        fontFamily: SANS,
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: C.mid,
                        marginTop: 20,
                        maxWidth: 540,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Áreas entre 2,0 e 2,1 hectares. Todas com infraestrutura compartilhada e
                    documentação individual em ordem.
                </motion.p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 24,
                }}
            >
                {glebas.map((g, i) => (
                    <GlebaCard key={i} {...g} delay={0.1 + i * 0.1} />
                ))}
            </div>

            <p
                style={{
                    fontFamily: SANS,
                    fontSize: 13,
                    color: C.mid,
                    textAlign: "center",
                    marginTop: 48,
                    maxWidth: 640,
                    marginLeft: "auto",
                    marginRight: "auto",
                    lineHeight: 1.6,
                }}
            >
                Áreas e valores sujeitos a confirmação após análise do memorial descritivo.
                A existência de APP dentro do perímetro está documentada e deve ser avaliada
                com orientação técnica durante a negociação.
            </p>
        </Section>
    )
}

// ─── POR QUE BRUMADINHO ───────────────────────────────────────
function Brumadinho() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    const items = [
        {
            title: "Acesso direto de BH",
            desc: "A aproximadamente 50 km de Belo Horizonte, com acesso por rotas asfaltadas e consolidadas.",
        },
        {
            title: "Natureza preservada",
            desc: "A região de Grota da Bananeira e Córrego de Alma oferece paisagem de Mata Atlântica em transição, com cursos d'água e vegetação de cerrado.",
        },
        {
            title: "Município consolidado",
            desc: "Brumadinho conta com serviços urbanos, comércio local, saúde básica e infraestrutura de um município estável em MG.",
        },
        {
            title: "Qualidade de vida real",
            desc: "Um fim de semana em campo sem abrir mão de acesso razoável. Um lugar que funciona quando você chega.",
        },
    ]

    return (
        <Section id="brumadinho" bg={C.surface}>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 96,
                    alignItems: "start",
                }}
            >
                {/* Left image */}
                <div
                    style={{
                        borderRadius: 4,
                        overflow: "hidden",
                        height: 560,
                        background: "linear-gradient(160deg, #2A3D2E 0%, #6b8a62 100%)",
                        position: "sticky",
                        top: 96,
                        // Replace with: backgroundImage: "url('...')", backgroundSize: "cover", backgroundPosition: "center"
                    }}
                />

                {/* Right text */}
                <div ref={ref}>
                    <SectionLabel>Localização</SectionLabel>
                    <SectionHeading>
                        A menos de uma hora
                        <br />
                        de Belo Horizonte.
                    </SectionHeading>
                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        custom={0.2}
                        style={{
                            fontFamily: SANS,
                            fontSize: 16,
                            lineHeight: 1.7,
                            color: C.mid,
                            margin: "24px 0 48px",
                        }}
                    >
                        Brumadinho é uma das regiões mais acessíveis e visualmente ricas do entorno de BH —
                        conhecida pela natureza preservada, pela atmosfera tranquila e pela infraestrutura
                        de um município consolidado. Não é isolamento. É distância certa.
                    </motion.p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={fadeUp}
                                custom={0.3 + i * 0.08}
                                style={{
                                    paddingLeft: 24,
                                    borderLeft: `2px solid ${C.light}`,
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: SANS,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: C.graphite,
                                        margin: "0 0 8px",
                                    }}
                                >
                                    {item.title}
                                </p>
                                <p
                                    style={{
                                        fontFamily: SANS,
                                        fontSize: 15,
                                        lineHeight: 1.65,
                                        color: C.mid,
                                        margin: 0,
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

// ─── PARA QUEM É ──────────────────────────────────────────────
function ForWhom() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    const profiles = [
        {
            icon: "⌂",
            title: "Fim de semana em família",
            desc: "Famílias de BH que querem um lugar no campo com estrutura real — sem a complexidade de uma fazenda e sem o artificialismo de um condomínio rural.",
        },
        {
            icon: "◡",
            title: "Moradia no campo",
            desc: "Pessoas que buscam sair da cidade com qualidade de vida, mas sem abrir mão de acesso, documentação clara e infraestrutura básica instalada.",
        },
        {
            icon: "◈",
            title: "Preservação patrimonial",
            desc: "Compradores que valorizam terra registrada, bem documentada e com infraestrutura instalada como forma de diversificação de patrimônio em ativos físicos.",
        },
        {
            icon: "⚘",
            title: "Uso rural de pequena escala",
            desc: "Produtores ou entusiastas com interesse em agricultura familiar, horticultura ou uso produtivo rural dentro da regularidade documental.",
        },
    ]

    return (
        <Section id="para-quem" bg={C.base}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
                <SectionLabel>Perfil do Comprador</SectionLabel>
                <SectionHeading center>
                    Não é para qualquer um.
                    <br />E isso é bom.
                </SectionHeading>
                <motion.p
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.15}
                    style={{
                        fontFamily: SANS,
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: C.mid,
                        marginTop: 20,
                        maxWidth: 520,
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Estas glebas são ideais para perfis específicos de compradores.
                    Se você se identificar com um deles, vale a conversa.
                </motion.p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 24,
                }}
            >
                {profiles.map((p, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        custom={0.15 + i * 0.08}
                        style={{
                            background: C.surface,
                            borderRadius: 4,
                            padding: 36,
                            border: `1px solid ${C.light}`,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 24,
                                color: C.forest,
                                marginBottom: 20,
                            }}
                        >
                            {p.icon}
                        </div>
                        <p
                            style={{
                                fontFamily: SANS,
                                fontSize: 16,
                                fontWeight: 600,
                                color: C.graphite,
                                margin: "0 0 12px",
                            }}
                        >
                            {p.title}
                        </p>
                        <p
                            style={{
                                fontFamily: SANS,
                                fontSize: 15,
                                lineHeight: 1.65,
                                color: C.mid,
                                margin: 0,
                            }}
                        >
                            {p.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

// ─── INFRAESTRUTURA ───────────────────────────────────────────
function Infraestrutura() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    const items = [
        { icon: "⬟", title: "Acesso pavimentado em pedra", desc: "Via de acesso às glebas em pedra fincada — solução durável e de baixa manutenção, adequada ao terreno rural." },
        { icon: "◎", title: "Água municipal", desc: "Abastecimento conectado à rede municipal de água disponível para as glebas." },
        { icon: "◉", title: "Poço artesiano", desc: "Fonte d'água própria já perfurada — alternativa e complemento ao abastecimento municipal." },
        { icon: "⚡", title: "Energia elétrica", desc: "Rede elétrica disponível na área, com possibilidade de conexão para as unidades." },
        { icon: "▣", title: "Registro individual", desc: "Cada gleba possui matrícula própria no cartório de registro de imóveis. São propriedades independentes." },
        { icon: "✓", title: "Documentação regular", desc: "Toda a documentação está em ordem e disponível para análise durante o processo de negociação." },
        { icon: "⊞", title: "INCRA regular", desc: "As glebas estão cadastradas e em conformidade com as exigências do INCRA para imóveis rurais." },
    ]

    return (
        <Section id="infraestrutura" bg={C.surface}>
            <div
                ref={ref}
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 80,
                    alignItems: "start",
                }}
            >
                <div>
                    <SectionLabel>O que já está resolvido</SectionLabel>
                    <SectionHeading>
                        Infraestrutura instalada.
                        <br />
                        Documentação em ordem.
                    </SectionHeading>
                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        custom={0.2}
                        style={{
                            fontFamily: SANS,
                            fontSize: 16,
                            lineHeight: 1.7,
                            color: C.mid,
                            margin: "24px 0 0",
                        }}
                    >
                        Antes de qualquer negociação, é importante saber exatamente o que você
                        está recebendo. Aqui está o que já existe instalado e regularizado.
                    </motion.p>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={fadeUp}
                            custom={0.1 + i * 0.07}
                            style={{
                                display: "flex",
                                gap: 20,
                                padding: "22px 0",
                                borderBottom: i < items.length - 1 ? `1px solid ${C.light}` : "none",
                            }}
                        >
                            <div
                                style={{
                                    width: 36,
                                    height: 36,
                                    background: "rgba(42,61,46,0.07)",
                                    borderRadius: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 14,
                                    color: C.forest,
                                    flexShrink: 0,
                                }}
                            >
                                {item.icon}
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontFamily: SANS,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: C.graphite,
                                        margin: "0 0 6px",
                                    }}
                                >
                                    {item.title}
                                </p>
                                <p
                                    style={{
                                        fontFamily: SANS,
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                        color: C.mid,
                                        margin: 0,
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

// ─── TRANSPARÊNCIA ────────────────────────────────────────────
function Transparencia() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section
            style={{
                background: C.forest,
                padding: "120px 48px",
                boxSizing: "border-box",
            }}
        >
            <div ref={ref} style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0}
                    style={{
                        fontFamily: SANS,
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        margin: "0 0 16px",
                    }}
                >
                    Clareza antes de tudo
                </motion.p>

                <motion.h2
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.1}
                    style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(28px, 3.5vw, 40px)",
                        fontWeight: 400,
                        color: C.surface,
                        margin: 0,
                        lineHeight: 1.2,
                    }}
                >
                    Há APP no perímetro.
                    <br />E você precisa saber disso.
                </motion.h2>

                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.2}
                    style={{
                        fontFamily: SANS,
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: "rgba(255,255,255,0.68)",
                        margin: "28px 0 0",
                    }}
                >
                    Dentro do perímetro das glebas existe área de APP — Área de Preservação Permanente.
                    Isso é uma realidade legal e ambiental presente em grande parte das propriedades
                    rurais do Brasil, e não é algo que escondemos ou minimizamos.
                </motion.p>

                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.28}
                    style={{
                        fontFamily: SANS,
                        fontSize: 16,
                        lineHeight: 1.75,
                        color: "rgba(255,255,255,0.68)",
                        margin: "20px 0 0",
                    }}
                >
                    A área de APP é delineada nos mapas e memoriais descritivos, que ficam
                    disponíveis para análise durante a negociação. Recomendamos fortemente que
                    qualquer comprador realize uma visita técnica e consulte um profissional
                    habilitado antes de tomar sua decisão.
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.36}
                    style={{
                        margin: "48px 0 0",
                        paddingTop: 40,
                        borderTop: "1px solid rgba(255,255,255,0.15)",
                    }}
                >
                    <p
                        style={{
                            fontFamily: SANS,
                            fontSize: 15,
                            color: "rgba(255,255,255,0.55)",
                            margin: "0 0 32px",
                            fontStyle: "italic",
                        }}
                    >
                        Nosso compromisso é com uma negociação transparente. Os documentos técnicos,
                        memoriais e certidões estão disponíveis para consulta mediante solicitação.
                    </p>
                    <BtnOutline href="#contato" dark>
                        Solicitar Documentação Completa
                    </BtnOutline>
                </motion.div>
            </div>
        </section>
    )
}

// ─── GALLERY ─────────────────────────────────────────────────
function Gallery() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    const captions = [
        "Vista aérea — região das glebas",
        "Via de acesso pavimentada em pedra fincada",
        "Paisagem natural do entorno",
        "Vista da cumeada",
        "Vegetação ciliar",
        "Amplitude das glebas",
    ]

    const heights = [320, 220, 220, 260, 260, 200]
    const bgs = [
        "linear-gradient(135deg, #2A3D2E 0%, #4a6741 100%)",
        "linear-gradient(135deg, #3d5c3f 0%, #8B7355 100%)",
        "linear-gradient(135deg, #4a6741 0%, #6b8a62 100%)",
        "linear-gradient(135deg, #2A3D2E 0%, #5a7a5c 100%)",
        "linear-gradient(135deg, #556b44 0%, #7a9a6a 100%)",
        "linear-gradient(135deg, #3d5c3f 0%, #9aad8a 100%)",
    ]

    return (
        <Section bg={C.base}>
            <div ref={ref} style={{ marginBottom: 56 }}>
                <SectionLabel>O Lugar</SectionLabel>
                <SectionHeading>Brumadinho, como ela é.</SectionHeading>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "auto auto",
                    gap: 12,
                }}
            >
                {/* Large item spanning 2 rows */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0}
                    style={{
                        gridRow: "span 2",
                        background: bgs[0],
                        borderRadius: 4,
                        minHeight: 460,
                        position: "relative",
                        overflow: "hidden",
                        // Replace with real image
                    }}
                >
                    <p
                        style={{
                            position: "absolute",
                            bottom: 16,
                            left: 16,
                            fontFamily: SANS,
                            fontSize: 12,
                            color: "rgba(255,255,255,0.75)",
                            margin: 0,
                            background: "rgba(0,0,0,0.35)",
                            padding: "4px 10px",
                            borderRadius: 2,
                        }}
                    >
                        {captions[0]}
                    </p>
                </motion.div>

                {/* Remaining 5 items */}
                {[1, 2, 3, 4, 5].map((idx) => (
                    <motion.div
                        key={idx}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        custom={idx * 0.07}
                        style={{
                            background: bgs[idx],
                            borderRadius: 4,
                            height: heights[idx],
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <p
                            style={{
                                position: "absolute",
                                bottom: 12,
                                left: 12,
                                fontFamily: SANS,
                                fontSize: 11,
                                color: "rgba(255,255,255,0.72)",
                                margin: 0,
                                background: "rgba(0,0,0,0.3)",
                                padding: "3px 8px",
                                borderRadius: 2,
                            }}
                        >
                            {captions[idx]}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

// ─── FAQ ─────────────────────────────────────────────────────
function FAQItem({ question, answer, delay }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-40px" })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={delay}
            style={{ borderBottom: `1px solid ${C.light}` }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 0",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 24,
                }}
            >
                <span
                    style={{
                        fontFamily: SANS,
                        fontSize: 16,
                        fontWeight: 500,
                        color: C.graphite,
                    }}
                >
                    {question}
                </span>
                <span
                    style={{
                        fontFamily: SANS,
                        fontSize: 20,
                        color: C.earth,
                        lineHeight: 1,
                        flexShrink: 0,
                        transition: "transform 250ms ease",
                        transform: open ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                >
                    +
                </span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <p
                            style={{
                                fontFamily: SANS,
                                fontSize: 15,
                                lineHeight: 1.7,
                                color: C.mid,
                                margin: "0 0 24px",
                                maxWidth: 640,
                            }}
                        >
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

function FAQ() {
    const faqs = [
        {
            q: "Onde fica exatamente?",
            a: "As glebas estão localizadas em Brumadinho, Minas Gerais, na região conhecida como Grota da Bananeira e Córrego de Alma. A distância aproximada de Belo Horizonte é de 50 km, com acesso por rotas asfaltadas consolidadas.",
        },
        {
            q: "Já tem escritura individual?",
            a: "Sim. Cada gleba possui matrícula individual no cartório de registro de imóveis. As três propriedades são juridicamente independentes.",
        },
        {
            q: "Tem água e energia disponíveis?",
            a: "Sim. Há abastecimento de água pela rede municipal e poço artesiano já perfurado na área. A rede elétrica está disponível para conexão das unidades.",
        },
        {
            q: "Posso construir nas glebas?",
            a: "A possibilidade e as condições de construção dependem do zoneamento municipal, da delimitação da APP e das regulamentações específicas do imóvel rural. Recomendamos consultar um profissional habilitado com base nos documentos técnicos disponibilizados.",
        },
        {
            q: "O que é a APP e como ela afeta as glebas?",
            a: "APP (Área de Preservação Permanente) é uma delimitação ambiental legal presente em grande parte das propriedades rurais brasileiras, geralmente associada a cursos d'água e topos de morro. Existe APP dentro do perímetro das glebas, devidamente documentada. A extensão exata está nos mapas e memoriais descritivos, disponíveis para análise.",
        },
        {
            q: "Aceita parcelamento?",
            a: "As condições de pagamento são tratadas diretamente com o vendedor e dependem do perfil do comprador e da gleba de interesse. Entre em contato para discutir as possibilidades.",
        },
        {
            q: "Como funciona a visita?",
            a: "As visitas são agendadas com antecedência. Basta entrar em contato pelo formulário ou WhatsApp. Preferimos visitas acompanhadas para que possamos apresentar cada gleba e responder suas dúvidas no local.",
        },
        {
            q: "Quais documentos posso analisar antes de decidir?",
            a: "Disponibilizamos para análise: matrícula individual de cada gleba, memorial descritivo, planta topográfica, certidões e demais documentos pertinentes. Solicite durante o contato ou na visita.",
        },
    ]

    return (
        <Section bg={C.base}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
                <SectionLabel>Perguntas Frequentes</SectionLabel>
                <SectionHeading>
                    O que você precisa saber
                    <br />
                    antes de visitar.
                </SectionHeading>
                <div style={{ marginTop: 56 }}>
                    {faqs.map((f, i) => (
                        <FAQItem key={i} question={f.q} answer={f.a} delay={i * 0.04} />
                    ))}
                </div>
            </div>
        </Section>
    )
}

// ─── CONTACT ─────────────────────────────────────────────────
function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    const [formData, setFormData] = useState({
        nome: "", telefone: "", email: "", gleba: "", mensagem: "",
    })
    const [sent, setSent] = useState(false)

    const WA_NUMBER = "YOUR_WHATSAPP_NUMBER" // e.g. 5531999999999
    const waLink = `https://wa.me/${WA_NUMBER}?text=Ol%C3%A1%2C+tenho+interesse+nas+Glebas+Rurais+em+Brumadinho.`

    const inputStyle = {
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: `1.5px solid ${C.stone}`,
        padding: "12px 0",
        fontFamily: SANS,
        fontSize: 16,
        color: C.graphite,
        outline: "none",
        boxSizing: "border-box",
    }
    const labelStyle = {
        fontFamily: SANS,
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: C.mid,
        display: "block",
        marginBottom: 0,
    }

    return (
        <Section id="contato" bg={C.surface}>
            <div
                ref={ref}
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 96,
                    alignItems: "start",
                }}
            >
                {/* Left */}
                <div>
                    <SectionLabel>Contato</SectionLabel>
                    <SectionHeading>
                        Vamos conversar sobre
                        <br />a gleba certa para você.
                    </SectionHeading>
                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        custom={0.2}
                        style={{
                            fontFamily: SANS,
                            fontSize: 16,
                            lineHeight: 1.7,
                            color: C.mid,
                            margin: "24px 0 40px",
                        }}
                    >
                        Preencha o formulário e entraremos em contato em até 24 horas úteis.
                        Ou, se preferir, fale diretamente pelo WhatsApp.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeUp}
                        custom={0.28}
                    >
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                fontFamily: SANS,
                                fontSize: 14,
                                fontWeight: 600,
                                color: C.forest,
                                textDecoration: "none",
                                border: `1.5px solid ${C.stone}`,
                                padding: "12px 24px",
                                borderRadius: 2,
                            }}
                        >
                            <span style={{ fontSize: 18 }}>💬</span>
                            Chamar no WhatsApp
                        </a>
                    </motion.div>
                </div>

                {/* Right — Form */}
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.15}
                >
                    {sent ? (
                        <div
                            style={{
                                padding: "48px 32px",
                                background: C.base,
                                borderRadius: 4,
                                textAlign: "center",
                            }}
                        >
                            <p style={{ fontFamily: SERIF, fontSize: 24, color: C.forest, margin: "0 0 12px" }}>
                                Mensagem enviada.
                            </p>
                            <p style={{ fontFamily: SANS, fontSize: 15, color: C.mid, margin: 0 }}>
                                Retornaremos em breve.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                // Connect to Formspree: action="https://formspree.io/f/YOUR_ID" method="POST"
                                setSent(true)
                            }}
                            style={{ display: "flex", flexDirection: "column", gap: 28 }}
                        >
                            {[
                                { id: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome" },
                                { id: "telefone", label: "Telefone / WhatsApp", type: "tel", placeholder: "(31) 9 9999-9999" },
                                { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
                            ].map((f) => (
                                <div key={f.id}>
                                    <label htmlFor={f.id} style={labelStyle}>{f.label}</label>
                                    <input
                                        id={f.id}
                                        type={f.type}
                                        placeholder={f.placeholder}
                                        value={formData[f.id]}
                                        onChange={(e) => setFormData({ ...formData, [f.id]: e.target.value })}
                                        style={inputStyle}
                                        required
                                    />
                                </div>
                            ))}

                            <div>
                                <label htmlFor="gleba" style={labelStyle}>Gleba de interesse</label>
                                <select
                                    id="gleba"
                                    value={formData.gleba}
                                    onChange={(e) => setFormData({ ...formData, gleba: e.target.value })}
                                    style={{ ...inputStyle, cursor: "pointer" }}
                                >
                                    <option value="">Selecionar...</option>
                                    <option>Gleba A (2,0063 ha – R$ 450.000)</option>
                                    <option>Gleba B (2,0441 ha – R$ 500.000)</option>
                                    <option>Gleba C (2,0796 ha – R$ 550.000)</option>
                                    <option>Ainda não sei / quero ver todas</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="mensagem" style={labelStyle}>Mensagem (opcional)</label>
                                <textarea
                                    id="mensagem"
                                    rows={4}
                                    placeholder="Pode contar um pouco sobre o que está buscando..."
                                    value={formData.mensagem}
                                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                                    style={{
                                        ...inputStyle,
                                        resize: "vertical",
                                        borderBottom: "none",
                                        border: `1.5px solid ${C.stone}`,
                                        padding: 12,
                                        borderRadius: 2,
                                        marginTop: 8,
                                    }}
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    style={{
                                        width: "100%",
                                        background: C.forest,
                                        color: C.surface,
                                        fontFamily: SANS,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        letterSpacing: "0.08em",
                                        padding: "16px",
                                        borderRadius: 2,
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Enviar Mensagem
                                </button>
                                <p
                                    style={{
                                        fontFamily: SANS,
                                        fontSize: 12,
                                        color: C.stone,
                                        textAlign: "center",
                                        marginTop: 12,
                                    }}
                                >
                                    Seus dados são usados apenas para retorno de contato.
                                </p>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </Section>
    )
}

// ─── FINAL CTA ────────────────────────────────────────────────
function FinalCTA() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <section
            style={{
                position: "relative",
                padding: "160px 48px",
                overflow: "hidden",
                background: "linear-gradient(135deg, #2A3D2E 0%, #4a6741 60%, #6b8a62 100%)",
                textAlign: "center",
                boxSizing: "border-box",
            }}
        >
            <div style={{ position: "absolute", inset: 0, background: "rgba(15,22,15,0.4)" }} />
            <div ref={ref} style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
                <motion.h2
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0}
                    style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(32px, 4vw, 48px)",
                        fontWeight: 400,
                        color: C.surface,
                        margin: 0,
                        lineHeight: 1.2,
                    }}
                >
                    O próximo passo é
                    <br />uma visita ao lugar.
                </motion.h2>
                <motion.p
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.15}
                    style={{
                        fontFamily: SANS,
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.72)",
                        margin: "24px 0 48px",
                    }}
                >
                    A melhor forma de avaliar uma gleba é caminhar por ela.
                    Agende uma visita e conheça Brumadinho de perto.
                </motion.p>
                <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={0.25}
                    style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
                >
                    <BtnPrimary href="#contato">Agendar Visita</BtnPrimary>
                    <BtnOutline href="#contato" dark>Solicitar Material Completo</BtnOutline>
                </motion.div>
            </div>
        </section>
    )
}

// ─── FOOTER ──────────────────────────────────────────────────
function Footer() {
    const links = ["Início", "Glebas", "Infraestrutura", "Localização", "Transparência", "Contato"]

    return (
        <footer style={{ background: C.forest, padding: "80px 48px 40px", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr",
                        gap: 64,
                        marginBottom: 64,
                    }}
                >
                    {/* Brand */}
                    <div>
                        <p
                            style={{
                                fontFamily: SERIF,
                                fontSize: 22,
                                fontWeight: 500,
                                color: C.surface,
                                margin: "0 0 8px",
                                letterSpacing: "0.02em",
                            }}
                        >
                            Glebas Rurais
                        </p>
                        <p
                            style={{
                                fontFamily: SANS,
                                fontSize: 13,
                                color: "rgba(255,255,255,0.45)",
                                margin: 0,
                            }}
                        >
                            Brumadinho, Minas Gerais
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p
                            style={{
                                fontFamily: SANS,
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.35)",
                                margin: "0 0 20px",
                            }}
                        >
                            Navegação
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {links.map((l) => (
                                <a
                                    key={l}
                                    href="#"
                                    style={{
                                        fontFamily: SANS,
                                        fontSize: 14,
                                        color: "rgba(255,255,255,0.55)",
                                        textDecoration: "none",
                                    }}
                                >
                                    {l}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p
                            style={{
                                fontFamily: SANS,
                                fontSize: 11,
                                fontWeight: 500,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.35)",
                                margin: "0 0 20px",
                            }}
                        >
                            Contato
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {["seu@email.com", "(31) 9 XXXX-XXXX"].map((t) => (
                                <p
                                    key={t}
                                    style={{
                                        fontFamily: SANS,
                                        fontSize: 14,
                                        color: "rgba(255,255,255,0.55)",
                                        margin: 0,
                                    }}
                                >
                                    {t}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                        paddingTop: 32,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                    }}
                >
                    <p
                        style={{
                            fontFamily: SANS,
                            fontSize: 12,
                            color: "rgba(255,255,255,0.3)",
                            margin: 0,
                        }}
                    >
                        © 2025 Glebas Rurais. Brumadinho, MG.
                    </p>
                    <p
                        style={{
                            fontFamily: SANS,
                            fontSize: 11,
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.25)",
                            margin: 0,
                            maxWidth: 680,
                        }}
                    >
                        As informações apresentadas neste site têm caráter informativo. Áreas, preços e
                        condições estão sujeitos a confirmação mediante análise do memorial descritivo e
                        demais documentos técnicos. A existência de APP no perímetro está documentada e
                        disponível para consulta durante a negociação.
                    </p>
                </div>
            </div>
        </footer>
    )
}

// ─── ROOT COMPONENT ──────────────────────────────────────────
export default function GlebasRurais() {
    return (
        <div
            style={{
                fontFamily: SANS,
                background: C.base,
                color: C.graphite,
                overflowX: "hidden",
            }}
        >
            <Nav />
            <Hero />
            <Positioning />
            <Glebas />
            <Brumadinho />
            <ForWhom />
            <Infraestrutura />
            <Transparencia />
            <Gallery />
            <FAQ />
            <Contact />
            <FinalCTA />
            <Footer />
        </div>
    )
}
