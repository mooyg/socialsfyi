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

export { SelectUserSchema, selectUserSchema } from "./selects/user";
export {
  selectProfileSchema,
  SelectProfileSchema,
  SelectProfileWithSocialSchema,
  selectProfileWithSocialSchema,
} from "./selects/profile";
export {
  SelectSocialsSchema,
  selectSocialsSchema,
  allSocials,
} from "./selects/socials";

export { InsertUserSchema, insertUserSchema } from "./inserts/user";
export {
  updateDashboardSchema,
  UpdateDashboardSchema,
} from "./inserts/profile";
export { UpdateSocialsSchema, updateSocialsSchema } from "./inserts/socials";
