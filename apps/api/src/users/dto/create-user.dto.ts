import { IsEmail, IsNotEmpty, IsString, isNotEmpty } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string
}

export class CreateDiscordUserDto {
  @IsString()
  @IsNotEmpty()
  discordUsername: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  discordId: string
}
