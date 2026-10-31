import { NextResponse } from "next/server";
import { apiError } from "@/lib/api-error";
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
    return apiError("/api/start", 400, "Invalid request.");
  }

  const email = text(body.email, 320)?.toLowerCase() ?? null;
  const workspace = text(body.workspace, 200);
  const industry = text(body.industry, 50);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return apiError("/api/start", 400, "Enter a valid work email.");
  }
  if (!workspace) {
    return apiError("/api/start", 400, "Enter a workspace name.");
  }
  if (!industry || !isStartFormIndustry(industry)) {
    return apiError("/api/start", 400, "Choose an industry.");
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
    return apiError("/api/start", 500, "Could not save that request. Try again.");
  }

  return NextResponse.json({ ok: true });
}
