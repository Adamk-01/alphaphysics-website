import type { Metadata } from "next";
import { site } from "./site";

export const OG_IMAGE = "/og-image.jpg";

type MetaOptions = {
  /** Extra page-specific search terms. Merged after the site-wide defaults. */
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  /** Absolute or root-relative path to the social preview image. */
  image?: string;
};

/**
 * Builds page metadata.
 *
 * `title` should NOT contain the brand name — the root layout's template appends
 * " | ALPHAPHYSICS". Keeping titles short here is what stops them being truncated
 * in Google results.
 */
export function meta(title: string, description: string, path: string, opts: MetaOptions = {}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const image = opts.image ?? OG_IMAGE;
  const keywords = [...new Set([...(opts.keywords ?? []), ...site.keywords])];

  const metadata: Metadata = {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: opts.noIndex
      ? { index: false, follow: true }
      : {
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
      title: `${title} | ${site.shortName}`,
      description,
      url,
      siteName: site.name,
      type: opts.type ?? "website",
      locale: "en_NG",
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
      ...(opts.type === "article"
        ? {
            publishedTime: opts.publishedTime,
            modifiedTime: opts.modifiedTime ?? opts.publishedTime,
            authors: [site.name],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.shortName}`,
      description,
      images: [image],
    },
  };

  return metadata;
}
