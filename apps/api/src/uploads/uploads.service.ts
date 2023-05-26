import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma'
import { getFileBySlug } from './utils'
import { User } from '@prisma/client'
import { CardService } from 'src/card/card.service'
import { UploadCardBannerDto } from './dto/upload-card-banner.dto'
import { UploadProfileAvatarDto } from './dto/upload-profile-avatar.dto'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class UploadsService {
  constructor(
    private readonly _prisma: PrismaService,
    private readonly _cardService: CardService,
    private readonly _usersService: UsersService
  ) {}

  async saveFile(multerFile: Express.Multer.File, uploader: Omit<User, 'password'>) {
    return await this._prisma.uploads.create({
      data: {
        name: multerFile.filename,
        type: multerFile.mimetype,
        uploader: {
          connect: {
            id: uploader.id,
          },
        },
      },
    })
  }
  async uploadCardBanner(file: Express.Multer.File, uploadCardBannerDto: UploadCardBannerDto) {
    const upload = await this._prisma.uploads.create({
      data: {
        name: file.filename,
        uploaderId: uploadCardBannerDto.userId,
        type: file.mimetype,
      },
    })
    return await this._cardService.updateCardBanner(
      upload.id,
      uploadCardBannerDto.userId,
      uploadCardBannerDto.cardId
    )
  }
  async uploadProfileAvatar(
    file: Express.Multer.File,
    uploadProfileAvatarDto: UploadProfileAvatarDto
  ) {
    console.log(uploadProfileAvatarDto.userId)
    const upload = await this._prisma.uploads.create({
      data: {
        name: file.filename,
        uploaderId: uploadProfileAvatarDto.userId,
        type: file.mimetype,
      },
    })
    return await this._usersService.updateProfileAvatar(uploadProfileAvatarDto.userId, upload.id)
  }
}
