import { getPost, posts } from "@/lib/blog";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops blog";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogImage({
    eyebrow: post?.category ?? "Blog",
    title: post?.title ?? "Syclops",
    kicker: post?.excerpt,
  });
}
