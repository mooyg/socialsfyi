import { Injectable } from "@nestjs/common";
import { S3Client } from "./client";

@Injectable()
export class UploadService {
  constructor(private readonly _s3Client: S3Client) {}
}
