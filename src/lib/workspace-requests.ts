import { getPool, sql } from "@/lib/db";

/**
 * dbo.WorkspaceRequests is the website's own log of /start signups. The
 * table predates this file and has no schema in any repo, so the extra
 * columns are added here, nullable, and a failed ALTER falls back to the
 * original three-column insert.
 */

export type WorkspaceRequestOutcome = "created" | "resent" | "pending";

export type WorkspaceRequest = {
  email: string;
  workspace: string;
  industry: string;
  signupId: string;
  outcome: WorkspaceRequestOutcome;
  workflow: string | null;
  plan: string | null;
  cta: string | null;
  visitorId: string | null;
  sessionId: string | null;
  landingPath: string | null;
  gclid: string | null;
  gbraid: string | null;
  wbraid: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
};

const COLUMNS: [name: string, type: string][] = [
  ["SignupId", "nvarchar(64)"],
  ["Outcome", "nvarchar(20)"],
  ["Workflow", "nvarchar(40)"],
  ["PlanChoice", "nvarchar(20)"],
  ["Cta", "nvarchar(60)"],
  ["VisitorId", "uniqueidentifier"],
  ["SessionId", "uniqueidentifier"],
  ["LandingPath", "nvarchar(300)"],
  ["Gclid", "nvarchar(200)"],
  ["Gbraid", "nvarchar(200)"],
  ["Wbraid", "nvarchar(200)"],
  ["UtmSource", "nvarchar(200)"],
  ["UtmMedium", "nvarchar(200)"],
  ["UtmCampaign", "nvarchar(200)"],
  ["UtmTerm", "nvarchar(200)"],
  ["UtmContent", "nvarchar(200)"],
];

const ADD_COLUMNS = `
  IF OBJECT_ID('dbo.WorkspaceRequests', 'U') IS NOT NULL
  BEGIN
    ${COLUMNS.map(
      ([name, type]) =>
        `IF COL_LENGTH('dbo.WorkspaceRequests', '${name}') IS NULL
         ALTER TABLE dbo.WorkspaceRequests ADD ${name} ${type} NULL;`,
    ).join("\n")}
  END
`;

let columnsReady: Promise<boolean> | null = null;

async function addColumns() {
  const pool = await getPool();
  try {
    await pool.request().query(ADD_COLUMNS);
  } catch (error) {
    // 2705: another instance added the same column a moment earlier.
    if ((error as { number?: number }).number !== 2705) throw error;
  }
  return true;
}

function ensureColumns(): Promise<boolean> {
  if (!columnsReady) {
    columnsReady = addColumns().catch((error) => {
      console.error("WorkspaceRequests columns could not be added", error);
      columnsReady = null;
      return false;
    });
  }
  return columnsReady;
}

/** True when this email already created a workspace through the website. */
export async function hasEarlierSignup(email: string): Promise<boolean> {
  const pool = await getPool();
  const withOutcome = await ensureColumns();
  const result = await pool
    .request()
    .input("email", sql.NVarChar(320), email)
    .query<{ Found: number }>(
      withOutcome
        ? `SELECT TOP 1 1 AS Found FROM dbo.WorkspaceRequests
           WHERE Email = @email AND (Outcome IS NULL OR Outcome <> 'pending')`
        : `SELECT TOP 1 1 AS Found FROM dbo.WorkspaceRequests WHERE Email = @email`,
    );
  return Boolean(result.recordset[0]);
}

async function insertLegacy(row: WorkspaceRequest) {
  const pool = await getPool();
  await pool
    .request()
    .input("email", sql.NVarChar(320), row.email)
    .input("workspaceName", sql.NVarChar(200), row.workspace)
    .input("industry", sql.NVarChar(50), row.industry)
    .query(`
      INSERT INTO dbo.WorkspaceRequests (Email, WorkspaceName, Industry)
      VALUES (@email, @workspaceName, @industry)
    `);
}

export async function saveWorkspaceRequest(row: WorkspaceRequest) {
  if (!(await ensureColumns())) {
    await insertLegacy(row);
    return;
  }
  const pool = await getPool();
  try {
    await pool
      .request()
      .input("email", sql.NVarChar(320), row.email)
      .input("workspaceName", sql.NVarChar(200), row.workspace)
      .input("industry", sql.NVarChar(50), row.industry)
      .input("signupId", sql.NVarChar(64), row.signupId)
      .input("outcome", sql.NVarChar(20), row.outcome)
      .input("workflow", sql.NVarChar(40), row.workflow)
      .input("plan", sql.NVarChar(20), row.plan)
      .input("cta", sql.NVarChar(60), row.cta)
      .input("visitorId", sql.UniqueIdentifier, row.visitorId)
      .input("sessionId", sql.UniqueIdentifier, row.sessionId)
      .input("landingPath", sql.NVarChar(300), row.landingPath)
      .input("gclid", sql.NVarChar(200), row.gclid)
      .input("gbraid", sql.NVarChar(200), row.gbraid)
      .input("wbraid", sql.NVarChar(200), row.wbraid)
      .input("utmSource", sql.NVarChar(200), row.utmSource)
      .input("utmMedium", sql.NVarChar(200), row.utmMedium)
      .input("utmCampaign", sql.NVarChar(200), row.utmCampaign)
      .input("utmTerm", sql.NVarChar(200), row.utmTerm)
      .input("utmContent", sql.NVarChar(200), row.utmContent)
      .query(`
        INSERT INTO dbo.WorkspaceRequests (
          Email, WorkspaceName, Industry, SignupId, Outcome, Workflow,
          PlanChoice, Cta, VisitorId, SessionId, LandingPath, Gclid, Gbraid,
          Wbraid, UtmSource, UtmMedium, UtmCampaign, UtmTerm, UtmContent
        )
        VALUES (
          @email, @workspaceName, @industry, @signupId, @outcome, @workflow,
          @plan, @cta, @visitorId, @sessionId, @landingPath, @gclid, @gbraid,
          @wbraid, @utmSource, @utmMedium, @utmCampaign, @utmTerm, @utmContent
        )
      `);
  } catch (error) {
    // 207: a column is missing after all. Keep the signup on record anyway.
    if ((error as { number?: number }).number !== 207) throw error;
    columnsReady = null;
    await insertLegacy(row);
  }
}
