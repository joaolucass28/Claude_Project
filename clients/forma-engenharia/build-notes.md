# Build Notes — Forma Engenharia

## Stack recomendado
**Framer** — mesma stack do projeto Glebas Rurais.
- Permite publicação rápida, CMS para portfólio, formulário nativo ou integração
- Ideal para landing pages de alto padrão com animações de scroll refinadas

---

## Estrutura de componentes Framer

### Componentes globais
- `NavBar` — fixo, transparente → sólido ao scroll (scroll-triggered background)
- `CTAButton` — variante primária (carvão) e ghost (borda)
- `SectionWrapper` — padding vertical padronizado (120px desktop / 64px mobile)
- `Divider` — linha 1px ou espaçador

### Componentes por seção
| Seção | Componente principal | Notas |
|-------|---------------------|-------|
| Hero | `HeroFullBleed` | Imagem de fundo, overlay escuro sutil, texto esquerdo |
| Diferenciais | `FeatureGrid` | 2×2 ou 4 colunas, sem ícones coloridos |
| Como trabalhamos | `ProcessTimeline` | Horizontal desktop / vertical mobile |
| Portfólio | `ProjectGrid` + `ProjectCard` | CMS-driven, hover overlay |
| Números | `StatRow` | 4 colunas, tipografia grande, sem ícones |
| Depoimento | `QuoteBlock` | Tipografia grande, fundo escuro ou claro alternado |
| CTA Final | `CTASection` | Centralizado, formulário embutido |
| Footer | `FooterSimple` | 2 colunas ou stack |

---

## CMS do portfólio (Framer CMS)

Campos recomendados por item:
- `title` (texto) — nome do projeto
- `location` (texto) — bairro/cidade
- `type` (texto) — residencial / comercial / etc.
- `area` (número) — m² construídos
- `year` (número) — ano de entrega
- `cover` (imagem) — foto principal do card
- `gallery` (imagens) — fotos adicionais para modal
- `featured` (boolean) — exibir na home

---

## Formulário / CTA

Opções em ordem de preferência:
1. **Formulário nativo Framer** → notificação por e-mail para o cliente
2. **Link Calendly** → agenda direto, sem fricção
3. **WhatsApp Business** → mais informal, mas pode funcionar para o público BH

Recomendar opção 1 ou 2 ao cliente. Validar preferência antes de construir.

---

## Fontes

Importar via Google Fonts ou Framer:
- `Cormorant Garamond` — variantes: Light (300), Regular (400), Italic
- `Inter` — variantes: Regular (400), Medium (500)

