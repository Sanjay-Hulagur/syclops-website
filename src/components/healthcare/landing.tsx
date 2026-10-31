import Link from "next/link";
import { CtaBand } from "@/components/page-hero";
import { Breadcrumbs, JsonLd, Related } from "@/components/interior";
import {
  HealthcareAnalytics,
  HealthcareFaq,
  HealthcareLink,
  HealthcareStickyCta,
  healthcareFocus,
} from "@/components/healthcare/client";
import {
  CampRecord,
  DoctorRecord,
  FieldDay,
  HeroBoard,
  PerformanceBoard,
  ReferralRecord,
} from "@/components/healthcare/frames";
import { formatInr, publicPlans } from "@/lib/plans";
import { faqJsonLd } from "@/lib/seo";

const primary =
  "inline-flex items-center justify-center rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-cream hover:bg-iris-dark";
const secondary =
  "inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:bg-quiet";
const textLink = "font-medium text-iris hover:text-iris-dark";

const problems = [
  {
    title: "Doctor relationships are difficult to measure",
    body: "Hospitals maintain large referral networks, but management may not have a clear view of engagement, visit history, and referral contribution.",
  },
  {
    title: "PRO activity is difficult to verify",
    body: "Planned visits, actual field visits, follow-ups, and territory coverage need to be connected.",
  },
  {
    title: "Patient referrals get disconnected",
    body: "A patient referral should be traceable to its originating doctor and subsequent hospital outcome wherever the data integration supports it.",
  },
  {
    title: "Referral performance is unclear",
    body: "Management needs to understand which doctors, territories, campaigns, and field activities contribute to hospital growth.",
  },
  {
    title: "Camps lack follow-through",
    body: "A camp should not end with attendance. Its enquiries, follow-ups, and resulting hospital visits should be measurable where supported.",
  },
];

const workflow = [
  {
    title: "Referral doctor",
    points: [
      "Maintain doctor profiles and referral relationships.",
      "Organise doctors by territory and specialty.",
    ],
  },
  {
    title: "PRO visit",
    points: [
      "Plan visits.",
      "GPS check-in.",
      "Capture visit notes and follow-ups.",
    ],
  },
  {
    title: "Patient referral",
    points: [
      "Record referral details.",
      "Identify the originating doctor.",
      "Track referral status.",
    ],
  },
  {
    title: "Hospital outcome",
    points: [
      "Track hospital visits, OPD and admission outcomes where an HIS connector supports it.",
      "Keep the referral source on that outcome.",
    ],
  },
  {
    title: "Performance",
    points: [
      "Measure doctor engagement.",
      "Review referral contribution.",
      "Identify inactive relationships and follow-up gaps.",
    ],
  },
];

const useCases = [
  {
    title: "Multi-speciality hospitals",
    body: "One referral network across specialties, with the PRO who owns each doctor and the referrals that doctor sent.",
    items: [
      "Referral doctor network",
      "PRO visit management",
      "Patient referral tracking",
      "Specialty on each doctor record",
    ],
  },
  {
    title: "Super-speciality hospitals",
    body: "Specialty-wise engagement, coverage of the doctors who send patients, and outcomes where an HIS connector is in place.",
    items: [
      "Specialty-wise doctor engagement",
      "Referral network development",
      "Field coverage",
      "Patient referral outcomes where supported",
    ],
  },
  {
    title: "Diagnostic centres",
    body: "Doctor outreach and the source of each referral, without replacing the laboratory or radiology system.",
    items: [
      "Doctor outreach",
      "Referral relationship tracking",
      "Field team activity",
      "Referral source reporting on Growth",
    ],
  },
  {
    title: "Hospital chains",
    body: "More than one location can be a region. Multi-brand or multi-city reporting is on Scale, not on every plan.",
    items: [
      "Locations as regions",
      "Territory-wise field operations",
      "Region reporting on Growth",
      "Multi-brand or multi-city on Scale",
    ],
  },
];

const hisItems = [
  "Patient registration",
  "Billing",
  "Clinical records",
  "OPD and IPD workflows",
  "Laboratory and radiology",
  "Hospital operations",
];

const syclopsItems = [
  "Referral doctor relationships",
  "PRO field activity",
  "Doctor visits",
  "Patient referral source tracking",
  "Camp and outreach workflows",
  "Referral performance analytics",
];

const questions = [
  "How many doctor visits were planned and completed?",
  "Which doctors are actively referring patients?",
  "Which referral relationships need follow-up?",
  "Which territories are receiving sufficient field coverage?",
  "Which referral sources contribute to hospital visits?",
  "Which camps and outreach activities need further follow-up?",
];

