import { Pool } from "pg";
import { ENV } from "../main";

export const pool = new Pool({
  connectionString: ENV.DB_URL,
});
