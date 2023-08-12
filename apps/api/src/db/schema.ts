import { InferModel, sql } from "drizzle-orm";
import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  discordId: varchar("discord_id").notNull().unique(),
  pfp: varchar("pfp"),
});
export type User = InferModel<typeof users, "select">;
