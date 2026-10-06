import type { MetadataRoute } from "next";
import { canonicalUrl, indexableEntries } from "@/lib/routes";

const priorityByPath: Record<string, number> = {
  "/": 1,
  "/referral-management-software": 0.95,
  "/tada-software": 0.9,
  "/gym-referral-software": 0.9,
  "/product/referrals": 0.9,
  "/product": 0.8,
  "/pricing": 0.8,
  "/faq": 0.7,
  "/industries": 0.7,
  "/compare": 0.7,
  "/guides": 0.6,
  "/blog": 0.6,
  "/product/field": 0.6,
  "/product/subscriptions": 0.6,
  "/start": 0.5,
};

function priorityFor(path: string) {
  if (priorityByPath[path] !== undefined) return priorityByPath[path];
  if (path.startsWith("/industries/")) return 0.7;
  if (path.startsWith("/compare/")) return 0.6;
  if (path.startsWith("/guides/")) return 0.55;
  if (path.startsWith("/blog/")) return 0.55;
  if (path.startsWith("/product/")) return 0.5;
  if (path === "/privacy" || path === "/terms" || path === "/refund") return 0.2;
  return 0.4;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Set<string>();

  return indexableEntries().flatMap((entry) => {
    const url = canonicalUrl(entry.path);
    if (seen.has(url)) return [];
    seen.add(url);
    return [
      {
        url,
        lastModified: entry.lastModified
          ? new Date(entry.lastModified)
          : undefined,
        changeFrequency: entry.path.startsWith("/blog/") ? "yearly" : "monthly",
        priority: priorityFor(entry.path),
      },
    ];
  });
}
