import { createSelectSchema } from "drizzle-zod";
import { profile } from "../schema";
import { z } from "zod";

export const selectProfileSchema = createSelectSchema(profile);

export type SelectProfileSchema = z.infer<typeof selectProfileSchema>;

export type Socials =
  | "github"
  | "twitter"
  | "instagram"
  | "youtube"
  | "spotify";
