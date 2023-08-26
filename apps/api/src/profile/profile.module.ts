import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { DrizzleModule } from "../nest-drizzle/drizzle.module";
import { ProfileService } from "./profile.service";
import { UploadModule } from "../upload/upload.module";
import { UploadService } from "../upload/upload.service";
import { S3Client, S3_CLIENT } from "../upload/client";

@Module({
  controllers: [ProfileController],
  imports: [DrizzleModule, UploadModule],
  providers: [
    ProfileService,
    UploadService,
    { useValue: new S3Client().client, provide: S3_CLIENT },
  ],
})
export class ProfileModule {}
