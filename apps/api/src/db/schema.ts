import { InferModel, sql } from "drizzle-orm";
import { pgTable, varchar, uuid, json, timestamp } from "drizzle-orm/pg-core";

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

export const profiles = pgTable("profiles", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
});
export const sessions = pgTable("user_sessions", {
  sid: varchar("sid").primaryKey(),
  sess: json("sess").notNull(),
  expire: timestamp("expire").notNull(),
});
