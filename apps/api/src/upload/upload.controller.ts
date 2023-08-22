import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express"
import { UploadService } from "./upload.service";
@Controller('upload')
export class UploadController {
  constructor(private readonly _uploadService: UploadService) { }
  @Post("")
  @UseInterceptors(FileInterceptor("file"))
  async upload(@UploadedFile() file: Express.Multer.File) {
    return await this._uploadService.uploadFile(file)
  }
}
