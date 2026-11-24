import type { Metadata } from "next";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Membership and subscription plan software for field teams",
  description:
    "Sell membership plans from the phone. Enroll families with a one-time code and ID proof, record cash and UPI payments or take them through Razorpay, and see who has a payment due.",
  path: "/product/subscriptions",
  keywords: [
    "subscription management software",
    "membership plan software",
    "membership payment tracking",
    "Razorpay memberships",
    "family plan enrollment app",
  ],
});

export default function SubscriptionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Subscription management"
        title="Sell membership plans from the phone."
        body="Staff enroll a customer on the spot, record the payment, and every plan keeps the name of whoever sold it."
        scene="subscription"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          { name: "Subscriptions", path: "/product/subscriptions" },
        ]}
      />
      <Section eyebrow="Why it is on the phone" title="Most plans are still sold in person.">
        <Prose>
          <p>
            Family health plans, gym memberships and fee plans are often sold
            at a camp, a front desk or someone’s door. Syclops puts the whole
            enrollment on the phone, so nothing waits for someone to type it
            up later.
          </p>
          <p>
            Staff verify the customer’s phone number with a one-time code, add
            family members and an ID proof, and record the payment. The
            enrollment then shows its status and everything paid against it.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="How a plan works">
        <Steps
          items={[
            { title: "Send us your plans", body: "Name, price, duration and tier, how many members it covers, and the price for each extra member. Our team adds them to your workspace." },
            { title: "Enroll on the phone", body: "Verify the number, add members and an ID proof, then record the payment." },
            { title: "Keep track", body: "Your team sets each enrollment to Active, Payment Due, Inactive or Banned, and it keeps who enrolled it." },
          ]}
        />
      </Section>
      <Section eyebrow="In the product">
        <FeatureGrid
          items={[
            { title: "Family plans", body: "Each plan covers a set number of members, with a price for each extra member." },
            { title: "Plan features", body: "Staff see everything a plan includes before they enroll someone." },
            { title: "Cash, UPI or online", body: "Record cash or UPI with a reference and a proof photo, or take the payment online through Razorpay." },
            { title: "Part payments", body: "Record the cash amount collected, even when it is only part of the price." },
            { title: "A status for every plan", body: "Active, Payment Due, Inactive or Banned, so you know whom to follow up." },
            { title: "Enrollment reports", body: "Totals, trends, the busiest times of day and enrollments by staff member." },
          ]}
        />
      </Section>
      <Section eyebrow="You decide">
        <Checklist
          items={[
            "Plan names, prices and durations",
            "Members per plan and the extra-member price",
            "What each plan includes",
            "Which roles can enroll customers",
          ]}
        />
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            { q: "Can we collect cash?", a: "Yes. Staff record cash or UPI payments on the phone, including a part payment in cash, and each payment stays on the enrollment." },
            { q: "Can customers pay in instalments?", a: "Not today. EMI is only for your own staff: an enrollment marked as staff can be given a discount and split into 12 monthly EMIs in the admin dashboard." },
            { q: "Does Syclops chase missed payments for us?", a: "No. Your team marks an enrollment as Payment Due, so everyone knows whom to call or visit." },
            { q: "Which payment gateway?", a: "Razorpay for online payments. We set it up with you." },
            { q: "Does this replace our billing software?", a: "No. Syclops keeps the plan, the payments against it and who sold it. Keep your accounting tool for invoices and tax." },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/blog/razorpay-memberships-field-dunning", label: "Failed payments, then a visit", body: "When a person should follow up." },
            { href: "/product/referrals", label: "Referral management", body: "Who sent each customer." },
            { href: "/product/analytics", label: "Analytics", body: "Enrollments by plan and staff." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
