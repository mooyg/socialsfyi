import { IsNotEmpty, IsString } from 'class-validator'

export class UploadProfileAvatarDto {
  @IsString()
  @IsNotEmpty()
  userId: string
}
