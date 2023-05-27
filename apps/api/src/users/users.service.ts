import { Injectable } from '@nestjs/common'
import { CreateDiscordUserDto, CreateUserDto } from './dto/create-user.dto'
import { PrismaService } from 'src/prisma'
import { compare, hash } from 'bcrypt'
import { uid } from 'uid'
import { SocialMediaType, UpdateUserSocialDto } from './dto/upade-user-social.dto'

import {} from '@prisma/client'
@Injectable()
export class UsersService {
  constructor(private readonly _prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await hash(createUserDto.password, 10)
    const user = await this._prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        username: createUserDto.username,
        card: {
          create: {
            premiumFeatures: {
              create: {},
            },
          },
        },
      },
    })
    delete user.password
    return user
  }

  async createDiscordUser(createDiscordUserDto: CreateDiscordUserDto) {
    const user = await this._prisma.user.create({
      data: {
        email: createDiscordUserDto.email,
        discordId: createDiscordUserDto.discordId,
        discordUsername: createDiscordUserDto.discordUsername,
        card: {
          create: {
            premiumFeatures: {
              create: {},
            },
          },
        },
      },
    })
    delete user.password
    return user
  }

  async findAll() {
    return await this._prisma.user.findMany({})
  }

  async findById(id: string) {
    const user = await this._prisma.user.findFirst({
      where: {
        id,
      },
      include: {
        card: {
          include: {
            premiumFeatures: false,
          },
        },
      },
    })
    if (user.premium) {
      const premiumUser = await this._prisma.user.findFirst({
        where: {
          id,
        },
        include: {
          card: {
            include: {
              premiumFeatures: true,
            },
          },
        },
      })
      delete premiumUser.password
      return premiumUser
    }
    delete user.password
    return user
  }

  async findByEmail(email: string) {
    const user = await this._prisma.user.findFirst({
      where: {
        email,
      },
      include: {
        card: true,
      },
    })
    return user
  }

  async findByDiscordId(discordId: string) {
    const user = await this._prisma.user.findFirst({
      where: {
        discordId,
      },
    })
    return user
  }
  async remove(id: string) {
    const deletedUser = await this._prisma.user.delete({
      where: {
        id,
      },
    })
    return deletedUser
  }

  async updateProfileAvatar(userId: string, imageId: string) {
    return await this._prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        avatar: imageId,
      },
    })
  }

  async generateApiKey(userId: string) {
    const uniqueId = uid(32)
    const hashedKey = await hash(uniqueId, 10)
    await this._prisma.user.update({
      where: { id: userId },
      data: {
        apiKey: hashedKey,
      },
    })
    return uniqueId
  }

  async isApiKeyValid(key: string, userId: string) {
    const user = await this._prisma.user.findFirst({
      where: {
        id: userId,
      },
    })

    console.log(key)
    const isKeyValid = await compare(key, user.apiKey)
    console.log(isKeyValid)
    return isKeyValid
  }
  async updateUserSocial(updateUserSocialDto: UpdateUserSocialDto) {
    switch (updateUserSocialDto.socialMediaType.toString().toUpperCase()) {
      case 'GITHUB': {
        return await this._prisma.user.update({
          where: {
            id: updateUserSocialDto.userId,
          },
          data: {
            githubURL: updateUserSocialDto.socialMediaLink,
          },
        })
      }
      case 'SPOTIFY': {
        return await this._prisma.user.update({
          where: {
            id: updateUserSocialDto.userId,
          },
          data: {
            spotifyURL: updateUserSocialDto.socialMediaLink,
          },
        })
      }
      case 'INSTAGRAM': {
        return await this._prisma.user.update({
          where: {
            id: updateUserSocialDto.userId,
          },
          data: {
            instagramURL: updateUserSocialDto.socialMediaLink,
          },
        })
      }
      case 'TWITTER': {
        return await this._prisma.user.update({
          where: {
            id: updateUserSocialDto.userId,
          },
          data: {
            twitterURL: updateUserSocialDto.socialMediaLink,
          },
        })
      }
      case 'YOUTUBE': {
        return await this._prisma.user.update({
          where: {
            id: updateUserSocialDto.userId,
          },
          data: {
            youtubeURL: updateUserSocialDto.socialMediaLink,
          },
        })
      }
    }
  }
}
