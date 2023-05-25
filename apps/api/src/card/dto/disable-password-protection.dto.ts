import { IsNotEmpty, IsString } from 'class-validator'

export class DisablePasswordProtectionDto {
  @IsNotEmpty()
  @IsString()
  userId: string
}
