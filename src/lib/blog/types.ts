export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type PostFaq = { q: string; a: string };

export type PostHero = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Post = {
  slug: string;
  title: string;
  /** Publish date, YYYY-MM-DD. Never in the future. */
  date: string;
  /** Last meaningful edit, YYYY-MM-DD. */
  updated: string;
  category: string;
  excerpt: string;
  body: Block[];
  faqs: PostFaq[];
  hero?: PostHero;
};

export const POST_UPDATED = "2026-10-17";
