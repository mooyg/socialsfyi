import { z } from "zod";

export const updateDashboardSchema = z.object({
  bio: z.string().optional(),
  backgroundUrl: z.string().optional(),
  avatarUrl: z.string().optional(),
});

export type UpdateDashboardSchema = z.infer<typeof updateDashboardSchema>;
