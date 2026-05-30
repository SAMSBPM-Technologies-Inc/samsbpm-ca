# Deployment Guide — samsbpm.ca

The samsbpm.ca corporate website is a **Next.js 15 static export** deployed to **Cloudflare Pages**.

---

## Architecture

| Layer | Technology | Hosting |
|-------|-----------|---------|
| Website | Next.js 15 static export | Cloudflare Pages |
| Output | `out/` directory (HTML/CSS/JS) | Cloudflare CDN |

---

## Automated Deploy (GitHub Actions)

File: `.github/workflows/deploy.yml`

Triggers on push to `main` when source files change. Also supports manual dispatch.

**Steps:** checkout → install → `npm run build` (produces `out/`) → `wrangler pages deploy out`

---

## Required GitHub Secrets

| Secret | Description | How to obtain |
|--------|-------------|---------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Pages:Edit permission | dash.cloudflare.com → Profile → API Tokens → Custom token → Cloudflare Pages: Edit |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID | `b6df4319ce775a1fdfeb0088be0ce1c7` |

```bash
gh secret set CLOUDFLARE_API_TOKEN --repo SAMSBPM-Technologies-Inc/samsbpm-ca --body 'your-token'
gh secret set CLOUDFLARE_ACCOUNT_ID --repo SAMSBPM-Technologies-Inc/samsbpm-ca --body 'b6df4319ce775a1fdfeb0088be0ce1c7'
```

---

## Environment Variables

This is a static site with no runtime environment variables. All content is compiled at build time.

The Next.js config (`next.config.mjs`) uses `output: 'export'` — all pages become static HTML.

---

## First-Time Setup

Create the Cloudflare Pages project before the first deploy:

```bash
CLOUDFLARE_API_TOKEN=your-token \
CLOUDFLARE_ACCOUNT_ID=b6df4319ce775a1fdfeb0088be0ce1c7 \
npx wrangler pages project create samsbpm-ca --production-branch=main
```

This only needs to be done once.

---

## Manual Deploy

```bash
npm ci
npm run build   # outputs to out/

CLOUDFLARE_API_TOKEN=your-token \
npx wrangler@latest pages deploy out --project-name=samsbpm-ca
```

---

## Local Development

```bash
npm install
npm run dev     # Next.js dev server on localhost:3000
npm run build   # Test static export locally
npx serve out   # Preview static output
```

---

## Troubleshooting

**Build fails with image optimization error**
Images are set to `unoptimized: true` in `next.config.mjs` for static export compatibility — this is expected.

**Pages project not found**
Run the first-time setup command above to create the `samsbpm-ca` project in Cloudflare Pages.
