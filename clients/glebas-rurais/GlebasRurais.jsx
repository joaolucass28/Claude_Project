// ============================================================
// GLEBAS RURAIS — Landing Page (v2)
// Paste this into Framer: Assets → Code → + New File
//
// BEFORE PASTING:
//   1. Add fonts in Framer → Site Settings → Fonts:
//      • Cormorant Garamond (Regular 400, Medium 500, SemiBold 600)
//      • DM Sans (Regular 400, Medium 500, SemiBold 600)
//   2. Replace YOUR_WHATSAPP_NUMBER in the whatsappNumber prop
//      (e.g. 5531999999999 — country + area + number, no spaces)
//   3. Replace YOUR_FORMSPREE_ID with your Formspree form ID
//   4. Replace YOUR_EMAIL with your real email in the footer
//   5. Upload images via the Property Controls panel on the right
// ============================================================

import { useState, useEffect, useRef, createContext, useContext } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"

// ─── IMAGE CONTEXT ────────────────────────────────────────────
const ImageContext = createContext({})

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

// ─── RESPONSIVE HOOK ─────────────────────────────────────────
function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < breakpoint : false
    )
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < breakpoint)
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [breakpoint])
    return isMobile
}

// ─── SECTION WRAPPER ─────────────────────────────────────────
function Section({ id, bg = C.surface, children, style = {} }) {
    const isMobile = useIsMobile()
    return (
        <section
            id={id}
            style={{
                background: bg,
                width: "100%",
                padding: isMobile ? "72px 24px" : "120px 48px",
                boxSizing: "border-box",
                ...style,
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
        </section>
    )
}

// ─── SECTION HEADING COMPONENTS ──────────────────────────────
function SectionLabel({ children, light = false }) {
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
                color: light ? "rgba(255,255,255,0.55)" : C.earth,
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

function BtnOutline({ children, href, dark = false, onClick }) {
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

// ─── LOGO SVG ─────────────────────────────────────────────────
function LogoSVG({ width = 120, gradientId = "_logo_grad", style = {} }) {
    return (
        <svg
            width={width}
            height={Math.round(width * 286 / 568)}
            viewBox="0 0 568 286"
            style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2, display: "block", ...style }}
        >
            <g transform="matrix(1,0,0,1,-2019.2094,-3290.353)">
                <g transform="matrix(1,0,0,1,8,6)">
                    <g transform="matrix(1.65121,0,0,1.65121,-1428.607432,-2034.778274)">
                        <g transform="matrix(1,0,0,1,2100.4434,3359.7881)">
                            <path d="M0,33.744C-2.449,33.744 -4.725,33.336 -6.826,32.519C-8.928,31.703 -10.749,30.562 -12.291,29.095C-13.833,27.629 -15.043,25.868 -15.919,23.811C-16.797,21.755 -17.234,19.488 -17.234,17.008C-17.234,14.498 -16.774,12.201 -15.852,10.114C-14.93,8.028 -13.674,6.236 -12.087,4.74C-10.499,3.243 -8.633,2.079 -6.485,1.247C-4.339,0.416 -2.041,0 0.408,0C3.855,0 6.788,0.696 9.207,2.086C11.626,3.477 13.803,5.549 15.738,8.3L10.069,11.202C8.92,9.298 7.597,7.847 6.101,6.848C4.604,5.851 2.706,5.352 0.408,5.352C-1.255,5.352 -2.752,5.662 -4.082,6.282C-5.413,6.902 -6.554,7.741 -7.506,8.799C-8.458,9.857 -9.192,11.089 -9.706,12.495C-10.221,13.901 -10.477,15.406 -10.477,17.008C-10.477,18.55 -10.243,20.017 -9.773,21.408C-9.306,22.799 -8.617,24.015 -7.71,25.058C-6.803,26.101 -5.699,26.926 -4.399,27.53C-3.1,28.136 -1.633,28.437 0,28.437C2.601,28.437 4.777,27.697 6.531,26.215C8.284,24.734 9.449,22.753 10.023,20.273L-1.995,20.273L-1.995,15.013L17.099,15.013C17.099,16.555 17.031,18.006 16.895,19.367C16.759,20.727 16.419,22.133 15.874,23.584C15.239,25.217 14.378,26.668 13.289,27.938C12.2,29.208 10.96,30.274 9.57,31.136C8.179,31.998 6.667,32.648 5.034,33.086C3.401,33.524 1.724,33.744 0,33.744" style={{ fill: "rgb(164,145,82)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2122.336,3393.0329)">
                            <path d="M0,-32.474L6.577,-32.474L6.577,-5.352L20.501,-5.352L20.501,0L0,0L0,-32.474Z" style={{ fill: "rgb(164,145,82)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2146.2374,3393.0329)">
                            <path d="M0,-32.474L22.859,-32.474L22.859,-27.167L6.577,-27.167L6.577,-19.003L20.772,-19.003L20.772,-13.652L6.577,-13.652L6.577,-5.307L22.859,-5.307L22.859,0L0,0L0,-32.474Z" style={{ fill: "rgb(164,145,82)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2180.8887,3365.8202)">
                            <path d="M0,21.997L6.622,21.997C7.257,21.997 7.801,21.861 8.255,21.589C8.708,21.317 9.094,20.954 9.411,20.5C9.729,20.047 9.963,19.541 10.114,18.981C10.265,18.422 10.341,17.87 10.341,17.326C10.341,16.842 10.25,16.313 10.068,15.738C9.888,15.164 9.63,14.62 9.298,14.105C8.965,13.592 8.572,13.161 8.118,12.813C7.665,12.465 7.166,12.291 6.622,12.291L0,12.291L0,21.997ZM0,7.257L4.943,7.257C5.911,7.257 6.713,6.932 7.348,6.282C7.982,5.632 8.3,4.823 8.3,3.855C8.3,3.402 8.216,2.948 8.051,2.495C7.884,2.041 7.649,1.625 7.348,1.247C7.045,0.87 6.689,0.56 6.281,0.317C5.873,0.076 5.427,-0.045 4.943,-0.045L0,-0.045L0,7.257ZM-6.622,27.258L-6.622,-5.261L4.989,-5.261C6.289,-5.261 7.536,-5.034 8.73,-4.581C9.925,-4.128 10.983,-3.492 11.905,-2.676C12.827,-1.859 13.562,-0.892 14.105,0.227C14.649,1.346 14.922,2.585 14.922,3.946C14.922,6.093 14.15,7.877 12.608,9.298C13.243,9.722 13.825,10.243 14.354,10.862C14.884,11.482 15.345,12.155 15.738,12.881C16.131,13.606 16.441,14.363 16.668,15.148C16.895,15.935 17.008,16.721 17.008,17.507C17.008,18.929 16.729,20.236 16.169,21.43C15.609,22.625 14.854,23.652 13.901,24.514C12.949,25.376 11.845,26.049 10.59,26.533C9.335,27.017 8.027,27.258 6.667,27.258L-6.622,27.258Z" style={{ fill: "rgb(164,145,82)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2211.004,3373.5754)">
                            <path d="M0,6.441L7.257,6.441L3.266,-3.129L0,6.441ZM-11.384,19.458L-0.227,-13.017L6.168,-13.017L19.548,19.458L12.563,19.458L9.252,11.475L-1.724,11.475L-4.49,19.458L-11.384,19.458Z" style={{ fill: "rgb(164,145,82)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2236.1485,3370.8086)">
                            <path d="M0,11.929C0.695,12.716 1.367,13.464 2.018,14.174C2.668,14.885 3.355,15.505 4.082,16.033C4.808,16.563 5.616,16.986 6.508,17.304C7.399,17.621 8.405,17.78 9.524,17.78C10.129,17.78 10.749,17.697 11.384,17.53C12.019,17.365 12.593,17.115 13.107,16.782C13.621,16.45 14.052,16.033 14.399,15.534C14.747,15.035 14.921,14.439 14.921,13.743C14.921,12.806 14.498,12.027 13.651,11.408C12.805,10.788 11.738,10.205 10.454,9.661C9.168,9.117 7.778,8.566 6.281,8.006C4.784,7.447 3.394,6.766 2.108,5.965C0.823,5.164 -0.243,4.189 -1.089,3.039C-1.936,1.89 -2.358,0.47 -2.358,-1.224C-2.358,-2.857 -2.019,-4.293 -1.338,-5.533C-0.658,-6.772 0.241,-7.8 1.36,-8.617C2.479,-9.433 3.748,-10.052 5.17,-10.476C6.591,-10.9 8.042,-11.112 9.524,-11.112C10.976,-11.112 12.283,-10.96 13.447,-10.658C14.611,-10.355 15.707,-9.917 16.735,-9.342C17.763,-8.768 18.731,-8.072 19.639,-7.256C20.545,-6.44 21.452,-5.502 22.359,-4.444L17.733,-0.362C17.158,-1.118 16.606,-1.821 16.078,-2.471C15.549,-3.121 14.967,-3.688 14.332,-4.172C13.697,-4.655 12.994,-5.041 12.223,-5.329C11.452,-5.615 10.537,-5.759 9.479,-5.759C8.813,-5.759 8.179,-5.669 7.574,-5.488C6.969,-5.306 6.44,-5.034 5.986,-4.671C5.533,-4.308 5.17,-3.855 4.898,-3.31C4.626,-2.766 4.49,-2.146 4.49,-1.451C4.49,-0.513 4.913,0.273 5.76,0.908C6.605,1.543 7.672,2.125 8.957,2.654C10.242,3.183 11.625,3.72 13.107,4.264C14.588,4.808 15.972,5.473 17.257,6.26C18.542,7.046 19.607,8.013 20.455,9.162C21.301,10.312 21.725,11.733 21.725,13.426C21.725,14.968 21.331,16.336 20.545,17.53C19.759,18.725 18.761,19.73 17.552,20.546C16.342,21.363 15.012,21.983 13.561,22.406C12.109,22.829 10.719,23.041 9.388,23.041C7.846,23.041 6.455,22.897 5.216,22.61C3.976,22.322 2.818,21.884 1.746,21.295C0.672,20.705 -0.349,19.979 -1.315,19.117C-2.283,18.256 -3.251,17.266 -4.219,16.147L0,11.929Z" style={{ fill: "rgb(164,145,82)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2282.1739,3379.4274)">
                            <path d="M0,-5.262C1.633,-5.262 2.796,-5.609 3.492,-6.305C4.187,-7 4.535,-8.029 4.535,-9.389C4.535,-9.963 4.422,-10.5 4.195,-10.999C3.969,-11.498 3.651,-11.936 3.243,-12.315C2.835,-12.692 2.358,-12.987 1.814,-13.199C1.27,-13.41 0.665,-13.516 0,-13.516L-4.49,-13.516L-4.49,-5.262L0,-5.262ZM-11.112,-18.868L0.045,-18.868C2.07,-18.868 3.794,-18.574 5.216,-17.984C6.637,-17.394 7.785,-16.638 8.663,-15.716C9.539,-14.793 10.182,-13.773 10.59,-12.655C10.998,-11.536 11.202,-10.447 11.202,-9.389C11.202,-8.693 11.142,-7.961 11.021,-7.189C10.899,-6.418 10.658,-5.67 10.295,-4.945C9.933,-4.219 9.434,-3.523 8.799,-2.858C8.164,-2.193 7.348,-1.634 6.35,-1.18C7.468,-0.182 8.353,0.891 9.003,2.04C9.652,3.19 10.151,4.384 10.499,5.623C10.847,6.863 11.096,8.156 11.248,9.501C11.398,10.847 11.52,12.215 11.61,13.606L5.034,13.606C4.853,12.094 4.679,10.711 4.513,9.456C4.346,8.201 4.06,7.037 3.651,5.964C3.243,4.89 2.66,3.877 1.904,2.925C1.148,1.972 0.075,1.042 -1.315,0.135L-4.49,0.135L-4.49,13.606L-11.112,13.606L-11.112,-18.868Z" style={{ fill: "rgb(6,103,56)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2305.4854,3393.9859)">
                            <path d="M0,-33.427L0,-11.203C0,-10.447 0.15,-9.714 0.453,-9.003C0.755,-8.293 1.171,-7.657 1.701,-7.098C2.229,-6.539 2.842,-6.093 3.537,-5.76C4.232,-5.427 4.958,-5.261 5.715,-5.261C6.501,-5.261 7.249,-5.427 7.96,-5.76C8.67,-6.093 9.282,-6.531 9.797,-7.076C10.311,-7.62 10.719,-8.255 11.021,-8.981C11.323,-9.706 11.475,-10.447 11.475,-11.203L11.475,-33.427L18.097,-33.427L18.097,-11.203C18.097,-9.51 17.748,-7.975 17.054,-6.599C16.357,-5.223 15.436,-4.044 14.287,-3.062C13.137,-2.079 11.822,-1.323 10.341,-0.794C8.859,-0.265 7.316,0 5.715,0C4.142,0 2.607,-0.273 1.111,-0.817C-0.386,-1.361 -1.701,-2.124 -2.835,-3.107C-3.969,-4.09 -4.884,-5.269 -5.579,-6.645C-6.274,-8.02 -6.622,-9.54 -6.622,-11.203L-6.622,-33.427L0,-33.427Z" style={{ fill: "rgb(6,103,56)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2340.9307,3379.4274)">
                            <path d="M0,-5.262C1.633,-5.262 2.796,-5.609 3.492,-6.305C4.187,-7 4.535,-8.029 4.535,-9.389C4.535,-9.963 4.422,-10.5 4.195,-10.999C3.969,-11.498 3.651,-11.936 3.243,-12.315C2.835,-12.692 2.358,-12.987 1.814,-13.199C1.27,-13.41 0.665,-13.516 0,-13.516L-4.49,-13.516L-4.49,-5.262L0,-5.262ZM-11.112,-18.868L0.045,-18.868C2.07,-18.868 3.794,-18.574 5.216,-17.984C6.637,-17.394 7.785,-16.638 8.663,-15.716C9.539,-14.793 10.182,-13.773 10.59,-12.655C10.998,-11.536 11.202,-10.447 11.202,-9.389C11.202,-8.693 11.142,-7.961 11.021,-7.189C10.899,-6.418 10.658,-5.67 10.295,-4.945C9.933,-4.219 9.434,-3.523 8.799,-2.858C8.164,-2.193 7.348,-1.634 6.35,-1.18C7.468,-0.182 8.353,0.891 9.003,2.04C9.652,3.19 10.151,4.384 10.499,5.623C10.847,6.863 11.096,8.156 11.248,9.501C11.398,10.847 11.52,12.215 11.61,13.606L5.034,13.606C4.853,12.094 4.679,10.711 4.513,9.456C4.346,8.201 4.06,7.037 3.651,5.964C3.243,4.89 2.66,3.877 1.904,2.925C1.148,1.972 0.075,1.042 -1.315,0.135L-4.49,0.135L-4.49,13.606L-11.112,13.606L-11.112,-18.868Z" style={{ fill: "rgb(6,103,56)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2367.1993,3373.5754)">
                            <path d="M0,6.441L7.257,6.441L3.266,-3.129L0,6.441ZM-11.384,19.458L-0.227,-13.017L6.168,-13.017L19.548,19.458L12.563,19.458L9.252,11.475L-1.724,11.475L-4.49,19.458L-11.384,19.458Z" style={{ fill: "rgb(6,103,56)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,1830,2727.198)">
                            <rect x="560.148" y="633.361" width="6.667" height="32.474" style={{ fill: "rgb(6,103,56)" }} />
                        </g>
                        <g transform="matrix(1,0,0,1,2404.8253,3370.8086)">
                            <path d="M0,11.929C0.695,12.716 1.367,13.464 2.018,14.174C2.668,14.885 3.355,15.505 4.082,16.033C4.808,16.563 5.616,16.986 6.508,17.304C7.399,17.621 8.405,17.78 9.524,17.78C10.129,17.78 10.749,17.697 11.384,17.53C12.019,17.365 12.593,17.115 13.107,16.782C13.621,16.45 14.052,16.033 14.399,15.534C14.747,15.035 14.921,14.439 14.921,13.743C14.921,12.806 14.498,12.027 13.651,11.408C12.805,10.788 11.738,10.205 10.454,9.661C9.168,9.117 7.778,8.566 6.281,8.006C4.784,7.447 3.394,6.766 2.108,5.965C0.823,5.164 -0.243,4.189 -1.089,3.039C-1.936,1.89 -2.358,0.47 -2.358,-1.224C-2.358,-2.857 -2.019,-4.293 -1.338,-5.533C-0.658,-6.772 0.241,-7.8 1.36,-8.617C2.479,-9.433 3.748,-10.052 5.17,-10.476C6.591,-10.9 8.042,-11.112 9.524,-11.112C10.976,-11.112 12.283,-10.96 13.447,-10.658C14.611,-10.355 15.707,-9.917 16.735,-9.342C17.763,-8.768 18.731,-8.072 19.639,-7.256C20.545,-6.44 21.452,-5.502 22.359,-4.444L17.733,-0.362C17.158,-1.118 16.606,-1.821 16.078,-2.471C15.549,-3.121 14.967,-3.688 14.332,-4.172C13.697,-4.655 12.994,-5.041 12.223,-5.329C11.452,-5.615 10.537,-5.759 9.479,-5.759C8.813,-5.759 8.179,-5.669 7.574,-5.488C6.969,-5.306 6.44,-5.034 5.986,-4.671C5.533,-4.308 5.17,-3.855 4.898,-3.31C4.626,-2.766 4.49,-2.146 4.49,-1.451C4.49,-0.513 4.913,0.273 5.76,0.908C6.605,1.543 7.672,2.125 8.957,2.654C10.242,3.183 11.625,3.72 13.107,4.264C14.588,4.808 15.972,5.473 17.257,6.26C18.542,7.046 19.607,8.013 20.455,9.162C21.301,10.312 21.725,11.733 21.725,13.426C21.725,14.968 21.331,16.336 20.545,17.53C19.759,18.725 18.761,19.73 17.552,20.546C16.342,21.363 15.012,21.983 13.561,22.406C12.109,22.829 10.719,23.041 9.388,23.041C7.846,23.041 6.455,22.897 5.216,22.61C3.976,22.322 2.818,21.884 1.746,21.295C0.672,20.705 -0.349,19.979 -1.315,19.117C-2.283,18.256 -3.251,17.266 -4.219,16.147L0,11.929Z" style={{ fill: "rgb(6,103,56)", fillRule: "nonzero" }} />
                        </g>
                        <g transform="matrix(-230.535751,0,0,230.535751,2370.721802,3278.486165)">
                            <path d="M0.503,-0.208C0.6,-0.271 0.73,-0.258 0.814,-0.175L0.971,-0.018C0.981,-0.008 0.981,0.008 0.971,0.018L0.814,0.175C0.765,0.224 0.702,0.248 0.638,0.248C0.591,0.248 0.544,0.235 0.503,0.208C0.406,0.271 0.275,0.259 0.192,0.175L0.034,0.018C0.025,0.008 0.025,-0.008 0.034,-0.018L0.192,-0.175C0.24,-0.223 0.304,-0.248 0.368,-0.248C0.415,-0.248 0.462,-0.235 0.503,-0.208ZM0.688,0.05L0.693,0.045L0.508,-0.14C0.502,-0.146 0.496,-0.152 0.489,-0.157C0.488,-0.157 0.487,-0.158 0.487,-0.159C0.408,-0.218 0.297,-0.21 0.227,-0.14L0.087,0L0.227,0.14C0.29,0.203 0.386,0.216 0.462,0.175L0.26,-0.028C0.25,-0.037 0.25,-0.053 0.26,-0.063L0.282,-0.085C0.305,-0.108 0.335,-0.12 0.368,-0.12C0.4,-0.12 0.43,-0.108 0.453,-0.085L0.588,0.05C0.601,0.064 0.619,0.071 0.638,0.071C0.657,0.071 0.675,0.064 0.688,0.05ZM0.778,0.14L0.919,0L0.778,-0.14C0.716,-0.203 0.62,-0.216 0.544,-0.175C0.558,-0.161 0.74,0.022 0.746,0.027C0.748,0.03 0.75,0.032 0.751,0.036C0.755,0.045 0.753,0.056 0.746,0.063L0.723,0.085C0.701,0.108 0.67,0.121 0.638,0.121C0.606,0.121 0.576,0.108 0.553,0.085L0.418,-0.05C0.404,-0.063 0.387,-0.071 0.368,-0.071C0.349,-0.071 0.331,-0.063 0.318,-0.05L0.313,-0.045L0.498,0.14C0.504,0.146 0.51,0.152 0.517,0.157C0.518,0.158 0.518,0.158 0.519,0.159C0.554,0.185 0.596,0.198 0.638,0.198C0.689,0.198 0.74,0.179 0.778,0.14Z" style={{ fill: `url(#${gradientId})`, fillRule: "nonzero" }} />
                        </g>
                    </g>
                </g>
            </g>
            <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1,0,0,-1,0,0.000059)">
                    <stop offset="0" style={{ stopColor: "rgb(6,103,56)", stopOpacity: 1 }} />
                    <stop offset="0.05" style={{ stopColor: "rgb(6,103,56)", stopOpacity: 1 }} />
                    <stop offset="0.92" style={{ stopColor: "rgb(164,145,82)", stopOpacity: 1 }} />
                    <stop offset="1" style={{ stopColor: "rgb(164,145,82)", stopOpacity: 1 }} />
                </linearGradient>
            </defs>
        </svg>
    )
}

// ─── NAV ──────────────────────────────────────────────────────
function Nav({ whatsappNumber }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const isMobile = useIsMobile()

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
                    padding: isMobile ? "0 20px" : "0 48px",
                    background: scrolled ? C.surface : "rgba(248,245,240,0.95)",
                    backdropFilter: "blur(12px)",
                    borderBottom: `1px solid rgba(196,191,181,0.35)`,
                    transition: "background 350ms ease",
                    boxSizing: "border-box",
                }}
            >
                {/* Logo */}
                <a href="#hero" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
                    <LogoSVG width={isMobile ? 78 : 100} gradientId="logo-nav-grad" style={{ display: "block" }} />
                </a>

                {/* Links — desktop */}
                {!isMobile && (
                    <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
                        {links.map((l) => (
                            <a key={l.href} href={l.href} style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, color: C.graphite, textDecoration: "none", transition: "color 200ms ease" }}>
                                {l.label}
                            </a>
                        ))}
                        <BtnPrimary href="#contato">Agendar Visita</BtnPrimary>
                    </div>
                )}

                {/* Hamburger — mobile */}
                {isMobile && (
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
                        aria-label="Menu"
                    >
                        {[0, 1, 2].map((i) => (
                            <span key={i} style={{
                                display: "block", width: 22, height: 2, background: C.graphite, borderRadius: 1,
                                transition: "transform 200ms ease, opacity 200ms ease",
                                transform: menuOpen
                                    ? i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "scaleX(0)"
                                    : "none",
                                opacity: menuOpen && i === 1 ? 0 : 1,
                            }} />
                        ))}
                    </button>
                )}
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {isMobile && menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            top: 72,
                            left: 0,
                            right: 0,
                            zIndex: 99,
                            background: C.surface,
                            borderBottom: `1px solid ${C.light}`,
                            padding: "24px 24px 32px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setMenuOpen(false)}
                                style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, color: C.graphite, textDecoration: "none", padding: "12px 0", borderBottom: `1px solid ${C.light}` }}
                            >
                                {l.label}
                            </a>
                        ))}
                        <div style={{ marginTop: 16 }}>
                            <BtnPrimary href="#contato">Agendar Visita</BtnPrimary>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

// ─── HERO ─────────────────────────────────────────────────────
function Hero({ whatsappNumber }) {
    const { heroImage } = useContext(ImageContext)
    const isMobile = useIsMobile()

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                minHeight: isMobile ? 580 : 680,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Background image / placeholder */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(160deg, #2A3D2E 0%, #3a5232 50%, #4a6741 100%)",
                    ...(heroImage && {
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }),
                }}
            />

            {/* Directional overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: isMobile
                    ? "linear-gradient(to bottom, rgba(20,32,20,0.70) 0%, rgba(20,32,20,0.50) 100%)"
                    : "linear-gradient(to right, rgba(20,32,20,0.82) 0%, rgba(20,32,20,0.52) 42%, rgba(20,32,20,0.12) 100%)",
            }} />

            {/* Bottom vignette */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,22,15,0.42) 0%, transparent 50%)", pointerEvents: "none" }} />

            {/* Content */}
            <div style={{
                position: "relative", zIndex: 2, maxWidth: 800, width: "100%",
                padding: isMobile ? "0 24px" : "0 80px", boxSizing: "border-box",
            }}>
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.60)", margin: "0 0 24px" }}
                >
                    Brumadinho, Minas Gerais
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: SERIF, fontSize: "clamp(44px, 5.5vw, 72px)", fontWeight: 400, lineHeight: 1.08, color: C.surface, margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.30)" }}
                >
                    Campo com estrutura.
                    <br />
                    Silêncio com acesso.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: SANS, fontSize: 16, fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", margin: "28px 0 0", maxWidth: 480, textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}
                >
                    Três glebas registradas individualmente em Brumadinho, MG.
                    Infraestrutura instalada, documentação em ordem.
                    A 50 km de Belo Horizonte.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 40 }}
                >
                    <BtnPrimary href="#glebas">Conhecer as Glebas</BtnPrimary>
                    <BtnOutline href="#contato" dark>Agendar uma Visita</BtnOutline>
                </motion.div>
            </div>

            {/* Scroll chevron */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                >
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <path d="M1 1L10 10L19 1" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    )
}

// ─── POSITIONING ──────────────────────────────────────────────
function Positioning() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    const features = [
        { icon: "⬟", title: "Acesso pavimentado", desc: "Via em pedra fincada até as glebas — durável, de baixa manutenção." },
        { icon: "◎", title: "Água e energia", desc: "Rede municipal + poço artesiano. Energia elétrica disponível para conexão." },
        { icon: "▣", title: "Documentação regular", desc: "Registro individual por gleba. Conformidade INCRA. Documentos disponíveis." },
    ]

    return (
        <Section id="posicionamento" bg={C.surface}>
            <div style={{ maxWidth: 760, margin: "0 auto 80px", textAlign: "center" }}>
                <SectionLabel>Campo com Conforto</SectionLabel>
                <SectionHeading center>Um lugar que já funciona.</SectionHeading>
                <motion.p ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.2}
                    style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.7, color: C.mid, marginTop: 28 }}>
                    Estas glebas não são terra bruta à espera de investimentos. São propriedades
                    com acesso pavimentado em pedra, abastecimento de água municipal e poço artesiano,
                    energia elétrica disponível e registro individual já regularizado. Tudo que transforma
                    um lote em um lugar de uso real.
                </motion.p>
                <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.3}
                    style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.7, color: C.mid, marginTop: 20 }}>
                    A proposta é simples: oferecer áreas rurais em Brumadinho que já estão prontas para
                    receber uma casa de campo, um projeto de moradia permanente ou um uso rural
                    de pequena escala — sem a burocracia e os custos típicos de uma propriedade
                    sem infraestrutura.
                </motion.p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, borderTop: `1px solid ${C.light}`, paddingTop: 56 }}>
                {features.map((f, i) => (
                    <motion.div key={i} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.2 + i * 0.1}
                        style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        <div style={{ width: 44, height: 44, background: "rgba(42,61,46,0.08)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.forest }}>
                            {f.icon}
                        </div>
                        <p style={{ fontFamily: SANS, fontSize: 16, fontWeight: 600, color: C.graphite, margin: 0 }}>{f.title}</p>
                        <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.6, color: C.mid, margin: 0 }}>{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

// ─── GLEBA CARD ───────────────────────────────────────────────
const STATUS_COLORS = {
    "Disponível": { bg: "rgba(42,61,46,0.10)", color: C.forest },
    "Em negociação": { bg: "rgba(139,115,85,0.12)", color: C.earth },
    "Vendido": { bg: "rgba(196,191,181,0.35)", color: C.mid },
}

function GlebaCard({ name, area, price, description, delay = 0, bg, imgSrc, status = "Disponível", whatsappNumber }) {
    const [hov, setHov] = useState(false)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-60px" })
    const isMobile = useIsMobile()
    const statusStyle = STATUS_COLORS[status] || STATUS_COLORS["Disponível"]

    const features = ["Registro individual", "Acesso pavimentado", "Água disponível", "Energia disponível"]

    const waHref = `https://wa.me/${whatsappNumber || "YOUR_WHATSAPP_NUMBER"}?text=Olá! Tenho interesse na ${name}. Podem me enviar mais informações?`

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
                background: C.surface, borderRadius: 4, overflow: "hidden",
                boxShadow: hov ? "0 12px 40px rgba(0,0,0,0.12)" : "0 2px 16px rgba(0,0,0,0.06)",
                transform: hov ? "translateY(-6px)" : "translateY(0)",
                transition: "all 280ms ease",
                display: "flex", flexDirection: "column",
            }}
        >
            {/* Image */}
            <div style={{
                height: 240,
                background: bg || "linear-gradient(135deg, #3d5c3f 0%, #6b8a62 100%)",
                backgroundImage: imgSrc ? `url(${imgSrc})` : undefined,
                backgroundSize: imgSrc ? "cover" : undefined,
                backgroundPosition: imgSrc ? "center" : undefined,
                position: "relative", overflow: "hidden",
            }}>
                <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 8 }}>
                    <span style={{ background: "rgba(248,245,240,0.94)", padding: "6px 14px", borderRadius: 2, fontFamily: SANS, fontSize: 12, fontWeight: 600, color: C.forest, letterSpacing: "0.06em" }}>
                        {name}
                    </span>
                    <span style={{ background: statusStyle.bg, padding: "6px 12px", borderRadius: 2, fontFamily: SANS, fontSize: 11, fontWeight: 600, color: statusStyle.color, letterSpacing: "0.04em" }}>
                        {status}
                    </span>
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: isMobile ? "24px 20px 28px" : "32px 32px 36px", display: "flex", flexDirection: "column", flex: 1 }}>
                <p style={{ fontFamily: SANS, fontSize: 13, color: C.mid, margin: 0 }}>{area}</p>
                <p style={{ fontFamily: SERIF, fontSize: 34, fontWeight: 500, color: C.forest, margin: "8px 0 0", lineHeight: 1 }}>{price}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                    {features.map((f) => (
                        <span key={f} style={{ fontFamily: SANS, fontSize: 11, color: C.forest, border: `1px solid ${C.stone}`, padding: "4px 10px", borderRadius: 2 }}>
                            {f}
                        </span>
                    ))}
                </div>

                <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: C.mid, margin: "20px 0 0", flex: 1 }}>{description}</p>

                <div style={{ marginTop: 24 }}>
                    <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            fontFamily: SANS, fontSize: 13, fontWeight: 600, letterSpacing: "0.06em",
                            color: C.forest, textDecoration: "none",
                            borderBottom: `1.5px solid ${C.stone}`,
                            paddingBottom: 2, transition: "border-color 200ms ease",
                        }}
                    >
                        Solicitar Informações →
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

