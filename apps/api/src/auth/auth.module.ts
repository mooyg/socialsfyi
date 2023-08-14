import { Module } from "@nestjs/common";
import { AuthController } from "@socialsfyi/api/auth/auth.controller";
import { AuthService } from "@socialsfyi/api/auth/auth.service";
import { DiscordStrategy } from "@socialsfyi/api/auth/strategies/discord.strategy";
import { DrizzleModule } from "@socialsfyi/api/nest-drizzle/drizzle.module";
import { SessionSerializer } from "@socialsfyi/api/auth/session.serializer";
import { UserService } from "../user/user.service";

@Module({
  imports: [DrizzleModule],
  providers: [AuthService, DiscordStrategy, SessionSerializer, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
