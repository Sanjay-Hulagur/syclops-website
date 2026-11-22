import type { Metadata } from "next";
import { CheckEmail } from "@/components/check-email";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Check your email",
    description:
      "We emailed you a link to set your Syclops admin password. Open it to sign in to your new workspace.",
    path: "/start/created",
  }),
  robots: { index: false, follow: false },
};

export default function CheckEmailPage() {
  return (
    <section className="mx-auto max-w-xl px-4 pb-16 pt-8 sm:px-5 sm:pt-14">
      <CheckEmail />
    </section>
  );
}
