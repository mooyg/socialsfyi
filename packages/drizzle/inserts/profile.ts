import { z } from "zod";

export const updateDashboardSchema = z.object({
  bio: z.string().optional().nullable(),
  backgroundURL: z.string().optional().nullable(),
  avatarURL: z.string().optional().nullable(),
});

export type UpdateDashboardSchema = z.infer<typeof updateDashboardSchema>;
