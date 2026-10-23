#!/usr/bin/env node
/**
 * Post-deploy smoke test for the live site.
 *
 * Runs in GitHub Actions after a Vercel production deployment succeeds, and can be
 * run by hand:
 *
 *   BASE_URL=https://alphaphysics-website.vercel.app node scripts/check-production.mjs
 *
 * Catches the things that only break in production: a canonical URL still pointing at
 * localhost (because NEXT_PUBLIC_SITE_URL was not set in Vercel), a missing sitemap,
 * legal pages that did not build, and placeholder copy reaching the live site.
 */
const BASE = (process.env.BASE_URL || "https://alphaphysics-website.vercel.app").replace(/\/+$/, "");
const HOST = new URL(BASE).host;

const failures = [];
const warnings = [];
const ok = (cond, msg) => {
  if (!cond) failures.push(msg);
};
const warn = (cond, msg) => {
  if (!cond) warnings.push(msg);
};

async function get(path) {
  const res = await fetch(BASE + path, {
    redirect: "follow",
    headers: { "user-agent": "alphaphysics-postdeploy-check/1.0" },
    signal: AbortSignal.timeout(20_000),
  });
  return { status: res.status, headers: res.headers, body: await res.text() };
}

async function main() {
  console.log(`Checking ${BASE}\n`);

  // --- pages that must exist ------------------------------------------------
  const pages = ["/", "/about", "/services", "/admission", "/cut-off-checker", "/2027-aspirants", "/resources", "/faq", "/contact", "/privacy", "/terms"];
  const bodies = {};

  for (const path of pages) {
    try {
      const { status, body } = await get(path);
      ok(status === 200, `${path} returned ${status}`);
      bodies[path] = body;
    } catch (err) {
      failures.push(`${path} could not be fetched: ${err.message}`);
    }
  }

  const home = bodies["/"] || "";

  // --- metadata -------------------------------------------------------------
  const canonical = (home.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
  ok(canonical.length > 0, "homepage has no canonical tag");
  ok(!canonical.includes("localhost"), `homepage canonical points at localhost: ${canonical}`);
  if (canonical) {
    const canonicalHost = new URL(canonical).host;
    ok(
      canonicalHost === HOST,
      `homepage canonical host is ${canonicalHost}, expected ${HOST}. ` +
        `Set NEXT_PUBLIC_SITE_URL in Vercel and redeploy.`,
    );
  }
  ok(/<title>[^<]*Admission[^<]*<\/title>/i.test(home), "homepage title does not mention Admission");
  ok(/<meta name="google-site-verification"/.test(home), "missing google-site-verification meta tag");
  ok(/<meta name="google-adsense-account"/.test(home), "missing google-adsense-account meta tag");
  ok(/name="twitter:card"/.test(home), "missing twitter:card");
  ok(/<meta property="og:image"/.test(home), "missing og:image");
  ok(/application\/ld\+json/.test(home), "homepage has no JSON-LD");

  // --- sitemap / robots / ads.txt -------------------------------------------
  const sitemap = (await get("/sitemap.xml")).body;
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  ok(locs.length >= 25, `sitemap has only ${locs.length} URLs`);
  ok(!sitemap.includes("localhost"), "sitemap contains 'localhost'");
  ok(
    locs.every((u) => new URL(u).host === HOST),
    `sitemap URLs do not all use ${HOST} — set NEXT_PUBLIC_SITE_URL in Vercel and redeploy`,
  );
  ok(locs.some((u) => u.endsWith("/faq")), "sitemap is missing /faq");
  ok(locs.some((u) => u.endsWith("/cut-off-checker")), "sitemap is missing /cut-off-checker");
  ok(locs.some((u) => u.endsWith("/privacy")), "sitemap is missing /privacy");

  const robots = (await get("/robots.txt")).body;
  ok(robots.includes(`${BASE}/sitemap.xml`), `robots.txt does not reference ${BASE}/sitemap.xml`);
  ok(/Mediapartners-Google/.test(robots), "robots.txt does not allow Mediapartners-Google");

  const ads = (await get("/ads.txt")).body;
  ok(ads.includes("pub-4289311175968434"), "ads.txt does not contain the publisher ID");

  // --- assets ---------------------------------------------------------------
  for (const asset of ["/favicon.ico", "/icon.png", "/apple-icon.png", "/og-image.jpg", "/manifest.webmanifest"]) {
    const { status, headers } = await get(asset);
    ok(status === 200, `${asset} returned ${status}`);
    ok((headers.get("content-type") || "").length > 0, `${asset} has no content-type`);
  }

  // --- security headers -----------------------------------------------------
  const head = await fetch(BASE + "/", { method: "HEAD", signal: AbortSignal.timeout(20_000) });
  for (const h of ["x-content-type-options", "x-frame-options", "referrer-policy", "permissions-policy"]) {
    ok(head.headers.has(h), `missing security header: ${h}`);
  }
  ok(!head.headers.has("x-powered-by"), "x-powered-by header is exposed");

  // --- NIN must not be advertised (owner is not a licensed NIMC agent) ------
  ok(!locs.some((u) => u.includes("nin-services")), "sitemap still lists /services/nin-services");
  const ninRes = await fetch(BASE + "/services/nin-services", {
    redirect: "manual",
    signal: AbortSignal.timeout(20_000),
  });
  ok(
    ninRes.status >= 300 && ninRes.status < 400,
    `/services/nin-services returned ${ninRes.status}, expected a redirect to /services`,
  );
  const servicesBody = bodies["/services"] || "";
  ok(!/NIN Services/i.test(servicesBody), "/services still advertises NIN Services");
  ok(!/NIN modification/i.test(servicesBody), "/services still mentions NIN modification");
  ok(
    /not a licensed/i.test(bodies["/terms"] || ""),
    "terms page is missing the licensed NIMC agent disclaimer",
  );

  // --- content regressions --------------------------------------------------
  for (const path of ["/", "/about", "/faq"]) {
    const body = bodies[path] || "";
    ok(!/coming soon/i.test(body), `${path} still shows a 'coming soon' placeholder`);
  }
  ok(!/guaranteed accuracy/i.test(home), "homepage still contains 'Guaranteed Accuracy'");
  ok(!/highly accurate estimates/i.test(bodies["/cut-off-checker"] || ""), "cut-off page still claims 'highly accurate estimates'");

  // --- report ---------------------------------------------------------------
  if (warnings.length) {
    console.log("Warnings:");
    for (const w of warnings) console.log("  ! " + w);
    console.log("");
  }
  if (failures.length) {
    console.error(`✖ ${failures.length} production check(s) failed:`);
    for (const f of failures) console.error("  - " + f);
    process.exit(1);
  }
  console.log(`✓ Production checks passed (${pages.length} pages, ${locs.length} sitemap URLs)`);
}

main().catch((err) => {
  console.error("✖ Check crashed:", err.message);
  process.exit(1);
});
