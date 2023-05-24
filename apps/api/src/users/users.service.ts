import { Injectable } from '@nestjs/common'
import { CreateDiscordUserDto, CreateUserDto } from './dto/create-user.dto'
import { PrismaService } from 'src/prisma'
import { hash } from 'bcrypt'
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
    })
    delete user.password
    return user
  }

  async findByEmail(email: string) {
    const user = await this._prisma.user.findFirst({
      where: {
        email,
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
}
