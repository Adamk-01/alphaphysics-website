import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // Google's ad crawler must be able to reach every page for AdSense review.
      { userAgent: "Mediapartners-Google", allow: "/" },
      { userAgent: "AdsBot-Google", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
