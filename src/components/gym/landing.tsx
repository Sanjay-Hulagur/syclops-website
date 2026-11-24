import Link from "next/link";
import { CtaBand } from "@/components/page-hero";
import { Breadcrumbs, JsonLd } from "@/components/interior";
import { GymAnalytics, GymFaq, GymLink, GymStickyCta, gymFocus } from "@/components/gym/client";
import {
  AnalyticsSample,
  HeroBoard,
  MembershipList,
  MembershipRecord,
  PortalPhone,
  ProblemIcon,
  ReferralDesk,
  VisitHistory,
  VisitRecord,
} from "@/components/gym/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris-dark px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-deep";
const textLink = "font-medium text-iris hover:text-iris-dark";

const problems: {
  title: string;
  body: string;
  kind: "referral" | "trainer" | "payment";
}[] = [
  {
    kind: "referral",
    title: "Lost member referrals",
    body: "Members refer friends, but the source is forgotten when a new membership is created.",
  },
  {
    kind: "trainer",
    title: "Untracked trainer activity",
    body: "Trainer visits, follow-ups and field activities are scattered across WhatsApp and manual records.",
  },
  {
    kind: "payment",
    title: "Payments nobody follows up",
    body: "Who has paid and who still owes lives in a register, so nobody knows whom to call.",
  },
];

const steps = [
  {
    title: "Visit",
    body: "Trainers check in, record visits and manage their daily activities.",
  },
  {
    title: "Referral",
    body: "Members send friends from their own login in the app.",
  },
  {
    title: "Membership",
    body: "The friend joins on a membership plan, sold and recorded in Syclops.",
  },
  {
    title: "Payments",
    body: "See who has paid, who has a payment due, and who enrolled them.",
  },
];

const floorItems = [
  "Door attendance",
  "Biometric access",
  "Class scheduling",
  "Billing and invoices",
  "Member records",
];

const syclopsItems = [
  "Member referral tracking",
  "Referral attribution",
  "Trainer field visits",
  "GPS check-ins",
  "TADA",
  "Membership payments",
  "Leads and call outcomes",
  "Field performance analytics",
];

function gymFaqs(trialDays: number) {
  const [team, growth, scale] = publicPlans;
  return [
    {
      q: "Do I need to replace my existing gym management software?",
      a: "No. Keep door attendance, biometric access, class scheduling, billing, and member records in your gym software. Syclops adds member referral tracking, trainer field visits, and membership plans with payments. It does not do biometric gym attendance.",
    },
    {
      q: "Can members refer friends without downloading an app?",
      a: "Yes. A member logs in at app.syclops.in in any phone browser with a one-time code. They do not need to install anything, and referrer logins are not billed as field seats.",
    },
    {
      q: "Can Syclops pay member rewards?",
      a: "Not today. Each referral shows which member sent the friend and whether the friend came in, so your desk knows whom to reward. Giving the reward happens outside the app. The same mobile number cannot be referred twice.",
    },
    {
      q: "Can I track trainers across multiple gym branches?",
      a: "Yes. Set up each centre as a region, and trainers check in with GPS at the centre they are covering. If trainers travel between centres, TA/DA is worked out from the distance, using the amounts you set.",
    },
    {
      q: "Can I see who has not paid?",
      a: "Yes, on Growth. Each membership shows its status, such as Active or Payment Due, which your team sets. Members can pay by cash, including part payments, UPI, or online through Razorpay, which our team connects with you. Syclops does not replace invoices in your gym software.",
    },
    {
      q: "Can trainers check in using GPS?",
      a: "Yes. Each visit is checked in with GPS and a photo stamped with the place and time, and location is recorded only during the working day. The record is the visit and what followed — a referral or a membership — not a live map of the evening.",
    },
    {
      q: "How much does Syclops cost for gyms?",
      a: `Team is ${formatInr(team.priceInr)}, Growth is ${formatInr(growth.priceInr)}, and Scale is ${formatInr(scale.priceInr)}, each per field seat per month. Member and referrer logins are not billed as field seats. The full comparison is on the pricing page.`,
    },
    {
      q: "Can I start with field tracking and add referrals later?",
      a: "Yes. Team includes field tracking, TADA, and a referral workspace with member logins. Move to Growth when you want membership plans, leads and call outcomes. History stays.",
    },
    {
      q: "How long does setup take?",
      a: "You create the workspace in the browser in a few minutes, with no sales call. The same day you can set up centres as regions and add trainers. We connect Razorpay and WhatsApp with you, and the guides cover check-in, referrals, and plans.",
    },
    {
      q: "Does the app use gym words?",
      a: "Partly. The phone screens say referrers and referred users. Some forms and the admin dashboard still use hospital words, such as doctors and patients, because Syclops was built for hospitals first. The steps are the same.",
    },
    {
      q: "Is there a free trial?",
      a: `Yes. A new workspace can use Syclops for ${trialDays} days without a card. When that period ends, access stops until a paid plan is applied. Referrer logins are not billed as field seats.`,
    },
  ];
}

