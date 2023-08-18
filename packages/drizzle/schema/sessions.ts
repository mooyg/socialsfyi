import { json, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const sessions = pgTable("user_sessions", {
  sid: varchar("sid").primaryKey(),
  sess: json("sess").notNull(),
  expire: timestamp("expire").notNull(),
});
