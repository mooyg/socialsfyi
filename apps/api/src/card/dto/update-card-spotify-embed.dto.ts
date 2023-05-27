import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateCardSpotifyEmbedDto {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  spotifyEmbedLink: string
}
