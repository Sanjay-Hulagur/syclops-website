import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "clinic-referral-portal-vs-whatsapp",
  title: "A clinic referral portal beats a WhatsApp status call",
  date: "2026-10-13",
  updated: POST_UPDATED,
  category: "Healthcare",
  excerpt:
    "Partner clinics call the desk because status lives in a thread. A portal shows enroll vs lapse without another afternoon of “did they come?”",
  body: [
    {
      type: "p",
      text: "A clinic referral portal beats a WhatsApp status call. Every care network that grows through partner clinics learns the same afternoon ritual. The referring doctor or centre wants to know whether the patient was accepted, whether a care plan started, and whether they lapsed. The answer lives in a WhatsApp group, a billing clerk, and whoever last saw the file. The clinic calls because the thread is not a record.",
    },
    {
      type: "h2",
      text: "A chat cannot be the system of record",
    },
    {
      type: "p",
      text: "That pile-up is not a people problem. Photos of visiting cards sit next to festival forwards. Duplicate names get referred twice. A voice note from Tuesday is gone by Friday. The clinic that sent the patient has no read-only view, so they call the desk, and the desk calls the field officer, and the officer calls whoever billed the visit. Three people reconstruct one fact.",
    },
    {
      type: "p",
      text: "WhatsApp can still carry a template when status changes. Use it as a channel. Do not use it as the place enroll and lapse are decided. The comparison with [WhatsApp and Excel](/compare/whatsapp-excel) is the same in a clinic as it is in a gym: the thread feels fast because it hides the joins. The month-end question — which partner still sends patients who stay — has no answer in the chat.",
    },
    {
      type: "h2",
      text: "Status the referring clinic can open",
    },
    {
      type: "p",
      text: "Clinic referral software has to be a portal the sender can open. The states they actually ask about are simple: sent, accepted, enrolled on a 30, 60, or 90-day plan, paying, or lapsed. They do not need your field map. They need to know whether the patient they trusted you with is in care. [Referral management software](/referral-management-software) is that record, shared with the sender, without giving them a paid seat.",
    },
    {
      type: "ul",
      items: [
        "One URL for the referring clinic. They see their own patients and no one else’s.",
        "Enroll versus lapse as a status, not as a sentence someone types in a group.",
        "Rewards, if you use them, only after a qualification window. A first visit is not a payout.",
        "The same phone cannot be referred twice into the same plan.",
        "Name mismatches sit in Pending until a manager assigns them. Guessing creates a second chart of rumours.",
      ],
    },
    {
      type: "p",
      text: "Pending is the quiet control. A referred name that does not match a patient should not be forced into a reward or dropped into a chat. A manager assigns it. The referring clinic still sees that the intro was received. You stop paying for a join you cannot identify, and you stop telling the clinic you never got the patient when you did.",
    },
    {
      type: "h2",
      text: "The field officer still walks the beat",
    },
    {
      type: "p",
      text: "A portal does not retire the field officer. They check in with geo and, when you require it, a visiting-card photo. A skip is a status, not silence, so a clinic that was not covered does not look like a clinic that was fine. When a plan lapses, the officer who owns that clinic gets a task. The referrer stays on the record because the centre that sent the patient can often bring them back.",
    },
    {
      type: "p",
      text: "Syclops is not a hospital information system. Charts, outpatient billing, and pharmacy stay where they are. Origin and the next visit live here. Buying an HIS module to remember who referred a patient is how care networks end up with a clinical record and a growth leak side by side. The [healthcare](/industries/healthcare) workspace is the growth side: partner clinics, care-plan status, and the officer’s beat.",
    },
    {
      type: "h2",
      text: "Leakage is the afternoon you stop having",
    },
    {
      type: "p",
      text: "The call is a symptom. The leak is structural. A visit that never becomes a named referral, a referral that never becomes a paying plan, and a lapse that never becomes a task are three different wastes, and WhatsApp hides all three. [Referral leakage is a systems problem](/blog/referral-leakage-is-a-systems-problem) walks that loop without the clinic nouns. The fix in a care network is the same shape: one object the sender can see, and a task when the plan breaks.",
    },
    {
      type: "h2",
      text: "What the desk stops doing",
    },
    {
      type: "p",
      text: "Turn the partner portal on in Settings. Share one URL with each clinic. Let them see enroll versus lapse without another afternoon of “did they come?” Your desk keeps the hour. Your officers walk a beat that already knows which plan went quiet. The thread can notify. It does not have to remember.",
    },
    {
      type: "p",
      text: "The practical change is the phone call you no longer take. A referring centre that can see accepted, enrolled, paying, or lapsed does not need a clerk to read a file aloud. The clerk’s remaining job is the mismatch in Pending and the plan the officer should visit, not a status recital. That is a smaller afternoon, and it is the one worth staffing. The clinic stops calling because the status is already on their screen.",
    },
  ],
  faqs: [
    {
      q: "Do referring clinics need the field app?",
      a: "No. They open a portal link and see status for the patients they sent. Field officers are the paid seats who check in and take the lapse visit.",
    },
    {
      q: "Does this replace our HIS or billing software?",
      a: "No. Charts, outpatient billing, and pharmacy stay in those systems. The portal holds who referred the patient and whether the plan is enrolled, paying, or lapsed.",
    },
  ],
};
