import { Module } from "@nestjs/common";
import { AppService } from "./app.services";
import { AppController } from "./app.controller";
import { ValidateEnv } from "./validateEnv";
import { ConfigModule } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";
@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: "pino-pretty",
        },
      },
    }),
    ConfigModule.forRoot(),
    ValidateEnv,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
