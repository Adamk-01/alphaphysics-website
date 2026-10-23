# Getting AdSense (and Search Console) to accept the site

This file is the checklist for the account side. The code side is already done — see the
table at the bottom for what changed.

---

## 1. Deploy first, then verify the deploy

AdSense reviewers look only at the live site. Nothing below helps until the new build is live.

After deploying to Vercel:

1. Open `https://alphaphysics-website.vercel.app/sitemap.xml` — every `<loc>` must start with
   `https://alphaphysics-website.vercel.app`. If you see `localhost` or `your-domain.com`,
   `NEXT_PUBLIC_SITE_URL` is not set in the Vercel environment variables (Settings →
   Environment Variables), or you have not redeployed since setting it.
2. Open `https://alphaphysics-website.vercel.app/robots.txt` — it must point at the same domain.
3. Open `https://alphaphysics-website.vercel.app/ads.txt` — must be exactly:
   `google.com, pub-4289311175968434, DIRECT, f08c47fec0942fa0`
4. Open `https://alphaphysics-website.vercel.app/favicon.ico` — must load (it 404'd before).
5. Open `/privacy` and `/terms` — these are new pages and are a hard requirement for AdSense.

---

## 2. Google Search Console

1. Go to <https://search.google.com/search-console> → **Add property** → **URL prefix** →
   `https://alphaphysics-website.vercel.app/`.
   If you later move to a custom domain, use a **Domain** property there instead.
2. Verify ownership. The HTML tag method is already in the site (`google-site-verification`
   value `fuFTZ6a5geBIAuj2Br-sBd1Y-4bCxCnpCDi20JQi89k`), and the legacy HTML file method is
   also present at `/google80233a5256600225.html`. Either should verify.
3. **Sitemaps** → submit `sitemap.xml`.
4. **URL inspection** → paste the homepage → **Request indexing**. Repeat for `/admission`
   and `/cut-off-checker`, which are your two strongest new keyword targets.
5. Come back in 48–72 hours and check **Pages** for "Discovered – currently not indexed" or
   "Duplicate, Google chose a different canonical". Anything still showing a `localhost`
   canonical means the old build is still live.

---

## 3. AdSense

You said you do not know the rejection reason, so every common cause is addressed. Before
requesting another review:

1. **Settle the account/message.** In AdSense → **Sites**, check whether the site is listed as
   "Ready", "Getting ready", or "Needs attention". If there is a policy notice, read it — it
   names the specific policy. Fixing blind is how people get rejected repeatedly.
2. **Confirm the site is fully live and crawlable.** No "under construction" page, no login
   wall, and the AdSense crawler must be able to fetch pages (the code now explicitly allows
   `Mediapartners-Google` and `AdsBot-Google` in `robots.txt`).
3. **Check the content the reviewer will see.** Open the homepage in a private window and
   check that:
   - the navigation works on a phone,
   - every page has real paragraphs of writing (not just headings and buttons),
   - `/privacy`, `/terms` and `/about` are reachable from the footer.
4. **Request a review.** AdSense → **Sites** → your site → **Request review**. Reviews usually
   take a few days to two weeks.
5. **While you wait, keep publishing.** The single biggest reason small sites stay rejected is
   thin content. See §5 below.

### What changed in the code specifically for AdSense

| Previous state | Now |
|---|---|
| No privacy policy, no terms | `/privacy` (NDPA-aware, covers AdSense cookies and opt-out links) and `/terms` added and linked in the footer |
| ~7 short articles, ~150 words each | 13 articles, roughly 600–900 words each, on distinct search intents |
| Unverifiable claims ("500+ candidates", "Guaranteed Accuracy", "highly accurate estimates") | Removed and replaced with factual, checkable descriptions |
| Invented countdown date presented as a deadline | Removed; the page explicitly says no date has been announced |
| No favicon, no 404 page | Both added |
| AdSense script loaded on every page at `afterInteractive` | Loads at `lazyOnload`, still on every page (required), with preconnect |
| No `ads.txt` verification of crawler access | `ads.txt` present, crawler user agents explicitly allowed |

---

## 4. What "low value content" actually means (so you can avoid it)

Google's reviewers are checking whether the site has a reason to exist beyond hosting ads. In
practice that means:

- **Original writing**, not text copied or spun from JAMB's website.
- **Enough of it.** A few hundred words per page is not enough for a topic this competitive.
- **Clear authorship and ownership** — who runs this site, where they are, how to reach them.
- **No misleading claims**, especially about admission outcomes, in a topic where people are
  vulnerable and desperate.
- **Working navigation and no broken links.**
- **Legal pages** that name the operator and explain data handling.

All of those are now in place. The remaining risk is volume: 13 articles is a fair start for a
new domain but modest. Aim for 25–30 before a second review if the first is rejected again.

---

## 5. Publishing schedule that actually works

One substantial article per week beats five thin ones. Suggested queue, each targeting a real
search phrase:

1. JAMB profile code: what it is and why yours is failing
2. How to check your admission status on CAPS (step by step)
3. Direct Entry vs UTME: which route fits you
4. JUPEB and IJMB explained, and who should consider them
5. University vs polytechnic: what the difference means for your career
6. How to choose a course you can actually get admitted for
7. WAEC and NECO: which result institutions accept, and how they combine
8. Nursing and allied health admission requirements in Nigeria
9. What to do if your JAMB result is withheld or cancelled
10. Admission for candidates with a low UTME score: realistic options

Each one should be 700+ words, dated, and linked from `/resources` and from the relevant
service page. Add them to `lib/posts.ts` — the sitemap, article schema, related-article links
and metadata all update automatically.

---

## 6. Fixing "admission" ranking (be realistic about this one)

Adding `<meta name="keywords">` does not rank you for "admission". Google has ignored that tag
since 2009; Bing and a few others still read it, which is why it is there, but ranking comes
from page content, titles, structure and links.

What has been done:

- A dedicated `/admission` page targeting the head term, linked from the main navigation and
  the homepage.
- Homepage title now leads with "Admission & JAMB/UTME Guidance in Nigeria".
- `FAQPage`, `Article`, `Service` and `BreadcrumbList` structured data so the pages are eligible
  for rich results.
- Internal links from every article to the relevant service page, and from `/admission` to the
  guides.

What only you can do:

- **Earn links.** A brand-new Vercel subdomain will not outrank established education sites for
  a head term like "admission" without backlinks. Realistic sources: school and church websites,
  student forums, Nairaland threads where you answer questions substantively, and local
  business directories.
- **Be patient.** For a new site, expect 3–6 months before competitive terms move at all. The
  long-tail pages (`jamb caps`, `change of course`, `cut off mark for nursing`) will rank far
  sooner and are worth more traffic in the short run.
- **Move to a custom domain** when you can. `*.vercel.app` subdomains are treated like any new
  domain and look less established to both reviewers and users.

---

## 7. Final pre-review checklist

- [ ] `NEXT_PUBLIC_SITE_URL` set in Vercel and redeployed
- [ ] `/sitemap.xml`, `/robots.txt`, `/ads.txt` all show the production domain
- [ ] `/privacy` and `/terms` load and are linked in the footer
- [ ] Search Console property verified, sitemap submitted, homepage indexing requested
- [ ] Homepage checked on a phone in a private window
- [ ] AdSense "Sites" page shows the correct domain and no outstanding policy notice
- [ ] Request review
