import type { Metadata } from "next";
import { StartForm } from "@/components/start-form";
import { SvgScene } from "@/components/svg-scene";

export const metadata: Metadata = {
  title: "Start",
  description: "Create a Syclops workspace — field, referrals, and subscriptions.",
};

export default function StartPage() {
  return (
    <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
          Self-serve
        </p>
        <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Create a workspace in a few minutes.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          Pick an industry. Invite field staff later. Partners get a portal
          link. Plans and billing stay in Settings. There is no sales call and
          no implementation manager.
        </p>
        <div className="mt-10 max-w-sm">
          <SvgScene kind="start" />
        </div>
      </div>
      <StartForm />
    </section>
  );
}
