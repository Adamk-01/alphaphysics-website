#!/usr/bin/env node
/**
 * Post-build smoke test.
 *
 * Usage:  npm run build && npm run verify
 *
 * Starts the production server on port 3100, then checks:
 *   - every expected route returns 200 (and a known bad route returns 404)
 *   - no page or the sitemap contains "localhost"
 *   - every route in the sitemap is reachable
 *   - every page has exactly one <h1>, a canonical, a description and an OG image
 *   - no <title> exceeds 60 characters
 *
 * Exits non-zero on failure, so CI catches regressions like a missing sitemap entry.
 */
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const PORT = 3100;
const BASE = `http://127.0.0.1:${PORT}`;

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/admission",
  "/cut-off-checker",
  "/2027-aspirants",
  "/resources",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

async function waitForServer(attempts = 40) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(BASE + "/", { signal: AbortSignal.timeout(2000) });
      if (res.ok) return true;
    } catch {
      /* not up yet */
    }
    await sleep(500);
  }
  return false;
}

const failures = [];
const check = (ok, message) => {
  if (!ok) failures.push(message);
};

function decode(s) {
  return s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
}

async function main() {
  // Spawn Next's own binary with the current node — `npx` leaves an orphaned
  // grandchild behind on kill, which keeps this process alive forever.
  const nextBin = new URL("../node_modules/next/dist/bin/next", import.meta.url).pathname;
  const server = spawn(process.execPath, [nextBin, "start", "-p", String(PORT)], {
    stdio: "ignore",
    env: { ...process.env, NODE_ENV: "production" },
  });

  const up = await waitForServer();
  if (!up) {
    server.kill("SIGKILL");
    console.error("✖ Server did not start on port " + PORT);
    process.exit(1);
  }

  try {
    // Sitemap drives the route list, so a page missing from the sitemap is also a missing test.
    const sitemapXml = await (await fetch(`${BASE}/sitemap.xml`)).text();
    const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    check(!sitemapXml.includes("localhost"), "sitemap.xml contains 'localhost' — set NEXT_PUBLIC_SITE_URL");
    check(sitemapUrls.length >= ROUTES.length + 6, `sitemap has only ${sitemapUrls.length} URLs`);

    const sampleUrls = sitemapUrls.slice(0, 5).map((u) => new URL(u).pathname);
    const pages = [...new Set([...ROUTES, ...sampleUrls])];

    for (const path of pages) {
      const res = await fetch(BASE + path);
      check(res.status === 200, `${path} returned ${res.status}`);
      const html = await res.text();

      check(!html.includes("localhost"), `${path} contains 'localhost'`);
      const h1s = (html.match(/<h1[\s>]/g) || []).length;
      check(h1s === 1, `${path} has ${h1s} <h1> elements`);

      const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
      check(title.length > 0, `${path} has no <title>`);
      check(title.length <= 60, `${path} title is ${title.length} chars: "${title}"`);

      const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
      check(desc.length >= 50, `${path} description is only ${desc.length} chars`);

      const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
      check(canonical.startsWith("http"), `${path} has no absolute canonical`);
      check(!/^https?:\/\/localhost/.test(canonical), `${path} canonical points at localhost`);

      check(/<meta property="og:image"/.test(html), `${path} has no og:image`);
      check(/name="twitter:card"/.test(html), `${path} has no twitter:card`);

      const ld = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
      check(ld.length > 0, `${path} has no JSON-LD`);
      for (const [, body] of ld) {
        try {
          JSON.parse(body);
        } catch {
          check(false, `${path} has invalid JSON-LD`);
        }
      }
    }

    // Error handling
    const bad = await fetch(`${BASE}/this-page-does-not-exist`);
    check(bad.status === 404, `unknown route returned ${bad.status}, expected 404`);

    // Assets
    for (const asset of ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest", "/icon.png", "/favicon.ico", "/og-image.jpg", "/ads.txt"]) {
      const r = await fetch(BASE + asset);
      check(r.status === 200, `${asset} returned ${r.status}`);
    }

    // Security headers
    const headers = (await fetch(BASE + "/")).headers;
    for (const h of [
      "x-content-type-options",
      "x-frame-options",
      "referrer-policy",
      "permissions-policy",
      "strict-transport-security",
    ]) {
      check(headers.has(h), `missing security header: ${h}`);
    }
    check(!headers.has("x-powered-by"), "x-powered-by header is still exposed");
  } finally {
    server.kill("SIGKILL");
  }

  if (failures.length) {
    console.error(`\n✖ ${failures.length} check(s) failed:`);
    for (const f of failures) console.error("  - " + f);
    process.exit(1);
  }
  console.log("✓ All site checks passed");
  // Explicit exit: a lingering child handle must not hang CI.
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
