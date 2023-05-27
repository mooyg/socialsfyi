import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common'
import { CardService } from './card.service'
import { AuthenticatedGuard } from 'src/auth/guards/is-authenticated.guard'
import { UpdateUserBioDto } from './dto/update-user-card-bio'
import { UpdateShowViewCountDto } from './dto/update-user-card-viewcount'
import { EnablePasswordProtectionDto } from './dto/enable-password-protection.dto'
import { DisablePasswordProtectionDto } from './dto/disable-password-protection.dto'
import { UpdateCardColorDto } from './dto/update-card-color.dto'
import { UpdateCardSpotifyEmbedDto } from './dto/update-card-spotify-embed.dto'

@Controller('card')
export class CardController {
  constructor(private readonly _cardService: CardService) {}

  @UseGuards(AuthenticatedGuard)
  @Post('/update/bio')
  async updateUserBio(@Body() updateUserBioDto: UpdateUserBioDto) {
    try {
      return await this._cardService.updateUserBio(updateUserBioDto)
    } catch (error) {
      throw new NotFoundException()
    }
  }

  @Post('/update/showviewcount')
  @UseGuards(AuthenticatedGuard)
  async updateShowViewCount(@Body() updateShowViewCountDto: UpdateShowViewCountDto) {
    try {
      return await this._cardService.updateShowViewCount(updateShowViewCountDto)
    } catch (error) {
      throw new NotFoundException()
    }
  }
  @Post('/update/enable/password')
  @UseGuards(AuthenticatedGuard)
  async enablePasswordProtection(@Body() enablePasswordProtectionDto: EnablePasswordProtectionDto) {
    try {
      return await this._cardService.enablePasswordProtection(enablePasswordProtectionDto)
    } catch (error) {
      throw new NotFoundException()
    }
  }
  @Post('/update/disable/password')
  @UseGuards(AuthenticatedGuard)
  async disablePasswordProtection(
    @Body() disablePasswordProtectionDto: DisablePasswordProtectionDto
  ) {
    try {
      return await this._cardService.disablePasswordProtection(disablePasswordProtectionDto)
    } catch (error) {
      throw new NotFoundException()
    }
  }

  @Post('/update/color')
  @UseGuards(AuthenticatedGuard)
  async updateCardColor(@Body() updateCardColorDto: UpdateCardColorDto) {
    try {
      return await this._cardService.updateCardColor(updateCardColorDto)
    } catch (error) {
      throw new NotFoundException()
    }
  }

  @Post('/update/spotify/embed')
  @UseGuards(AuthenticatedGuard)
  async updateCardSpotifyEmbed(@Body() updateCardSpotifyEmbedDto: UpdateCardSpotifyEmbedDto) {
    try {
      return await this._cardService.updateCardSpotifyEmbed(updateCardSpotifyEmbedDto)
    } catch {
      throw new NotFoundException()
    }
  }
  @Get('/:username')
  async getCardByUsername(@Param('username') username: string) {
    return await this._cardService.getCardByUsername(username)
  }
}
