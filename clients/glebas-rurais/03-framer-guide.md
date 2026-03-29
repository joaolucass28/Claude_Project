# Glebas Rurais — Guia de Implementação no Framer

> Este documento orienta passo a passo como construir o site dentro do Framer.
> Projetado para quem tem familiaridade básica com a plataforma.

---

## SETUP INICIAL

### 1. Criar o projeto no Framer

1. Abra o Framer e crie um novo projeto: **"Glebas Rurais"**
2. Em **Page Settings**, configure:
   - Background: `#F8F5F0`
   - Font: adicione as fontes abaixo via Google Fonts
3. Em **Site Settings**:
   - Title: `Glebas Rurais · Brumadinho, MG`
   - Favicon: upload de ícone (sugestão: símbolo tipográfico "GR" em verde floresta)

### 2. Fontes a adicionar

No painel de configurações do Framer → **Fonts**:

| Fonte | Variantes necessárias |
|---|---|
| **Cormorant Garamond** | Regular 400, Medium 500, SemiBold 600 |
| **DM Sans** | Regular 400, Medium 500, SemiBold 600 |

Alternativa se Cormorant não estiver disponível: **Playfair Display**

### 3. Variáveis de cor (Color Styles)

Crie os seguintes Color Styles em **Assets → Colors**:

```
Base           #F8F5F0
Surface        #FFFFFF
Forest         #2A3D2E
Earth          #8B7355
Stone          #C4BFB5
Graphite       #2C2C2C
Mid            #6B6B6B
Light          #E8E3DC
CTA            #2A3D2E
CTAHover       #1A2A1E
```

### 4. Text Styles

Crie os seguintes Text Styles em **Assets → Text Styles**:

```
Display        Cormorant Garamond, 72px, 400, line-height 1.05, color Graphite
H2             Cormorant Garamond, 44px, 400, line-height 1.15, color Forest
H3             DM Sans, 22px, 500, line-height 1.3, color Graphite
Body           DM Sans, 17px, 400, line-height 1.65, color Graphite
BodyMid        DM Sans, 17px, 400, line-height 1.65, color Mid
Label          DM Sans, 12px, 500, letter-spacing 0.12em, UPPERCASE, color Earth
Caption        DM Sans, 13px, 400, line-height 1.5, color Mid
Price          Cormorant Garamond, 34px, 500, color Forest
NavLink        DM Sans, 14px, 500, color Graphite
ButtonText     DM Sans, 14px, 600, letter-spacing 0.06em
```

---

## COMPONENTES — PASSO A PASSO

### COMPONENTE: NavBar

**Estrutura no Framer:**
```
Frame (NavBar)
  Fill: rgba(248, 245, 240, 0.88)
  Backdrop filter: blur 12px
  Position: Sticky top
  Height: 72px
  Width: 100%
  Padding: 0 48px (desktop) / 0 24px (mobile)
  Border bottom: 1px solid rgba(196,191,181,0.4)

  ├── Frame (NavLeft)
  │     └── Text "Glebas Rurais"
  │           Font: Cormorant Garamond, 20px, 500
  │           Color: Forest
  │
  ├── Frame (NavCenter)  [visível apenas em desktop]
  │     └── Stack horizontal, gap 40px
  │           Text "Glebas"        → link âncora #glebas
  │           Text "Infraestrutura" → link âncora #infraestrutura
  │           Text "Localização"    → link âncora #brumadinho
  │           Text "Contato"        → link âncora #contato
  │
  └── Frame (NavRight)
        └── Button (CTA)
              "Agendar Visita"
              Style: Primary Button
```

**Comportamento:**
- Em Framer, selecione o Frame → Position → **Sticky**
- Adicione blur via **Backdrop Filter** em efeitos
- Em mobile (< 768px): ocultar NavCenter, exibir ícone menu → criar **variant** MenuOpen com overlay full-screen

---

### COMPONENTE: Button (criar 2 variantes)