function Glebas({ whatsappNumber, glebaAStatus, glebaBStatus, glebaCStatus }) {
    const { glebaAImage, glebaBImage, glebaCImage } = useContext(ImageContext)

    const glebas = [
        {
            name: "Gleba A", area: "2,0063 ha", price: "R$ 450.000", status: glebaAStatus || "Disponível",
            description: "A menor das três glebas em extensão, com a melhor relação entre área e custo por hectare. Ideal para quem busca uma propriedade rural funcional com estrutura instalada.",
            bg: "linear-gradient(135deg, #3d5c3f 0%, #5a7a5c 100%)", imgSrc: glebaAImage,
        },
        {
            name: "Gleba B", area: "2,0441 ha", price: "R$ 500.000", status: glebaBStatus || "Disponível",
            description: "Gleba intermediária, com configuração de terreno equilibrada e boa proporção entre área utilizável e preservação natural. Flexível para diferentes projetos de uso.",
            bg: "linear-gradient(135deg, #4a6741 0%, #6b8a62 100%)", imgSrc: glebaBImage,
        },
        {
            name: "Gleba C", area: "2,0796 ha", price: "R$ 550.000", status: glebaCStatus || "Disponível",
            description: "A maior das três glebas, com maior área e potencial de aproveitamento. Recomendada para quem deseja mais espaço para um projeto de moradia rural ou uso produtivo de pequena escala.",
            bg: "linear-gradient(135deg, #556b44 0%, #7a9a6a 100%)", imgSrc: glebaCImage,
        },
    ]

    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    const isMobile = useIsMobile()

    return (
        <Section id="glebas" bg={C.light}>
            <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
                <SectionLabel>Disponíveis</SectionLabel>
                <SectionHeading center>Três glebas, cada uma com<br />registro próprio.</SectionHeading>
                <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.2}
                    style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.65, color: C.mid, marginTop: 20, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
                    Áreas entre 2,0 e 2,1 hectares. Todas com infraestrutura compartilhada e documentação individual em ordem.
                </motion.p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))", gap: isMobile ? 16 : 24 }}>
                {glebas.map((g, i) => (
                    <GlebaCard key={i} {...g} delay={0.1 + i * 0.1} whatsappNumber={whatsappNumber} />
                ))}
            </div>

            <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.4}
                style={{ fontFamily: SANS, fontSize: 12, lineHeight: 1.6, color: C.mid, marginTop: 40, textAlign: "center", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
                Áreas e valores sujeitos a confirmação após análise do memorial descritivo. A existência de APP dentro do perímetro está documentada e deve ser avaliada com orientação técnica durante a negociação.
            </motion.p>
        </Section>
    )
}

