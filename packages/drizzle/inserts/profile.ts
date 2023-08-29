import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import { profile } from "../schema";

export const updateDashboardSchema = createInsertSchema(profile).omit({
  id: true,
  userId: true,
});

export type UpdateDashboardSchema = z.infer<typeof updateDashboardSchema>;