function healthcareFaqs(trialDays: number) {
  const [team, growth, scale] = publicPlans;
  return [
    {
      q: "Does Syclops replace our hospital HIS?",
      a: "No. Patient registration, billing, clinical records, OPD and IPD workflows, laboratory, radiology, and day-to-day hospital operations stay in your HIS. Syclops is the referral and field layer around it.",
    },
    {
      q: "Can we manage referral doctors across multiple specialties?",
      a: "Yes. Each referral doctor has a specialty, a location or territory, visit history, and referral activity. You can review the network by specialty. Syclops is not a clinical department roster inside the HIS.",
    },
    {
      q: "Can we assign referral doctors to different PROs?",
      a: "Yes. A doctor record can name the PRO who owns that relationship. Visits, notes, and follow-ups stay with that assignment.",
    },
    {
      q: "Can we track PRO visits using GPS?",
      a: "Yes. Check-in records location. GPS runs on a working day between check-in and check-out, and a photo can be required. Mock locations are flagged. The record is the visit, the notes, and the follow-up. TADA is the path walked, approved against your rate card. It is not a live map of the evening.",
    },
    {
      q: "Can we track which doctor referred a patient?",
      a: "Yes. A patient referral keeps the originating doctor, the referral date, and a status. The same phone or email cannot be referred twice into the same plan. On Growth, the referring doctor can open a portal and see their own status. They are not billed as a field seat.",
    },
    {
      q: "Can we measure referral doctor performance?",
      a: "The doctor record shows visit history and referral activity. On Growth, analytics groups visits, referrals, and plans by referrer and region, including relationships that have gone quiet. A hospital visit or admission match appears where an HIS connector is configured. Syclops does not invent a revenue lift.",
    },
    {
      q: "Can we manage health camps?",
      a: "Yes. A camp has a name, type, dates, location, expected participants, and assigned in-house doctors, nurses, and supporting staff, plus promotion and logistics. Leads can be tagged to the camp so follow-up stays attached, and a camp report can be written when it closes. Syclops does not replace an on-site attendance register, and it does not turn attendance into an admission unless that referral is recorded.",
    },
    {
      q: "Can we manage multiple hospital branches?",
      a: "Regions cover more than one location in one workspace on Team and Growth. Multi-brand or multi-city is on Scale. Analytics by region is on Growth. Not every multi-location control is on every plan.",
    },
    {
      q: "Can Syclops integrate with our existing HIS?",
      a: "HIS and ERP connectors are on Scale. A connector is set up for the system you already run. It is not an automatic link to every HIS. Where a connector is in place, a patient referral can be matched to an outpatient visit or an inpatient admission. Clinical charts stay in the HIS.",
    },
    {
      q: "How much does Syclops cost?",
      a: `Team is ${formatInr(team.priceInr)}, Growth is ${formatInr(growth.priceInr)}, and Scale is ${formatInr(scale.priceInr)}, each per field seat per month. Referrer logins are not billed as field seats. Annual terms discount 15% at checkout. The full comparison is on the pricing page.`,
    },
    {
      q: "Is there a free trial?",
      a: `Yes. A new workspace can be used for ${trialDays} days without a credit card. When that period ends, access stops until a paid plan is applied. There is no sales call to start.`,
    },
    {
      q: "Are referral-user accounts billed?",
      a: "No. Referral doctors and other referrers are not billed as field seats. You pay for field seats and manager seats. Team includes up to 3 managers. The referrer portal is on Growth and Scale. Team includes the referral workspace.",
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

function startHref(cta: "hero" | "product" | "pricing" | "final" | "mobile") {
  return `/start?industry=healthcare&cta=${cta}`;
}

export function HealthcareLanding({ trialDays }: { trialDays: number }) {
  const faqs = healthcareFaqs(trialDays);

  return (
    <>
      <HealthcareAnalytics />
      <JsonLd data={faqJsonLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: "Healthcare", path: "/industries/healthcare" },
        ]}
      />

      <header className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              <span className="whitespace-nowrap">Built for hospitals</span>
              {" · "}
              <span className="whitespace-nowrap">Healthcare networks</span>
              {" · "}
              <span className="whitespace-nowrap">Diagnostic centres</span>
            </p>
            <h1 className="display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Turn doctor referrals into measurable hospital growth.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              Manage referral doctors, track PRO visits, monitor patient referrals
              and measure conversion — all in one connected platform. Keep your
              existing HIS.
            </p>
            <div id="healthcare-hero-cta" className="mt-8 flex flex-wrap gap-3">
              <HealthcareLink
                href={startHref("hero")}
                event="healthcare_hero_trial_click"
                params={{ cta_location: "hero" }}
                className={`${primary} ${healthcareFocus}`}
              >
                Start your free trial
              </HealthcareLink>
              <HealthcareLink
                href="#how-it-works"
                event="healthcare_workflow_demo_click"
                params={{ cta_location: "hero" }}
                className={`${secondary} ${healthcareFocus}`}
              >
                See how it works
              </HealthcareLink>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
              <li>{trialDays} days free</li>
              <li>No credit card required</li>
              <li>No sales call</li>
              <li>Existing HIS stays</li>
            </ul>
          </div>
          <HeroBoard />
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16" aria-labelledby="healthcare-problem">
        <h2 id="healthcare-problem" className="display max-w-3xl text-3xl font-semibold tracking-tight">
          Your referral network is valuable. But can you measure what it delivers?
        </h2>
        <ol className="mt-8 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-cream">
          {problems.map((problem, index) => (
            <li key={problem.title} className="grid gap-2 px-6 py-5 sm:grid-cols-[auto_1fr] sm:gap-5">
              <p className="text-xs font-medium tabular-nums text-iris">0{index + 1}</p>
              <div>
                <h3 className="text-lg font-medium">{problem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{problem.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-base leading-7">
          Syclops connects field activity with referral outcomes, giving hospital
          management a clearer picture of what is happening outside the hospital.
        </p>
      </section>

      <section
        id="how-it-works"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="healthcare-workflow"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="healthcare-workflow" className="display max-w-3xl text-3xl font-semibold tracking-tight">
            From a doctor&apos;s clinic visit to a patient&apos;s hospital visit.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These steps share one record. A hospital visit or admission is attached
            when an HIS connector supports it. Syclops does not create that outcome
            by itself.
          </p>
          <ol className="mt-10 grid gap-8 md:grid-cols-5 md:gap-4">
            {workflow.map((step, index) => (
              <li key={step.title} className="relative">
                {index < workflow.length - 1 ? (
                  <span
                    className="absolute top-5 left-5 hidden h-px w-[calc(100%+1rem)] bg-line md:block"
                    aria-hidden="true"
                  />
                ) : null}
                <p className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-line bg-cream text-xs font-medium tabular-nums text-iris">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-base font-medium">{step.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="doctors"
        data-healthcare-section="doctors"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="healthcare-doctors"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Referral doctor management
            </p>
            <h2 id="healthcare-doctors" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know every doctor in your referral network.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Management can see who has been visited, which PRO owns the
              relationship, and which doctors are sending patients. Engagement and
              referral contribution sit on the doctor, not in a separate diary.
            </p>
            <FeatureList
              items={[
                {
                  title: "Doctor profile",
                  body: "Name, phone, specialty, and clinic location stay on one record.",
                },
                {
                  title: "Territory",
                  body: "Doctors are organised by the village, location, or region your team already uses.",
                },
                {
                  title: "Referral history and last visit",
                  body: "The last PRO visit and the referrals attached to that doctor stay together.",
                },
                {
                  title: "Assigned PRO",
                  body: "The doctor can name the PRO responsible for the next visit and follow-up.",
                },
              ]}
            />
          </div>
          <DoctorRecord />
        </div>
      </section>

      <section
        id="field"
        data-healthcare-section="field"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="healthcare-field"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              PRO field tracking
            </p>
            <h2 id="healthcare-field" className="display mt-3 text-3xl font-semibold tracking-tight">
              Know what your field team is doing outside the hospital.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              A PRO day is a list of doctor visits with an owner, a check-in, and
              a note. Managers see what was planned, what was completed, and what
              is still pending.
            </p>
            <FeatureList
              items={[
                {
                  title: "Planned visits and today’s list",
                  body: "The beat shows last-visit dates, so a skipped clinic is a gap rather than silence.",
                },
                {
                  title: "GPS check-in",
                  body: "Location is recorded at check-in. GPS runs on a working day between check-in and check-out.",
                },
                {
                  title: "Visit notes and follow-ups",
                  body: "Duration, notes, and an optional photo stay on the doctor visit.",
                },
                {
                  title: "Completed, pending, and TADA",
                  body: "Checkout closes the route. Mileage is the path walked, and a manager approves it against your rate card.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Field check-in and TADA are on Team.{" "}
              <Link href="/product/field" className={textLink}>
                Field tracking
              </Link>
            </p>
          </div>
          <div className="order-2 md:order-1">
            <FieldDay />
          </div>
        </div>
      </section>

      <section
        id="referrals"
        data-healthcare-section="referrals"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="healthcare-referrals"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Patient referral tracking
            </p>
            <h2 id="healthcare-referrals" className="display mt-3 text-3xl font-semibold tracking-tight">
              Trace every patient referral back to its source.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              The originating doctor stays on the referral as status changes. A
              hospital visit or admission is linked only where an HIS connector
              is configured.
            </p>
            <FeatureList
              items={[
                {
                  title: "Originating doctor",
                  body: "The sender is a named referral doctor, not a source note that disappears at registration.",
                },
                {
                  title: "Referral record and date",
                  body: "Patient details and the referral date stay on the same object. The same phone or email cannot be referred twice into the same plan.",
                },
                {
                  title: "Status",
                  body: "Sent, accepted, converted when a plan exists, and paying when the first invoice clears. Team includes the referral workspace. The doctor portal is on Growth.",
                },
                {
                  title: "HIS-linked outcome",
                  body: "Where a Scale connector is in place, the referral can be matched to an outpatient visit or an inpatient admission. This is not automatic for every HIS.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              <Link href="/product/referrals" className={textLink}>
                Referral management
              </Link>
            </p>
          </div>
          <ReferralRecord />
        </div>
      </section>

      <section
        id="performance"
        data-healthcare-section="performance"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="healthcare-performance"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div className="order-1 md:order-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Hospital performance
            </p>
            <h2 id="healthcare-performance" className="display mt-3 text-3xl font-semibold tracking-tight">
              See referral performance across your hospital.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              On Growth, analytics groups visits, referrals, and plans by referrer
              and region. The figures in your workspace are yours. This page does
              not show another hospital’s results.
            </p>
            <FeatureList
              items={[
                {
                  title: "Referral activity by doctor",
                  body: "Referrers are ranked by the referrals and plans attached to them, not by kilometres.",
                },
                {
                  title: "Territory performance",
                  body: "Region drill uses the hierarchy you set, so coverage is visible by territory.",
                },
                {
                  title: "PRO visits",
                  body: "Planned and completed visits stay on the people who walked them. Field tracking is on Team.",
                },
                {
                  title: "Conversion and follow-up gaps",
                  body: "Quiet relationships show up as a gap. An OP or IP match is included where an HIS connector is configured.",
                },
              ]}
            />
            <p className="mt-6 text-sm leading-6 text-muted">
              Analytics by referrer and region is on Growth.{" "}
              <Link href="/product/analytics" className={textLink}>
                Analytics
              </Link>
            </p>
          </div>
          <div className="order-2 md:order-1">
            <PerformanceBoard />
          </div>
        </div>
      </section>

      <section
        id="camps"
        data-healthcare-section="camps"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="healthcare-camps"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-iris">
              Health camps and outreach
            </p>
            <h2 id="healthcare-camps" className="display mt-3 text-3xl font-semibold tracking-tight">
              Turn health camps into measurable patient acquisition.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Plan the camp, assign the people who will run it, and keep later
              enquiries attached to that camp. Attendance registers stay where you
              already take them.
            </p>
            <FeatureList
              items={[
                {
                  title: "Camp plan, location, and dates",
                  body: "Name, type, start and end dates, location, and expected participants.",
                },
                {
                  title: "Assigned team",
                  body: "In-house doctors, nurses, and supporting staff are named on the camp. Reminders go to the field team.",
                },
                {
                  title: "Follow-up",
                  body: "A lead can be tagged to the camp, so the enquiry does not end when the camp does.",
                },
                {
                  title: "Camp report",
                  body: "Promotion, logistics, and a written report sit on the camp. A hospital visit is a separate referral, matched through an HIS connector only where one is configured.",
                },
              ]}
            />
          </div>
          <CampRecord />
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-16">
          <HealthcareLink
            href={startHref("product")}
            event="healthcare_hero_trial_click"
            params={{ cta_location: "product" }}
            className={`${primary} ${healthcareFocus}`}
          >
            Start your free trial
          </HealthcareLink>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="healthcare-usecases">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="healthcare-usecases" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Built around the way healthcare teams work.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <article key={item.title} className="rounded-3xl border border-line bg-cream p-6">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {item.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="healthcare-his">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="healthcare-his" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Keep your HIS. Connect the referral network around it.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-line bg-quiet p-6">
              <h3 className="text-lg font-medium">Existing HIS</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {hisItems.map((item) => (
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
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            Syclops complements the hospital software you already run. HIS and ERP
            connectors are on Scale, and they are configured for a specific system.
            Syclops does not connect to every HIS automatically, and it does not
            replace clinical records.
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="healthcare-management">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="healthcare-management" className="display max-w-3xl text-3xl font-semibold tracking-tight">
            Give hospital management visibility beyond the hospital walls.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            These are the questions the visit list, the doctor record, and Growth
            analytics are built to answer. They are not a promised change in revenue.
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {questions.map((question, index) => (
              <li key={question} className="rounded-2xl border border-line bg-cream px-5 py-4 text-sm leading-6">
                <span className="mr-2 text-xs font-medium tabular-nums text-iris">0{index + 1}</span>
                {question}
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
            Visit completion is on the field record. Doctor and territory views are
            on Growth. Camp follow-up uses leads tagged to that camp. A contribution
            to hospital visits is visible where an HIS connector matches the referral.
          </p>
        </div>
      </section>

      <section
        id="healthcare-pricing"
        className="scroll-mt-24 border-t border-line"
        aria-labelledby="healthcare-pricing-title"
      >
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="healthcare-pricing-title" className="display max-w-2xl text-3xl font-semibold tracking-tight">
            Field seats for PROs. Referral doctors are not a seat.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
            Prices match the pricing page and are per field seat per month. You
            also pay for manager seats. Team includes up to 3 managers. Referrer
            logins are not billed as field seats. The doctor portal, subscription
            plans, and analytics by referrer and region are on Growth. HIS and ERP
            connectors, and multi-brand or multi-city, are on Scale. {trialDays}{" "}
            days free · No credit card required.
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
                    <p className="rounded-full bg-iris px-2.5 py-1 text-[11px] font-medium text-cream">
                      Recommended
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-3xl font-semibold tabular-nums">
                  {formatInr(plan.priceInr)}
                </p>
                <p className="mt-1 text-sm text-muted">{plan.cadence}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <HealthcareLink
                  href={startHref("pricing")}
                  event="healthcare_pricing_click"
                  params={{ cta_location: "pricing", plan: plan.name.toLowerCase() }}
                  className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${healthcareFocus} ${
                    plan.featured
                      ? "bg-iris text-cream hover:bg-iris-dark"
                      : "border border-line hover:bg-quiet"
                  }`}
                >
                  Start your free trial
                </HealthcareLink>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <HealthcareLink
              href="/pricing"
              event="healthcare_pricing_click"
              params={{ cta_location: "pricing", plan: "compare" }}
              className={textLink}
            >
              Compare all plans
            </HealthcareLink>
          </p>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="healthcare-faq">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h2 id="healthcare-faq" className="display text-3xl font-semibold tracking-tight">
            Questions hospital teams ask
          </h2>
          <div className="mt-8">
            <HealthcareFaq items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="healthcare-next">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 id="healthcare-next" className="display text-2xl font-semibold tracking-tight">
            Read the product behind the network
          </h2>
          <div className="mt-6">
            <Related
              items={[
                {
                  href: "/referral-management-software",
                  label: "Referral management software",
                  body: "Status the referring doctor can see.",
                },
                {
                  href: "/blog/clinic-referral-portal-vs-whatsapp",
                  label: "Clinic portal vs WhatsApp",
                  body: "Status without calling the desk.",
                },
                {
                  href: "/product/field",
                  label: "Field tracking",
                  body: "PRO check-in, notes, and TADA.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand
        id="healthcare-final"
        title="Build a stronger referral network. Measure every field effort."
        body="Bring your referral doctors, PRO visits, patient referrals and outreach workflows into one connected system."
        actions={
          <div className="flex flex-col items-start gap-3">
            <HealthcareLink
              href={startHref("final")}
              event="healthcare_hero_trial_click"
              params={{ cta_location: "final" }}
              className={`${primary} ${healthcareFocus}`}
            >
              Start your free trial
            </HealthcareLink>
            <HealthcareLink
              href="/interested?industry=healthcare"
              event="healthcare_contact_click"
              params={{ cta_location: "final" }}
              className={`text-sm text-cream/80 underline-offset-4 hover:text-cream hover:underline ${healthcareFocus}`}
            >
              Talk to our team
            </HealthcareLink>
            <p className="text-sm text-cream/70">
              {trialDays} days free · No credit card · No sales call
            </p>
          </div>
        }
      />
      <HealthcareStickyCta label="Start your free trial" />
    </>
  );
}