// ─── POR QUE BRUMADINHO ───────────────────────────────────────
function Brumadinho() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    const isMobile = useIsMobile()
    const { mapaImage } = useContext(ImageContext)

    const items = [
        { icon: "◎", title: "Acesso direto", desc: "A aproximadamente 50 km de Belo Horizonte, com acesso por rotas asfaltadas e consolidadas." },
        { icon: "⬟", title: "Natureza preservada", desc: "A região de Grota da Bananeira e Córrego de Alma oferece paisagem de Mata Atlântica em transição, com cursos d'água e vegetação de cerrado." },
        { icon: "▣", title: "Município consolidado", desc: "Brumadinho conta com serviços urbanos, comércio local, saúde básica e infraestrutura de um município estável em MG." },
        { icon: "◇", title: "Qualidade de vida real", desc: "Um fim de semana em campo sem abrir mão de acesso razoável. Um lugar que funciona quando você chega." },
    ]

    return (
        <Section id="brumadinho" bg={C.surface}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr", gap: isMobile ? 48 : 80, alignItems: "start" }}>
                {/* Map / image */}
                <div style={{ borderRadius: 4, overflow: "hidden", position: isMobile ? "relative" : "sticky", top: isMobile ? "auto" : 96, alignSelf: "start" }}>
                    {mapaImage ? (
                        <img src={mapaImage} alt="Localização Glebas Rurais" style={{ width: "100%", height: "auto", display: "block", borderRadius: 4 }} />
                    ) : (
                        <div style={{ height: isMobile ? 320 : 520, background: "linear-gradient(160deg, #2A3D2E 0%, #6b8a62 100%)", borderRadius: 4 }} />
                    )}
                </div>

                {/* Right text */}
                <div ref={ref}>
                    <SectionLabel>Localização</SectionLabel>
                    <SectionHeading>A menos de uma hora<br />de Belo Horizonte.</SectionHeading>
                    <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.2}
                        style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: C.mid, margin: "24px 0 40px" }}>
                        Brumadinho é uma das regiões mais acessíveis e visualmente ricas do entorno de BH —
                        conhecida pela natureza preservada, pela atmosfera tranquila e pela infraestrutura
                        de um município consolidado. Não é isolamento. É distância certa.
                    </motion.p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                        {items.map((item, i) => (
                            <motion.div key={i} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.3 + i * 0.08}
                                style={{ paddingLeft: 20, borderLeft: `2px solid ${C.light}` }}>
                                <p style={{ fontFamily: SANS, fontSize: 15, fontWeight: 600, color: C.graphite, margin: "0 0 6px" }}>{item.title}</p>
                                <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: C.mid, margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

// ─── PARA QUEM É ─────────────────────────────────────────────
function ParaQuemE() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    const isMobile = useIsMobile()

    const profiles = [
        { icon: "⌂", title: "Fim de semana em família", desc: "Famílias de BH que querem um lugar no campo com estrutura real — sem a complexidade de uma fazenda e sem o artificialismo de um condomínio rural." },
        { icon: "◎", title: "Moradia no campo", desc: "Pessoas que buscam sair da cidade com qualidade de vida, mas sem abrir mão de acesso, documentação clara e infraestrutura básica instalada." },
        { icon: "▣", title: "Preservação patrimonial", desc: "Compradores que valorizam terra registrada, bem documentada e com infraestrutura instalada como forma de diversificação de patrimônio em ativos físicos." },
        { icon: "⬟", title: "Uso rural de pequena escala", desc: "Produtores ou entusiastas com interesse em agricultura familiar, horticultura, criação de pequeno porte ou uso produtivo rural dentro da regularidade documental." },
    ]

    return (
        <Section id="para-quem-e" bg={C.light}>
            <div ref={ref} style={{ textAlign: "center", marginBottom: 64 }}>
                <SectionLabel>Perfil do Comprador</SectionLabel>
                <SectionHeading center>Não é para qualquer um.<br />E isso é bom.</SectionHeading>
                <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.2}
                    style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.65, color: C.mid, marginTop: 20, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
                    Estas glebas são ideais para perfis específicos de compradores. Se você se identificar com um deles, vale a conversa.
                </motion.p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
                {profiles.map((p, i) => (
                    <motion.div key={i} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.1 + i * 0.1}
                        style={{ background: C.surface, borderRadius: 4, padding: isMobile ? "28px 24px" : "36px 32px", border: `1px solid ${C.stone}` }}>
                        <div style={{ width: 44, height: 44, background: "rgba(42,61,46,0.08)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: C.forest, marginBottom: 20 }}>
                            {p.icon}
                        </div>
                        <p style={{ fontFamily: SERIF, fontSize: 22, fontWeight: 500, color: C.forest, margin: "0 0 12px", lineHeight: 1.2 }}>{p.title}</p>
                        <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.65, color: C.mid, margin: 0 }}>{p.desc}</p>
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
    const isMobile = useIsMobile()

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
            <div ref={ref} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 48 : 80, alignItems: "start" }}>
                <div>
                    <SectionLabel>O que já está resolvido</SectionLabel>
                    <SectionHeading>Infraestrutura instalada.<br />Documentação em ordem.</SectionHeading>
                    <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.2}
                        style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: C.mid, margin: "24px 0 0" }}>
                        Antes de qualquer negociação, é importante saber exatamente o que você
                        está recebendo. Aqui está o que já existe instalado e regularizado.
                    </motion.p>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    {items.map((item, i) => (
                        <motion.div key={i} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.1 + i * 0.07}
                            style={{ display: "flex", gap: 20, padding: "22px 0", borderBottom: i < items.length - 1 ? `1px solid ${C.light}` : "none" }}>
                            <div style={{ width: 36, height: 36, background: "rgba(42,61,46,0.07)", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: C.forest, flexShrink: 0 }}>
                                {item.icon}
                            </div>
                            <div>
                                <p style={{ fontFamily: SANS, fontSize: 15, fontWeight: 600, color: C.graphite, margin: "0 0 6px" }}>{item.title}</p>
                                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.6, color: C.mid, margin: 0 }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

// ─── TRANSPARÊNCIA ────────────────────────────────────────────
// Intentionally static — no scroll animations. Editorial weight by design.
function Transparencia({ whatsappNumber }) {
    const isMobile = useIsMobile()
    const waHref = `https://wa.me/${whatsappNumber || "YOUR_WHATSAPP_NUMBER"}?text=Olá! Gostaria de solicitar a documentação completa das glebas rurais.`

    return (
        <section
            id="transparencia"
            style={{
                background: C.forest,
                width: "100%",
                padding: isMobile ? "80px 24px" : "120px 48px",
                boxSizing: "border-box",
            }}
        >
            <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
                <p style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 20px" }}>
                    Clareza antes de tudo
                </p>

                <h2 style={{ fontFamily: SERIF, fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 400, lineHeight: 1.2, color: C.surface, margin: "0 0 36px" }}>
                    Há APP no perímetro.
                    <br />
                    E você precisa saber disso.
                </h2>

                <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.70)", margin: "0 0 20px" }}>
                    Dentro do perímetro das glebas existe área de APP — Área de Preservação Permanente. Isso é uma realidade legal e ambiental presente em grande parte das propriedades rurais do Brasil, e não é algo que escondemos ou minimizamos.
                </p>

                <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.75, color: "rgba(255,255,255,0.70)", margin: "0 0 48px" }}>
                    A área de APP é delineada nos mapas e memoriais descritivos, que ficam disponíveis para análise durante a negociação. Recomendamos fortemente que qualquer comprador realize uma visita técnica ao imóvel e consulte um profissional habilitado antes de tomar sua decisão.
                </p>

                <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 48 }} />

                <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.50)", margin: "0 0 36px" }}>
                    Nosso compromisso é com uma negociação transparente. Os documentos técnicos,
                    memoriais e certidões estão disponíveis para consulta mediante solicitação.
                </p>

                <BtnOutline href={waHref} dark>Solicitar Documentação Completa</BtnOutline>
            </div>
        </section>
    )
}

