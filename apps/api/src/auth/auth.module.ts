import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Drizzle } from "../drizzle";
import { Env } from "../validateEnv";

@Module({
  imports: [],
  providers: [AuthService, Drizzle, Env],
  controllers: [AuthController],
})
export class AuthModule {}
