import { Inject, Injectable } from "@nestjs/common";
import { S3_CLIENT } from "./client";
import { PutObjectCommand, S3 } from "@aws-sdk/client-s3";

@Injectable()
export class UploadService {
  constructor(@Inject(S3_CLIENT) private readonly _s3Client: S3) { }

  async uploadFile(file: Express.Multer.File) {
    try {
      const data = await this._s3Client.send(new PutObjectCommand({
        Body: file.buffer,
        Key: "image.png",
        Bucket: "SOCIALSFYI"
      }))
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }
}
