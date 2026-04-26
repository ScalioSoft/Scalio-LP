# Como subir esta pasta para github.com/ScalioSoft/Scalio-LP

> Tentei inicializar o git daqui, mas o mount do OneDrive bloqueou a escrita em
> `.git/config`. Sobrou uma pasta `.git/` **parcial e inválida** dentro deste
> diretório. O primeiro passo abaixo apaga esse resíduo.

## Pré-requisitos

- `git` instalado (`git --version` para conferir).
- Estar autenticado no GitHub para a organização **ScalioSoft** (via GitHub CLI,
  Git Credential Manager, SSH ou Personal Access Token).
- O repositório **ScalioSoft/Scalio-LP** já existe e está vazio (ou pelo menos
  sem conflito com `main`).

## Passos (PowerShell — abrir nesta pasta)

```powershell
# 0. Entrar na pasta
cd "C:\Users\usuario\OneDrive\Documentos\scalio\Scalio-LP"

# 1. Limpar o .git parcial criado pelo sandbox
Remove-Item -Recurse -Force .git -ErrorAction SilentlyContinue

# 2. Inicializar repositório limpo na branch main
git init -b main

# 3. Identidade do commit (ajuste se quiser usar outro autor)
git config user.email "editorial@agropujante.com.br"
git config user.name  "AgroPujante"

# 4. Stage + commit inicial
git add .
git commit -m "feat: initial landing page (Scalio LP v1)"

# 5. Conectar ao remote do GitHub
git remote add origin https://github.com/ScalioSoft/Scalio-LP.git

# 6. Push da branch main
git push -u origin main
```

### Se você usa Git Bash / WSL em vez de PowerShell

Substitua os passos 0 e 1 por:

```bash
cd "/c/Users/usuario/OneDrive/Documentos/scalio/Scalio-LP"
rm -rf .git
```

Os passos 2 a 6 são idênticos.

## Verificações pós-push

- Confirme que estes 9 arquivos apareceram no GitHub (não deve ter `.git/`
  parcial nem `PUSH-INSTRUCTIONS.md` se você não quiser):
  - `index.html`
  - `brand-book.html`
  - `brand-book-print.html`
  - `tweaks-panel.jsx`
  - `scalio-lp-sections-1.jsx`
  - `scalio-lp-sections-2.jsx`
  - `design-canvas.jsx`
  - `scalio-final.jsx`
  - `README.md` (+ `.gitignore`)

- Para publicar via GitHub Pages: **Settings → Pages → Source: Deploy from a
  branch → Branch: main / (root) → Save**. URL: `https://scaliosoft.github.io/Scalio-LP/`.

## Erros comuns

| Erro | Causa provável | Como resolver |
| --- | --- | --- |
| `remote: Repository not found` | Sem permissão na org ScalioSoft, ou repo privado sem auth | Rodar `gh auth login` (GitHub CLI) ou configurar PAT |
| `! [rejected] main -> main (fetch first)` | Repo remoto já tem commits | `git pull --rebase origin main` antes do push, ou (se o repo deve ser sobrescrito) `git push -u origin main --force` |
| `fatal: bad config line 1 in file .git/config` | Não removeu o `.git/` parcial do passo 1 | Voltar ao passo 1 |
