import { NestFactory } from "@nestjs/core";
import { Logger as PinoLogger } from "nestjs-pino";
import { config } from "dotenv";
import { serverEnvSchema } from "@socialsfyi/schemas";
import { AppModule } from "@socialsfyi/api/app.module";

config();

export const ENV = serverEnvSchema.parse(process.env);

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(PinoLogger));

  app.enableShutdownHooks();

  await app.listen(8000);
}
bootstrap();
