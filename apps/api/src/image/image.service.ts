import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma'

@Injectable()
export class ImageService {
  constructor(private readonly _prisma: PrismaService) {}

  async findImage(uploadId: string, userId: string) {
    return await this._prisma.uploads.findFirst({
      where: {
        id: uploadId,
        uploaderId: userId,
      },
    })
  }
}
