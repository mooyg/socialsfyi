import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const user = pgTable("user", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  username: varchar("username").notNull().unique(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
});
