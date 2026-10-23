# ALPHAPHYSICS EDU CONSULT — website

Next.js 14 (App Router) + Tailwind. Static, no database, no server-side data collection.

## Run it

```bash
npm install
cp .env.example .env.local     # or edit .env
npm run dev                    # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | The public origin, e.g. `https://alphaphysics-website.vercel.app`. Used for canonical tags, `sitemap.xml`, `robots.txt`, Open Graph and JSON-LD. **No trailing slash.** Set this in your host's environment variables, not only locally — it is inlined at build time. |

If it is missing in production the site falls back to `https://alphaphysics-website.vercel.app` and logs a warning during the build.

## Where to edit content

| File | What lives there |
|---|---|
| `lib/site.ts` | Business name, phone, WhatsApp number, address, socials, nav, services, keywords |
| `lib/posts.ts` | Articles (see the comment block at the top for the format) |
| `lib/cutoff-data.ts` | Cut-off checker data. Update `CUTOFF_LAST_REVIEWED` when you refresh the numbers |
| `public/` | Logo, flyer, OG image, `ads.txt`, Google verification file |
| `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico` | Browser tab and home-screen icons |

## Verify before you deploy

```bash
npm run build && npm run verify
```

`npm run verify` starts the production build on port 3100 and checks every route for: correct status codes, exactly one `<h1>`, a canonical URL that is not `localhost`, title length ≤ 60 characters, description length, Open Graph and Twitter tags, valid JSON-LD, security headers, and that the sitemap covers the site. It exits non-zero on failure, and the same check runs in GitHub Actions (`.github/workflows/ci.yml`).

## Assets

Images are served through Next's optimiser, which uses `sharp` (installed). Keep sources modest:

- `public/2027-flyer.png` — 1000×1000 (rendered at max 448 CSS px)
- `public/logo.jpg` — 512×512 (rendered at 48–96 px)
- `public/og-image.jpg` — 1200×630, used for social previews

If you replace a source image, keep the same filenames so the layout and metadata do not need editing.

## Deploy (Vercel) — automatic

The repo is connected to Vercel through the GitHub integration, so **deployment is automatic**:

| Trigger | Environment | URL |
|---|---|---|
| Push / merge to `main` | **Production** | https://alphaphysics-website.vercel.app |
| Push to any other branch, or any PR | Preview | unique `*.vercel.app` link, commented on the PR by the Vercel bot |

Nothing needs to be run by hand. To ship a change:

```bash
git checkout -b your-change
# edit files
git add -A && git commit -m "..." && git push
gh pr create --base main      # Vercel builds a preview
gh pr merge <number> --merge  # Vercel builds production
```

**Environment variables (Vercel → Settings → Environment Variables):**

| Variable | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://alphaphysics-website.vercel.app` | Used for canonical tags and the sitemap. It is inlined at build time, so changing it requires a redeploy. If it is missing, the site falls back to the same URL and logs a warning during the build. |

If you attach a custom domain later, change this variable **and** add the new domain to Search Console.

### Automatic post-deploy check

`.github/workflows/production-smoke.yml` runs `scripts/check-production.mjs` every time a
production deployment succeeds. It verifies that the live site serves every page, that the
canonical and sitemap use the real domain (not `localhost`), that the legal pages, favicon and
social-preview image load, that security headers are present, and that no placeholder copy has
crept back in. A failed check shows up under the repo's **Actions** tab.

Run it yourself any time:

```bash
BASE_URL=https://alphaphysics-website.vercel.app node scripts/check-production.mjs
```

### CI on pull requests

`.github/workflows/ci.yml` runs typecheck, build and `npm run verify` on every PR, so a broken
build cannot be merged.

## Search Console and AdSense

See `ADSENSE-CHECKLIST.md` for the exact steps to submit the site and request a review.

## Notes

- The site is on Next 14.2.35. The 15/16 upgrade is a larger job (async `params`, React 19) and is documented in `AUDIT.md` §3.3.
- No analytics script is installed. Stats come from Search Console and the hosting dashboard.
