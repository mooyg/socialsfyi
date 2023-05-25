import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { UploadsService } from './uploads.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { nanoid } from 'nanoid'

@Controller('uploads')
export class UploadsController {
  constructor(private readonly uploadsService: UploadsService) {}

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './useruploads',
        filename: async (req, file, cb) => {
          const originalName = file.originalname
          const suffix = nanoid(5)
          cb(null, `${suffix}${extname(originalName)}`)
        },
      }),
    })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file
  }
}
