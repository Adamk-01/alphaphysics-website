import type { Metadata } from "next";
import { site } from "./site";
export function meta(title: string, description: string, path: string): Metadata {
  const url = `${site.url}${path}`;
  return { title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, type: "website", locale: "en_NG", images: [{ url: `${site.url}/logo.jpg`, width: 1536, height: 1536, alt: `${site.name} logo` }] },
    twitter: { card: "summary", title, description, images: [`${site.url}/logo.jpg`] } };
}