**Primary:**
```
Frame
  Fill: #2A3D2E
  Padding: 14px 32px
  Border-radius: 2px

  └── Text "Label"
        Style: ButtonText
        Color: #FFFFFF

Hover variant:
  Fill: #1A2A1E
  Box-shadow: 0 4px 16px rgba(42,61,46,0.25)
```

**Secondary (Outline):**
```
Frame
  Fill: transparent
  Border: 1.5px solid #2A3D2E
  Padding: 13px 31px
  Border-radius: 2px

  └── Text "Label"
        Style: ButtonText
        Color: #2A3D2E

Hover variant:
  Fill: #2A3D2E
  Text color: #FFFFFF
```

**Ghost (para fundos escuros):**
```
Frame
  Fill: transparent
  Border: 1.5px solid rgba(255,255,255,0.6)
  Padding: 13px 31px

  └── Text: #FFFFFF

Hover:
  Fill: rgba(255,255,255,0.12)
```

---

### COMPONENTE: HeroSection

**Estrutura:**
```
Frame (HeroSection)
  Height: 100vh
  Width: 100%
  Position: relative
  Overflow: hidden

  ├── Image (HeroBG)
  │     Width/Height: 100%
  │     Object-fit: cover
  │     Position: absolute
  │     [Placeholder: imagem aérea Brumadinho]
  │
  ├── Frame (Overlay)
  │     Width/Height: 100%
  │     Position: absolute
  │     Fill: rgba(20, 30, 20, 0.40)
  │
  └── Frame (HeroContent)
        Position: absolute
        Bottom: 96px, Left: 80px (desktop)
        Max-width: 680px

        ├── Text (Label)
        │     "Brumadinho, Minas Gerais"
        │     Style: Label, Color: rgba(255,255,255,0.75)
        │
        ├── Text (H1)
        │     "Campo com estrutura.\nSilêncio com acesso."
        │     Style: Display, Color: #FFFFFF
        │     Margin-top: 16px
        │
        ├── Text (Sub)
        │     [Subheadline]
        │     Style: Body, Color: rgba(255,255,255,0.80)
        │     Margin-top: 24px
        │
        └── Frame (CTAGroup)
              Stack horizontal, gap: 16px
              Margin-top: 40px
              ├── Button Primary "Conhecer as Glebas"
              └── Button Ghost "Agendar uma Visita"
```

**Animação de entrada:**
- Selecionar Label, H1, Sub, CTAGroup
- Appearance → **Fade In + Slide Up**
- Offset Y: 40px
- Duration: 0.5s
- Delay: 0.1s / 0.2s / 0.35s / 0.5s (stagger manual)

**Parallax no Hero Image:**
- Selecionar HeroBG
- Scroll → **Move** → Y: de 0 a 80px enquanto a seção sai da tela

---

### COMPONENTE: GlebaCard

**Criar como componente reutilizável com props:**
- `glebaName` (string)
- `area` (string)
- `price` (string)
- `description` (string)
- `imageSrc` (image)

**Estrutura:**
```
Frame (GlebaCard)
  Width: 100% (dentro de grid de 3)
  Background: #FFFFFF
  Border-radius: 4px
  Box-shadow: 0 2px 16px rgba(0,0,0,0.06)
  Overflow: hidden

  ├── Frame (CardImageWrapper)
  │     Height: 240px
  │     Overflow: hidden
  │     Position: relative
  │
  │     ├── Image (CardImage)
  │     │     Width/Height: 100%
  │     │     Object-fit: cover
  │     │     [Placeholder landscape]
  │     │
  │     └── Frame (CardBadge)
  │           Position: absolute, top: 16px, left: 16px
  │           Background: rgba(248,245,240,0.92)
  │           Padding: 6px 14px
  │           Border-radius: 2px
  │           Text: "Gleba A" — DM Sans, 12px, 600, Forest
  │
  └── Frame (CardBody)
        Padding: 32px

        ├── Text (Area)    — DM Sans, 13px, 400, Mid   "2,0063 ha"
        ├── Text (Price)   — Style: Price               "R$ 450.000"
        │     Margin-top: 8px
        │
        ├── Frame (Tags)
        │     Stack horizontal wrap, gap: 8px
        │     Margin-top: 20px
        │     [4× tag pill: DM Sans 11px, Forest, border 1px Stone, padding 4px 10px]
        │
        ├── Text (Description)
        │     Style: Body, margin-top: 20px
        │
        └── Button Secondary "Solicitar Informações →"
              Margin-top: 28px, width: 100%
```

