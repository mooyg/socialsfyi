import { S3 } from "@aws-sdk/client-s3";
import { Injectable } from "@nestjs/common";

@Injectable()
export class S3Client {
  readonly client: S3;
  constructor() {
    this.client = new S3({
      forcePathStyle: false,
      region: "blr1",
      credentials: {
        accessKeyId: process.env.OBJECT_STORAGE_KEY!,
        secretAccessKey: process.env.OBJECT_STORAGE_SECRET!,
      },
      endpoint: process.env.OBJECT_STORAGE_ENDPOINT,
    });
  }
}
