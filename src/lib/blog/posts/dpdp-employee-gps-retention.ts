import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "dpdp-employee-gps-retention",
  title: "DPDP and employee GPS: retention is a setting, not a forever trail",
  date: "2026-10-15",
  updated: POST_UPDATED,
  category: "Security",
  excerpt:
    "Field GPS in India has to be purpose-limited. Working-day check-in, checkout that ends the trail, and retention you can actually change.",
  body: [
    {
      type: "p",
      text: "DPDP and employee GPS meet on one question: how long do you keep the trail, and who can see it. Employee location is personal data. Indian field products that treat a live map as the product collect more than a growth loop needs, and they keep it longer than a working day justifies. The Digital Personal Data Protection Act does not require a blog badge. It does require a purpose you can say out loud, access control, and a retention you can actually change.",
    },
    {
      type: "h2",
      text: "Purpose is a working day, not a live map",
    },
    {
      type: "p",
      text: "Collect a pin because a visit, a referral, or an at-risk plan needed evidence of a field day. Check-in starts that day. Checkout ends it. Managers can see location on the working day they are responsible for. History is the route, not a CCTV feed you scrub through on a Sunday. Partners never see GPS. Field seats see their own day unless you grant a manager role.",
    },
    {
      type: "p",
      text: "A forever trail fails the purpose test even when the map looks impressive. If the business question is “did this clinic get a visit,” you do not need last month’s evening coordinates after the route has been approved. [Field tracking](/product/field) is built around that boundary: geo while the day is open, a route when the day closes, and a setting for how long the points remain.",
    },
    {
      type: "h2",
      text: "Retention has to be a setting a manager can point at",
    },
    {
      type: "p",
      text: "Retention days for GPS points live in Settings, next to the other controls that decide how personal data behaves. “We keep it until someone asks” is not a setting. A number of days is. When that clock runs out, the points go. TADA can still record the approved distance from the path without keeping a replay of every coordinate that produced it.",
    },
    {
      type: "ul",
      items: [
        "Check-in starts collection. Checkout ends it. There is no trail on a day the person did not open.",
        "Partners and referrers never see GPS. Status of their intro is a different screen.",
        "Field seats see their own day. A manager role is an explicit grant, not the default.",
        "Retention days are editable. Export of personal data is a role, not a shared login.",
        "Access and deletion requests are handled in the product, not in a mailbox you hope someone reads.",
      ],
    },
    {
      type: "p",
      text: "Who can export personal data is a role. Invite expiry and session length sit on the same security screen, because a stale invite is also a way location history walks out of the company. Mock-location flags and an optional photo are proof of work for that day. They are not a reason to store a face and a pin forever.",
    },
    {
      type: "h2",
      text: "What we will not print on a badge",
    },
    {
      type: "p",
      text: "We do not publish SOC 2 or ISO badges on this site. Multi-tenant isolation, TLS, role-based access, and an India hosting region picker on the Scale plan are in the product. If a customer needs a questionnaire, they create a workspace and ask. A logo on a marketing page does not answer when the GPS trail stops.",
    },
    {
      type: "p",
      text: "The [security](/security) page is the short version of those controls. The [privacy](/privacy) page says what is processed and where a person exports or deletes it. Read both before you buy field software that cannot name a retention period. If the vendor’s answer is “the map is the product,” you already know the purpose is wider than the job.",
    },
    {
      type: "h2",
      text: "Privacy and the growth loop are the same design",
    },
    {
      type: "p",
      text: "Rank staff by paying outcomes, not by kilometres. Kilometres are a cost. A pin with no named intro and no plan that still pays is not a performance system, and it is a weak reason to keep location. Collect the point because the visit needed it. Delete it on the schedule you set. The argument is the same one in [GPS is not a growth system](/blog/gps-is-not-a-growth-system): the map answers where someone was, not whether the loop held.",
    },
    {
      type: "p",
      text: "TADA still writes from the path between check-in and checkout. Managers approve the sheet against a rate card. Statutory attendance can stay in HR. You do not need a second, always-on location product to pay a field day, and you do not need to keep the coordinates after the sheet is approved and the retention window has closed.",
    },
    {
      type: "h2",
      text: "A buyer’s question that fits on one line",
    },
    {
      type: "p",
      text: "Ask the vendor when the trail stops, who can see it while it exists, and where a person requests deletion. If those three answers are a settings screen, you can have a field day and a defensible purpose. If they are a slide, keep looking. Do not buy field tracking software that cannot name when the trail stops. A retention number you can edit is the whole requirement. A map you cannot switch off is a different product.",
    },
  ],
  faqs: [
    {
      q: "Is employee GPS collected all day, every day?",
      a: "No. Collection runs between check-in and checkout on a working day. Partners never see it. Field seats see their own day unless a manager role is granted.",
    },
    {
      q: "Where do we change how long GPS points are kept?",
      a: "Retention days are a setting under Security. Data access and deletion sit under Data. Both are product screens, not a promise in a mailbox.",
    },
  ],
};
