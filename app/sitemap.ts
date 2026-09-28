import type { MetadataRoute } from "next";
import { site, services } from "@/lib/site";
import { posts } from "@/lib/posts";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/2027-aspirants", "/resources", "/contact",
    ...services.map((s) => `/services/${s.slug}`), ...posts.map((p) => `/resources/${p.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
