import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "gym-referral-programme-without-replacing-erp",
  title: "Running a gym referral programme with existing software",
  date: "2026-10-04",
  updated: POST_UPDATED,
  category: "Referrals",
  excerpt:
    "Learn how gyms can manage member referrals, track new memberships, reward existing members, and organise trainer follow-ups without replacing their current gym management software.",
  hero: {
    src: "/blog/gym-referral-programme.png",
    alt: "Running a gym referral programme with existing software. A member sharing a referral at the desk, with rewards and trainer follow-ups.",
    width: 1958,
    height: 803,
  },
  body: [
    {
      type: "p",
      text: "You can run a gym referral programme without replacing your gym ERP. Owners looking for gym referral software often get sold a second floor system: class booking, lockers, biometric attendance, GST invoices. Those are real jobs. They are not the same job as who sent this member, whether they joined, and what the member who sent them is owed. Keep the floor system. Put the loop beside it.",
    },
    {
      type: "h2",
      text: "Member-get-member fails in three familiar places",
    },
    {
      type: "p",
      text: "The friend joins at the desk and nobody records the sender. The reward is promised before anyone checks that the membership started. A payment that is due becomes an SMS from billing, not a conversation with the trainer who sold the plan. Whiteboards and WhatsApp groups hide all three. The ERP still prints a correct tax invoice for a member it thinks arrived from nowhere.",
    },
    {
      type: "p",
      text: "That last point is why finance and the front desk argue. Finance sees a clean sale. The trainer knows a member brought a friend and was promised a free month. The promise lives in a chat. When you [compare gym management software](/compare/gym-software) with a referral record, you are not choosing which one bills GST. You are choosing whether the name of the sender survives the invoice.",
    },
    {
      type: "h2",
      text: "Keep the ERP for the floor. Use a referral page for origin",
    },
    {
      type: "p",
      text: "[Gym referral software](/gym-referral-software) is the origin side. A member shares your referral page link, which our team sets up with your gym’s name. They do not need the field app, and they are not a paid seat. Each referral keeps the name of the member who sent it, and a status: sent, joined, or lost with a reason. The class timetable does not have to move for that sentence to be true.",
    },
    {
      type: "ul",
      items: [
        "A link is enough. Members do not install a second app to send a friend.",
        "The reward is recorded on the referral, and paid only after someone approves it.",
        "A second open referral for the same mobile number is blocked.",
        "Different spellings of a member’s name can be linked to one person.",
        "Each membership shows its payments and who sold it, so a payment due has an owner.",
      ],
    },
    {
      type: "p",
      text: "Approval is how you stop paying for joins that bounce. A friend who comes twice and disappears should not mint a free month. A friend who joins and pays should. Payouts move from pending to approved to paid, so the decision is made once, by a manager, not renegotiated at the front desk each Saturday.",
    },
    {
      type: "h2",
      text: "Trainers are field seats. The door stays in the gym system",
    },
    {
      type: "p",
      text: "Trainers who travel between centres, log PT intros, or follow up a payment due are field seats. They check in at the club with GPS. TA/DA applies if they actually move. Floor punch-in, biometric door attendance, and class occupancy stay in the gym software. Syclops does not claim those jobs, and a referral programme does not need them.",
    },
    {
      type: "p",
      text: "Multi-centre chains set up each centre as a region. You do not migrate the timetable to get a programme that works in more than one building. A member in one club can still be the sender for a friend who joins another, because the referral keeps the sender’s name. The [gyms](/industries/gyms) page is that split in industry language: trainer visits, referrals, and memberships on one side, the floor system left alone.",
    },
    {
      type: "h2",
      text: "What you should refuse to migrate",
    },
    {
      type: "p",
      text: "Refuse a project plan that starts with moving class schedules, locker maps, and GST invoice series. Those migrations fail in public, and they are unrelated to whether a member can see that their friend joined. If a vendor can only run referrals by becoming your system of record for the floor, you are buying a replacement, not a programme. Say so early.",
    },
    {
      type: "p",
      text: "If you are still testing whether any referral product has to do this, [how to choose referral management software](/blog/how-to-choose-referral-management-software) is the checklist. For a gym, the pass mark is short. Create a gym workspace, add your trainers, and get your referral page from our team. ERP for the floor. The loop for growth. The member who sent a friend can see that they joined.",
    },
    {
      type: "p",
      text: "Put the link where the join actually happens: the reception desk and the member WhatsApp group, not a PDF nobody opens. The desk still creates the membership in the gym system. The referral records the sender, or the member’s link already did. A month later you can answer who brought this person and whether they have paid, without exporting classes, lockers, or tax invoices to get there. That answer is the programme. The rest of the floor can stay where it works.",
    },
  ],
  faqs: [
    {
      q: "Do members need a paid seat to refer a friend?",
      a: "No. Your referral page link is enough. Paid seats are trainers and managers who run the field day, not members who send someone.",
    },
    {
      q: "Do we have to move class booking and GST invoices?",
      a: "No. Leave those in the gym ERP. The referral programme needs the sender’s name, a reward you approve, and a trainer who follows up when a payment is due.",
    },
  ],
};
