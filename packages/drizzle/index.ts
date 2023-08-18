import { Pool } from "pg";
import { drizzle as drizzleORM } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { config } from "dotenv";

config({
  path: "../../.env",
});

export const pool = new Pool({
  connectionString: process.env.DB_URL,
});

export const drizzle = async () => {
  await pool.connect();

  return drizzleORM(pool, {
    schema,
    logger: true,
  });
};