// ─── GALERIA ──────────────────────────────────────────────────
function Galeria() {
    const { gal1Image, gal2Image, gal3Image, gal4Image, gal5Image, gal6Image } = useContext(ImageContext)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    const isMobile = useIsMobile()
    const [lightbox, setLightbox] = useState(null)

    const images = [
        { src: gal1Image, caption: "Vista aérea da região das glebas" },
        { src: gal2Image, caption: "Via de acesso pavimentada em pedra fincada" },
        { src: gal3Image, caption: "Paisagem natural do entorno" },
        { src: gal4Image, caption: "Linha de cumeada e horizonte" },
        { src: gal5Image, caption: "Córrego e vegetação ciliar" },
        { src: gal6Image, caption: "Vista ao nível do terreno" },
    ]

    const placeholderGrads = [
        "linear-gradient(135deg, #2A3D2E 0%, #4a6741 100%)",
        "linear-gradient(135deg, #3d5232 0%, #6b8a62 100%)",
        "linear-gradient(135deg, #4a6741 0%, #8b7355 100%)",
        "linear-gradient(135deg, #2a3d2e 0%, #556b44 100%)",
        "linear-gradient(135deg, #3a5232 0%, #5a7a5c 100%)",
        "linear-gradient(135deg, #556b44 0%, #7a9a6a 100%)",
    ]

    const cols = isMobile ? 1 : 3
    const colArrays = Array.from({ length: cols }, (_, ci) => images.filter((_, i) => i % cols === ci))

    return (
        <Section id="galeria" bg={C.surface}>
            <div ref={ref} style={{ textAlign: "center", marginBottom: 56 }}>
                <SectionLabel>O Lugar</SectionLabel>
                <SectionHeading center>Brumadinho, como ela é.</SectionHeading>
                <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.2}
                    style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.65, color: C.mid, marginTop: 16, maxWidth: 400, marginLeft: "auto", marginRight: "auto" }}>
                    Imagens reais do acesso, da paisagem e das glebas.
                </motion.p>
            </div>

            {/* Masonry grid */}
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                {colArrays.map((col, ci) => (
                    <div key={ci} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
                        {col.map((img, ii) => {
                            const globalIdx = ii * cols + ci
                            const height = [280, 340, 260, 300, 320, 280][globalIdx] || 280
                            return (
                                <motion.div
                                    key={globalIdx}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={fadeUp}
                                    custom={0.05 * globalIdx}
                                    onClick={() => img.src && setLightbox(img)}
                                    style={{
                                        height,
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        background: img.src ? undefined : placeholderGrads[globalIdx],
                                        backgroundImage: img.src ? `url(${img.src})` : undefined,
                                        backgroundSize: img.src ? "cover" : undefined,
                                        backgroundPosition: "center",
                                        cursor: img.src ? "zoom-in" : "default",
                                        position: "relative",
                                    }}
                                >
                                    {!img.src && (
                                        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: 16 }}>
                                            <p style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.45)", margin: 0 }}>{img.caption}</p>
                                        </div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightbox(null)}
                        style={{ position: "fixed", inset: 0, zIndex: 300, background: "rgba(0,0,0,0.90)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
                    >
                        <motion.img
                            initial={{ scale: 0.92 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.92 }}
                            src={lightbox.src}
                            alt={lightbox.caption}
                            style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: 4, objectFit: "contain" }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setLightbox(null)}
                            style={{ position: "absolute", top: 24, right: 24, background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%", width: 44, height: 44, cursor: "pointer", color: C.surface, fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}
                        >
                            ×
                        </button>
                        <p style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.50)", margin: 0 }}>
                            {lightbox.caption}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}

// ─── FAQ ──────────────────────────────────────────────────────
function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div style={{ borderBottom: `1px solid ${C.light}` }}>
            <button
                onClick={onToggle}
                style={{
                    width: "100%", background: "none", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "24px 0", gap: 16, textAlign: "left",
                }}
            >
                <span style={{ fontFamily: SANS, fontSize: 16, fontWeight: 500, color: C.graphite, lineHeight: 1.4 }}>{question}</span>
                <span style={{ fontFamily: SANS, fontSize: 22, fontWeight: 300, color: C.earth, flexShrink: 0, transition: "transform 200ms ease", transform: isOpen ? "rotate(45deg)" : "none" }}>+</span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        <p style={{ fontFamily: SANS, fontSize: 15, lineHeight: 1.7, color: C.mid, margin: "0 0 24px", paddingRight: 40 }}>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    const faqs = [
        { q: "Onde fica exatamente?", a: "As glebas estão localizadas em Brumadinho, Minas Gerais, na região conhecida como Grota da Bananeira e Córrego de Alma. A distância aproximada de Belo Horizonte é de 50 km, com acesso por rotas asfaltadas consolidadas." },
        { q: "Já tem escritura individual?", a: "Sim. Cada gleba possui matrícula individual no cartório de registro de imóveis. As três propriedades são juridicamente independentes." },
        { q: "Tem água e energia disponíveis?", a: "Sim. Há abastecimento de água pela rede municipal e poço artesiano já perfurado na área. A rede elétrica está disponível para conexão das unidades." },
        { q: "Posso construir nas glebas?", a: "A possibilidade e as condições de construção dependem do zoneamento municipal, da delimitação da APP e das regulamentações específicas do imóvel rural. Recomendamos consultar um profissional habilitado com base nos documentos técnicos disponibilizados." },
        { q: "O que é a APP e como ela afeta as glebas?", a: "APP (Área de Preservação Permanente) é uma delimitação ambiental legal presente em grande parte das propriedades rurais brasileiras, geralmente associada a cursos d'água e topos de morro. Existe APP dentro do perímetro das glebas, devidamente documentada. A extensão exata está nos mapas e memoriais descritivos, disponíveis para análise." },
        { q: "Aceita parcelamento?", a: "As condições de pagamento são tratadas diretamente com o vendedor e dependem do perfil do comprador e da gleba de interesse. Entre em contato para discutir as possibilidades." },
        { q: "Como funciona a visita?", a: "As visitas são agendadas com antecedência. Basta entrar em contato pelo formulário ou WhatsApp. Preferimos visitas acompanhadas para que possamos apresentar cada gleba e responder suas dúvidas no local." },
        { q: "Quais documentos posso analisar antes de decidir?", a: "Disponibilizamos para análise: matrícula individual de cada gleba, memorial descritivo, planta topográfica, certidões e demais documentos pertinentes. Solicite durante o contato ou na visita." },
    ]

    return (
        <Section id="faq" bg={C.light}>
            <div ref={ref} style={{ maxWidth: 760, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <SectionLabel>Perguntas Frequentes</SectionLabel>
                    <SectionHeading center>O que você precisa saber<br />antes de visitar.</SectionHeading>
                </div>

                <div>
                    {faqs.map((faq, i) => (
                        <motion.div key={i} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.05 * i}>
                            <FAQItem
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

// ─── CONTATO ──────────────────────────────────────────────────
function Contato({ whatsappNumber, contactEmail }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })
    const isMobile = useIsMobile()
    const [submitted, setSubmitted] = useState(false)

    const waHref = `https://wa.me/${whatsappNumber || "YOUR_WHATSAPP_NUMBER"}?text=Olá! Gostaria de saber mais sobre as glebas rurais em Brumadinho.`

    const inputStyle = {
        width: "100%",
        fontFamily: SANS,
        fontSize: 15,
        color: C.graphite,
        background: "transparent",
        border: "none",
        borderBottom: `1.5px solid ${C.stone}`,
        padding: "12px 0",
        outline: "none",
        boxSizing: "border-box",
        transition: "border-color 200ms ease",
    }

    return (
        <Section id="contato" bg={C.surface}>
            <div
                ref={ref}
                style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 56 : 96, alignItems: "start" }}
            >
                {/* Left */}
                <div>
                    <SectionLabel>Contato</SectionLabel>
                    <SectionHeading>Vamos conversar sobre<br />a gleba certa para você.</SectionHeading>
                    <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.2}
                        style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: C.mid, margin: "24px 0 36px" }}>
                        Preencha o formulário e entraremos em contato em até 24 horas úteis. Ou, se preferir, fale diretamente pelo WhatsApp.
                    </motion.p>
                    <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.3}>
                        <BtnPrimary href={waHref}>Chamar no WhatsApp</BtnPrimary>
                    </motion.div>
                    {contactEmail && (
                        <motion.p initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.4}
                            style={{ fontFamily: SANS, fontSize: 14, color: C.mid, marginTop: 20 }}>
                            {contactEmail}
                        </motion.p>
                    )}
                </div>

                {/* Right — form */}
                <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeUp} custom={0.25}>
                    {submitted ? (
                        <div style={{ padding: "48px 0", textAlign: "center" }}>
                            <p style={{ fontFamily: SERIF, fontSize: 26, color: C.forest, margin: "0 0 12px" }}>Mensagem enviada.</p>
                            <p style={{ fontFamily: SANS, fontSize: 15, color: C.mid, margin: 0 }}>Entraremos em contato em breve.</p>
                        </div>
                    ) : (
                        <form
                            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                            method="POST"
                            onSubmit={() => setSubmitted(true)}
                            style={{ display: "flex", flexDirection: "column", gap: 28 }}
                        >
                            <input name="nome" required placeholder="Nome completo *" style={inputStyle} />
                            <input name="telefone" required placeholder="Telefone / WhatsApp *" style={inputStyle} />
                            <input name="email" type="email" required placeholder="E-mail *" style={inputStyle} />
                            <select name="gleba" required style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                                <option value="" disabled defaultValue="">Gleba de interesse *</option>
                                <option value="Gleba A">Gleba A (2,0063 ha – R$ 450.000)</option>
                                <option value="Gleba B">Gleba B (2,0441 ha – R$ 500.000)</option>
                                <option value="Gleba C">Gleba C (2,0796 ha – R$ 550.000)</option>
                                <option value="Todas">Ainda não sei / quero ver todas</option>
                            </select>
                            <textarea name="mensagem" rows={4} placeholder="Mensagem (opcional) — Pode contar um pouco sobre o que está buscando..."
                                style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }} />
                            <div>
                                <BtnPrimary>Enviar Mensagem</BtnPrimary>
                            </div>
                            <p style={{ fontFamily: SANS, fontSize: 11, color: C.mid, margin: 0, lineHeight: 1.6 }}>
                                Seus dados são usados apenas para retorno de contato. Nenhuma informação é compartilhada com terceiros.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </Section>
    )
}

