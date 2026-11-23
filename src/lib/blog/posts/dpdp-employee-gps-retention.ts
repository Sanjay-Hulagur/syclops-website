import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "dpdp-employee-gps-retention",
  title: "Employee GPS tracking and data privacy in India",
  date: "2026-10-15",
  updated: POST_UPDATED,
  category: "Security",
  excerpt:
    "Understand how businesses can track employee visits, manage GPS location data, control access, and decide data retention in line with India's DPDP Act.",
  hero: {
    src: "/blog/employee-gps-privacy-india.png",
    alt: "Employee GPS tracking and data privacy in India. A field officer checking a location pin, with access control and a DPDP retention clock.",
    width: 1958,
    height: 803,
  },
  body: [
    {
      type: "p",
      text: "DPDP and employee GPS meet on one question: how long do you keep the trail, and who can see it. Employee location is personal data. Indian field products that treat a live map as the product collect more than a growth loop needs, and they keep it longer than a working day justifies. The Digital Personal Data Protection Act does not require a blog badge. It does require a purpose you can say out loud, access control, and a retention period you can explain.",
    },
    {
      type: "h2",
      text: "Purpose is a working day, not a live map",
    },
    {
      type: "p",
      text: "Collect a pin because a visit, a referral, or a payment due needed evidence of a field day. Check-in starts that day. Check-out ends it. Managers can see location for the working day they are responsible for. History is the route, not a CCTV feed you scrub through on a Sunday. Partners never see GPS. Field staff see their own day unless you make them a manager.",
    },
    {
      type: "p",
      text: "A forever trail fails the purpose test even when the map looks impressive. If the business question is “did this clinic get a visit,” you do not need last month’s evening coordinates. [Field tracking](/product/field) is built around that boundary: location while the day is open, a route and a distance when the day closes, and nothing recorded after check-out.",
    },
    {
      type: "h2",
      text: "Retention has to be a number you can point at",
    },
    {
      type: "p",
      text: "“We keep it until someone asks” is not a retention policy. A period you can write down is. Agree it before rollout, put it in your employee notice, and ask your vendor to confirm it in writing. At Syclops, location is recorded only during the working day, and if your IT team needs our hosting and retention details in writing, the [security](/security) page says where to ask. TA/DA is worked out from the day’s distance, so finance needs the distance and the amount, not a replay of every coordinate.",
    },
    {
      type: "ul",
      items: [
        "Check-in starts collection. Check-out ends it. There is no trail on a day the person did not start.",
        "Partners and referrers never see GPS. The status of their referrals is a different screen.",
        "Field staff see their own day. Seeing other people’s routes comes with the manager role, not by default.",
        "Each workspace is kept apart from every other, and every role sees only its own work.",
        "Requests to find, export, or delete a person’s records go to our support team, who help you complete them.",
      ],
    },
    {
      type: "p",
      text: "Who can see location is a role decision. Make the manager role an explicit choice for the people who need it, and review that list when someone changes jobs. Photos on a visit are proof of work for that day. They are not a reason to store a face and a pin forever.",
    },
    {
      type: "h2",
      text: "What we will not print on a badge",
    },
    {
      type: "p",
      text: "We do not publish SOC 2 or ISO badges on this site. Multi-tenant isolation, TLS, and role-based access are in the product. If a customer needs a questionnaire, they create a workspace and ask. A logo on a marketing page does not answer when the GPS trail stops.",
    },
    {
      type: "p",
      text: "The [security](/security) page is the short version of those controls. The [privacy](/privacy) page says what is processed and how a person asks for their data to be exported or deleted. Read both before you buy field software that cannot name a retention period. If the vendor’s answer is “the map is the product,” you already know the purpose is wider than the job.",
    },
    {
      type: "h2",
      text: "Privacy and the growth loop are the same design",
    },
    {
      type: "p",
      text: "Rank staff by paying outcomes, not by kilometres. Kilometres are a cost. A pin with no named intro and no paid plan is not a performance system, and it is a weak reason to keep location. Collect the point because the visit needed it. Keep it only as long as your stated purpose needs. The argument is the same one in [GPS is not a growth system](/blog/gps-is-not-a-growth-system): the map answers where someone was, not whether the loop held.",
    },
    {
      type: "p",
      text: "TA/DA is worked out from the road distance between check-in and check-out, using the allowance you set. Statutory attendance can stay in HR. You do not need a second, always-on location product to pay a field day.",
    },
    {
      type: "h2",
      text: "A buyer’s question that fits on one line",
    },
    {
      type: "p",
      text: "Ask the vendor when the trail stops, who can see it while it exists, and where a person requests deletion. If those three answers are specific — a working day, named roles, and a person who handles requests — you can have a field day and a defensible purpose. If they are a slide, keep looking. Do not buy field tracking software that cannot name when the trail stops. A map you cannot switch off is a different product.",
    },
  ],
  faqs: [
    {
      q: "Is employee GPS collected all day, every day?",
      a: "No. Location is recorded between check-in and check-out on a working day. Partners never see it. Field staff see their own day unless they have the manager role.",
    },
    {
      q: "How do we get a person’s location data exported or deleted?",
      a: "Write to our support team with the request, and we will help you find, export, or delete that person’s records. If you need our hosting and retention details in writing for your IT team, ask the same way.",
    },
  ],
};
