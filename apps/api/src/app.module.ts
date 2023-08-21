import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_PIPE } from "@nestjs/core";
import { AppController } from "@socialsfyi/api/app.controller";
import { AppService } from "@socialsfyi/api/app.service";
import { AuthModule } from "@socialsfyi/api/auth/auth.module";
import { UserModule } from "@socialsfyi/api/user/user.module";
import { ZodValidationPipe } from "nestjs-zod";
import { ProfileModule } from "./profile/profile.module";
import { UploadModule } from "./upload/upload.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    AuthModule,
    UserModule,
    ProfileModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
