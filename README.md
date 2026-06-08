# Scalio — Landing Page

Landing page institucional do Scalio.

Stack 100% estática: HTML + CSS puro, sem build, sem bundler, sem JavaScript de framework. Apenas um `<script>` inline para animações de scroll, ticker e validação da waitlist.

## Estrutura

| Arquivo / Pasta | Função |
| --- | --- |
| `index.html` | Landing page principal (rota `/`) |
| `styles.css` | Todo o sistema visual (marca, layout, animações, responsivo) |
| `assets/fonts/` | SF Pro Display (Regular, Medium, Bold, LightItalic) |
| `assets/logo-*.png` | Logos da marca (bege, preta, vinho) |
| `assets/elemento-*.png` | Símbolo/elemento da marca (bege, cinza, preto, vinho) |

## Marca

| Token | Valor |
| --- | --- |
| Vinho | `#7A0600` |
| Vinho claro | `#9C1208` |
| Creme | `#FFF0D2` |
| Ink (fundo) | `#0A0A0A` |
| Cinza | `#939393` |

Tipografia: **SF Pro Display**.

## Como rodar localmente

Como o `index.html` é estático, abrir via `file://` funciona, mas o ideal é servir por HTTP para as fontes carregarem corretamente:

```bash
# Python 3
python3 -m http.server 8000

# ou Node
npx serve .
```

Depois abra `http://localhost:8000/`.

## Deploy

Por ser 100% estático, qualquer host serve: GitHub Pages, Vercel, Netlify, Cloudflare Pages. Para GitHub Pages basta habilitar Pages na branch `main`, pasta raiz.
