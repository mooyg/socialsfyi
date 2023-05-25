import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateCardColorDto {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  cardColor: string
}
