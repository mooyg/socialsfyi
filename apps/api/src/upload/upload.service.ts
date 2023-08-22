import { Inject, Injectable } from "@nestjs/common";
import { S3_CLIENT } from "./client";
import { PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { InvalidEntityException } from "../exceptions/invalid-entity.exception";

@Injectable()
export class UploadService {
  constructor(@Inject(S3_CLIENT) private readonly _s3Client: S3) {}

  async uploadFile(file: Express.Multer.File) {
    try {
      if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
        throw new InvalidEntityException("The file type is invalid");
      }
      const filename = `${uuidv4()}.png`;
      await this._s3Client.send(
        new PutObjectCommand({
          Body: file.buffer,
          Key: filename,
          Bucket: "socials-fyi",
          ACL: "public-read",
        })
      );
      return {
        url: `${process.env.OBJECT_STORAGE_ENDPOINT}socials-fyi/${filename}`,
        filename,
      };
    } catch (e) {
      throw new Error("Something happened while uploading the file");
    }
  }
}
