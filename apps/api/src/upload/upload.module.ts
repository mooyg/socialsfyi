import { Module } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { UploadController } from "./upload.controller";
import { S3Client, S3_CLIENT } from "./client";
@Module({
  imports: [],
  providers: [UploadService, {
    provide: S3_CLIENT,
    useValue: new S3Client().client
  }],
  controllers: [UploadController],
})
export class UploadModule { }