**Hover state:**
- Card: `box-shadow: 0 8px 32px rgba(0,0,0,0.10)`, `translateY(-4px)`
- CardImage: `scale(1.03)`
- Transition: 250ms ease

**Grid container:**
```
Frame (GlebasSection)
  Background: #E8E3DC
  Padding: 120px 48px (desktop)

  └── Frame (GlebasGrid)
        Display: Grid
        Columns: 3 (desktop) / 1 (mobile)
        Gap: 24px
        Max-width: 1200px
        Margin: 0 auto
```

---

### COMPONENTE: FeatureItem

```
Frame (FeatureItem)
  Stack vertical, gap: 12px

  ├── Frame (IconWrapper)
  │     Width/Height: 44px
  │     Background: rgba(42,61,46,0.08)
  │     Border-radius: 2px
  │     [Icon SVG — 20px, color Forest]
  │
  ├── Text (Title)    — DM Sans, 16px, 600, Graphite
  └── Text (Desc)     — DM Sans, 15px, 400, Mid, line-height 1.6
```

---

### COMPONENTE: ProfileCard

```
Frame (ProfileCard)
  Background: #FFFFFF
  Border-radius: 4px
  Padding: 36px
  Border: 1px solid #E8E3DC

  ├── Frame (Icon) — 40px, Forest color
  ├── Text (Title) — H3 style, margin-top: 20px
  └── Text (Desc)  — Body style, color Mid, margin-top: 12px
```

Grid: 2×2 colunas no desktop, 1 coluna no mobile.

---

### COMPONENTE: FAQItem

**Criar com 2 variants: Closed / Open**

```
Frame (FAQItem)
  Width: 100%
  Border-bottom: 1px solid #E8E3DC

  Variant CLOSED:
    ├── Frame (Header) — flex row, justify-between
    │     Padding: 24px 0
    │     ├── Text (Question) — DM Sans, 17px, 500, Graphite
    │     └── Icon "+"
    └── [FAQAnswer oculto]

  Variant OPEN:
    ├── Frame (Header) — igual, ícone vira "−"
    └── Frame (Answer)
          Padding: 0 0 24px 0
          └── Text — Body, color Mid
```

**Interação:**
- Adicionar **Click → Toggle** entre variants Closed e Open
- Animar `height` de 0 para auto com `spring(200)`

---

### COMPONENTE: ContactForm

```
Frame (ContactSection)
  Background: #FFFFFF
  Padding: 120px 48px

  └── Frame (ContactInner)
        Grid: 2 colunas (desktop)
        Gap: 80px

        ├── Frame (ContactLeft)
        │     ├── Label "Contato"
        │     ├── H2 "Vamos conversar..."
        │     ├── Body text
        │     └── Button WhatsApp (ícone + texto)
        │
        └── Frame (FormWrapper)
              Stack vertical, gap: 24px

              ├── Input "Nome completo"
              ├── Input "Telefone / WhatsApp"
              ├── Input "E-mail"
              ├── Select "Gleba de interesse"
              ├── Textarea "Mensagem (opcional)"
              └── Button Primary "Enviar Mensagem" (full width)
```

**Style dos inputs:**
```
Frame (InputWrapper)
  Stack vertical, gap: 6px

  ├── Text (Label) — DM Sans, 12px, 500, letter-spacing 0.1em, Mid, uppercase
  └── Input
        Height: 48px
        Background: transparent
        Border-bottom: 1.5px solid #C4BFB5
        Font: DM Sans, 16px, Graphite
        Padding: 0 0 12px
        Focus → border-color: #2A3D2E, transition 150ms
```

