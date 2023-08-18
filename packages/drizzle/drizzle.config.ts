import type { Config } from "drizzle-kit";
import { config } from "dotenv";
config({ path: "../../.env" });

export default {
  schema: "./schema/index.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
} satisfies Config;
