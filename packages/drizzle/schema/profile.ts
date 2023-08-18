import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { user } from "./user";

export const socialEnum = pgEnum("socials", [
  "twitter",
  "youtube",
  "instagram",
  "youtube",
  "github",
  "spotify",
]);
export const profile = pgTable("profile", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  socials: socialEnum("socials"),
  avatarURL: varchar("avatar"),
  backgroundURL: varchar("background"),
  bio: varchar("bio", {
    length: 200,
  }),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id),
});

export const profileRelation = relations(profile, ({ one }) => ({
  user: one(user, {
    fields: [profile.id],
    references: [user.id],
  }),
}));
