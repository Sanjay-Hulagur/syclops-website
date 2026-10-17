import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/lib/blog/types";

const INLINE_LINK = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;

export function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(INLINE_LINK)) {
    const index = match.index ?? 0;
    const href = match[2];
    if (index > last) parts.push(text.slice(last, index));
    if (href.startsWith("/") && !href.startsWith("//")) {
      parts.push(
        <Link
          key={`${href}-${index}`}
          href={href}
          className="font-medium text-iris underline decoration-iris/40 underline-offset-4 hover:decoration-iris"
        >
          {match[1]}
        </Link>,
      );
    } else {
      parts.push(match[0]);
    }
    last = index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export function BlogProse({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-10 space-y-5 text-base leading-8 text-ink/90">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="display pt-4 text-2xl font-semibold tracking-tight text-ink"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{renderInline(block.text)}</p>;
      })}
    </div>
  );
}
