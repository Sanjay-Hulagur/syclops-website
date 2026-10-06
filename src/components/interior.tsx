import type { ReactNode } from "react";
import Link from "next/link";
import { faqJsonLd } from "@/lib/seo";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
          {title}
        </h2>
      ) : null}
      <div className={title || eyebrow ? "mt-8" : undefined}>{children}</div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-2xl space-y-4 text-base leading-7 text-muted">
      {children}
    </div>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-line bg-cream p-6"
        >
          <h3 className="text-lg font-medium">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function FaqList({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <>
      <JsonLd data={faqJsonLd(items)} />
      <dl className="divide-y divide-line rounded-3xl border border-line bg-cream">
        {items.map((item) => (
          <div key={item.q}>
            <dt className="px-6 pt-5 font-medium">
              <h3 className="text-base font-medium">{item.q}</h3>
            </dt>
            <dd className="mt-2 px-6 pb-5 text-sm leading-6 text-muted">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}

export function Related({
  items,
}: {
  items: { href: string; label: string; body: string }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-2xl border border-line bg-paper p-5 hover:border-ink/30"
        >
          <p className="font-medium">{item.label}</p>
          <p className="mt-2 text-sm text-muted">{item.body}</p>
        </Link>
      ))}
    </div>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-line bg-cream px-5 py-4 text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