// ─── CTA FINAL ────────────────────────────────────────────────
function CTAFinal({ whatsappNumber }) {
    const { ctaFinalImage } = useContext(ImageContext)
    const isMobile = useIsMobile()

    const waHref = `https://wa.me/${whatsappNumber || "YOUR_WHATSAPP_NUMBER"}?text=Olá! Gostaria de agendar uma visita às glebas rurais em Brumadinho.`

    return (
        <section
            style={{
                position: "relative", width: "100%",
                padding: isMobile ? "96px 24px" : "140px 48px",
                boxSizing: "border-box", overflow: "hidden",
                background: ctaFinalImage ? undefined : C.forest,
                backgroundImage: ctaFinalImage ? `url(${ctaFinalImage})` : undefined,
                backgroundSize: ctaFinalImage ? "cover" : undefined,
                backgroundPosition: "center",
            }}
        >
            {ctaFinalImage && (
                <div style={{ position: "absolute", inset: 0, background: "rgba(20,32,20,0.72)" }} />
            )}

            <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
                <p style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", margin: "0 0 20px" }}>
                    Próximo passo
                </p>
                <h2 style={{ fontFamily: SERIF, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.15, color: C.surface, margin: "0 0 24px" }}>
                    O próximo passo é<br />uma visita ao lugar.
                </h2>
                <p style={{ fontFamily: SANS, fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.68)", margin: "0 0 48px" }}>
                    A melhor forma de avaliar uma gleba é caminhar por ela.<br />
                    Agende uma visita e conheça Brumadinho de perto.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
                    <BtnPrimary href={waHref}>Agendar Visita</BtnPrimary>
                    <BtnOutline href="#contato" dark>Solicitar Material Completo</BtnOutline>
                </div>
            </div>
        </section>
    )
}

// ─── FOOTER ──────────────────────────────────────────────────
function Footer({ whatsappNumber, contactEmail }) {
    const isMobile = useIsMobile()
    const waHref = `https://wa.me/${whatsappNumber || "YOUR_WHATSAPP_NUMBER"}`

    const navLinks = [
        { label: "Início", href: "#hero" },
        { label: "Glebas disponíveis", href: "#glebas" },
        { label: "Infraestrutura", href: "#infraestrutura" },
        { label: "Por que Brumadinho", href: "#brumadinho" },
        { label: "Para quem é", href: "#para-quem-e" },
        { label: "Transparência", href: "#transparencia" },
        { label: "Contato", href: "#contato" },
    ]

    return (
        <footer style={{ background: C.forest, padding: isMobile ? "64px 24px 40px" : "80px 48px 40px", boxSizing: "border-box" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
                    gap: isMobile ? 48 : 64,
                    marginBottom: 64,
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: 12 }}>
                            <LogoSVG width={130} gradientId="logo-footer-grad" style={{ filter: "brightness(0) invert(1)" }} />
                        </div>
                        <p style={{ fontFamily: SANS, fontSize: 13, color: "rgba(255,255,255,0.40)", margin: 0 }}>
                            Brumadinho, Minas Gerais
                        </p>
                    </div>

                    {/* Nav links */}
                    <div>
                        <p style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)", margin: "0 0 20px" }}>
                            Navegação
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {navLinks.map((l) => (
                                <a key={l.label} href={l.href} style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.50)", textDecoration: "none" }}>
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <p style={{ fontFamily: SANS, fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)", margin: "0 0 20px" }}>
                            Contato
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            <a href={waHref} target="_blank" rel="noopener noreferrer" style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.50)", textDecoration: "none" }}>
                                WhatsApp
                            </a>
                            {contactEmail && (
                                <a href={`mailto:${contactEmail}`} style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.50)", textDecoration: "none" }}>
                                    {contactEmail}
                                </a>
                            )}
                            {!contactEmail && (
                                <span style={{ fontFamily: SANS, fontSize: 14, color: "rgba(255,255,255,0.25)" }}>
                                    YOUR_EMAIL
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
                    <p style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.25)", margin: 0 }}>
                        © 2025 Glebas Rurais. Brumadinho, MG.
                    </p>
                    <p style={{ fontFamily: SANS, fontSize: 11, lineHeight: 1.65, color: "rgba(255,255,255,0.20)", margin: 0, maxWidth: 720 }}>
                        As informações apresentadas neste site têm caráter informativo. Áreas, preços e condições estão sujeitos a confirmação mediante análise do memorial descritivo e demais documentos técnicos. A existência de APP no perímetro está documentada e disponível para consulta durante a negociação.
                    </p>
                </div>
            </div>
        </footer>
    )
}

// ─── FLOATING WHATSAPP ────────────────────────────────────────
function FloatingWhatsApp({ whatsappNumber }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const fn = () => setVisible(window.scrollY > 300)
        window.addEventListener("scroll", fn)
        return () => window.removeEventListener("scroll", fn)
    }, [])

    const waHref = `https://wa.me/${whatsappNumber || "YOUR_WHATSAPP_NUMBER"}?text=Olá! Tenho interesse nas glebas rurais em Brumadinho.`

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: "fixed", bottom: 24, right: 24, zIndex: 200,
                        width: 56, height: 56, borderRadius: "50%",
                        background: "#25D366",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
                        textDecoration: "none",
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                </motion.a>
            )}
        </AnimatePresence>
    )
}

