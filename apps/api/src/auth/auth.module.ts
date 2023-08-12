import { Module } from "@nestjs/common";
import { AuthController } from "@socialsfyi/api/auth/auth.controller";
import { AuthService } from "@socialsfyi/api/auth/auth.service";
import { DiscordStrategy } from "./strategies/discord.strategy";

@Module({
  imports: [],
  providers: [AuthService, DiscordStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
