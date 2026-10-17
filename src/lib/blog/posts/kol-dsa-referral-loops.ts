import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "kol-dsa-referral-loops",
  title: "KOL visits and DSA beats are the same loop with different nouns",
  date: "2026-10-10",
  updated: POST_UPDATED,
  category: "Industries",
  excerpt:
    "Medtech KOLs and fintech DSAs both send someone, need status, and need a field day when the contract or policy lapses.",
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
      text: "Teams then buy a tool for the noun they say out loud. Medtech buys a CRM for hospital accounts. A lender buys a loan origination screen. An insurer buys a policy admin view. Each of those can be the right system for its own job. None of them, by default, show the sender whether the account converted and whether it still pays. That missing screen is why the loop looks like three industries and behaves like one.",
    },
    {
      type: "h2",
      text: "Status the sender can see is the product",
    },
    {
      type: "p",
      text: "A KOL who sends a department wants to know whether the account converted to a contract, not whether your rep’s pin was inside a geofence. A DSA who sent a borrower or a policyholder wants to know whether that plan still pays. [Referral management](/product/referrals) is that status: sent, accepted, converted, paying. Rewards wait on a qualification window. The same phone or email cannot be referred twice into the same plan.",
    },
    {
      type: "ul",
      items: [
        "One portal URL for the KOL or the DSA. They are not a paid field seat.",
        "Conversion means a contract or a policy, not a meeting that felt promising.",
        "A lapse writes a visit for the owner of that beat, not only an SMS from collections.",
        "Duplicate phone or email is rejected for the same plan, so two agents cannot claim one customer.",
        "Name mismatches wait in Pending until a manager assigns them.",
      ],
    },
    {
      type: "p",
      text: "The window matters more in these motions than in a casual member intro. A device can be installed and returned. A policy can be booked and cancelled inside the free-look period. Paying on the rumour of a meeting is how incentive plans teach people to inflate intros. Pay when the contract or the policy has stayed.",
    },
    {
      type: "h2",
      text: "The field day stays first-class",
    },
    {
      type: "p",
      text: "Check in at the hospital or on the agent’s patch. TADA comes from the path between check-in and checkout, not from a morning pin and an evening pin. When a device contract goes quiet or a premium lapses, write a visit for the person who owns that beat. The sender stays on the record. They are often the only relationship the account still answers.",
    },
    {
      type: "p",
      text: "Syclops is not an FMCG distributor system, not a hospital information system, and not a core policy admin system. It sits beside those tools for origin and the next visit. On the [medtech](/industries/medtech) side, that is KOL visits and device contracts. On the [fintech](/industries/fintech) side, that is agent visits and the policy or loan that still has to pay. The clinical chart and the core policy record stay where your compliance team already put them.",
    },
    {
      type: "h2",
      text: "Rename the nouns. Keep the object",
    },
    {
      type: "p",
      text: "Pick medtech or fintech at signup. Rename visit, referrer, and plan if your words differ. A “KOL” and a “DSA” do not need two products. They need labels your team will actually say, on the same record. The portal is still one URL. Referrers are still not paid seats. Field staff are. That split keeps a hospital professor and a neighbourhood agent out of your seat count while the people who walk the day stay on it.",
    },
    {
      type: "p",
      text: "Channel sales hits the same wall with a retainer instead of a device contract. [A channel partner portal is not a CRM source field](/blog/channel-partner-portal-not-crm-source-field) is that version of the argument. If your team is still running three partial memories for one introduction, create the workspace, import the beat, and stop translating the same leak into a new noun every time the industry changes.",
    },
    {
      type: "p",
      text: "Start with the beat you already run this week. A hospital list or an agent list, last-visit dates even when some are blank, and the contracts or policies that went quiet. Share the portal with the people who send accounts. Leave the core system alone. The test after a month is dull and sufficient: the sender can see status, and a lapse has a name on the visit. If both are true, the nouns were never the hard part.",
    },
  ],
  faqs: [
    {
      q: "Do KOLs or DSAs need a paid seat?",
      a: "No. They use the portal to see status. Paid seats are the field people who check in, log the visit, and take the lapse call.",
    },
    {
      q: "Will this replace our policy admin system or HIS?",
      a: "No. Those systems keep the contract, the chart, or the policy. This loop keeps who sent the account and which visit happens when it goes quiet.",
    },
  ],
};
