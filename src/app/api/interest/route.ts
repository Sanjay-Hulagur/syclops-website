import { NextResponse } from "next/server";
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
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = text(body.name, 120);
  const email = text(body.email, 320)?.toLowerCase() ?? null;
  const phoneNumber = phone(body.phone);
  const industry = text(body.industry, 50);
  const businessName = text(body.businessName, 200);

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Enter your name." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email." },
      { status: 400 },
    );
  }
  if (!phoneNumber) {
    return NextResponse.json(
      { error: "Enter a valid phone number." },
      { status: 400 },
    );
  }
  if (!industry || !isStartFormIndustry(industry)) {
    return NextResponse.json(
      { error: "Choose an industry." },
      { status: 400 },
    );
  }
  if (!businessName || businessName.length < 2) {
    return NextResponse.json(
      { error: "Enter the business name." },
      { status: 400 },
    );
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
    return NextResponse.json(
      { error: "Could not save that. Try again." },
      { status: 500 },
    );
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
    return NextResponse.json(
      { error: "Saved, but the email did not send. Try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
