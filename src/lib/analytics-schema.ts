import { getPool } from "@/lib/db";

const STATEMENTS = [
  `IF OBJECT_ID('dbo.SiteVisitors', 'U') IS NULL
   CREATE TABLE dbo.SiteVisitors (
     VisitorId uniqueidentifier NOT NULL PRIMARY KEY,
     FirstSeen datetime2 NOT NULL,
     LastSeen datetime2 NOT NULL,
     FirstPath nvarchar(500) NULL,
     FirstQuery nvarchar(2000) NULL,
     FirstReferrer nvarchar(1000) NULL,
     FirstReferrerHost nvarchar(200) NULL,
     FirstUtmSource nvarchar(200) NULL,
     FirstUtmMedium nvarchar(200) NULL,
     FirstUtmCampaign nvarchar(200) NULL,
     FirstUtmTerm nvarchar(200) NULL,
     FirstUtmContent nvarchar(200) NULL,
     Country nvarchar(100) NULL,
     Region nvarchar(100) NULL,
     City nvarchar(100) NULL,
     Latitude float NULL,
     Longitude float NULL,
     LocationAccuracy float NULL,
     IpHash nvarchar(64) NULL
   )`,
  `IF OBJECT_ID('dbo.SiteSessions', 'U') IS NULL
   CREATE TABLE dbo.SiteSessions (
     SessionId uniqueidentifier NOT NULL PRIMARY KEY,
     VisitorId uniqueidentifier NOT NULL,
     StartedAt datetime2 NOT NULL,
     LandingPath nvarchar(500) NULL,
     LandingQuery nvarchar(2000) NULL,
     Referrer nvarchar(1000) NULL,
     ReferrerHost nvarchar(200) NULL,
     UtmSource nvarchar(200) NULL,
     UtmMedium nvarchar(200) NULL,
     UtmCampaign nvarchar(200) NULL,
     UtmTerm nvarchar(200) NULL,
     UtmContent nvarchar(200) NULL,
     Country nvarchar(100) NULL,
     Region nvarchar(100) NULL,
     City nvarchar(100) NULL
   )`,
  `IF OBJECT_ID('dbo.SiteEvents', 'U') IS NULL
   CREATE TABLE dbo.SiteEvents (
     Id bigint IDENTITY(1,1) NOT NULL PRIMARY KEY,
     CreatedAt datetime2 NOT NULL,
     VisitorId uniqueidentifier NULL,
     SessionId uniqueidentifier NULL,
     EventName nvarchar(40) NOT NULL,
     Path nvarchar(500) NULL,
     QueryString nvarchar(2000) NULL,
     Params nvarchar(max) NULL
   )`,
  `IF NOT EXISTS (
     SELECT 1 FROM sys.indexes
     WHERE name = 'IX_SiteEvents_CreatedAt' AND object_id = OBJECT_ID('dbo.SiteEvents')
   )
   CREATE INDEX IX_SiteEvents_CreatedAt ON dbo.SiteEvents (CreatedAt)`,
  `IF NOT EXISTS (
     SELECT 1 FROM sys.indexes
     WHERE name = 'IX_SiteEvents_Path' AND object_id = OBJECT_ID('dbo.SiteEvents')
   )
   CREATE INDEX IX_SiteEvents_Path ON dbo.SiteEvents (Path)`,
  `IF NOT EXISTS (
     SELECT 1 FROM sys.indexes
     WHERE name = 'IX_SiteEvents_VisitorId' AND object_id = OBJECT_ID('dbo.SiteEvents')
   )
   CREATE INDEX IX_SiteEvents_VisitorId ON dbo.SiteEvents (VisitorId)`,
  `IF NOT EXISTS (
     SELECT 1 FROM sys.indexes
     WHERE name = 'IX_SiteEvents_EventName' AND object_id = OBJECT_ID('dbo.SiteEvents')
   )
   CREATE INDEX IX_SiteEvents_EventName ON dbo.SiteEvents (EventName)`,
  `IF NOT EXISTS (
     SELECT 1 FROM sys.indexes
     WHERE name = 'IX_SiteSessions_StartedAt' AND object_id = OBJECT_ID('dbo.SiteSessions')
   )
   CREATE INDEX IX_SiteSessions_StartedAt ON dbo.SiteSessions (StartedAt)`,
  `IF NOT EXISTS (
     SELECT 1 FROM sys.indexes
     WHERE name = 'IX_SiteSessions_VisitorId' AND object_id = OBJECT_ID('dbo.SiteSessions')
   )
   CREATE INDEX IX_SiteSessions_VisitorId ON dbo.SiteSessions (VisitorId)`,
];

let schemaPromise: Promise<void> | null = null;

async function runSchema() {
  const pool = await getPool();
  for (const statement of STATEMENTS) {
    try {
      await pool.request().query(statement);
    } catch (error) {
      const number = (error as { number?: number }).number;
      // 2714 object already exists, 1913 index already exists.
      if (number === 2714 || number === 1913) continue;
      throw error;
    }
  }
}

export function ensureAnalyticsSchema() {
  if (!schemaPromise) {
    schemaPromise = runSchema().catch((error) => {
      schemaPromise = null;
      throw error;
    });
  }
  return schemaPromise;
}
