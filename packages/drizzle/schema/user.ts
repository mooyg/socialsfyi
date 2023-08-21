import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { profile } from "./profile";

export const user = pgTable("user", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  username: varchar("username").notNull().unique(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
});

export const userRelations = relations(user, ({ one }) => ({
  profile: one(profile, {
    fields: [user.id],
    references: [profile.userId],
  }),
}));
