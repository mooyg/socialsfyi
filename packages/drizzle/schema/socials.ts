import { sql } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { profile } from "./profile";

export const socials = pgTable("socials", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  github: varchar("github"),
  twitter: varchar("twitter"),
  instagram: varchar("instagram"),
  youtube: varchar("youtube"),
  spotify: varchar("spotify"),
  profileId: uuid("profile_id")
    .references(() => profile.id)
    .notNull(),
});