**Conectar formulário:**
- Em Framer: selecionar form → **Form Submit** → conectar ao Formspree ou endpoint próprio
- Criar estado de sucesso: Text "Mensagem enviada. Retornaremos em breve."

---

## RESPONSIVIDADE

### Breakpoints no Framer

| Breakpoint | Largura | Ajustes principais |
|---|---|---|
| Desktop | ≥ 1200px | Layout padrão, todas as colunas |
| Tablet | 768–1199px | Grid 2 colunas, padding reduzido |
| Mobile | < 768px | Stack único, nav hamburger |

### Checklist de responsividade

Para cada seção, verificar no painel de breakpoints:

- [ ] **Nav:** ocultar NavCenter, mostrar menu hamburger em < 768px
- [ ] **Hero:** reduzir H1 para 48px, bottom: 48px, padding lateral: 24px
- [ ] **Gleba cards:** empilhar verticalmente (1 coluna)
- [ ] **Por Que Brumadinho:** imagem sobre texto, sem sticky
- [ ] **Para Quem É:** 1 coluna em mobile
- [ ] **Infraestrutura:** 1 coluna em mobile
- [ ] **Gallery:** scroll horizontal em mobile
- [ ] **Formulário:** empilhar coluna esquerda sobre formulário
- [ ] **Footer:** stack vertical

### Tamanhos de fonte mobile

```
Display/H1:  40px (era 72px)
H2:          32px (era 44px)
H3:          18px
Body:        16px
Label:       11px
Price:       28px
```

---

## SCROLL E ANCORAGEM

Para que os links do nav naveguem suavemente:

1. Selecionar cada seção Frame
2. ID no painel direito → nomear: `hero`, `glebas`, `brumadinho`, `infraestrutura`, `contato`
3. Nos NavLinks: **Link → Anchor → selecionar o ID**
4. Em **Site Settings → Scroll → Smooth scroll**: ativar

---

## IMAGENS — ORIENTAÇÕES DE PLACEHOLDER

Usar imagens placeholder de alta qualidade enquanto as fotos reais não estão disponíveis:

- **Unsplash:** buscar "minas gerais natureza", "cerrado", "fazenda mineira", "vista aérea campo"
- **Formato recomendado:** WebP, máximo 1800px de largura, qualidade 85%
- **Aspecto ratio por contexto:**
  - Hero: 16:9 ou livre (full viewport)
  - Gleba cards: 4:3
  - Galeria: mix de 3:2 (paisagem) e 2:3 (retrato)
  - Por Que Brumadinho: 3:4 (coluna lateral)

---

## PUBLICAÇÃO

1. **Domínio:** conectar domínio personalizado em Site Settings → Domains
2. **SEO:** preencher em cada página → Title, Description, OG Image
3. **Analytics:** adicionar Google Analytics ou Plausible via custom code
4. **Form backend:** configurar Formspree antes de publicar
5. **WhatsApp link:** formato `https://wa.me/5531XXXXXXXXX?text=Ol%C3%A1%2C+tenho+interesse+nas+Glebas+Rurais`

---

## MANUTENÇÃO FUTURA (sem desenvolvedor)

### O que pode ser editado diretamente no Framer:

| O que mudar | Como fazer |
|---|---|
| Preço das glebas | Abrir GlebaCard no canvas → clicar no texto do preço → editar |
| Área das glebas | Mesmo processo |
| Status da gleba (disponível/vendida) | Editar badge do card + cor |
| Textos gerais | Clicar em qualquer texto no canvas → editar |
| Imagens | Clicar na imagem → substituir via upload |
| Número de WhatsApp | Buscar componente do botão WhatsApp → editar link |
| E-mail de contato | Editar no footer e na seção de contato |

### Se usar CMS (futuro):

- Criar Collection "Glebas" com campos: nome, área, preço, descrição, status, imagem
- Conectar os 3 GlebaCards à collection
- Atualizações ficam disponíveis em **CMS → Glebas** sem tocar no design
