import { Body, Controller, NotFoundException, Post, UseGuards } from '@nestjs/common'
import { CardService } from './card.service'
import { AuthenticatedGuard } from 'src/auth/guards/is-authenticated.guard'
import { UpdateUserCardDto } from './dto/update-user-card.dto'

@Controller('card')
export class CardController {
  constructor(private readonly _cardService: CardService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('/update')
  async updateUserBio(@Body() updateUserCardDto: UpdateUserCardDto) {
    try {
      return await this._cardService.updateUserCard(updateUserCardDto)
    } catch (error) {
      throw new NotFoundException()
    }
  }
}
