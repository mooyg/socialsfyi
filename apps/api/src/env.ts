import { serverEnvSchema } from "@socialsfyi/schemas";

export const ENV = serverEnvSchema.parse(process.env);
