import { FactoryProvider, Logger } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "../db/pool";
import * as schema from "@socialsfyi/api/db/schema";

export const DrizzleProvider: FactoryProvider = {
  provide: DRIZZLE_ORM,
  useFactory: async () => {
    Logger.log("Connecting to database....");
    await pool.connect();

    Logger.log("Connected to database.");
    return drizzle(pool, {
      schema: schema,
    });
  },
};
