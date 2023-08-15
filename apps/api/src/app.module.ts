import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "@socialsfyi/api/app.controller";
import { AppService } from "@socialsfyi/api/app.service";
import { AuthModule } from "@socialsfyi/api/auth/auth.module";
import { UserModule } from "@socialsfyi/api/user/user.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
