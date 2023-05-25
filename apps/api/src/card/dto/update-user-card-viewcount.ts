import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

export class UpdateShowViewCountDto {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsBoolean()
  @IsNotEmpty()
  showViewCount: boolean
}
