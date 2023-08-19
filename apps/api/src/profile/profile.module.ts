import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { DrizzleModule } from "../nest-drizzle/drizzle.module";
import { ProfileService } from "./profile.service";

@Module({
  controllers: [ProfileController],
  imports: [DrizzleModule],
  providers: [ProfileService],
})
export class ProfileModule {}
