# Scalio — Landing Page

Landing page institucional do Scalio + Brand Book v1.0.

Stack mínima e estática: HTML + React 18 (UMD) + JSX transpilado em runtime via `@babel/standalone`. Sem build, sem bundler, sem dependências de pacote — basta servir os arquivos.

## Estrutura

| Arquivo | Função |
| --- | --- |
| `index.html` | Landing page principal (rota `/`) |
| `brand-book.html` | Brand Book interativo (DesignCanvas com seções e artboards) |
| `brand-book-print.html` | Versão paginada do Brand Book com auto-`window.print()` |
| `tweaks-panel.jsx` | Painel de tweaks reutilizável (host protocol de edit mode) |
| `scalio-lp-sections-1.jsx` | LP — Nav, Hero, Marquee, Problem, Solution, HowItWorks |
| `scalio-lp-sections-2.jsx` | LP — Features, UseCases, BigStat, Pricing, Waitlist, Footer |
| `design-canvas.jsx` | Componentes `DesignCanvas`, `DCSection`, `DCArtboard` (Brand Book) |
| `scalio-final.jsx` | Páginas do Brand Book (`Cover`, `LogoPage`, `Construction`, `ColorType`, `DoDont`, `Applications`, `Closing`) |

## Como rodar localmente

Como o `index.html` carrega arquivos `.jsx` via `<script src>`, é necessário um servidor HTTP (não funciona abrindo o arquivo via `file://` por causa de CORS).

```bash
# Python 3
python3 -m http.server 8000

# ou Node
npx serve .
```

Depois abra `http://localhost:8000/`.

## Deploy

Por ser 100% estático, qualquer host serve: GitHub Pages, Vercel, Netlify, Cloudflare Pages, S3 + CloudFront. Para GitHub Pages basta habilitar Pages na branch `main`, pasta raiz.