// ─── ROOT COMPONENT ──────────────────────────────────────────
export default function GlebasRurais({
    heroImage, glebaAImage, glebaBImage, glebaCImage, mapaImage,
    gal1Image, gal2Image, gal3Image, gal4Image, gal5Image, gal6Image,
    ctaFinalImage,
    glebaAStatus, glebaBStatus, glebaCStatus,
    whatsappNumber, contactEmail,
}) {
    return (
        <ImageContext.Provider value={{ heroImage, glebaAImage, glebaBImage, glebaCImage, mapaImage, gal1Image, gal2Image, gal3Image, gal4Image, gal5Image, gal6Image, ctaFinalImage }}>
            <div style={{ fontFamily: SANS, background: C.base, color: C.graphite, overflowX: "hidden" }}>
                <Nav whatsappNumber={whatsappNumber} />
                <Hero whatsappNumber={whatsappNumber} />
                <Positioning />
                <Glebas whatsappNumber={whatsappNumber} glebaAStatus={glebaAStatus} glebaBStatus={glebaBStatus} glebaCStatus={glebaCStatus} />
                <Brumadinho />
                <ParaQuemE />
                <Infraestrutura />
                <Transparencia whatsappNumber={whatsappNumber} />
                <Galeria />
                <FAQ />
                <Contato whatsappNumber={whatsappNumber} contactEmail={contactEmail} />
                <CTAFinal whatsappNumber={whatsappNumber} />
                <Footer whatsappNumber={whatsappNumber} contactEmail={contactEmail} />
                <FloatingWhatsApp whatsappNumber={whatsappNumber} />
            </div>
        </ImageContext.Provider>
    )
}

