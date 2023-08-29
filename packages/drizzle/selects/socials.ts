import { createSelectSchema } from "drizzle-zod";
import { socials } from "../schema";
import { z } from "zod";

export const selectSocialsSchema = createSelectSchema(socials);

export type SelectSocialsSchema = z.infer<typeof selectSocialsSchema>;

export const allSocials = selectSocialsSchema.omit({
  id: true,
  profileId: true,
});
