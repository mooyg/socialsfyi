import { Module } from '@nestjs/common'
import { UploadsService } from './uploads.service'
import { UploadsController } from './uploads.controller'
import { PrismaService } from 'src/prisma'

@Module({
  controllers: [UploadsController],
  providers: [UploadsService, PrismaService],
})
export class UploadsModule {}
