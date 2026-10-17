import { NextResponse } from "next/server";
import { isStartFormIndustry } from "@/lib/industries";
import { getPool, sql } from "@/lib/db";

type Payload = {
  email?: unknown;
  workspace?: unknown;
  industry?: unknown;
};

function text(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = text(body.email, 320)?.toLowerCase() ?? null;
  const workspace = text(body.workspace, 200);
  const industry = text(body.industry, 50);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid work email." },
      { status: 400 },
    );
  }
  if (!workspace) {
    return NextResponse.json(
      { error: "Enter a workspace name." },
      { status: 400 },
    );
  }
  if (!industry || !isStartFormIndustry(industry)) {
    return NextResponse.json(
      { error: "Choose an industry." },
      { status: 400 },
    );
  }

  try {
    const pool = await getPool();
    await pool
      .request()
      .input("email", sql.NVarChar(320), email)
      .input("workspaceName", sql.NVarChar(200), workspace)
      .input("industry", sql.NVarChar(50), industry)
      .query(`
        INSERT INTO dbo.WorkspaceRequests (Email, WorkspaceName, Industry)
        VALUES (@email, @workspaceName, @industry)
      `);
  } catch (error) {
    console.error("Failed to save workspace request", error);
    return NextResponse.json(
      { error: "Could not save that request. Try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
