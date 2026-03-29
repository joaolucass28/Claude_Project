# Build Notes — Glebas Rurais

## Framer Project
- Project name: Glebas Rurais
- Project URL: <!-- add when created -->
- Published URL: <!-- add when published -->
- Custom Domain: <!-- add when connected -->

## Site Settings (Framer)
- Background: `#F8F5F0`
- Title: `Glebas Rurais · Brumadinho, MG`
- Favicon: símbolo tipográfico "GR" em verde floresta (a criar)
- Smooth scroll: ativado
- SEO meta description: a preencher com pitch em PT
- OG Image: crop do hero (landscape)

## Fonts
- **Cormorant Garamond** — Regular 400, Medium 500, SemiBold 600
- **DM Sans** — Regular 400, Medium 500, SemiBold 600
- Alternativa: Playfair Display (se Cormorant não disponível)
- Carregadas via Google Fonts no painel Framer → Fonts

## CMS
- [ ] CMS não obrigatório na fase 1
- Expansão futura: Collection "Glebas" (nome, área, preço, descrição, status, imagem)
- Permite atualizar status (Disponível / Em negociação / Vendido) sem editar design

## Integrations
- [ ] Contact form → Formspree (configurar antes de publicar)
- [ ] WhatsApp CTA → `https://wa.me/5531XXXXXXXXX?text=Ol%C3%A1%2C+tenho+interesse+nas+Glebas+Rurais`
- [ ] Analytics → Google Analytics ou Plausible (via custom code)
- [ ] E-mail de contato → a preencher no footer e seção de contato

## Components
- `NavBar` — sticky, blur, hamburger mobile
- `Button` — 3 variants: Primary / Secondary (outline) / Ghost (dark bg)
- `HeroSection` — full viewport, parallax image, stagger animation
- `GlebaCard` — reusable, props: glebaName, area, price, description, imageSrc
- `FeatureItem` — icon + title + description
- `ProfileCard` — 4× perfis comprador (2×2 grid)
- `FAQItem` — variant Closed/Open, height animate
- `ContactForm` — 2 colunas, inputs borderless bottom-line style
- `TransparencySection` — dark standalone section, sem animação
- `GalleryGrid` — masonry/editorial, lightbox on click
- `Footer` — 3 colunas + legal bar

## Breakpoints
- Desktop: ≥ 1200px (layout padrão, todas as colunas)
- Tablet: 768–1199px (grid 2 colunas, padding reduzido)
- Mobile: < 768px (stack único, nav hamburger)

## Anchor IDs
- `#hero`, `#glebas`, `#brumadinho`, `#infraestrutura`, `#contato`

## Assets
- `/assets/` — vazio aguardando fotos reais do fotógrafo/drone
- Usar placeholders Unsplash: "minas gerais natureza", "cerrado", "fazenda mineira"
- Formato entregável: WebP, máx 1800px largura, qualidade 85%
- Aspect ratios: Hero 16:9 · Cards 4:3 · Galeria mix 3:2 e 2:3 · Coluna lateral 3:4

## Known Issues / Workarounds
- APP no perímetro: documentada e comunicada na seção Transparência — não é workaround, é decisão estratégica
- Preços e áreas sujeitos a confirmação — nota de rodapé já incluída na seção de glebas e no footer

## Handoff Notes
O que o cliente pode editar diretamente no Framer sem desenvolvedor:
- Preço das glebas → clicar no texto do card → editar
- Área das glebas → mesmo processo
- Status do card (disponível/reservado/vendido) → editar badge + cor
- Qualquer texto → clicar no canvas → editar
- Imagens → clicar na imagem → substituir via upload
- Número do WhatsApp → buscar botão WhatsApp → editar link
- E-mail → editar no footer e na seção de contato
