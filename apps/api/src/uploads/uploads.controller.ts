import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { UploadsService } from './uploads.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { nanoid } from 'nanoid'
import { AuthenticatedGuard } from 'src/auth/guards/is-authenticated.guard'
import { Request } from 'express'
import { UploadCardBannerDto } from './dto/upload-card-banner.dto'
import { UploadProfileAvatarDto } from './dto/upload-profile-avatar.dto'

@Controller('uploads')
export class UploadsController {
  constructor(private readonly _uploadsService: UploadsService) {}

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
      limits: {
        fileSize: +process.env.MAX_FILE_SIZE,
      },
      fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif|pdf)$/)) {
          cb(null, true)
        } else {
          cb(
            new HttpException(
              `Unsupported file type ${extname(file.originalname)}`,
              HttpStatus.BAD_REQUEST
            ),
            false
          )
        }
      },
    })
  )
  @UseGuards(AuthenticatedGuard)
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Req() request: Request) {
    return await this._uploadsService.saveFile(request.file, request.user)
  }
  @Post('/cardbanner')
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
      limits: {
        fileSize: +process.env.MAX_FILE_SIZE,
      },
      fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          cb(null, true)
        } else {
          cb(
            new HttpException(
              `Unsupported file type ${extname(file.originalname)}`,
              HttpStatus.BAD_REQUEST
            ),
            false
          )
        }
      },
    })
  )
  @UseGuards(AuthenticatedGuard)
  async uploadCardBanner(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadCardBannerDto: UploadCardBannerDto
  ) {
    return await this._uploadsService.uploadCardBanner(file, uploadCardBannerDto)
  }
  @Post('/avatar')
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
      limits: {
        fileSize: +process.env.MAX_FILE_SIZE,
      },
      fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          cb(null, true)
        } else {
          cb(
            new HttpException(
              `Unsupported file type ${extname(file.originalname)}`,
              HttpStatus.BAD_REQUEST
            ),
            false
          )
        }
      },
    })
  )
  @UseGuards(AuthenticatedGuard)
  async uploadProfileAvatar(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadProfileAvatarDto: UploadProfileAvatarDto
  ) {
    return await this._uploadsService.uploadProfileAvatar(file, uploadProfileAvatarDto)
  }
}
