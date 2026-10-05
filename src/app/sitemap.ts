import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { comparisons } from "@/lib/compare";
import { guides } from "@/lib/guides";
import { industries } from "@/lib/industries";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/product",
    "/product/field",
    "/product/referrals",
    "/product/subscriptions",
    "/product/analytics",
    "/product/mobile",
    "/integrations",
    "/industries",
    "/compare",
    "/customers",
    "/guides",
    "/faq",
    "/start",
    "/login",
    "/pricing",
    "/security",
    "/blog",
    "/privacy",
    "/terms",
    "/refund",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })),
    ...industries.map((item) => ({
      url: `${site.url}/industries/${item.id}`,
      lastModified: new Date(),
    })),
    ...comparisons.map((item) => ({
      url: `${site.url}/compare/${item.slug}`,
      lastModified: new Date(),
    })),
    ...guides.map((item) => ({
      url: `${site.url}/guides/${item.slug}`,
      lastModified: new Date(),
    })),
    ...posts.map((item) => ({
      url: `${site.url}/blog/${item.slug}`,
      lastModified: new Date(item.date),
    })),
  ];
}
