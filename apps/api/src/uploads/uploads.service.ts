import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma'
import { getFileBySlug } from './utils'
import { User } from '@prisma/client'

@Injectable()
export class UploadsService {
  constructor(private readonly _prisma: PrismaService) {}

  async saveFile(multerFile: Express.Multer.File, uploader: Omit<User, 'password'>) {
    return await this._prisma.uploads.create({
      data: {
        name: multerFile.filename,
        uploaderId: uploader.id,
        type: multerFile.mimetype,
      },
    })
  }
}
