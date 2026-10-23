# ALPHAPHYSICS EDU CONSULT — Full Website Audit

**Site:** https://alphaphysics-website.vercel.app (Next.js 14.2.35 App Router, 38 prerendered pages)
**Repo:** `Adamk-01/alphaphysics-website` @ `9d49793` — fixes applied on `arena/6730eb52-alphaphysics-website`
**Audit date:** 23 October 2026
**Scope:** architecture, build health, SEO, accessibility, performance, security, content/trust, compliance, code quality.

---

## 0. Remediation status (updated 23 October 2026)

Everything marked ✅ below has been implemented and verified against a production build
(`npm run build && npm run verify`). Items marked ◐ are partly done by code and partly need an
action outside the repository.

| Audit item | Status | Notes |
|---|---|---|
| §3.1 Canonical URL was `localhost` | ✅ | `.env` untracked, real domain configured, fallback warns at build time |
| §3.2 Sitemap missing `/faq`, `/cut-off-checker` | ✅ | Now derived from `nav`, 29 URLs; `/privacy`, `/terms`, `/admission` added |
| §3.3 Next.js vulnerabilities | ◐ | Upgraded 14.2.15 → 14.2.35 (6 → 5 advisories); full fix needs Next 15/16, deferred by choice — mitigations applied (no fingerprint, capped optimiser sizes, CSP, strict headers). See README |
| §3.4 No privacy policy / terms | ✅ | `/privacy` (NDPA + AdSense cookies) and `/terms` added, linked in footer, consent checkbox on the form |
| §3.5 No security headers | ✅ | CSP (report-only), HSTS, nosniff, frame-deny, referrer, permissions, COOP; `X-Powered-By` removed |
| §3.6 No favicon / icons | ✅ | `app/favicon.ico`, `icon.png`, `apple-icon.png`, web manifest |
| §4.1 Titles duplicated / too long | ✅ | Brand template shortened, all titles ≤ 60 chars, thin service descriptions rewritten |
| §4.2 Unverifiable claims | ✅ | `Testimonials` replaced with `RecentWork`; counters and "guaranteed" language removed |
| §4.3 Cut-off overstatement | ✅ | "Highly accurate" removed, last-reviewed label added, institutional vs departmental explained, "process admissions" corrected |
| §4.4 Fabricated countdown | ✅ | Guessed date removed, SSR placeholder, expired state |
| §4.5 Accessibility | ✅ | Contrast fixed (`gold-dark` #8A5F00 → 5.65:1), focus ring replaced, `sr-only` link context, 24px targets, mobile menu closes on navigation, `aria-current` |
| §4.6 Structured data | ✅ | FAQPage, Article, Service, BreadcrumbList added; PostalAddress completed; empty `sameAs` omitted |
| §4.7 No 404 / error pages | ✅ | `app/not-found.tsx` and `app/error.tsx` |
| §4.8 `sharp` missing | ✅ | Installed; 640px render dropped from 1.65 s to 0.04 s |
| §4.9 60-second image cache | ✅ | `minimumCacheTTL` 31 days, verified |
| §4.10 Oversized assets | ✅ | logo 287 kB → 43 kB, flyer 2.1 MB → 419 kB, 1200×630 OG image added |
| §4.11 Dead Tailwind classes | ✅ | Removed |
| §4.12 Duplicate verification tags | ✅ | Manual `<head>` tags deleted |
| §5 Content/E-E-A-T | ✅ | 13 articles, dates + updated dates shown, author/publisher schema, related articles, in-article CTAs |
| §5 Header overflow at 1024px | ✅ | Desktop nav moved to `xl`, labels shortened |
| §5 Footer "coming soon" clutter | ✅ | Empty socials hidden |
| §5 Link context | ✅ | `sr-only` suffixes on repeated labels |
| §5 Code hygiene | ✅ | `.claude/` removed, dead props/fields removed, lockfile regenerated, `*.tsbuildinfo` ignored, `engines` added |
| §5 CI / tests | ✅ | `scripts/verify.mjs` (30+ assertions) + GitHub Actions workflow |
| §5 AdSense script on all pages | ◐ | Deferred to `lazyOnload`; cannot be removed before approval without risking the review |
| §5 Custom domain / backlinks | ◐ | Outside the repo — see ADSENSE-CHECKLIST.md §6 |
| §5 Pricing expectation | ✅ | Fees wording added to terms, service pages and FAQ |
| AdSense rejection causes | ✅ | See `ADSENSE-CHECKLIST.md` |

---

## 1. Executive summary

The codebase is small, well organised and **builds cleanly** — 26 static pages, zero TypeScript errors, ~99 kB first-load JS, all internal links resolve, every image has alt text, one `<h1>` per page. That is a better starting point than most sites at this stage.

The problems are almost all in **configuration, metadata and content claims**, not in the React code:

| Area | Grade | One-line verdict |
|---|---|---|
| Functionality / build | **A−** | Builds and serves correctly; no tests, no error boundaries, no 404 page |
| Performance | **B** | Light and fast, but `sharp` missing, 60-second image cache, 2.1 MB source asset |
| SEO | **C** | Correct structure undermined by `localhost` canonicals, an incomplete sitemap, duplicated/over-long titles, no structured data for FAQ/articles |
| Accessibility | **C** | Good foundations, but three palette colour pairs fail WCAG AA and small tap targets |
| Security | **D+** | Next 14.2.15 carries known critical RCE advisories; **zero** security headers configured |
| Content & trust | **C−** | Unverifiable performance claims and a fabricated countdown date on a YMYL site |
| Compliance | **D** | AdSense is live and personal data is collected, but there is no privacy policy or terms page |

**Biggest single risk:** `.env` is committed to the repo with `NEXT_PUBLIC_SITE_URL=http://localhost:3000`. Every canonical tag, `og:url`, JSON-LD `url`, `sitemap.xml` entry and `robots.txt` sitemap reference currently resolves to `localhost`. If the site is deployed as-is, Google will be told the canonical version of every page is `http://localhost:3000`. Nothing else in this report matters until that is fixed.

---

## 2. What was run

| Check | Result |
|---|---|
| `npm install` | OK (114 deps) |
| `npx tsc --noEmit` | **PASS** — 0 errors (strict mode on) |
| `npm run build` | **PASS** — 26 pages, 0 warnings except lockfile patch |
| `npm audit` | **6 vulnerabilities** (1 critical, 2 high, 3 moderate) — critical in `next`, high in `postcss`/`source-map-js`, moderate in the `tailwindcss` chain |
| `next start` + crawl of 21 routes | All 200; 404 route returns 404; sitemap/robots/ads.txt/verification file all served |
| Header & cache inspection | No security headers; `_next/image` cache = 60 s |
| Contrast computation | 3 failing pairs (see §6) |
| Image/payload inspection | `logo.jpg` 287 kB @ 1536², `2027-flyer.png` 2.1 MB @ 1254² |

---

## 3. P0 — Fix before the site is promoted

### 3.1 Canonical URL is `localhost` (site-wide SEO failure)

**Evidence**

```
$ cat .env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

$ curl -s localhost:3000/about | grep canonical
<link rel="canonical" href="http://localhost:3000/about">
```

`sitemap.xml` lists `<loc>http://localhost:3000</loc>` for all 21 URLs, `robots.txt` points to `http://localhost:3000/sitemap.xml`, JSON-LD `url`/`logo` and every `og:image` are on `localhost`.

**Why it is serious:** a canonical pointing at `localhost` tells Google the real page lives elsewhere. Search Console will report "Duplicate, Google chose a different canonical" or simply refuse to index. Share previews on WhatsApp/Facebook will show broken images.

**Fix**
1. Set the real URL in the hosting provider's environment variables: `NEXT_PUBLIC_SITE_URL=https://<your-domain>`.
2. Remove `.env` from git (`git rm --cached .env`) — it is already in `.gitignore`, but was committed before that rule existed.
3. Change the fallback in `lib/site.ts:6` so a missing env var fails loudly instead of silently shipping a placeholder:
   ```ts
   const fallback = "https://your-domain.com";
   if (!process.env.NEXT_PUBLIC_SITE_URL && process.env.NODE_ENV === "production")
     console.warn("[site] NEXT_PUBLIC_SITE_URL is not set — canonical URLs will be wrong");
   ```
4. Add a build-time assertion or CI check that greps the built `sitemap.xml` for `localhost`.

### 3.2 Sitemap omits two live pages

`app/sitemap.ts:5` lists `/`, `/about`, `/services`, `/2027-aspirants`, `/resources`, `/contact` plus dynamic routes. **`/faq` and `/cut-off-checker` are missing** — two of the eight main nav items, and the cut-off checker is the site's best link-magnet candidate.

```ts
// app/sitemap.ts
const paths = ["", "/about", "/services", "/cut-off-checker", "/2027-aspirants",
  "/resources", "/faq", "/contact",
  ...services.map((s) => `/services/${s.slug}`),
  ...posts.map((p) => `/resources/${p.slug}`)];
```
Also add a route-parity test: every href in `lib/site.ts → nav` must appear in the sitemap.

### 3.3 Next.js 14.2.15 — known critical vulnerabilities

`npm audit` reports 6 vulnerabilities. The **critical** one is `next@14.2.15` itself, which carries 33 advisories in the database; the others are `postcss` (high), `source-map-js` (high) and `postcss-selector-parser` (moderate) pulled in through Tailwind. The Next advisories include:

- **Critical** — Unauthenticated RCE in the Image Optimization API via AVIF / SVG payloads (`GHSA-2xp9-vwfh-vxw4`, `GHSA-2464-fhr4-w9xw`)
- **Critical** — Authorization bypass in Next.js middleware (`GHSA-f82v-jwr5-mffw`)
- **Critical** — Unauthenticated RCE on Windows-hosted servers (`GHSA-p293-qw3h-jr36`)
- **High** ×6 — Server Component DoS (`GHSA-mwv6-3258-q52c`, `GHSA-q4gf-8mx6-v5v3`, `GHSA-8h8q-6873-q5fj`), SSRF in rewrites/Server Actions, cache poisoning
- Moderate/low — image cache-key confusion, content injection, dev-server info exposure, unbounded image cache growth

**Real-world exposure here:** the RCEs require attacker-controlled image input, and this site only optimises its own two local images — so the practical risk is low *today*. But the DoS and cache advisories apply to any self-hosted instance, and `_next/image` genuinely accepts arbitrary `q=` values (verified: `?w=3840&q=100` returns a 2 MB image, and each unique combination is cached to disk).

**Fix:** upgrade to Next 15.5.x / 16.x (audit's fix target is 16.4.3). This is a **major** version bump: `params`/`searchParams` become Promises, `next/image` and metadata APIs change slightly. Budget half a day; the codebase is small (~25 source files). Interim mitigation if the upgrade must wait: `poweredByHeader: false`, restrict `images.deviceSizes`/`imageSizes`, and put the app behind a CDN that strips `/_next/image` requests from unknown referrers.

### 3.4 No privacy policy or terms page — with AdSense and a data-collecting form

Present in the code today:

- AdSense publisher ID `ca-pub-4289311175968434` is live in `<head>` and `public/ads.txt` (`app/layout.tsx:28-33`)
- A contact form collecting **name, email, phone and free-text** (`components/ContactForm.tsx`), including document/NIN-related enquiries
- Google Analytics-adjacent third-party script on every page

**Missing:** `/privacy` (404), `/terms` (404), cookie/consent notice, data-controller identity.

**Why it blocks launch**
- **Google AdSense policy** requires a visible privacy policy disclosing cookie/third-party vendors (including the DoubleClick cookie) before an account can be approved or stay approved.
- **Nigeria Data Protection Act 2023** requires a lawful basis and a privacy notice when collecting personal data, plus a stated purpose and retention period. Collecting names, phone numbers and education/document details without a notice is a compliance gap. (Have a Nigerian lawyer review the final wording — this is a checklist item, not legal advice.)
- Practical trust: a consultancy asking for birth certificates and NIN details with no privacy statement will lose cautious customers.

**Fix:** add `app/privacy/page.tsx` and `app/terms/page.tsx`, link both in the footer, and add a short consent line + checkbox to the contact form. Add both to the sitemap.

### 3.5 No security headers at all

Response headers from the production server, verbatim:

```
HTTP/1.1 200 OK
Vary: RSC, Next-Router-State-Tree, Next-Router-Prefetch, Accept-Encoding
X-Powered-By: Next.js
Content-Type: text/html; charset=utf-8
```

Missing: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, `Permissions-Policy`. `X-Powered-By` advertises the framework version.

**Fix** in `next.config.mjs`:

```js
const nextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 2678400 },
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      ],
    }];
  },
};
```
Add a CSP in report-only mode first (`script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.doubleclick.net`) and tighten once AdSense is settled.

### 3.6 No favicon or app icons

`/favicon.ico` → **404**. No `<link rel="icon">`, no `apple-touch-icon`, no manifest. Browsers show a blank tab icon and Google cannot show a favicon in mobile results.

**Fix:** drop `app/icon.png` (512×512) and `app/apple-icon.png` (180×180); Next generates the tags automatically. The existing `public/logo.jpg` can be converted, but a square PNG with clean edges is better than the current JPG (which has visible JPEG ringing at 48 px).

---

## 4. P1 — Fix in the next sprint

### 4.1 Titles: duplicated brand name and too long

`lib/seo.ts` sets a full title and `app/layout.tsx:11` applies the template `%s | ALPHAPHYSICS EDU CONSULT`. Any page whose own title already contains the brand gets it twice:

| Route | Rendered title | Length |
|---|---|---|
| `/about` | `About ALPHAPHYSICS EDU CONSULT \| ALPHAPHYSICS EDU CONSULT` | 57 |
| `/faq` | `FAQ \| ALPHAPHYSICS EDU CONSULT \| ALPHAPHYSICS EDU CONSULT` | 57 |
| `/contact` | `Contact ALPHAPHYSICS EDU CONSULT \| ALPHAPHYSICS EDU CONSULT` | 59 |
| `/resources/understanding-olevel-requirements-for-university-admission` | `… \| ALPHAPHYSICS EDU CONSULT` | **91** |
| `/services` | `Our Services: JAMB, Admission, O'Level & Consultation \| …` | **89** |
| `/2027-aspirants` | `2027 Aspirants Community \| JAMB/UTME & Admission Guidance \| …` | **88** |
| `/resources` | `Admission Resources: JAMB, UTME & University Admission \| …` | **85** |

**13 of 21 routes exceed ~60 characters** and will be truncated in Google. The 27-character brand suffix is the main culprit — it consumes nearly half the pixel budget on every page.

**Fix**
- Change the template to `%s | AlphaPhysics` (or drop the suffix on long titles).
- Never put the brand inside a page-level title; let the template add it.
- Target ≤ 60 chars: `/about` → `About Us: Admission & JAMB Guidance`, `/faq` → `JAMB & Admission FAQ`, `/contact` → `Contact Us`.
- Page descriptions are all under 160 chars (good), but the six service pages are thin — **44–89 characters**. Expand each to ~140–155 with the service, the audience and a location ("JAMB profile code, CAPS uploads and change of course for candidates in Lagos and across Nigeria").

### 4.2 Unverifiable claims create advertising/consumer-protection risk

The section added in the last commit (`components/Testimonials.tsx`) presents as fact:

- `500+ Candidates & Aspirants Guided`
- `100% Legitimate & Official Channels`
- `0 Disqualifications from Paperwork Errors`
- `< 1hr Average Response & Processing Speed`
- `"Instant digital PDF delivered within 30 minutes"`
- `"Full clearance package accepted with zero queries"`
- `"Guaranteed Accuracy"` (card footer)
- Headline `"We take pride in real, verified results"` and `"Proven Track Record"`

None of this is sourced or evidenced. Nigeria's FCCPA (2018) prohibits misleading representations about services, and Google's YMYL quality guidelines treat unsupported claims on education/admissions content harshly. `"Guaranteed Accuracy"` on document processing is the single most exposed phrase.

Also in this section:
- Typo: `"ensuring candidate candidate credentials were fully recognized"` (`Testimonials.tsx:49`)
- Component is named `Testimonials` but contains no testimonials — rename to `RecentWork` so future editors are not misled.

**Fix:** reframe as capability statements ("What we handle", "Typical turnaround: same day for result slips"), remove invented percentages, or replace with 3–5 real, permissioned, named testimonials with photos and course/school. If you keep counters, add a footnote defining the measurement period.

### 4.3 Cut-off checker overstates accuracy and the business's role

`components/CutoffChecker.tsx:79`:

> *"These are highly accurate estimates based on historical data."*

and `:72`:

> *"usually sets a baseline cut-off of **200** for all programs."*

and `app/cut-off-checker/page.tsx:25`:

> *"We process admissions for hundreds of schools across Nigeria."*

Problems:
1. **"Highly accurate" is unverifiable** and there is no source, no admission year and no "last updated" date for any number. Cut-offs change every cycle; stale numbers plus a strong accuracy claim is exactly the pattern that gets a site classified as low-quality YMYL content.
2. **"A baseline cut-off for all programs" is not how it works.** Institutions publish a general minimum and departments set their own, usually higher. The UI presents both numbers side by side as if they were comparable, which will mislead users.
3. **Only 6 institutions** are in `lib/cutoff-data.ts`, so "hundreds of schools" is contradicted by the product itself.
4. **"We process admissions"** implies the consultancy is part of the admission process. The About page correctly disclaims this (`app/about/page.tsx:11`), but that disclaimer does not appear anywhere on the cut-off page, which is the page most likely to be read out of context.

**Fix:** change the disclaimer to *"Indicative figures based on previous admission cycles. Not official. Always confirm with JAMB and the institution."*, add a per-dataset `lastUpdated` field rendered on the page, relabel the school figure as "Institutional minimum" with a tooltip explaining departmental cut-offs, and soften "process admissions" to "assist with applications". Add the independence disclaimer to the checker page and footer.

### 4.4 Countdown timer: invented date, layout shift, no end state

`app/2027-aspirants/page.tsx:38` passes `targetDate="2027-01-15T00:00:00"` — a made-up date. The page labels it **"Estimated Days to Registration"** directly beneath a panel that says *"Official dates have not been announced yet."* Visitors will assume 15 January 2027 is the real JAMB date. This is the kind of guess that turns into a screenshot and a complaint.

Two technical issues in `components/CountdownTimer.tsx`:
- `:32` `if (!isClient) return null` — the whole card is absent in SSR HTML and pops in after hydration. That is a guaranteed **CLS penalty** on a page whose LCP element is right next to it.
- `:16-19` once the date passes, the interval clears and the card silently displays `00 : 00 : 00 : 00` forever.

**Fix:** remove the fabricated date entirely (show "Registration window: not yet announced"), or label it "Our own estimate — not an official JAMB date". Pre-render placeholder dashes with the same dimensions instead of `null`, and render an explicit "Date has passed — check official channels" state.

### 4.5 Accessibility — WCAG AA failures

Computed contrast ratios from the actual palette in `tailwind.config.ts`:

| Foreground | Background | Ratio | Requirement | Verdict |
|---|---|---|---|---|
| `gold-dark` `#B98410` | white | **3.30:1** | 4.5 (normal) | ❌ |
| `gold-dark` `#B98410` | `navy-light` `#E8EEFA` | **2.83:1** | 4.5 | ❌ |
| `gold` `#D9A21B` | `brand-green` `#0B5D2A` | **3.50:1** | 4.5 | ❌ |
| `gold` `#D9A21B` | white (focus ring) | **2.30:1** | 3.0 (non-text) | ❌ |
| `gold` `#D9A21B` | navy `#0F2F73` | 5.46:1 | 4.5 | ✅ |
| navy on white | — | 12.54:1 | 4.5 | ✅ |
| `brand-green` on white | — | 8.04:1 | 4.5 | ✅ |

`gold-dark` is used for section eyebrows at **12 px bold** (`components/ui.tsx:32,43`) — small text, so it needs 4.5:1 and gets 3.3:1. It is also the hover colour for nav links and the `underline` links on `/resources`. `text-gold` on the green 2027 hero (`app/2027-aspirants/page.tsx:13`) fails the same way. The global focus ring (`app/globals.css:5`) is gold-on-white at 2.3:1 — below the 3:1 non-text minimum, so keyboard users on white sections get a weak indicator.

**Fix**

```ts
// tailwind.config.ts — darken gold for text use, keep the bright gold for decoration
gold: { DEFAULT: "#D9A21B", dark: "#8A5F00" },   // 4.6:1 on white
```
Use `text-gold` only on navy backgrounds; introduce `text-gold-dark` (new value) for light backgrounds. Change the focus ring to `#0F2F73` (navy) or a double ring (`outline:3px solid #0F2F73; box-shadow:0 0 0 6px #fff`).

Other accessibility findings:

| Issue | Where | Fix |
|---|---|---|
| Repeated link text pointing to different targets: six "Learn more", six "Ask on WhatsApp", six "Chat →" | home, `/services`, recent-work cards | Add the visible visually-hidden item name: `Learn more<span class="sr-only"> about JAMB Services</span>` (WCAG 2.4.4) |
| Header/footer nav link hit areas ≈ 17–20 px tall | `Header.tsx:15`, `Footer.tsx:17,19` | WCAG 2.2 target size (AA) wants 24×24 — add `py-2 inline-block` |
| Mobile menu never closes after navigating | `Header.tsx:18` `<details>` lives in the layout and is not remounted, so it stays open across client-side route changes | Close on pathname change (`usePathname` + `ref.close()`), or use a small client component |
| Decorative "2027" wordmark is read aloud | `app/page.tsx:60` | `aria-hidden="true"` |
| No `aria-current="page"` on active nav item | `Header.tsx` | Helps screen-reader orientation |
| No visible error/validation messaging, no `aria-live` region, no success confirmation | `ContactForm.tsx` | Add inline errors + `role="status"` after submit |

**What is already good:** skip link, single `<h1>` per route, logical heading order, `lang="en-NG"`, all 4 images have descriptive alt text, `prefers-reduced-motion` handled in `globals.css:6`, form labels properly associated, icon wrapper `aria-hidden`, 48 px minimum target on buttons.

### 4.6 Structured data is thin for a site with 7 articles and a 12-question FAQ

Only one JSON-LD block exists site-wide (`components/JsonLd.tsx`): `EducationalOrganization` + `LocalBusiness`. Gaps:

- **No `FAQPage` schema** on `/faq` despite 12 perfect Q&A pairs — this is the easiest rich-result win on the site (and `FaqAccordion` already has the data shape).
- **No `Article`/`BlogPosting`** on `/resources/[slug]` — no `headline`, `datePublished`, `author`, `publisher`. Editors' dates exist in `lib/posts.ts` but are **never rendered or exposed** (the `date` field is dead data).
- **No `BreadcrumbList`** anywhere.
- **No `Service` schema** on the six service pages.
- **`PostalAddress` incomplete:** only `streetAddress` + `addressCountry`. `addressLocality: "Lagos"`, `addressRegion: "Lagos"` and `postalCode` matter for local search.
- `sameAs: []` — an empty array is emitted; omit the key instead.
- `@type: ["EducationalOrganization","LocalBusiness"]` without `priceRange` or `geo`; Google's LocalBusiness guidance expects them. Consider `EducationalOrganization` + `ProfessionalService`.

### 4.7 Missing 404 and error boundaries

`/nonexistent` renders Next's default black-on-white 404 with inline styles and a page title of `404: This page could not be found.` — the branded header and footer appear, then an unstyled block. There is no `app/not-found.tsx`, `app/error.tsx` or `app/global-error.tsx`, so any runtime error is a white screen. On a static site traffic will arrive via stale Google links and WhatsApp forwards; a dead end with no "go here instead" is a lost customer.

### 4.8 `sharp` is not installed — image optimisation is running in slow mode

Server log on first start:

```
⚠ For production Image Optimization with Next.js, the optional 'sharp' package is strongly
  recommended. Run `npm i sharp`, and Next.js will use it automatically.
```

Measured: the 2.1 MB flyer took **1.65 s** to produce a 640 px derivative (and the first visitor pays that latency). With `sharp` it is typically 100–200 ms. Add `sharp` to `dependencies`.

### 4.9 Image cache TTL is 60 seconds

```
Cache-Control: public, max-age=60, must-revalidate
```
on every `_next/image` response. On a CDN this means revalidation traffic and cold re-renders for your two images. Set `images: { minimumCacheTTL: 2678400 }` (31 days) — the source images never change, and content-hashed names handle replacements if you rename them.

### 4.10 Source assets are oversized

| File | Dimensions | Size | Rendered at |
|---|---|---|---|
| `public/2027-flyer.png` | 1254×1254 | **2.1 MB** | max 448 px wide |
| `public/logo.jpg` | 1536×1536 | **287 kB** | 44 px (header), 80 px (footer), 96 px (home) |

Modern browsers receive a 63 kB AVIF for the flyer, so **users are fine** — but every cold cache miss pays CPU, the repo is 2.4 MB, and any non-AVIF/WebP client downloads 614 kB for a thumbnail. Also note `logo.jpg` doubles as the Open Graph image at 1536² square: **social platforms want 1200×630**. WhatsApp and Facebook crops will look wrong.

**Fix:** export the flyer at ~1000 px as WebP/PNG (~250 kB), export the logo at 512 px PNG (transparency, no JPEG ringing), and generate a dedicated `public/og-image.jpg` at 1200×630 with logo + tagline. Point `lib/seo.ts` at that file.

### 4.11 Dead Tailwind classes

`components/CutoffChecker.tsx:54` uses `animate-in fade-in slide-in-from-bottom-4 duration-500`. Those utilities come from `tailwindcss-animate`, which **is not installed** — verified: none of them appear in the compiled CSS. The result card simply appears with no animation. Either install the plugin or remove the classes; leaving dead classes invites more of them.

### 4.12 Duplicate verification meta tags

`app/layout.tsx` emits Google verification twice — once via `metadata.verification.google` (`:13-15`) and `metadata.other` (`:16-18`), and again as raw `<meta>` tags in `<head>` (`:26-27`). Rendered output contains **two** `google-site-verification` tags and **two** `google-adsense-account` tags. Harmless to Google, confusing to anyone reading the source. Delete the manual `<head>` tags and keep the metadata API.

---

## 5. P2 — Polish and long-term

**Content / SEO**
- All 7 articles are dated `2026-09-28` and the date is never displayed. Add visible "Published / Last updated" to `/resources/[slug]` and `/resources`, and use `Post.date` in `Article` schema and in the sitemap `lastModified`.
- Articles are ~150 words each across two sections ("thin content" by AdSense standards, and weak against Google's helpful-content signals). Either expand the 3 strongest to 800+ words with real depth (subject combinations by course, UTME timeline, document checklist) or noindex the weakest.
- No author/About-the-author, no editorial policy, no "last reviewed by" — E-E-A-T is thin for education advice.
- No internal links from articles to the relevant service page (each article ends with a generic WhatsApp band). Link `/resources/understanding-jamb-subject-combinations` → `/services/jamb-services`, etc.
- No related-posts or pagination on `/resources` (fine at 7 posts, plan for it).
- Sitemap `lastModified` is identical build-time timestamps for every URL — weak but harmless; per-post dates are better.
- `robots.txt` allows everything including `/_next/`; fine, but consider `Disallow: /api/` if routes are added later.

**UX**
- **Header overflow risk at 1024–1100 px.** Eight nav items at `gap-6` plus the logo block and the WhatsApp button need roughly 1,050 px, but `lg:` engages at 1024 px inside a container with 64 px of padding (≈960 px available). Expect wrapped or clipped nav at exactly the `lg` breakpoint. Move the desktop nav to `xl:flex`, or shorten "Cut-Off Checker" → "Cut-Offs" and reduce `gap-6` → `gap-4`.
- The floating mobile WhatsApp bar (`app/layout.tsx:40`) is `fixed bottom-4` and overlays the bottom 48 px of every scroll position — including the contact form's submit button. The footer compensates with `pb-24`, but mid-page it still covers content. Consider hiding it on `/contact` or auto-hiding on scroll-down.
- Socials render six "(coming soon)" placeholders in the footer — on a live site this reads as unfinished. Hide empty entries.
- Footer copyright is hardcoded `© 2026`; use `new Date().getFullYear()`.
- Contact page shows the email as plain text (not `mailto:`) and the address as text (no map link) — both are missed conversions and missed structured-data signals.
- No service/process pricing indication or expectation-setting ("free enquiry, paid processing") beyond the FAQ — a common bounce cause.
- `WaBand` appends a fixed sentence: `{text} Need help with JAMB, admission or school information?` This produces awkward copy such as *"We're happy to help. Need help with JAMB…"* (`ui.tsx:55`). Make the second sentence a prop.

**Code quality**
- `Post.date` is never used anywhere (dead field).
- `variants.outlineNavy` (`ui.tsx:14`) and `Heading`'s `light` prop are never used.
- `site.socials` is typed `Record<string,string>` — loses key safety; a typed `{ instagram?: string; ... }` is safer, and empty values should not render.
- `lib/site.ts:9` comment still calls `groupLink` a "PLACEHOLDER" although a real invite link is set.
- `Icon` silently renders an empty `<svg>` for an unknown key — add a fallback.
- No ESLint config and no `lint` script, despite Next shipping `eslint-config-next`. Add it; the typos above ("candidate candidate") would not be caught, but unused imports and missing hook deps would.
- No tests of any kind, no `.github/workflows` CI. A 10-line workflow running `tsc --noEmit`, `next build` and a link check on every PR would have caught the missing sitemap entries.
- `.claude/` (agent scaffolding for an unrelated "kfc" spec workflow) is committed to the website repo — 9 files of irrelevant tooling. Remove it or move it to a separate repo.
- `tsconfig.tsbuildinfo` is generated and not gitignored — add `*.tsbuildinfo`.
- `package-lock.json` is missing `@next/swc-*` optional deps; every `next build` prints *"Found lockfile missing swc dependencies, patching…"* and rewrites the lockfile. Regenerate it (`rm -rf node_modules package-lock.json && npm install`) and commit the result, otherwise `npm ci` in CI/Docker is fragile.
- `package.json` has no `engines` field — pin Node ≥ 18.17 for Next 14.

**Performance**
- AdSense's `adsbygoogle.js` loads on all 22 pages but there is not a single ad slot in the code. It is the largest third-party cost on the site for zero current revenue — every page pays for it and nothing renders it. Load it only on pages that will carry ads, or defer activation until approval.
- Add `<link rel="preconnect">` for `pagead2.googlesyndication.com` if AdSense stays.
- Two images are marked `priority` on the homepage (header logo + flyer). Only the LCP image should be; the 48 px logo does not need it.
- No `manifest.webmanifest` / installability — low priority for a brochure site, but trivial to add.
- Positive: system font stack + Georgia = zero font downloads (no FOIT/FOUT), 19.7 kB of CSS, static rendering with `s-maxage=31536000`, immutable static assets, brotli'd HTML (90 kB → 14 kB).

---

## 6. Security posture summary

| Item | Status |
|---|---|
| Secrets in repo | None found — `.env` contains only `NEXT_PUBLIC_SITE_URL`. But **`.env` should not be tracked at all.** |
| Dependency vulnerabilities | 6 (1 critical, 2 high, 3 moderate) — `next` 14.2.15, `postcss`, `source-map-js`, `tailwindcss` chain |
| Security headers | **None** (see §3.5) |
| Server fingerprinting | `X-Powered-By: Next.js` present |
| XSS surface | Low — no user-generated content rendered; JSON-LD uses `dangerouslySetInnerHTML` on static data only |
| CSRF | Not applicable (no mutations, form posts via WhatsApp deep link) |
| Image optimizer | Reachable with arbitrary `w`/`q`; serves 2 MB renders on demand; 60 s cache → disk/cache growth vector on shared hosting |
| PII handling | Contact form collects name/email/phone/enquiry; data leaves via `wa.me` deep link (no server storage — a privacy advantage worth stating publicly) |
| Rate limiting / abuse | None needed today; revisit if the form ever POSTs to an API route |
| TLS / hosting | Not verifiable from repo; ensure HTTPS-only with HSTS |

---

## 7. Prioritised remediation plan

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Set real `NEXT_PUBLIC_SITE_URL`, `git rm --cached .env`, guard the fallback | 15 min | 🔴 Unblocks indexing |
| 2 | Add `/faq` + `/cut-off-checker` to `app/sitemap.ts` | 5 min | 🔴 Two pages discoverable |
| 3 | Add privacy policy + terms pages, link in footer, consent on form | 3–4 h | 🔴 AdSense + NDPA compliance |
| 4 | Security headers + `poweredByHeader: false` in `next.config.mjs` | 20 min | 🟠 Hardens responses |
| 5 | Add `app/icon.png` + `app/apple-icon.png` | 15 min | 🟠 Branding + mobile SERP |
| 6 | Fix title template + rewrite 13 titles to ≤60 chars; expand 6 thin service descriptions | 1–2 h | 🟠 SERP CTR |
| 7 | Remove/reframe unverifiable track-record claims and "highly accurate" cut-off copy | 45 min | 🟠 Legal/trust |
| 8 | Fix countdown: drop fabricated date, render SSR placeholder, add expired state | 45 min | 🟠 CLS + trust |
| 9 | Darken `gold-dark`, fix focus ring, add `sr-only` link context, 24 px nav targets | 1–2 h | 🟠 WCAG AA |
| 10 | Add `FAQPage`, `Article`, `BreadcrumbList`, `Service` JSON-LD; complete PostalAddress | 2–3 h | 🟠 Rich results |
| 11 | `npm i sharp`, `minimumCacheTTL`, compress flyer + logo, add 1200×630 OG image | 1 h | 🟡 Speed |
| 12 | Add `app/not-found.tsx` + `app/error.tsx` | 45 min | 🟡 Recovery path |
| 13 | Upgrade Next 14 → 15/16 and re-audit | 4–8 h | 🟠 6 CVEs incl. critical |
| 14 | Add ESLint + GitHub Actions CI (typecheck, build, link/sitemap check) | 1–2 h | 🟡 Prevents regressions |
| 15 | Cleanup: remove `.claude/`, dead code/props, regenerate lockfile, `.gitignore` `*.tsbuildinfo` | 30 min | 🟡 Hygiene |
| 16 | Content: date articles, expand top 3 to 800+ words, add author box, cross-link to services | 1–2 days | 🟡 Organic growth |

---

## 8. Appendix — evidence

### Route inventory (production build, `next start`)

```
200  /                                            200  /resources
200  /about                                       200  /resources/2027-jamb-what-prospective-candidates-should-know
200  /services                                    200  /resources/how-to-prepare-for-the-2027-utme
200  /services/jamb-services                      200  /resources/understanding-jamb-subject-combinations
200  /services/admission-processing               200  /resources/how-university-admission-works-in-nigeria
200  /services/olevel-exam-services               200  /resources/understanding-olevel-requirements-for-university-admission
200  /services/documents-certificates             200  /resources/2027-aspirants-admission-preparation-checklist
200  /services/nin-services                       200  /resources/what-every-2027-aspirant-should-do-before-admission-season
200  /services/one-on-one-consultation            200  /faq
200  /cut-off-checker                             200  /contact
200  /2027-aspirants                               200  /sitemap.xml  /robots.txt  /ads.txt  /google…html
404  /nonexistent-page (correct)                   404  /favicon.ico (missing asset)
```

### Build output

```
✓ Compiled successfully
✓ Generating static pages (26/26)
Route (app)                    Size      First Load JS
/                              186 B     99.2 kB
/contact                       2.28 kB   96.2 kB
/cut-off-checker               1.77 kB   95.7 kB
+ First Load JS shared by all  87.1 kB
```

### Compatibility / deployment checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set in host environment **before** the production build (it is inlined at build time)
- [ ] Build runs on Node ≥ 18.17
- [ ] `sharp` installed in production dependencies
- [ ] Domain verified in Search Console; `sitemap.xml` resubmitted after fix
- [ ] AdSense re-review after privacy policy is live
- [ ] HTTPS + HSTS confirmed at the edge
- [ ] 301 from `www` to non-`www` (or vice versa) configured at the host/DNS level — currently unhandled and will split rankings

---

*Prepared from static code review plus a running production build on 23 Oct 2026. Interactive states (menu behaviour, focus order on real devices, form submission in Safari iOS) were assessed from code and require a browser pass to confirm.*
