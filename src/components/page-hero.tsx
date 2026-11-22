import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/interior";
import { SvgScene, type SceneKind } from "@/components/svg-scene";
import { getBillingConfig } from "@/lib/billing";

export async function CtaBand({
  title = "Try Syclops with your own team.",
  body,
  id,
  note,
  actions,
}: {
  title?: string;
  body?: string;
  id?: string;
  note?: string;
  actions?: ReactNode;
}) {
  const copy =
    body ??
    `${(await getBillingConfig()).trial.days} days free, no card and no sales call. Create your workspace with an email address and your business name.`;
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-line bg-ink text-cream"
    >
      <div className="pointer-events-none absolute -right-16 -top-20 w-72 opacity-25">
        <SvgScene kind="loop" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-cream/70">{copy}</p>
          {note ? <p className="mt-3 text-sm text-cream/70">{note}</p> : null}
        </div>
        {actions ?? (
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/start?cta=cta_band"
              data-cta-id="cta_band_trial"
              data-cta-location="cta_band"
              className="flex h-12 items-center justify-center rounded-full bg-iris-dark px-6 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              className="flex h-12 items-center justify-center rounded-full border border-cream/30 px-6 text-base text-cream hover:bg-cream/5"
            >
              See pricing
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  scene = "loop",
  cta = true,
  crumbs,
  image,
}: {
  eyebrow: string;
  title: string;
  body: string;
  scene?: SceneKind;
  cta?: boolean;
  crumbs?: { name: string; path: string }[];
  image?: { src: string; alt: string; width: number; height: number };
}) {
  return (
    <>
      {crumbs ? <Breadcrumbs items={crumbs} /> : null}
      <header className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
            {eyebrow}
          </p>
          <h1 className="display mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{body}</p>
          {cta ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/start?cta=page_hero"
                data-cta-id="page_hero_trial"
                data-cta-location="page_hero"
                className="flex h-12 items-center justify-center rounded-full bg-iris-dark px-6 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                Start free trial
              </Link>
              <Link
                href="/pricing"
                className="flex h-12 items-center justify-center rounded-full border border-line px-6 text-base hover:bg-paper"
              >
                See pricing
              </Link>
            </div>
          ) : null}
        </div>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            className="mx-auto h-auto w-full max-w-lg"
          />
        ) : (
          <SvgScene kind={scene} />
        )}
      </div>
    </header>
    </>
  );
}

export function Steps({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <ol className={`grid gap-4 ${items.length > 3 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
      {items.map((item, index) => (
        <li key={item.title} className="rounded-3xl border border-line bg-cream p-6">
          <p className="text-xs text-iris">0{index + 1}</p>
          <h2 className="mt-2 text-lg font-medium">{item.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
