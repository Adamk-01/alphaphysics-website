import type { MetadataRoute } from "next";
import { site, services, nav } from "@/lib/site";
import { posts } from "@/lib/posts";

/**
 * Every public route must appear here. `nav` is included so a page added to the
 * navigation can never be silently missing from the sitemap again.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = new Set<string>([...nav.map((n) => n.href), "/admission", "/privacy", "/terms"]);

  const staticEntries = [...staticPaths].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "/" ? 1 : path === "/admission" ? 0.9 : 0.7,
  }));

  const serviceEntries = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postEntries = posts.map((p) => ({
    url: `${site.url}/resources/${p.slug}`,
    lastModified: new Date(p.updated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries, ...postEntries];
}
