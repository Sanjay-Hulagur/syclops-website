import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Existing site policy (llms-full.txt and the previous robots.txt) allows
 * both search crawlers and model-training crawlers. GPTBot is therefore
 * allowed on purpose — it is not the same as OAI-SearchBot.
 */
const allowedAgents = [
  "*",
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Google-CloudVertexBot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  "Diffbot",
  "YouBot",
  "DuckAssistBot",
  "AI2Bot",
  "AI2Bot-Dolma",
  "Timpibot",
  "ImagesiftBot",
  "PanguBot",
  "Kangaroo Bot",
  "MistralAI-User",
  "GrokBot",
  "xAI-Grok",
  "DuckDuckBot",
  "BraveBot",
  "PetalBot",
  "YandexBot",
  "Baiduspider",
  "ia_archiver",
  "archive.org_bot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowedAgents.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: ["/login"],
    })),
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
