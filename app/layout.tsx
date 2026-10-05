import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site, wa, MSG } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Admission & JAMB/UTME Guidance in Nigeria`, template: `%s | ${site.name}` },
  description: site.description,
  other: {
    "google-adsense-account": "ca-pub-4289311175968434",
  },
};
export const viewport: Viewport = { themeColor: "#0F2F73", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4289311175968434" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4289311175968434"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a href={wa(MSG.general)} target="_blank" rel="noopener noreferrer"
          className="fixed inset-x-4 bottom-4 z-40 flex min-h-12 items-center justify-center rounded-md bg-brand-green px-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg lg:hidden">
          Chat on WhatsApp
        </a>
        <JsonLd />
      </body>
    </html>
  );
}
