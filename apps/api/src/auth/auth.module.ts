import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersService } from 'src/users/users.service'
import { PrismaService } from 'src/prisma'
import { LocalStrategy } from './strategies/local.strategy'
import { UserSerializer } from './user.serializer'
import { DiscordStrategy } from './strategies/discord.strategy'

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    UsersService,
    LocalStrategy,
    UserSerializer,
    DiscordStrategy,
  ],
})
export class AuthModule {}
