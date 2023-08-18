import { Module } from "@nestjs/common";
import { AuthController } from "@socialsfyi/api/auth/auth.controller";
import { AuthService } from "@socialsfyi/api/auth/auth.service";
import { DrizzleModule } from "@socialsfyi/api/nest-drizzle/drizzle.module";
import { SessionSerializer } from "@socialsfyi/api/auth/session.serializer";
import { UserService } from "../user/user.service";
import { LocalStrategy } from "./strategies/local-strategy";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    DrizzleModule,
    PassportModule.register({
      session: true,
    }),
  ],
  providers: [AuthService, UserService, LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
