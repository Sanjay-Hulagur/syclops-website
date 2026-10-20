export const LEGAL_EMAIL = "syclops.team@gmail.com";
export const LEGAL_UPDATED = "20 October 2026";

export type LegalId = "privacy" | "terms" | "cookies" | "refund";

export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] };

export type LegalSection = {
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  id: LegalId;
  title: string;
  summary: string;
  intro: string[];
  sections: LegalSection[];
};

export const legalDocs: Record<LegalId, LegalDocument> = {
  privacy: {
    id: "privacy",
    title: "Privacy policy",
    summary:
      "How Syclops processes organization, staff, referrer, and subscriber data for field visits, referral status, and subscription billing.",
    intro: [
      "This Privacy policy explains how Syclops (“Syclops”, “we”, “us”) collects, uses, and shares information when you use the Syclops website, the Syclops web application, and the Syclops mobile application (together, the “Platform”).",
      "It applies to the organization that creates a workspace, to staff and managers who use it, to referral partners, and to people whose visits, referrals, or subscriptions are recorded there. It also applies to visitors of the marketing site.",
      "We do not sell personal data. The Platform is multi-tenant: one organization’s visits, plans, and billing are not visible to another organization.",
    ],
    sections: [
      {
        title: "1. Who is responsible",
        blocks: [
          {
            kind: "p",
            text: "When an organization enters data about its staff, referrers, and subscribers, that organization decides why the data is processed. Syclops processes it to provide the Platform. For the account you open with us, for billing of Syclops seats, and for visits to the marketing site, Syclops is responsible.",
          },
          {
            kind: "p",
            text: "Privacy questions and grievance requests go to syclops.team@gmail.com.",
          },
        ],
      },
      {
        title: "2. Information we process",
        blocks: [
          {
            kind: "p",
            text: "We process the following, for the purposes in the next section.",
          },
          {
            kind: "list",
            items: [
              "Account and workspace: name, email address, phone number if you provide one, role, organization, and the details used to sign you in.",
              "Field work: check-in and check-out, routes, visit notes, optional photos, travel and allowance (TADA) sheets, and the accounts those visits belong to.",
              "Location: collected for check-in, routes, and TADA while staff are on a working day, between check-in and check-out. Referral partners do not see GPS. A field seat sees their own day unless the organization grants a manager role. How long location is kept is a setting in the workspace.",
              "Referrals and subscriptions: referrer identity, referral status, plan and invoice metadata, and the records needed to show whether a referred person converted and whether a plan still pays.",
              "Keys you connect: credentials you paste for WhatsApp, Razorpay, Stripe, or Maps, stored so those connections run inside your workspace.",
              "Usage and device: IP address, device and app identifiers, browser type, pages or screens used, timestamps, and diagnostic logs.",
              "Support: the content of messages you send to syclops.team@gmail.com.",
            ],
          },
        ],
      },
      {
        title: "3. Why we process it",
        blocks: [
          {
            kind: "p",
            text: "We process this information to run field visits, referral status, and subscription billing for the workspace that turned those features on. We also use it to authenticate users, keep tenants separate, prevent abuse, complete billing for Syclops seats, and answer a message you send us.",
          },
          {
            kind: "p",
            text: "Purpose is operating the loop you turned on. We do not use this data to build advertising profiles, and we do not sell it.",
          },
        ],
      },
      {
        title: "4. Location and India’s data protection law",
        blocks: [
          {
            kind: "p",
            text: "India hosting is available on the Scale plan. The organization chooses the region in Settings → Security after upgrading. Location is limited to the working day described above. Retention is a setting the organization controls.",
          },
          {
            kind: "p",
            text: "Access, correction, and deletion of workspace records run from Settings → Data, so the organization can answer a request about data it holds. A request that is about Syclops itself, including a grievance under the Digital Personal Data Protection Act, 2023, can be sent to syclops.team@gmail.com.",
          },
        ],
      },
      {
        title: "5. Sharing",
        blocks: [
          {
            kind: "list",
            items: [
              "Inside a workspace, according to the roles that organization sets. Partners do not see GPS or another partner’s book.",
              "With the payment, maps, and messaging providers that organization connects, under the keys it supplied. Their processing follows that provider and the workspace configuration.",
              "With the infrastructure used to host the Platform.",
              "When a law requires disclosure.",
            ],
          },
          {
            kind: "p",
            text: "We do not sell personal data and we do not share it with advertisers.",
          },
        ],
      },
      {
        title: "6. Retention",
        blocks: [
          {
            kind: "p",
            text: "Workspace data stays for the life of the workspace, subject to the retention settings the organization chooses, including how long location points are kept. After a workspace ends, we keep what is needed to finish billing, honour an export, and meet legal duties, then delete or de-identify it. Export is available from Settings → Data while the workspace is open.",
          },
        ],
      },
      {
        title: "7. Security",
        blocks: [
          {
            kind: "p",
            text: "Workspaces are isolated from each other. Access is role-based. Connection secrets are stored so the integration you configured can run. No method of transmission or storage is perfectly secure. If you believe an account or a workspace has been compromised, write to syclops.team@gmail.com.",
          },
        ],
      },
      {
        title: "8. Your choices and rights",
        blocks: [
          {
            kind: "p",
            text: "Depending on applicable law, including India’s Digital Personal Data Protection Act, 2023, you may ask to access, correct, or erase personal data, or to raise a grievance. Data an organization entered is handled by that organization from Settings → Data. Requests to Syclops go to syclops.team@gmail.com. We may need to confirm that you are the person the data is about, or that you act for the workspace.",
          },
        ],
      },
      {
        title: "9. Children",
        blocks: [
          {
            kind: "p",
            text: "The Platform is for organizations and their adult users. We do not knowingly collect personal data from anyone under 18. If you believe we have, write to syclops.team@gmail.com and we will delete it.",
          },
        ],
      },
      {
        title: "10. Cookies",
        blocks: [
          {
            kind: "p",
            text: "The marketing site and the application use cookies and similar storage as described in the Cookie policy. We do not use them for advertising. Device location and photo access are permissions requested by the operating system when a feature needs them. They are described above, and they are not cookies.",
          },
        ],
      },
      {
        title: "11. Changes",
        blocks: [
          {
            kind: "p",
            text: "We may update this policy. The date at the top of this page changes when we do. The version posted on the website and in the application is the current one. If you do not agree with an update, stop using the Platform and cancel the workspace as described in the Terms and the Refund policy.",
          },
        ],
      },
      {
        title: "12. Contact",
        blocks: [
          {
            kind: "p",
            text: "Privacy, grievance, and other compliance questions: syclops.team@gmail.com.",
          },
        ],
      },
    ],
  },
  terms: {
    id: "terms",
    title: "Terms and conditions",
    summary:
      "Creating a Syclops workspace accepts these terms. Seats may not be shared. Refunds of fees paid to Syclops follow the refund policy.",
    intro: [
      "These terms govern use of the Syclops website, web application, and mobile application (together, the “Platform”). Creating a workspace, signing in, or continuing to use the Platform means you accept these terms, the Privacy policy, the Cookie policy, and the Refund policy.",
      "If you use the Platform for an organization, you confirm you can bind that organization.",
    ],
    sections: [
      {
        title: "1. The service",
        blocks: [
          {
            kind: "p",
            text: "Syclops provides field tracking, referral management, and subscription tooling as a multi-tenant cloud service. Features depend on the plan selected on the pricing page and in the workspace. Guides and in-app Settings are how the product is configured.",
          },
          {
            kind: "p",
            text: "Numbers and charts shown in marketing illustrations are examples of the interface. They are not a promise of your results.",
          },
        ],
      },
      {
        title: "2. Accounts and seats",
        blocks: [
          {
            kind: "p",
            text: "Access belongs to the organization that created the workspace. That organization is responsible for the accuracy of field logs, referrals, and subscription records its users enter, and for the people it invites.",
          },
          {
            kind: "p",
            text: "Field seats and manager seats are for one person each and may not be shared. Referrer logins are not billed as field seats. Keep sign-in details confidential. If you believe an account is compromised, write to syclops.team@gmail.com.",
          },
        ],
      },
      {
        title: "3. Customer data",
        blocks: [
          {
            kind: "p",
            text: "The organization keeps its rights in the data it submits. It grants Syclops a licence to host, process, and display that data only to provide and secure the Platform, as described in the Privacy policy. The organization is responsible for having a proper basis to upload staff, referrer, and subscriber information, including location used for check-in, routes, and TADA.",
          },
        ],
      },
      {
        title: "4. Acceptable use",
        blocks: [
          {
            kind: "p",
            text: "Do not misuse the Platform. That includes attempting to access another organization’s workspace, probing or disrupting the service, uploading unlawful content, or using location or referral data for a purpose the person was not told about. We may suspend access that threatens the Platform or other customers.",
          },
        ],
      },
      {
        title: "5. Billing",
        blocks: [
          {
            kind: "p",
            text: "Paid plans and seats are billed as shown at checkout and in Settings → Billing. An annual term may include the discount shown on the pricing page. You authorize charges through the payment method you provide for fees payable to Syclops.",
          },
          {
            kind: "p",
            text: "Fees your organization collects from its own subscribers, through payment keys it connects, are between that organization and those subscribers. This agreement does not make Syclops the seller of those subscriptions.",
          },
        ],
      },
      {
        title: "6. Cancellation and refunds",
        blocks: [
          {
            kind: "p",
            text: "You can stop future renewal in Settings → Billing. Refunds of fees paid to Syclops follow the Refund policy. A cancellation is considered only in the cases that policy describes.",
          },
          {
            kind: "p",
            text: "A free trial, when one is offered, does not require a card and has no fee to refund. The current trial length is stated on the pricing page and at signup. Referrer logins are not billed as field seats.",
          },
        ],
      },
      {
        title: "7. Third-party services",
        blocks: [
          {
            kind: "p",
            text: "WhatsApp, Razorpay, Stripe, Maps, and similar tools run when you connect them. Their terms, and the fees they charge, are theirs. Syclops is not responsible for an outage or a charge that originates with a provider you connected.",
          },
        ],
      },
      {
        title: "8. Intellectual property",
        blocks: [
          {
            kind: "p",
            text: "The Platform, its software, branding, and site content belong to Syclops or its licensors. These terms do not transfer that ownership. You may not copy the Platform or resell access except through the seats and referrer logins the product provides.",
          },
        ],
      },
      {
        title: "9. Disclaimers and liability",
        blocks: [
          {
            kind: "p",
            text: "The Platform is a cloud service for recording visits, referrals, and subscriptions. We do not warrant uninterrupted or error-free operation, or a particular business result. To the extent the law allows, Syclops is not liable for indirect or consequential loss, or for loss of profit, data, or goodwill arising from use of the Platform. Nothing in these terms limits liability that cannot legally be limited.",
          },
        ],
      },
      {
        title: "10. Suspension and end of access",
        blocks: [
          {
            kind: "p",
            text: "You may stop using the Platform and cancel as described in the Refund policy. We may suspend or end access if these terms are broken, if the law requires it, or if fees payable to Syclops remain unpaid. Export of workspace data is available from Settings → Data while the workspace is open, and as described in the Privacy policy after you leave.",
          },
        ],
      },
      {
        title: "11. Changes",
        blocks: [
          {
            kind: "p",
            text: "We may update these terms. The date at the top of this page changes when we do. The version on the website and in the application is the current one. If you do not agree with an update, cancel the workspace.",
          },
        ],
      },
      {
        title: "12. Law",
        blocks: [
          {
            kind: "p",
            text: "These terms are governed by the laws of India.",
          },
        ],
      },
      {
        title: "13. Contact",
        blocks: [
          {
            kind: "p",
            text: "Questions about these terms: syclops.team@gmail.com.",
          },
        ],
      },
    ],
  },
  cookies: {
    id: "cookies",
    title: "Cookie policy",
    summary:
      "Syclops uses essential cookies and similar storage to run the site and the application. We do not use advertising cookies.",
    intro: [
      "This Cookie policy explains how the Syclops website and application use cookies and similar storage, including local storage that keeps you signed in. It is part of the Privacy policy and applies to the same Platform.",
    ],
    sections: [
      {
        title: "1. Essential cookies",
        blocks: [
          {
            kind: "p",
            text: "We use cookies and similar storage that the Platform needs in order to work.",
          },
          {
            kind: "list",
            items: [
              "On the marketing site: security, load balancing, and remembering a choice required for the site to function.",
              "In the application: your session, authentication, and security.",
            ],
          },
          {
            kind: "p",
            text: "These are not used to advertise to you.",
          },
        ],
      },
      {
        title: "2. What we do not use",
        blocks: [
          {
            kind: "p",
            text: "We do not set advertising cookies. We do not allow third-party advertising networks to track you across other sites from Syclops.",
          },
        ],
      },
      {
        title: "3. Services you connect",
        blocks: [
          {
            kind: "p",
            text: "If a workspace opens a payment, maps, or messaging page from a provider it connected, that provider may set its own cookies under its own policy. Those cookies are controlled by that provider, not by this Cookie policy.",
          },
        ],
      },
      {
        title: "4. How to control them",
        blocks: [
          {
            kind: "p",
            text: "You can block or delete cookies in your browser. If you block essential cookies, sign-in and other parts of the Platform may stop working. Device location and photo access are requested by the operating system when a feature needs them. They are permissions, not cookies, and they are described in the Privacy policy.",
          },
        ],
      },
      {
        title: "5. Changes",
        blocks: [
          {
            kind: "p",
            text: "We may update this policy. The date at the top of this page changes when we do. The version on the website and in the application is the current one.",
          },
        ],
      },
      {
        title: "6. Contact",
        blocks: [
          {
            kind: "p",
            text: "Questions about cookies: syclops.team@gmail.com.",
          },
        ],
      },
    ],
  },
  refund: {
    id: "refund",
    title: "Refund policy",
    summary:
      "How to cancel a Syclops order and when a refund of fees paid to Syclops is considered. Approved refunds are processed in 14 days.",
    intro: [
      "This refund and cancellation policy outlines how you can cancel or seek a refund for a subscription or other fee you have paid to Syclops through the Platform. Under this policy:",
      "It covers fees paid to Syclops. It does not govern fees your organization collects from its own customers through payment keys it connects. Those charges are handled by that organization.",
    ],
    sections: [
      {
        title: "1. Cancellation policy",
        blocks: [
          {
            kind: "p",
            text: "Cancellations will only be considered if the request is made within 7 days of placing the order. An order is a new Syclops subscription, a paid seat added, or an invoice paid to Syclops.",
          },
          {
            kind: "p",
            text: "A cancellation request may not be entertained once the subscription has been activated in the workspace, seats have been assigned, or the service has otherwise been made available and use has started. At that point the order has moved past cancellation. You may still stop future renewal in Settings → Billing. The current paid period then runs to its end.",
          },
          {
            kind: "p",
            text: "Monthly seats billed in arrears are not refunded for unused days of a period that has already been worked.",
          },
          {
            kind: "p",
            text: "Send a cancellation request from Settings → Billing, or by email to syclops.team@gmail.com with the workspace name, the order date, and the fee you want cancelled.",
          },
        ],
      },
      {
        title: "2. Service not as described",
        blocks: [
          {
            kind: "p",
            text: "If the Platform is unavailable in a way that makes the paid service unusable, or what you received is not as shown on the site, report it to syclops.team@gmail.com. The request is considered once we have checked it. This should be reported within 7 days of the charge, or within 7 days of discovering the issue.",
          },
          {
            kind: "p",
            text: "Include the workspace name, the date of the order, and what failed. After looking into the complaint, we will take an appropriate decision.",
          },
        ],
      },
      {
        title: "3. Third-party products",
        blocks: [
          {
            kind: "p",
            text: "Payments, maps, messaging, and other products you connect are provided under their own terms. Complaints about those products, including a fee charged by that provider, should be referred to them. A charge that did not come from Syclops is not refunded by Syclops.",
          },
        ],
      },
      {
        title: "4. Refund processing",
        blocks: [
          {
            kind: "p",
            text: "If a refund is approved by Syclops, it will take 14 days for the refund to be processed to the original payment method.",
          },
        ],
      },
      {
        title: "5. Trials",
        blocks: [
          {
            kind: "p",
            text: "A free trial, when one is offered, does not take a card and has no fee to refund. The current length, and the wording that applies to new workspaces, is on the pricing page. Referrer logins are not billed as field seats.",
          },
        ],
      },
      {
        title: "6. Contact",
        blocks: [
          {
            kind: "p",
            text: "Contact us for refund queries by email at syclops.team@gmail.com. Include the workspace name and the order you are writing about. We reply by email.",
          },
        ],
      },
    ],
  },
};

export const legalOrder: LegalId[] = ["privacy", "terms", "cookies", "refund"];
