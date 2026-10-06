import { posts } from "@/lib/blog";
import { comparisons } from "@/lib/compare";
import { guides } from "@/lib/guides";
import { industries } from "@/lib/industries";
import { site } from "@/lib/site";

/** Canonical public paths that should appear in sitemap.xml. Excludes /login. */
export const staticIndexablePaths = [
  "/",
  "/referral-management-software",
  "/tada-software",
  "/gym-referral-software",
  "/product",
  "/product/field",
  "/product/referrals",
  "/product/subscriptions",
  "/product/analytics",
  "/product/mobile",
  "/integrations",
  "/pricing",
  "/faq",
  "/industries",
  "/compare",
  "/guides",
  "/blog",
  "/customers",
  "/security",
  "/start",
  "/privacy",
  "/terms",
  "/refund",
] as const;

export function canonicalUrl(path: string) {
  if (path === "/") return site.url;
  return `${site.url}${path}`;
}

export function indexableEntries(): {
  path: string;
  lastModified?: string;
}[] {
  const industryPaths = industries.map((item) => ({
    path: `/industries/${item.id}`,
  }));
  const comparePaths = comparisons.map((item) => ({
    path: `/compare/${item.slug}`,
  }));
  const guidePaths = guides.map((item) => ({
    path: `/guides/${item.slug}`,
  }));
  const blogPaths = posts.map((item) => ({
    path: `/blog/${item.slug}`,
    lastModified: item.date,
  }));

  return [
    ...staticIndexablePaths.map((path) => ({ path })),
    ...industryPaths,
    ...comparePaths,
    ...guidePaths,
    ...blogPaths,
  ];
}
