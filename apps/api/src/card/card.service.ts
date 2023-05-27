import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma'
import { UpdateUserBioDto } from './dto/update-user-card-bio'
import { EnablePasswordProtectionDto } from './dto/enable-password-protection.dto'
import { DisablePasswordProtectionDto } from './dto/disable-password-protection.dto'
import { UpdateShowViewCountDto } from './dto/update-user-card-viewcount'
import { hash } from 'bcrypt'
import { UpdateCardColorDto } from './dto/update-card-color.dto'
import { UpdateCardSpotifyEmbedDto } from './dto/update-card-spotify-embed.dto'

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
  async updateCardColor(updateCardColorDto: UpdateCardColorDto) {
    const isPremiumUser = await this._prisma.user.findUnique({
      where: {
        id: updateCardColorDto.userId,
      },
      include: {
        card: true,
      },
    })
    if (!isPremiumUser) {
      throw new Error('Not found')
    }
    if (isPremiumUser.premium) {
      return await this._prisma.card.update({
        where: {
          userId: updateCardColorDto.userId,
        },
        data: {
          premiumFeatures: {
            update: {
              colorBackground: updateCardColorDto.cardColor,
            },
          },
        },
        include: {
          premiumFeatures: true,
        },
      })
    } else {
      throw new Error('Not a premium user')
    }
  }

  async updateCardSpotifyEmbed(updateCardSpotifyEmbedDto: UpdateCardSpotifyEmbedDto) {
    const isPremiumUser = await this._prisma.user.findUnique({
      where: {
        id: updateCardSpotifyEmbedDto.userId,
      },
    })
    if (!isPremiumUser) {
      throw new Error('Not found')
    }
    if (isPremiumUser.premium) {
      console.log(updateCardSpotifyEmbedDto.spotifyEmbedLink)
      return await this._prisma.card.update({
        where: {
          userId: updateCardSpotifyEmbedDto.userId,
        },
        data: {
          premiumFeatures: {
            update: {
              spotifyEmbed: updateCardSpotifyEmbedDto.spotifyEmbedLink,
            },
          },
        },
        include: {
          premiumFeatures: true,
        },
      })
    }
  }
  async updateCardBanner(fileId: string, userId: string, cardId: string) {
    return await this._prisma.card.update({
      where: {
        id: cardId,
      },
      data: {
        cardBanner: fileId,
      },
    })
  }

  async getCardByUsername(username: string) {
    const user = await this._prisma.user.findUnique({
      where: { username },
      include: {
        card: true,
      },
    })
    if (user.premium) {
      return await this._prisma.user.findFirst({
        where: {
          username,
        },
        include: {
          card: {
            include: {
              premiumFeatures: true,
            },
          },
        },
      })
    }
    return user
  }
}
