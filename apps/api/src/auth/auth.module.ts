import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { DrizzleModule } from "../nest-drizzle/drizzle.module";

@Module({
  imports: [DrizzleModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
