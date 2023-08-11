import { serverEnvSchema } from "@socialsfyi/types/env";

export const ENV = serverEnvSchema.parse(process.env);
