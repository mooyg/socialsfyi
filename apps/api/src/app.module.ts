import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { PassportModule } from '@nestjs/passport'
import { CardModule } from './card/card.module'
import { UploadsModule } from './uploads/uploads.module'
import { MulterModule } from '@nestjs/platform-express'
import { ImageModule } from './image/image.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PassportModule.register({
      session: true,
    }),
    CardModule,
    UploadsModule,
    MulterModule.register(),
    ImageModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
