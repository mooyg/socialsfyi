import { createInsertSchema } from "drizzle-zod";
import { user } from "../schema";
import { z } from "zod";
export const insertUserSchema = createInsertSchema(user);

export type InsertUserSchema = z.infer<typeof insertUserSchema>;
