# Portfolio site: editing, hosting, and connecting your domain

This is a plain HTML/CSS/JS site. No build step, no frameworks, nothing to install.
We'll host it **free on GitHub Pages** (recruiters like seeing your GitHub, and it's the simplest setup).

```
Portfolio/
├── index.html      ← all your content lives here (look for "EDIT:" comments)
├── style.css       ← colors, fonts, layout (change --accent to change the theme color)
├── script.js       ← dark mode, mobile menu, scroll animations
├── CNAME           ← your domain name (one line)
└── assets/
    ├── resume.pdf    ← replace with your real resume (keep the same file name)
    ├── headshot.svg  ← replace with your photo
    └── favicon.svg   ← the little browser-tab icon (change "YN" to your initials)
```

---

## Step 0: Buy ariswong.dev

Any registrar works. **Cloudflare Registrar**, **Porkbun**, and **Namecheap** sell `.dev` at or near cost (around $10–15 USD/year) and include free WHOIS privacy. Avoid add-ons like "website builder" or "premium DNS"; you don't need them.

> **Note about .dev:** every `.dev` site must use HTTPS (browsers enforce it). GitHub Pages gives you a free certificate, but until it's issued (Step 3c) the domain will show a security error. That's normal; just wait for the certificate.

## Step 1: Fill in your content

1. Open the folder in **VS Code** (free: https://code.visualstudio.com).
2. Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**. The page reloads every time you save.
3. In `index.html`, search for `EDIT:` and replace every placeholder (`Your Name`, `your-github`, `you@example.com`, project descriptions, etc.).
4. Drop your resume into `assets/` as `resume.pdf` (overwrite the placeholder).
5. Add a photo as `assets/headshot.jpg` and change `src="assets/headshot.svg"` to `src="assets/headshot.jpg"` in `index.html`. A square photo around 600×600 works best.
6. Change the logo text `yourname.dev` near the top of `index.html` to your domain.

**Content tips for internship recruiters**
- Lead every bullet with an action verb and a result: *"Cut API response time 40% by adding Redis caching."*
- 3–5 strong projects beat 10 weak ones. Link both the code and a live demo when you can.
- Make sure every GitHub repo you link has a README with a screenshot.

---

## Step 2: Put the site on GitHub Pages

1. Sign in at https://github.com (account: `thearisw`).
2. Click **+ → New repository**.
   - Name it exactly **`thearisw.github.io`** (this special name gives you free hosting).
   - Set it to **Public**. Don't add a README. Click **Create repository**.
3. Upload the files (pick one):
   - **Easy way:** on the new repo page click **uploading an existing file**, drag in *everything inside* the Portfolio folder (including the `assets` folder and `CNAME`), then **Commit changes**.
   - **Git way** (from the Portfolio folder in a terminal):
     ```bash
     git init
     git add .
     git commit -m "Initial portfolio"
     git branch -M main
     git remote add origin https://github.com/thearisw/thearisw.github.io.git
     git push -u origin main
     ```
4. Go to the repo's **Settings → Pages**. Under *Build and deployment* make sure **Source = Deploy from a branch**, **Branch = main / (root)**, then Save.
5. After a minute, your site is live at **https://thearisw.github.io**.

---

## Step 3: Point your domain at it

### 3a. Tell GitHub your domain
1. Edit the `CNAME` file so it contains only your domain, `ariswong.dev` (already done for you) (no `https://`, no `www`). Commit it.
2. In **Settings → Pages → Custom domain**, type the same domain and click **Save**.

### 3b. Add DNS records at your registrar
Log in where you bought the domain (Namecheap, GoDaddy, Cloudflare, Porkbun, Google/Squarespace, etc.), find **DNS / Manage DNS / Advanced DNS**, and:

1. **Delete** any existing parking-page records for `@` and `www` (A, CNAME, or "URL redirect" records).
2. **Add these records:**

| Type  | Host / Name | Value / Points to        |
|-------|-------------|--------------------------|
| A     | `@`         | `185.199.108.153`        |
| A     | `@`         | `185.199.109.153`        |
| A     | `@`         | `185.199.110.153`        |
| A     | `@`         | `185.199.111.153`        |
| CNAME | `www`       | `thearisw.github.io`     |

Optional (IPv6): AAAA records for `@` with `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

> **Cloudflare users:** set these records to **DNS only** (grey cloud) at first, so GitHub can issue your HTTPS certificate.

### 3c. Turn on HTTPS
DNS can take anywhere from a few minutes to 24 hours. Once **Settings → Pages** shows *"DNS check successful"*, tick **Enforce HTTPS**. (If the box is greyed out, the certificate is still being issued. Check back in an hour.)

Now both `ariswong.dev` and `www.ariswong.dev` will load your site over HTTPS.

### 3d. (Recommended) Verify the domain
In your GitHub **profile Settings → Pages → Add a domain**, follow the steps to add a TXT record. This stops anyone else from claiming your domain on GitHub Pages.

---

## Updating the site later
Edit the files → upload/commit to the repo → the live site updates within about a minute.

## Troubleshooting
- **404 "There isn't a GitHub Pages site here"**: check that `index.html` is in the repo root (not inside a `Portfolio/` subfolder) and that Pages is set to `main / (root)`.
- **Domain shows the registrar's parking page**: an old A or URL-forward record is still there. Delete it.
- **Custom domain disappears from settings after you push**: make sure the `CNAME` file is in the repo and contains your domain.
- **Check your DNS from anywhere**: https://dnschecker.org, enter your domain, record type A.
