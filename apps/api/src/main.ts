import "dotenv/config";
export const ENV = serverEnvSchema.parse(process.env);

import { NestFactory } from "@nestjs/core";
import { Logger as PinoLogger } from "nestjs-pino";
import { serverEnvSchema } from "@socialsfyi/schemas";
import { AppModule } from "@socialsfyi/api/app.module";
import session from "express-session";
import passport from "passport";
import { DrizzleSessionStore } from "./nest-drizzle/drizzle-session.store";
import { pool } from "./db/pool";
import * as schema from "@socialsfyi/api/db/schema";



async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: {
      credentials: true,
      origin: ENV.CLIENT_URL,
    },
  });
  app.setGlobalPrefix("api");
  app.use(
    session({
      secret: ENV.SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 3600000 * 24,
        secure: false,
      },
      name: "socialsfyi-sid",
      store: new DrizzleSessionStore(pool, schema),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.useLogger(app.get(PinoLogger));

  app.enableShutdownHooks();

  await app.listen(8000);
}
bootstrap();
