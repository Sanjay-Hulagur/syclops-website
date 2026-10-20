import nodemailer from "nodemailer";
import { LEGAL_EMAIL } from "@/lib/legal";

export type InterestLead = {
  name: string;
  email: string;
  phone: string;
  industry: string;
  businessName: string;
};

function smtpSecret(value: string | undefined): string {
  return (value ?? "").trim().replace(/^["']|["']$/g, "").replace(/\s+/g, "");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function industryLabel(value: string): string {
  if (value.startsWith("others:")) {
    const detail = value.slice("others:".length).trim();
    return detail ? `Others — ${detail}` : "Others";
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export async function sendInterestEmail(lead: InterestLead): Promise<void> {
  const user = process.env.SMTP_USER?.trim() ?? "";
  const pass = smtpSecret(process.env.SMTP_PASS);
  if (!user || !pass) {
    throw new Error("SMTP is not configured");
  }

  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const fromAddress = process.env.SMTP_FROM?.trim() || user;
  const industry = industryLabel(lead.industry);
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Industry", industry],
    ["Business name", lead.businessName],
  ];

  const text = [
    "Someone wants to use Syclops.",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const html = `
    <div style="font-family: Georgia, serif; color: #12141a; background: #f6f1e8; padding: 24px;">
      <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #c45c26;">Interest</p>
      <h1 style="margin: 0 0 16px; font-size: 22px;">Someone wants to use Syclops.</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 520px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px 8px 0; color: #5c574e; vertical-align: top;">${escapeHtml(label)}</td>
            <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure && port === 587,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `Syclops <${fromAddress}>`,
    to: LEGAL_EMAIL,
    replyTo: lead.email,
    subject: `Syclops interest — ${lead.businessName}`,
    text,
    html,
  });
}
