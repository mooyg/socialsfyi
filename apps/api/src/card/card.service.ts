import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma'
import { UpdateUserBioDto } from './dto/update-user-card-bio'
import { EnablePasswordProtectionDto } from './dto/enable-password-protection.dto'
import { DisablePasswordProtectionDto } from './dto/disable-password-protection.dto'
import { UpdateShowViewCountDto } from './dto/update-user-card-viewcount'
import { hash } from 'bcrypt'

@Injectable()
export class CardService {
  constructor(private readonly _prisma: PrismaService) {}

  async updateUserBio(updateUserBio: UpdateUserBioDto) {
    return await this._prisma.card.update({
      where: {
        userId: updateUserBio.userId,
      },
      data: {
        bio: updateUserBio.bio,
      },
    })
  }

  async updateShowViewCount(updateShowViewCountDto: UpdateShowViewCountDto) {
    return await this._prisma.card.update({
      where: {
        userId: updateShowViewCountDto.userId,
      },
      data: {
        viewCountEnabled: updateShowViewCountDto.showViewCount,
      },
    })
  }

  async enablePasswordProtection(enablePasswordProtectionDto: EnablePasswordProtectionDto) {
    const hashedPassword = await hash(enablePasswordProtectionDto.password, 10)
    return await this._prisma.card.update({
      where: {
        userId: enablePasswordProtectionDto.userId,
      },
      data: {
        password: hashedPassword,
        passwordProtection: true,
      },
    })
  }
  async disablePasswordProtection(disablePasswordProtectionDto: DisablePasswordProtectionDto) {
    return await this._prisma.card.update({
      where: {
        userId: disablePasswordProtectionDto.userId,
      },
      data: {
        passwordProtection: false,
      },
    })
  }
}
