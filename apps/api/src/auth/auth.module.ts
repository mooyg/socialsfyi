import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { Drizzle } from "../drizzle";

@Module({
  imports: [],
  providers: [AuthService, Drizzle],
  controllers: [AuthController],
})
export class AuthModule {}
