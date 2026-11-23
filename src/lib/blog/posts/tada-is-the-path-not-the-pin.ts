import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "tada-is-the-path-not-the-pin",
  title: "Calculating TADA for field employees",
  date: "2026-10-06",
  updated: POST_UPDATED,
  category: "Field",
  excerpt:
    "Learn how businesses can track employee travel, calculate the actual distance covered, and work out TA/DA from field visits using Syclops.",
  hero: {
    src: "/blog/calculating-tada-field-employees.png",
    alt: "Calculating TADA for field employees. A field officer's route from clinic to hospital, with distance, rate, and a claim to approve.",
    width: 1958,
    height: 803,
  },
  body: [
    {
      type: "p",
      text: "TADA should be the path you travelled, not a pin-to-pin guess. Field travel allowance in India is still often two GPS points and a multiplier. The claim looks clean in Excel. It is wrong the moment the day is not a straight line: a skipped clinic, a second campus, a member who needed a return visit about a payment. Morning pin to evening pin pays the chord. The person travelled the arc.",
    },
    {
      type: "h2",
      text: "Pin-to-pin starts the wrong argument",
    },
    {
      type: "p",
      text: "Staff fight kilometres. Managers fight inflation. Nobody asks whether the day created a named introduction or saved a plan. You can pay a larger TADA sheet and still leak referrals, because the sheet never sat next to the visits. The distance becomes the job. The account becomes a story told afterwards, if anyone remembers it.",
    },
    {
      type: "p",
      text: "A straight-line claim also punishes the honest day. The rep who returned to a clinic that was closed in the morning, then crossed town about a payment due, looks expensive next to the rep who stamped twice and sat still. If your only control is the distance between two stamps, you will pay the second rep more often. [GPS-only trackers](/compare/gps-trackers) are good at that comparison. They are bad at the one that matters.",
    },
    {
      type: "h2",
      text: "Distance is the road between the day’s points",
    },
    {
      type: "p",
      text: "Treat TADA as the path. The working day starts when the person checks in, and location is recorded while the day is open. Syclops measures the day by road through those points, in order, and falls back to the straight lines between them only if a road route is not available. Checking out ends the day. [TADA software](/tada-software) then turns that distance into TA/DA, using the allowance you set for each distance range, plus the daily allowance. The software does not replace your judgement. It replaces the guess.",
    },
    {
      type: "ul",
      items: [
        "Checking in opens the day. Without it, there is no route and no TA/DA.",
        "Each visit has its own check-in, so a kilometre has a reason.",
        "Checking out ends the day. Location is not recorded after that.",
        "Allowance amounts are set per distance range in the admin console. TA/DA follows them.",
        "Staff see their daily and monthly TA/DA in the app, so the number is not a surprise at month end.",
      ],
    },
    {
      type: "p",
      text: "Outliers matter. A phone can drift, or a point can jump across the city. Syclops drops location points that land far away from the rest of the day before it adds up the distance. A manager can still look at the visits behind a number and ask about it. The point of the path is a fair number that someone can question, not a number nobody is allowed to see.",
    },
    {
      type: "h2",
      text: "TADA is not attendance and not a live map",
    },
    {
      type: "p",
      text: "TADA software is not payroll punch-in and not a live CCTV map. Statutory attendance can stay in HR. Partners never see GPS. Location is recorded only during the working day. Rank people by paying outcomes. Kilometres are a cost, not a scoreboard. A long route that saved no plan is an expensive day, even when every point is real.",
    },
    {
      type: "p",
      text: "[Field tracking](/product/field) is the day those points belong to. Check-in, the visits, check-out. If you already bought a GPS-only tracker, it will keep proving pins. Give each person a visit plan for the week, so the next day has accounts on it, not only a route. Then mileage has somewhere to sit besides a map.",
    },
    {
      type: "h2",
      text: "Next to the visits",
    },
    {
      type: "p",
      text: "The useful TADA sheet can be read next to the visits that produced it. A manager sees the clinics, the campuses, or the members, then the distance, then the amount. They do not export a map, export a CRM, and add the two in a workbook. TA/DA, visit, and sales reports export to Excel when finance needs them. The cost of the kilometre and the outcome of the kilometre are finally in one place.",
    },
    {
      type: "p",
      text: "If the map has become the thing you manage, read [GPS is not a growth system](/blog/gps-is-not-a-growth-system) before you buy another layer of playback. Set the allowance for each distance range. Add your field staff. TA/DA adds itself up from the working day. That is field TADA in service of the loop — not another WhatsApp photo of an odometer.",
    },
    {
      type: "p",
      text: "Look at one real day before you argue about the amounts. The visits, the path, the distance, the TA/DA. If the number can be explained without opening a second map and a chat full of odometer photos, it is ready for finance. If it cannot, you are still paying a guess. The path is the claim. The visit is why the path was worth travelling. Pay the line the person travelled, then ask whether the day saved a plan. Distance without that question is only a number.",
    },
  ],
  faqs: [
    {
      q: "Does Syclops approve TA/DA for us?",
      a: "No. Syclops works out TA/DA from the distance and the allowance amounts you set. Your managers and finance team decide how to review and pay it.",
    },
    {
      q: "Can partners see the route?",
      a: "No. Partners see referral status. GPS is recorded only during the working day, and field staff see their own day.",
    },
  ],
};
