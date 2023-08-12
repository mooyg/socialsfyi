import { FactoryProvider, Logger } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "../db/pool";

export const DrizzleProvider: FactoryProvider = {
  provide: DRIZZLE_ORM,
  useFactory: async () => {
    Logger.debug("Connecting to database....");
    await pool.connect();

    Logger.debug("Connected to database.");
    return drizzle(pool);
  },
};
