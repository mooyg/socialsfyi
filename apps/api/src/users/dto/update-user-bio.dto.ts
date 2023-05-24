import { IsNotEmpty, IsString, Length } from 'class-validator'

export class UpdateUserBioDto {
  @IsString()
  @Length(10, 10000)
  @IsNotEmpty()
  bio: string

  @IsString()
  @IsNotEmpty()
  id: string
}
