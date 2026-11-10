# ariswong.dev: setup, editing, and hosting

Your site is a **React + TypeScript + Tailwind CSS** project set up the shadcn way (Vite as the build tool).
GitHub builds it and hosts it free on **GitHub Pages** each time you push.

```
Portfolio/
├── src/
│   ├── data/portfolio.ts        ← ALL your content (text, projects, links). Edit this file.
│   ├── components/
│   │   ├── ui/                   ← shadcn-style reusable components
│   │   │   ├── aurora-background.tsx   (the animated hero background)
│   │   │   ├── demo.tsx                (the component author's demo, not used on the site)
│   │   │   ├── button.tsx, badge.tsx
│   │   ├── sections/             ← Navbar, Hero, About, Experience, Projects, Skills, Contact
│   │   └── icons.tsx             ← GitHub / LinkedIn logos
│   ├── lib/utils.ts              ← the cn() helper shadcn components use
│   └── index.css                 ← Tailwind + light/dark theme colors
├── public/                       ← files served as-is: resume.pdf, favicon.svg, CNAME
├── tailwind.config.ts            ← includes the aurora animation + color-variable plugin
├── components.json               ← shadcn CLI config
├── deploy.yml                    ← auto-deploy workflow (move it into .github/workflows/, see Step 4)
└── old-static-version/           ← the previous plain HTML site, kept for reference
```

### Why `components/ui`?
The shadcn CLI (`npx shadcn@latest add <component>`) installs components into the folder named by `aliases.ui` in `components.json`, which here is `src/components/ui` (imported as `@/components/ui/...`). Keeping copied-in components like `aurora-background.tsx` in the same place means every import path matches what component docs and demos expect, and future `shadcn add` commands land beside them.

---

## Step 0: Install the tools (one time)

1. **Node.js LTS**: https://nodejs.org → download the Windows installer and accept the defaults.
2. **Git**: https://git-scm.com/download/win (defaults are fine).
3. **VS Code**: https://code.visualstudio.com

Check it worked: open **PowerShell** and run `node -v` and `git --version`.

## Step 1: Run it on your computer

In PowerShell:
```powershell
cd $HOME\Desktop\Portfolio
npm install        # first time only, downloads dependencies into node_modules
npm run dev        # starts a live preview
```
Open the `http://localhost:5173` link it prints. Every time you save a file the page updates instantly. Press `Ctrl+C` to stop.

To check that the production build works before pushing: `npm run build`.

## Step 2: Edit your content

Open `src/data/portfolio.ts`. Everything on the site comes from there:
- **LinkedIn**: paste your URL into `linkedin: ""` and the icon shows up automatically.
- **Project links**: add `code: "https://github.com/thearisw/REPO"` and/or `demo: "https://..."` to any project.
- **Add a project**: copy one `{ ... }` block in `projects`. Icons come from https://lucide.dev/icons (import the name at the top of the file).
- **Resume**: replace `public/resume.pdf` (keep the name).
- **Photo**: put `headshot.jpg` in `public/`, then follow the `EDIT:` comment in `src/components/sections/About.tsx`.

---

## Step 3: Buy ariswong.dev

**Cloudflare Registrar**, **Porkbun**, or **Namecheap** sell `.dev` at or near cost (about $10–15 USD/year) with free WHOIS privacy. Skip the add-ons.

> `.dev` domains must use HTTPS (browsers enforce it). GitHub gives you a free certificate, but until it's issued (Step 5c) the domain will show a security error. That's normal.

## Step 4: Put it on GitHub

1. On https://github.com click **+ → New repository**. Name it **`thearisw.github.io`**, set **Public**, don't add a README, click **Create repository**.
2. **Move the deploy workflow into place** (GitHub only runs workflows from `.github/workflows/`). In PowerShell:
   ```powershell
   cd $HOME\Desktop\Portfolio
   mkdir .github\workflows -Force
   move deploy.yml .github\workflows\deploy.yml
   ```
3. Then push the project:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/thearisw/thearisw.github.io.git
   git push -u origin main
   ```
   (`node_modules` and `dist` are skipped automatically by `.gitignore`.)
4. In the repo go to **Settings → Pages**, and under *Build and deployment* set **Source = GitHub Actions**.
5. Open the **Actions** tab. The "Deploy to GitHub Pages" run takes about a minute. If it ran before you changed the setting and failed, click it → **Re-run all jobs**.
6. Your site is live at **https://thearisw.github.io**.

## Step 5: Point ariswong.dev at it

### 5a. Tell GitHub your domain
`public/CNAME` already contains `ariswong.dev`. Also go to **Settings → Pages → Custom domain**, type `ariswong.dev`, and click **Save**.

### 5b. Add DNS records at your registrar
In your registrar's **DNS settings**, delete any parking records for `@` and `www`, then add:

| Type  | Host / Name | Value                 |
|-------|-------------|-----------------------|
| A     | `@`         | `185.199.108.153`     |
| A     | `@`         | `185.199.109.153`     |
| A     | `@`         | `185.199.110.153`     |
| A     | `@`         | `185.199.111.153`     |
| CNAME | `www`       | `thearisw.github.io`  |

Optional IPv6: AAAA records for `@` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

> **Cloudflare:** set these to **DNS only** (grey cloud) so GitHub can issue the certificate.

### 5c. Turn on HTTPS
DNS takes minutes to a few hours. When **Settings → Pages** says *DNS check successful*, tick **Enforce HTTPS**.

### 5d. (Recommended) Verify the domain
**Profile Settings → Pages → Add a domain**, then add the TXT record it gives you. This stops anyone else from claiming your domain on GitHub Pages.

---

## Updating the site later
```powershell
git add .
git commit -m "Update projects"
git push
```
GitHub rebuilds and redeploys automatically in about a minute.

## Troubleshooting
- **Actions run fails at "npm ci"**: make sure `package-lock.json` was committed.
- **Blank page / 404 on GitHub Pages**: check that Pages **Source** is set to **GitHub Actions**, not "Deploy from a branch".
- **Domain shows the registrar's parking page**: an old A or URL-forward record is still there. Delete it.
- **Check DNS**: https://dnschecker.org, enter `ariswong.dev`, record type A.
