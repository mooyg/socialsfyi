import { Controller, Post } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { FormData } from "../decorators/form-data.decorator";
import { FormidableReturnType } from "../types";
@Controller("upload")
export class UploadController {
  constructor(private readonly _uploadService: UploadService) {}
  @Post("/")
  async upload(
    @FormData({
      maxFiles: 1,
    })
    formData: FormidableReturnType
  ) {
    const { files } = formData;

    return this._uploadService.uploadFile(files.file[0]);
  }
}
