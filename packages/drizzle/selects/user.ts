import { createSelectSchema } from "drizzle-zod";
import { user } from "../schema";
import { z } from "zod";

export const selectUserSchema = createSelectSchema(user);

export type SelectUserSchema = Omit<
  z.infer<typeof selectUserSchema>,
  "password"
>;
