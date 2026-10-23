/**
 * Note on Next.js 14.2.15: this project intentionally stays on the 14.x line for now.
 * The mitigations below (no framework fingerprint, capped optimiser sizes, long image
 * cache, strict headers) reduce the practical surface of the known advisories. The
 * upgrade path to Next 15/16 is documented in AUDIT.md §3.3.
 */

// Hosts AdSense, Google Fonts-for-ads and the account script legitimately need.
const ADS = [
  "https://pagead2.googlesyndication.com",
  "https://partner.googleadservices.com",
  "https://tpc.googlesyndication.com",
  "https://www.googletagservices.com",
  "https://adservice.google.com",
  "https://securepubads.g.doubleclick.net",
  "https://fundingchoicesmessages.google.com",
  "https://ep1.adtrafficquality.google",
  "https://www.google.com",
];

const csp = [
  "default-src 'self'",
  // 'unsafe-inline' is required by Next's inline bootstrap and by AdSense.
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${ADS.join(" ")} https://*.googlesyndication.com https://*.doubleclick.net`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  `connect-src 'self' https://wa.me ${ADS.join(" ")} https://*.googlesyndication.com https://*.doubleclick.net https://*.google-analytics.com`,
  "frame-src 'self' https://*.googlesyndication.com https://*.doubleclick.net https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Source images are immutable; 31 days stops the optimiser re-rendering on every CDN revalidation.
    minimumCacheTTL: 2678400,
    // Cap the optimiser instead of allowing arbitrary 3840px renders on demand.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [48, 64, 80, 96, 128, 160, 256, 384],
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Report-only so a strict policy can never break AdSense delivery.
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
      {
        source: "/:path*.(png|jpg|jpeg|svg|webp|avif|ico|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
