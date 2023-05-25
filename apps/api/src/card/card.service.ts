import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma'
import { UpdateUserCardDto } from './dto/update-user-card.dto'

@Injectable()
export class CardService {
  constructor(private readonly _prisma: PrismaService) {}

  async updateUserCard(updateUserCardDto: UpdateUserCardDto) {
    return await this._prisma.card.update({
      where: {
        userId: updateUserCardDto.userId,
      },
      data: {
        bio: updateUserCardDto.bio,
      },
    })
  }
}
