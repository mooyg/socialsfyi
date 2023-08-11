import { Logger, OnModuleInit } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { serverEnvSchema } from "@socialsfyi/types";

export class ValidateEnv implements OnModuleInit {
  async onModuleInit() {
    try {
      await ConfigModule.envVariablesLoaded;
      const validatedEnv = serverEnvSchema.safeParse(process.env);
      if (!validatedEnv.success) {
        Logger.error("env validation error", validatedEnv.error);
      }
    } catch (e) {}
  }
}
