import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "kol-dsa-referral-loops",
  title: "Managing referrals and field teams in medtech and fintech",
  date: "2026-10-10",
  updated: POST_UPDATED,
  category: "Industries",
  excerpt:
    "Learn how medtech and fintech teams can track KOL and DSA referrals, manage field visits, and record each sale or policy as a conversion, while contracts and premiums stay in their core systems.",
  hero: {
    src: "/blog/kol-agent-introductions.jpg",
    alt: "A medical device representative talking with a senior doctor outside a diagnostics centre, while a loan agent meets a shopkeeper nearby.",
    width: 1280,
    height: 640,
  },
  body: [
    {
      type: "p",
      text: "KOL visits and DSA beats are the same loop with different nouns. Medtech field teams visit key opinion leaders and hospital departments. Fintech and insurance teams run DSA and agent beats. One side talks about a device contract. The other talks about a policy or a loan that has to stay current. The leak is identical: the introduction lives in WhatsApp, the visit lives in a GPS app, and the contract or the policy lives in billing.",
    },
    {
      type: "h2",
      text: "The nouns change. The three memories do not",
    },
    {
      type: "p",
      text: "A medtech rep leaves a department with a verbal yes and a photo of a visitor book. A DSA sends a borrower or a policyholder from a branch and follows up in a group. Billing creates a contract or a premium schedule with no memory of who opened the door. By the time a manager asks what happened to that introduction, each system has a partial answer and none of them join.",
    },
    {
      type: "p",
      text: "Teams then buy a tool for the noun they say out loud. Medtech buys a CRM for hospital accounts. A lender buys a loan origination screen. An insurer buys a policy admin view. Each of those can be the right system for its own job. None of them, by default, show the sender what happened to the introduction. That missing screen is why the loop looks like three industries and behaves like one.",
    },
    {
      type: "h2",
      text: "Status the sender can see is the product",
    },
    {
      type: "p",
      text: "A KOL who sends a contact wants to know what happened to them, not whether your rep’s pin was inside a geofence. A DSA who sent a borrower or a policyholder wants to know whether they came in. [Referral management](/product/referrals) is that status, on the sender’s own login: pending, arrived, or stopped with a reason. Your team records the sale itself as a conversion. The same mobile number cannot be referred twice.",
    },
    {
      type: "ul",
      items: [
        "A login at app.syclops.in for the KOL or the DSA. They are not a paid field seat.",
        "A conversion is a sale or an issued policy, recorded with the quoted and the final amount, not a meeting that felt promising.",
        "Each follow-up call keeps its outcome, such as spoke, agreed to visit, or not interested, so the next step has an owner.",
        "The same mobile number cannot be referred twice, so two agents cannot claim one customer.",
        "Different spellings of a referrer’s name can be merged into one person.",
      ],
    },
    {
      type: "p",
      text: "A conversion has to mean more in these motions than in a casual member intro. A device can be installed and returned. A policy can be booked and cancelled inside the free-look period. Paying on the rumour of a meeting is how incentive plans teach people to inflate intros. Record the conversion when the sale or the policy is real, and mark it cancelled if it falls through. If you pay incentives, pay from that record. Syclops does not calculate or pay them.",
    },
    {
      type: "h2",
      text: "The field day stays first-class",
    },
    {
      type: "p",
      text: "Check in at the hospital or on the agent’s patch. TA/DA comes from the road distance through the working day, not from a morning pin and an evening pin. When an account needs a follow-up, plan a visit for the person who owns it. Check who referred the account first. They are often the only relationship the account still answers.",
    },
    {
      type: "p",
      text: "Syclops is not an FMCG distributor system, not a hospital information system, and not a core policy admin system. It sits beside those tools for origin and the next visit. On the [medtech](/industries/medtech) side, that is KOL visits, referrals, and each sale. On the [fintech](/industries/fintech) side, that is agent visits, referrals, and each policy or loan issued. Contracts, premiums, the clinical chart, and the core policy record stay where your compliance team already put them.",
    },
    {
      type: "h2",
      text: "Different nouns. Same steps",
    },
    {
      type: "p",
      text: "Medtech and fintech teams get the same workspace. A “KOL” and a “DSA” do not need two products. They need the same steps: a visit, a referral with a sender, and a conversion with an owner. Some screens still use hospital words, such as doctors and patients, because Syclops was built for hospitals first. Referrers still get their own login. They are still not paid seats. Field staff are. That split keeps a hospital professor and a neighbourhood agent out of your seat count while the people who walk the day stay on it.",
    },
    {
      type: "p",
      text: "Channel sales hits the same wall with a dealer instead of a KOL. [A channel partner login is not a CRM source field](/blog/channel-partner-portal-not-crm-source-field) is that version of the argument. If your team is still running three partial memories for one introduction, create the workspace, upload your team and areas, and stop translating the same leak into a new noun every time the industry changes.",
    },
    {
      type: "p",
      text: "Start with the field day you already run this week. A hospital list or an agent list, and the people who send you accounts. Give each of them a login. Leave the core system alone. The test after a month is dull and sufficient: the sender can see status, and every follow-up call has an outcome and a name. If both are true, the nouns were never the hard part.",
    },
  ],
  faqs: [
    {
      q: "Do KOLs or DSAs need a paid seat?",
      a: "No. They log in at app.syclops.in to refer and see status. Paid seats are the field people who check in, log the visit, and make the follow-up calls.",
    },
    {
      q: "Will this replace our policy admin system or HIS?",
      a: "No. Those systems keep the contract, the chart, the policy, and the premium schedule. Syclops keeps who sent the account, the visits and calls that followed, and whether it converted.",
    },
  ],
};
