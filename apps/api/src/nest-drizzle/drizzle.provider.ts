import { FactoryProvider, Logger } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { Pool } from "pg";
import { ENV } from "../main";
import { drizzle } from "drizzle-orm/node-postgres";

export const DrizzleProvider: FactoryProvider = {
  provide: DRIZZLE_ORM,
  useFactory: async () => {
    Logger.debug("Connecting to database....");

    const pool = new Pool({
      connectionString: ENV.DB_URL,
    });

    await pool.connect();
    Logger.debug("Connected to database.");
    return drizzle(pool);
  },
};
