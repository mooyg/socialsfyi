import { createInsertSchema } from "drizzle-zod";
import { socials } from "../schema";
import { z } from "zod";

export const updateSocialsSchema = createInsertSchema(socials).omit({
  id: true,
  profileId: true,
});

export type UpdateSocialsSchema = z.infer<typeof updateSocialsSchema>;
