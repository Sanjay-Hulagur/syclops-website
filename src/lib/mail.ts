import dns from "node:dns";
import nodemailer from "nodemailer";
import { LEGAL_EMAIL } from "@/lib/legal";

export type InterestLead = {
  name: string;
  email: string;
  phone: string;
  industry: string;
  businessName: string;
};

function envValue(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function smtpSecret(value: string): string {
  return value.replace(/^["']|["']$/g, "").replace(/\s+/g, "");
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
  const user = envValue("SMTP_USER");
  const pass = smtpSecret(envValue("SMTP_PASS"));
  if (!user || !pass) {
    throw new Error("SMTP is not configured");
  }

  const host = envValue("SMTP_HOST") || "smtp.gmail.com";
  const port = Number(envValue("SMTP_PORT") || 587);
  const secure = envValue("SMTP_SECURE") === "true" || port === 465;
  const fromAddress = envValue("SMTP_FROM") || user;
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

  dns.setDefaultResultOrder("ipv4first");
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS: !secure && port === 587,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
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