addPropertyControls(GlebasRurais, {
    // ── Images ──
    heroImage:    { type: ControlType.Image, title: "Hero (Secao 1)" },
    glebaAImage:  { type: ControlType.Image, title: "Gleba A" },
    glebaBImage:  { type: ControlType.Image, title: "Gleba B" },
    glebaCImage:  { type: ControlType.Image, title: "Gleba C" },
    mapaImage:    { type: ControlType.Image, title: "Mapa (Localização)" },
    gal1Image:    { type: ControlType.Image, title: "Galeria 1 — Vista aérea" },
    gal2Image:    { type: ControlType.Image, title: "Galeria 2 — Acesso" },
    gal3Image:    { type: ControlType.Image, title: "Galeria 3 — Paisagem" },
    gal4Image:    { type: ControlType.Image, title: "Galeria 4 — Cumeada" },
    gal5Image:    { type: ControlType.Image, title: "Galeria 5 — Córrego" },
    gal6Image:    { type: ControlType.Image, title: "Galeria 6 — Terreno" },
    ctaFinalImage: { type: ControlType.Image, title: "CTA Final — Fundo" },
    // ── Status badges ──
    glebaAStatus: { type: ControlType.Enum, title: "Status Gleba A", options: ["Disponível", "Em negociação", "Vendido"], defaultValue: "Disponível" },
    glebaBStatus: { type: ControlType.Enum, title: "Status Gleba B", options: ["Disponível", "Em negociação", "Vendido"], defaultValue: "Disponível" },
    glebaCStatus: { type: ControlType.Enum, title: "Status Gleba C", options: ["Disponível", "Em negociação", "Vendido"], defaultValue: "Disponível" },
    // ── Contact ──
    whatsappNumber: { type: ControlType.String, title: "WhatsApp (ex: 5531999999999)", defaultValue: "YOUR_WHATSAPP_NUMBER" },
    contactEmail:   { type: ControlType.String, title: "E-mail de contato", defaultValue: "" },
})
