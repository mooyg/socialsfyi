import { createSelectSchema } from "drizzle-zod";
import { profile } from "../schema";
import { z } from "zod";
import { selectSocialsSchema } from "./socials";

export const selectProfileSchema = createSelectSchema(profile);
export const selectProfileWithSocialSchema = createSelectSchema(profile).extend(
  {
    socials: selectSocialsSchema,
  }
);

export type SelectProfileSchema = z.infer<typeof selectProfileSchema>;

export type SelectProfileWithSocialSchema = z.infer<
  typeof selectProfileWithSocialSchema
>;
