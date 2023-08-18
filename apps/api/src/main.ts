import { config } from "dotenv";

config({
  path: "../../.env",
});

import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "@socialsfyi/api/app.module";
import session from "express-session";
import passport from "passport";
import PG_SESSION from "connect-pg-simple";
import { CommonExceptionsFilter } from "./filters/common-exceptions.filter";
import { pool } from "@socialsfyi/drizzle";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: {
      credentials: true,
      origin: process.env.CLIENT_URL,
    },
  });
  app.setGlobalPrefix("api");
  const pgSession = PG_SESSION(session);
  app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 3600000 * 24,
        secure: false,
      },
      name: "socialsfyi-sid",
      store: new pgSession({
        pool: pool,
        tableName: "user_sessions",
      }),
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.enableShutdownHooks();
  const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(new CommonExceptionsFilter(httpAdapter));
  await app.listen(8000);
}
bootstrap();
