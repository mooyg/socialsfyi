import * as session from 'express-session'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import * as passport from 'passport'
import { PrismaClient } from '@prisma/client'
import { PrismaSessionStore } from '@quixo3/prisma-session-store'
import { config } from 'dotenv'
config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.use(
    session({
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000, // ms
      },
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true,
      store: new PrismaSessionStore(new PrismaClient(), {
        checkPeriod: 2 * 60 * 1000, //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }),
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(8000)
}
bootstrap()