function FeatureList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item) => (
        <li key={item.title}>
          <p className="font-medium">{item.title}</p>
          <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function GymLanding({ trialDays }: { trialDays: number }) {
  const faqs = gymFaqs(trialDays);
  const growth = publicPlans.find((plan) => plan.featured) ?? publicPlans[1];

  return (
    <>
      <GymAnalytics />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Gyms", path: "/industries/gyms" },
        ]}
      />

      <header className="border-b border-line lg:flex lg:min-h-[calc(100svh-110px)] lg:items-center">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:w-full lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-iris sm:text-xs">
              Gym referrals · trainer visits · memberships
            </p>
            <h1 className="display mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Turn gym referrals into paying members.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-muted sm:text-base">
              Track every member referral, trainer visit and membership payment
              in one place. Keep your existing gym management software.
            </p>
            <div id="gym-hero-cta" className="mt-8 flex flex-wrap items-center gap-3 sm:gap-5">
              <GymLink
                href="/start"
                event="gym_hero_start_trial"
                params={{ placement: "hero" }}
                className={`${primary} gap-2 px-5 py-3 ${gymFocus}`}
              >
                Start free trial
                <span aria-hidden="true">→</span>
              </GymLink>
              <GymLink
                href="#product-demo"
                event="gym_hero_see_demo"
                className={`inline-flex items-center gap-2.5 rounded-full py-2 pr-2 text-sm font-medium text-ink hover:text-iris ${gymFocus}`}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-cream">
                  <svg viewBox="0 0 16 16" className="ml-0.5 h-3.5 w-3.5" aria-hidden="true">
                    <path d="M5 3.5v9l8-4.5-8-4.5z" fill="currentColor" />
                  </svg>
                </span>
                See how it works
              </GymLink>
            </div>
            <ul className="mt-6 flex max-w-lg flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
              {[
                `${trialDays} days free`,
                "No credit card required",
                "No sales call required",
                "Free logins for referring members",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-money text-cream">
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden="true">
                      <path
                        d="M2.2 6.2 4.7 8.7 9.8 3.4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <HeroBoard />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="gym-problem">
        <h2 id="gym-problem" className="display max-w-2xl text-3xl font-semibold tracking-tight">
          Your gym software manages the floor. But who manages the referrals?
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {problems.map((problem) => (
            <article key={problem.title} className="rounded-3xl border border-line bg-cream p-6">
              <ProblemIcon kind={problem.kind} />
              <h3 className="mt-4 text-lg font-medium">{problem.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{problem.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="gym-how">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="gym-how" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            One connected system for gym growth.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Trainers can check in and members can refer on Team. Membership
            plans are on{" "}
            <Link href="/pricing" className={textLink}>
              Growth
            </Link>
            .
          </p>
          <ol className="mt-10 grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="relative">
                {index < steps.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 hidden h-px w-[calc(100%+1.5rem)] bg-line lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                {index < steps.length - 1 ? (
                  <span
                    className="absolute bottom-[-2rem] left-5 top-10 w-px bg-line lg:hidden"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex gap-4 lg:block">
                  <p className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-cream text-xs font-medium tabular-nums text-iris">
                    0{index + 1}
                  </p>
                  <div className="lg:mt-4">
                    <h3 className="text-lg font-medium">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="product-demo"
        data-gym-view="gym_referral_section_view"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="gym-referrals"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Member referrals
            </p>
            <h2 id="gym-referrals" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know who brought every new member.
            </h2>
            <FeatureList
              items={[
                {
                  title: "A login for members",
                  body: "Members log in from any phone browser and see whom they sent. They are not a paid field seat.",
                },
                {
                  title: "Refer from the phone",
                  body: "A member adds the friend’s name, mobile number and a note. Nothing to install.",
                },
                {
                  title: "Referral attribution",
                  body: "Each referral keeps the name of the member who sent it.",
                },
                {
                  title: "Duplicate referral handling",
                  body: "A mobile number that is already on a referral cannot be sent again.",
                },
                {
                  title: "Why a referral stopped",
                  body: "Not able to contact or did not visit. Every stopped referral says why.",
                },
                {
                  title: "Referral conversion analytics",
                  body: "Referrals by referrer and region, and what became of each one.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/gym-referral-software" className={textLink}>
                Gym referral software
              </Link>
              {" · "}
              <Link href="/product/referrals" className={textLink}>
                Referral management
              </Link>
              {" · "}
              <Link href="/guides/referral-portal" className={textLink}>
                Referrers guide
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <PortalPhone />
            <ReferralDesk />
          </div>
        </div>
      </section>

      <section
        id="gym-field"
        data-gym-view="gym_field_section_view"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="gym-field-title"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Trainer field work
            </p>
            <h2 id="gym-field-title" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know what your trainers do beyond the gym floor.
            </h2>
            <FeatureList
              items={[
                {
                  title: "Planned visits and daily work",
                  body: "A visit plan for the week, so the day is a list and not a WhatsApp thread.",
                },
                {
                  title: "GPS check-ins",
                  body: "Each visit is checked in with GPS. Location is recorded only during the working day.",
                },
                {
                  title: "Visit history and proof",
                  body: "Notes and the photo stay on the visit.",
                },
                {
                  title: "Leave and shifts",
                  body: "Trainer leave and shift plans sit in the same workspace.",
                },
                {
                  title: "Multi-location field activity",
                  body: "Centres are regions. Trainers check in at the centre they are covering.",
                },
                {
                  title: "TADA and travel tracking where applicable",
                  body: "When trainers travel, TA/DA is worked out from the distance, using the amounts you set.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/product/field" className={textLink}>
                Field tracking
              </Link>
              {" · "}
              <Link href="/product/mobile" className={textLink}>
                Field app
              </Link>
              {" · "}
              <Link href="/tada-software" className={textLink}>
                TADA
              </Link>
            </p>
          </div>
          <div className="order-2 grid gap-3 md:order-1">
            <VisitRecord />
            <VisitHistory />
          </div>
        </div>
      </section>

      <section
        id="gym-subscriptions"
        data-gym-view="gym_subscription_section_view"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="gym-memberships"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Memberships
            </p>
            <h2 id="gym-memberships" className="display mt-3 text-3xl font-semibold tracking-tight">
              See who has paid, and who has not.
            </h2>
            <FeatureList
              items={[
                {
                  title: "Membership plans",
                  body: "Plans keep the price, duration, and members covered, and the staff member who sold them.",
                },
                {
                  title: "Payments due",
                  body: "Payment Due is a status on the membership, not a Monday export.",
                },
                {
                  title: "Cash, UPI, or online",
                  body: "Record cash and UPI at the desk, or take payments online through Razorpay, which our team connects with you.",
                },
                {
                  title: "Part payments in cash",
                  body: "Reception records the cash amount collected, even when it is only part of the plan price.",
                },
                {
                  title: "Referrals and memberships together",
                  body: "Referrals and memberships sit in the same workspace, with reports for both. Syclops does not replace your gym invoices.",
                },
                {
                  title: "Enrollment reports",
                  body: "Enrollments by plan and by the staff member who sold them.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/product/subscriptions" className={textLink}>
                Subscriptions
              </Link>
              {" · "}
              <Link href="/guides/plans-billing" className={textLink}>
                Plans and payments
              </Link>
            </p>
          </div>
          <div className="grid gap-3">
            <MembershipRecord />
            <MembershipList />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="gym-software">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="gym-software" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Keep your gym management software. Add the missing layer.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Syclops sits beside the system that already runs the floor. You do
            not move class schedules, door access, or GST invoices to track
            referrals, trainer visits, and membership payments.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-line bg-quiet p-6">
              <h3 className="text-lg font-medium">Existing gym management software</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {floorItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-iris bg-cream p-6">
              <h3 className="text-lg font-medium">Syclops</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {syclopsItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-6 text-sm leading-6">
            <Link href="/compare/gym-software" className={textLink}>
              Compare Syclops with gym management software
            </Link>
            <span className="text-muted"> · </span>
            <Link
              href="/blog/gym-referral-programme-without-replacing-erp"
              className={textLink}
            >
              Run referrals beside your gym ERP
            </Link>
          </p>
        </div>
      </section>

      <section
        id="gym-pricing"
        data-gym-view="gym_pricing_view"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="gym-pricing-title"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="gym-pricing-title" className="display text-3xl font-semibold tracking-tight">
            Choose the right setup for your gym.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Prices match the pricing page and are per field seat per month.
            Members who only refer are not billed as seats. {growth.name} is the
            plan for the full referral and membership workflow.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {publicPlans.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-3xl border p-6 ${
                  plan.featured ? "border-iris bg-cream" : "border-line bg-paper"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="display text-2xl font-semibold">{plan.name}</h3>
                  {plan.featured ? (
                    <p className="rounded-full bg-iris-dark px-2.5 py-1 text-[11px] font-medium text-cream">
                      Recommended
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-3xl font-semibold tabular-nums">
                  {formatInr(plan.priceInr)}
                </p>
                <p className="mt-1 text-sm text-muted">{plan.cadence}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                  {plan.gymItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <GymLink
                  href="/start"
                  event="gym_pricing_click"
                  params={{ plan: plan.name.toLowerCase() }}
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${gymFocus} ${
                    plan.featured
                      ? "bg-iris-dark text-cream hover:bg-iris-deep"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start free trial
                </GymLink>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <GymLink
              href="/pricing"
              event="gym_pricing_click"
              params={{ plan: "compare" }}
              className={textLink}
            >
              Compare all plans
            </GymLink>
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="gym-trust">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="gym-trust" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Built for teams that work on the ground.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            The records below use sample data so you can see a member’s
            referrals, a field visit, and visits turning into members. They are
            not a customer result.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <VisitRecord />
            <PortalPhone />
            <VisitHistory />
            <AnalyticsSample />
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            <Link href="/product/analytics" className={textLink}>
              Analytics
            </Link>
            {" · "}
            <Link href="/product/field" className={textLink}>
              Field visits
            </Link>
            {" · "}
            <Link href="/guides" className={textLink}>
              Setup guides
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="gym-faq">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="gym-faq" className="display text-3xl font-semibold tracking-tight">
            Questions gym owners ask
          </h2>
          <div className="mt-8">
            <GymFaq items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand
        id="gym-final"
        title="Make every referral, visit and membership count."
        body="Start with your trainers and referrals. Add membership tracking when you're ready."
        note="No credit card required. No onboarding call required."
        actions={
          <div className="flex flex-col items-start gap-3">
            <GymLink
              href="/start"
              event="gym_final_cta_click"
              className={`${primary} ${gymFocus} focus-visible:[box-shadow:0_0_0_3px_color-mix(in_srgb,#C45C26_45%,transparent)]`}
            >
              Start your {trialDays}-day free trial
            </GymLink>
            <Link href="/interested" className="text-sm text-cream/80 underline-offset-4 hover:text-cream hover:underline">
              Talk to our team
            </Link>
          </div>
        }
      />
      <GymStickyCta label="Start free trial" />
    </>
  );
}
