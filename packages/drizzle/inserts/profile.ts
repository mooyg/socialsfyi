import { z } from "zod";

export const updateDashboardSchema = z.object({
  bio: z.string().optional(),
  backgroundFile: z.instanceof(File).optional(),
  avatarFile: z.instanceof(File).optional(),
});

export type UpdateDashboardSchema = z.infer<typeof updateDashboardSchema>;
