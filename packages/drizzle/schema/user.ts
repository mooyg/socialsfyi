import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const user = pgTable("users", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  username: varchar("username").notNull(),
  email: varchar("email").notNull(),
});
