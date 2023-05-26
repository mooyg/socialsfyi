import { Module } from '@nestjs/common'
import { UploadsService } from './uploads.service'
import { UploadsController } from './uploads.controller'
import { PrismaService } from 'src/prisma'
import { CardService } from 'src/card/card.service'
import { UsersService } from 'src/users/users.service'

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, PrismaService, CardService, UsersService],
})
export class UploadsModule {}
