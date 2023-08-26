import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { user } from "./user";
import { socials } from "./socials";

export const profile = pgTable("profile", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  avatarURL: varchar("avatar"),
  backgroundURL: varchar("background"),
  bio: varchar("bio", {
    length: 200,
  }),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id),
});

export const profileRelations = relations(profile, ({ one }) => ({
  socials: one(socials, {
    fields: [profile.id],
    references: [socials.profileId],
  }),
}));
