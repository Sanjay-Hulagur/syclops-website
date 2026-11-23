import type { Metadata } from "next";
import { AndroidDownload } from "@/components/android-download";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Field force mobile app for visits, referrals, and plans",
  description:
    "Download the Syclops Android app for field check-in with GPS and photos, TA/DA, plan enrollment and referrals. Staff sign in with their email and a one-time code.",
  path: "/product/mobile",
  keywords: [
    "field force mobile app",
    "GPS visit check-in app",
    "Android field app",
    "partner referral app",
  ],
});

export default function MobilePage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile app"
        title="The field day lives on the phone."
        body="Field staff, sales staff and referrers each get their own screens in one Android app. Managers work on the web."
        scene="mobile"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Mobile app", path: "/product/mobile" },
        ]}
      />
      <Section>
        <AndroidDownload />
      </Section>
      <Section eyebrow="Three kinds of user" title="Staff log the visit. Referrers send the person. The plan stays visible.">
        <Prose>
          <p>
            Field staff start their working day, check in at visits with GPS
            and photos, and see their TA/DA. Sales staff log calls and leads.
            Referrers send people and follow their status, and never share
            their location.
          </p>
          <p>
            Install the Android app from the APK on this page. Staff can use
            their own phones: location is recorded only during the working
            day. Everyone signs in with their email and a one-time code.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="Install">
        <Steps
          items={[
            { title: "Create the workspace", body: "On the web, with your email and business name." },
            { title: "Add your staff", body: "Add each person with their email, or upload a list from Excel." },
            { title: "Install the APK", body: "Staff download the Android app from this page." },
            { title: "Sign in", body: "Email and a one-time code. No company code to type." },
          ]}
        />
      </Section>
      <Section>
        <FeatureGrid
          items={[
            { title: "Field", body: "Start the day, check in at visits with GPS and photos, and see TA/DA." },
            { title: "Sales", body: "Log calls and leads, and record conversions." },
            { title: "Referrers", body: "Send referrals and follow their status. No GPS." },
            { title: "Plans", body: "Enroll customers in membership plans and record their payments." },
            { title: "Announcements", body: "Push updates to the whole team, or only to referrers." },
            { title: "Managers", body: "Reports, coverage and staff calendars on the web." },
          ]}
        />
      </Section>
      <Section eyebrow="You set">
        <Checklist
          items={[
            "Which roles use which parts of the app",
            "Who is on the field team",
            "Announcements for staff and referrers",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            {
              q: "Where is the Android app?",
              a: "Download the APK on this page. Referrers can also use your referral page in a browser.",
            },
            { q: "Can staff use their own phones?", a: "Yes. Location is recorded only during the working day." },
            { q: "Does the referrer app track location?", a: "No. Referrers send people and follow their status. They are never billed as field seats." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/guides/invite-team", label: "Team guide", body: "Staff, managers and referrers." },
            { href: "/product/field", label: "Field", body: "What the day looks like." },
            { href: "/start", label: "Start", body: "Create the workspace first." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
