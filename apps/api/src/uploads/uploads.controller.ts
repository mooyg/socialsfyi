import {
  Body,
  Controller,
  Get,
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
import { AuthenticatedGuard } from 'src/auth/guards/is-authenticated.guard'
import { Request } from 'express'
import { UploadCardBannerDto } from './dto/upload-card-banner.dto'
import { UploadProfileAvatarDto } from './dto/upload-profile-avatar.dto'
import { uid } from 'uid'
import { ApiKeyGuard } from 'src/auth/guards/api-key.guard'

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
          const suffix = uid()
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
    return await this._uploadsService.saveFile(file, request.user.id)
  }

  @Post('file/sharex')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './useruploads',
        filename: async (req, file, cb) => {
          const originalName = file.originalname
          const suffix = uid()
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
  @UseGuards(ApiKeyGuard)
  async uploadFileShareX(@UploadedFile() file: Express.Multer.File, @Req() request: Request) {
    return await this._uploadsService.saveFile(file, request.headers['user-id'] as string)
  }
  @Post('/cardbanner')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './useruploads',
        filename: async (req, file, cb) => {
          const originalName = file.originalname
          const suffix = uid(5)
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
          const suffix = uid(5)
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

  @Get('/')
  @UseGuards(AuthenticatedGuard)
  async getUserUploads(@Req() request: Request) {
    return await this._uploadsService.getUserUploads(request.user.id)
  }
}
