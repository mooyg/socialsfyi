import { IsNotEmpty, IsString } from 'class-validator'

export class UploadCardBannerDto {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  cardId: string
}
