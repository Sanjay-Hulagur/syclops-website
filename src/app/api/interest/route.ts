import { NextResponse } from "next/server";
import { apiError } from "@/lib/api-error";
import { isStartFormIndustry } from "@/lib/industries";
import { getPool, sql } from "@/lib/db";
import { sendInterestEmail } from "@/lib/mail";

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  industry?: unknown;
  businessName?: unknown;
};

function text(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max || /[\r\n]/.test(trimmed)) return null;
  return trimmed;
}

function phone(value: unknown): string | null {
  const raw = text(value, 32);
  if (!raw || !/^[+0-9()\-\s]+$/.test(raw)) return null;
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) return null;
  return raw;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return apiError("/api/interest", 400, "Invalid request.");
  }

  const name = text(body.name, 120);
  const email = text(body.email, 320)?.toLowerCase() ?? null;
  const phoneNumber = phone(body.phone);
  const industry = text(body.industry, 50);
  const businessName = text(body.businessName, 200);

  if (!name || name.length < 2) {
    return apiError("/api/interest", 400, "Enter your name.");
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return apiError("/api/interest", 400, "Enter a valid email.");
  }
  if (!phoneNumber) {
    return apiError("/api/interest", 400, "Enter a valid phone number.");
  }
  if (!industry || !isStartFormIndustry(industry)) {
    return apiError("/api/interest", 400, "Choose an industry.");
  }
  if (!businessName || businessName.length < 2) {
    return apiError("/api/interest", 400, "Enter the business name.");
  }

  try {
    const pool = await getPool();
    await pool
      .request()
      .input("name", sql.NVarChar(120), name)
      .input("email", sql.NVarChar(320), email)
      .input("phone", sql.NVarChar(32), phoneNumber)
      .input("industry", sql.NVarChar(50), industry)
      .input("businessName", sql.NVarChar(200), businessName)
      .query(`
        INSERT INTO dbo.InterestLeads (Name, Email, Phone, Industry, BusinessName)
        VALUES (@name, @email, @phone, @industry, @businessName)
      `);
  } catch (error) {
    console.error("Failed to save interest lead", error);
    return apiError("/api/interest", 500, "Could not save that. Try again.");
  }

  try {
    await sendInterestEmail({
      name,
      email,
      phone: phoneNumber,
      industry,
      businessName,
    });
  } catch (error) {
    console.error("Failed to email interest lead", error);
    return apiError("/api/interest", 500, "Saved, but the email did not send. Try again.");
  }

  return NextResponse.json({ ok: true });
}
