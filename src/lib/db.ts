import sql from "mssql";

const globalForDb = globalThis as unknown as {
  websitePool?: sql.ConnectionPool;
};

function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

export async function getPool(): Promise<sql.ConnectionPool> {
  if (globalForDb.websitePool?.connected) {
    return globalForDb.websitePool;
  }

  const pool = new sql.ConnectionPool({
    server: required("DB_HOST"),
    port: Number(process.env.DB_PORT || 1433),
    database: required("DB_NAME"),
    user: required("DB_USER"),
    password: required("DB_PASSWORD"),
    options: {
      encrypt: false,
      trustServerCertificate: true,
      enableArithAbort: true,
    },
    pool: {
      min: Number(process.env.DB_POOL_MIN || 0),
      max: Number(process.env.DB_POOL_MAX || 10),
      idleTimeoutMillis: 30000,
    },
    connectionTimeout: 30000,
    requestTimeout: 30000,
  });

  globalForDb.websitePool = await pool.connect();
  return globalForDb.websitePool;
}

export { sql };
