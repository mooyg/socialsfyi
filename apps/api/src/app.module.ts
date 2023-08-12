import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";
import { AppController } from "@socialsfyi/api/app.controller";
import { AppService } from "@socialsfyi/api/app.service";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: "pino-pretty",
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
