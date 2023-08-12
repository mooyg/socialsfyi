import "dotenv/config";
export const ENV = serverEnvSchema.parse(process.env);

import { NestFactory } from "@nestjs/core";
import { Logger as PinoLogger } from "nestjs-pino";
import { serverEnvSchema } from "@socialsfyi/schemas";
import { AppModule } from "@socialsfyi/api/app.module";
import * as session from "express-session";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: {
      credentials: true,
      origin: ENV.CLIENT_URL,
    },
  });
  app.use(
    session({
      secret: ENV.SESSION_SECRET,
    })
  );
  app.setGlobalPrefix("api");

  app.useLogger(app.get(PinoLogger));

  app.enableShutdownHooks();

  await app.listen(8000);
}
bootstrap();