Fallback stack:
```css
font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

---

## Animações de scroll

Configurar no Framer com scroll-triggered animations:
- Fade + translateY(20px→0) em todos os blocos de conteúdo
- Delay escalonado nos itens de grid (0ms, 100ms, 200ms, 300ms)
- Parallax no hero: `background-attachment: fixed` ou Framer scroll offset
- Evitar `scale` — muito chamativo para este posicionamento

---

## Performance

- Imagens: WebP, máximo 200KB por imagem de portfólio, 400KB para hero
- Lazy load em todas as imagens abaixo do fold
- Fonte: preload das 2 famílias principais no `<head>`
- Score alvo: Lighthouse ≥ 90 (performance, acessibilidade, SEO)

---

## SEO básico

```
<title>Forma Engenharia — Incorporação e Construção de Alto Padrão em BH</title>
<meta name="description" content="A Forma Engenharia projeta e constrói imóveis de alto luxo em Belo Horizonte com controle total do processo. Agende uma conversa.">
```

- OG image: foto de projeto, 1200×630px
- Schema markup: `LocalBusiness` + `Organization`

---

## Estado atual do build (atualizado 2026-03-29)

O componente `FormaEngenharia.tsx` está estruturalmente completo — todas as 8 seções implementadas, tokens de design corretos, copy fiel ao `copy-home.md`. O que bloqueia a entrega é um conjunto de placeholders que dependem de dados reais do cliente, mais três gaps de código que podem ser resolvidos agora.

### Seções completas e corretas
- Nav (scroll-triggered, links de âncora corretos)
- Hero (headline, subtítulo, CTA, overlay correto)
- Diferenciais (4 pilares, copy exato)
- Processo (4 etapas, copy exato)
- Portfólio (3 cards com hover, estrutura correta)
- Números (4 métricas — valores placeholder, estrutura OK)
- Depoimento (copy provisório — precisa de real)
- CTA Final (formulário funcional com mailto fallback)
- Footer (estrutura presente — dados incompletos)

### Placeholders que exigem dados do cliente
- `YOUR_EMAIL` no handler do formulário (linha 718)
- Nomes reais dos 3 projetos no portfólio (linhas 503–518)
- Fotos reais dos 3 projetos (substituir Unsplash)
- 4 métricas reais na seção Números (anos, projetos, m², retorno)
- Número CREA-MG no rodapé (linha 864)
- URLs reais do Instagram e LinkedIn no rodapé (linha 845)
- Depoimento real com atribuição correta
- E-mail e telefone de contato no rodapé (ausentes no código)

### Gaps de código a corrigir antes da entrega
1. Adicionar parágrafo de subtítulo do portfólio (copy-home.md, seção 05) — ausente na `Portfolio()`
2. Adicionar e-mail e telefone no rodapé — previstos no copy-home.md, ausentes no código
3. Implementar nav mobile (hambúrguer ou versão compacta) — nav atual transborda em 375px
4. Implementar portfólio como carrossel horizontal com snap scroll no mobile (visual-direction.md especifica isso; atual usa grid auto-fit em todos os breakpoints)
5. Corrigir `MobileCTA` — `display: none` com comentário de classe CSS não funciona em código Framer; usar lógica JS de viewport ou `<style>` injetado
6. Adicionar `type="tel"` e `inputMode="tel"` no campo de telefone do formulário
7. Adicionar estados `focus` visíveis nos inputs do formulário (atualmente `outline: none` — falha WCAG AA)

### Decisão pendente de validar com o cliente
- Método de contato preferido: formulário nativo Framer, Calendly ou mailto (WhatsApp como secundário)

---

## QA antes de publicar

- [ ] Todos os campos `[ ]` preenchidos com dados reais do cliente
- [ ] Depoimento real do cliente inserido
- [ ] Formulário testado — envio real, não apenas visual
- [ ] Responsividade testada em: 390px (iPhone 15), 430px (iPhone Plus), 768px (iPad), 1440px (desktop)
- [ ] Links do nav apontando para âncoras corretas
- [ ] Imagens otimizadas (WebP, max 200KB portfólio, 400KB hero) e sem distorção no mobile
- [ ] CTA fixo mobile visível e funcional
- [ ] Nav mobile implementado e testado
- [ ] Portfólio mobile como carrossel com snap scroll
- [ ] CREA-MG e dados de contato validados com o cliente
- [ ] E-mail e telefone presentes no rodapé
- [ ] Meta title e description configurados no Framer
- [ ] OG image configurada (1200×630px)
- [ ] Google Analytics ou outra ferramenta de rastreamento ativa
- [ ] Teste Lighthouse ≥ 90 em performance, acessibilidade e SEO
- [ ] Contraste de cor verificado (WCAG AA) em todos os textos sobre fundo escuro
- [ ] Estados de foco visíveis em todos os elementos interativos

---

## Pendências que dependem do cliente

- [ ] Confirmar método de contato: formulário Framer, Calendly ou mailto
- [ ] Receber logotipo em SVG (atualmente usando nome em texto serif)
- [ ] Receber fotos reais dos projetos (ou aprovar direção de imagem alternativa)
- [ ] Confirmar números reais para a seção de métricas
- [ ] Receber/aprovar depoimento de cliente com nome ou identificação aprovada
- [ ] Receber e-mail, telefone, CREA-MG, URLs de redes sociais
- [ ] Definir domínio e configuração de DNS
