import { IsEnum, IsNotEmpty, IsString } from 'class-validator'

export enum SocialMediaType {
  SPOTIFY,
  GITHUB,
  TWITTER,
  INSTAGRAM,
  YOUTUBE,
}
export class UpdateUserSocialDto {
  @IsEnum(SocialMediaType)
  readonly socialMediaType: SocialMediaType

  @IsString()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  socialMediaLink: string
}
