import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site, wa, MSG } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Admission & JAMB/UTME Guidance in Nigeria",
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "education",
  classification: "Education, Admission, JAMB, UTME, Nigeria",
  keywords: site.keywords,
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: site.url,
    languages: { "en-NG": site.url, "x-default": site.url },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Admission & JAMB/UTME Guidance in Nigeria`,
    description: site.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Admission & JAMB/UTME Guidance`,
    description: site.description,
    images: [OG_IMAGE],
  },
  appleWebApp: { capable: true, title: site.shortName, statusBarStyle: "default" },
  formatDetection: { telephone: true, address: false, email: false },
  referrer: "strict-origin-when-cross-origin",
  verification: {
    google: "fuFTZ6a5geBIAuj2Br-sBd1Y-4bCxCnpCDi20JQi89k",
  },
  other: {
    "google-adsense-account": "ca-pub-4289311175968434",
    // Local/regional targeting hints. Bing and several AI crawlers read these; Google uses the
    // structured data in components/JsonLd.tsx instead.
    "geo.region": "NG-LA",
    "geo.placename": "Lagos, Nigeria",
    "geo.position": "6.5244;3.3792",
    ICBM: "6.5244, 3.3792",
    coverage: "Nigeria",
    distribution: "global",
    rating: "general",
    language: "English",
    "revisit-after": "7 days",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F2F73",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a
          href={wa(MSG.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed inset-x-4 bottom-4 z-40 flex min-h-12 items-center justify-center rounded-md bg-brand-green px-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg lg:hidden"
        >
          Chat on WhatsApp
        </a>
        <JsonLd />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4289311175968434"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
