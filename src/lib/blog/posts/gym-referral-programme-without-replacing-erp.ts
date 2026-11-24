import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "gym-referral-programme-without-replacing-erp",
  title: "Running a gym referral programme with existing software",
  date: "2026-10-04",
  updated: POST_UPDATED,
  category: "Referrals",
  excerpt:
    "Learn how gyms can manage member referrals, track new memberships, see which members brought a friend, and organise trainer follow-ups without replacing their current gym management software.",
  body: [
    {
      type: "p",
      text: "You can run a gym referral programme without replacing your gym ERP. Owners looking for gym referral software often get sold a second floor system: class booking, lockers, biometric attendance, GST invoices. Those are real jobs. They are not the same job as who sent this member and whether they joined. Keep the floor system. Put the loop beside it.",
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
      text: "Keep the ERP for the floor. Use Syclops for who sent them",
    },
    {
      type: "p",
      text: "[Gym referral software](/gym-referral-software) is the origin side. A member logs in at app.syclops.in on their phone with a one-time code and refers a friend. They do not need the field app, and they are not a paid seat. Each referral keeps the name of the member who sent it, and a status, such as pending or arrived, or why it stopped, such as did not visit. The class timetable does not have to move for that sentence to be true.",
    },
    {
      type: "ul",
      items: [
        "A phone browser is enough. Members do not install a second app to send a friend.",
        "The referral shows whether the friend actually came in, so you know whom to reward.",
        "The same mobile number cannot be referred twice.",
        "Different spellings of a member’s name can be merged into one person.",
        "Each membership shows its payments and who sold it, so a payment due has an owner.",
      ],
    },
    {
      type: "p",
      text: "Status is how you stop paying for joins that bounce. A friend who comes twice and disappears should not mint a free month. A friend who joins and pays should. Update the referral when the friend comes in, enrol their membership, and reward the member from that record. Syclops does not pay the reward itself, so the decision is made once, from the record, not renegotiated at the front desk each Saturday.",
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
      text: "If you are still testing whether any referral product has to do this, [how to choose referral management software](/blog/how-to-choose-referral-management-software) is the checklist. For a gym, the pass mark is short. Create a gym workspace, add your trainers and members, and give members a login. ERP for the floor. The loop for growth. The member who sent a friend can see that they joined.",
    },
    {
      type: "p",
      text: "Ask for referrals where the join actually happens: the reception desk and the member WhatsApp group, not a PDF nobody opens. The desk still creates the membership in the gym system. The referral records the sender, or the member already did from their own login. A month later you can answer who brought this person and whether they have paid, without exporting classes, lockers, or tax invoices to get there. That answer is the programme. The rest of the floor can stay where it works.",
    },
  ],
  faqs: [
    {
      q: "Do members need a paid seat to refer a friend?",
      a: "No. Members log in at app.syclops.in with a one-time code. Paid seats are trainers and managers who run the field day, not members who send someone.",
    },
    {
      q: "Do we have to move class booking and GST invoices?",
      a: "No. Leave those in the gym ERP. The referral programme needs the sender’s name, a status that shows whether the friend came in, and a trainer who follows up when a payment is due.",
    },
  ],
};
