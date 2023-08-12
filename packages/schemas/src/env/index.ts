import { z } from "zod";

export const serverEnvSchema = z.object({
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  DB_URL: z.string(),
  NODE_ENV: z.enum(["development", "production", "test"]).optional(),
  DISCORD_CALLBACK_URL: z.string(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;
