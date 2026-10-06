import Link from "next/link";
import { Breadcrumbs } from "@/components/interior";
import { SvgScene, type SceneKind } from "@/components/svg-scene";

export function CtaBand({
  title = "Create a workspace. Invite the field. Turn on a plan.",
  body = "No onboarding call. No specialist. You configure regions, roles, and billing in the product.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink text-cream">
      <div className="pointer-events-none absolute -right-16 -top-20 w-72 opacity-25">
        <SvgScene kind="loop" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-cream/70">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/start"
            className="rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark"
          >
            Start for free
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border border-cream/20 px-5 py-2.5 text-sm text-cream hover:bg-cream/5"
          >
            See pricing
          </Link>
        </div>
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
}: {
  eyebrow: string;
  title: string;
  body: string;
  scene?: SceneKind;
  cta?: boolean;
  crumbs?: { name: string; path: string }[];
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/start"
                className="rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark"
              >
                Start for free
              </Link>
              <Link
                href="/guides"
                className="rounded-full border border-line px-5 py-2.5 text-sm hover:bg-paper"
              >
                Self-serve setup
              </Link>
            </div>
          ) : null}
        </div>
        <SvgScene kind={scene} />
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
