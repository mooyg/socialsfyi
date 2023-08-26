import { z } from "zod";

export const updateDashboardSchema = z.object({
  bio: z.string().optional(),
  backgroundURL: z.string().optional(),
  avatarURL: z.string().optional(),
});

export type UpdateDashboardSchema = z.infer<typeof updateDashboardSchema>;
