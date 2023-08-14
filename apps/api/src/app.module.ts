import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { LoggerModule } from "nestjs-pino";
import { AppController } from "@socialsfyi/api/app.controller";
import { AppService } from "@socialsfyi/api/app.service";
import { AuthModule } from "@socialsfyi/api/auth/auth.module";
import { UserModule } from "@socialsfyi/api/user/user.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // LoggerModule.forRoot({
    //   pinoHttp: {
    //     transport: {
    //       target: "pino-pretty",
    //       options: {
    //         singleLine: true,
    //       },
    //     },
    //   },
    // }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
