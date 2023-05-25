import { Body, Controller, NotFoundException, Post, UseGuards } from '@nestjs/common'
import { CardService } from './card.service'
import { AuthenticatedGuard } from 'src/auth/guards/is-authenticated.guard'
import { UpdateUserBioDto } from './dto/update-user-card-bio'
import { UpdateShowViewCountDto } from './dto/update-user-card-viewcount'
import { EnablePasswordProtectionDto } from './dto/enable-password-protection.dto'
import { DisablePasswordProtectionDto } from './dto/disable-password-protection.dto'

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
}
