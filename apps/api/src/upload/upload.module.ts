import { Module } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { UploadController } from "./upload.controller";
import { S3Client } from "@aws-sdk/client-s3";

@Module({
  imports: [],
  providers: [UploadService, S3Client],
  controllers: [UploadController],
})
export class UploadModule {}
