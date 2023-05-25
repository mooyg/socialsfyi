import { IsNotEmpty, IsString, Length } from 'class-validator'

export class UpdateUserBioDto {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsNotEmpty()
  @IsString()
  @Length(10, 1000)
  bio: string
}
