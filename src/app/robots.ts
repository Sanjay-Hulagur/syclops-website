import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * One allow-all group. Do not Disallow public URLs, including /login.
 * A robots.txt block stops Google from reading the page, so a linked URL
 * can stay in the index with the status "Indexed, though blocked by
 * robots.txt". /login is omitted from the sitemap and marked noindex.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
