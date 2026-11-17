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

function backendMessage(payload: unknown, fallback: string): string {
  if (!payload || typeof payload !== "object") return fallback;
  const body = payload as { message?: unknown; error?: { message?: unknown } };
  if (typeof body.message === "string" && body.message.trim()) return body.message;
  if (typeof body.error?.message === "string" && body.error.message.trim()) {
    return body.error.message;
  }
  return fallback;
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
  if (workspace.length < 2) {
    return apiError("/api/start", 400, "Enter a workspace name.");
  }

  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";
  const secret = process.env.WORKSPACE_SIGNUP_SECRET?.trim() ?? "";
  if (!apiBase || !secret) {
    return apiError("/api/start", 500, "Workspace signup is not configured.");
  }

  let provision: Response;
  try {
    provision = await fetch(`${apiBase}/api/v1/public/workspace-signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-workspace-signup-secret": secret,
      },
      body: JSON.stringify({ email, workspace }),
      signal: AbortSignal.timeout(180_000),
    });
  } catch {
    return apiError(
      "/api/start",
      502,
      "Could not create that workspace. Try again.",
    );
  }

  const provisionBody = (await provision.json().catch(() => null)) as unknown;
  if (!provision.ok) {
    return apiError(
      "/api/start",
      provision.status === 409 ? 409 : provision.status >= 500 ? 502 : 400,
      backendMessage(provisionBody, "Could not create that workspace. Try again."),
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
    console.error("Workspace created but the request log was not saved", error);
  }

  return NextResponse.json({ ok: true });
}
