import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  InternalServerErrorException,
  Get,
  Res,
} from '@nestjs/common'
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { Request, Response } from 'express'
import { SignInUserDto } from './dto/sign-in-user.dto'
import { AuthGuard } from '@nestjs/passport'

@Controller('auth')
export class AuthController {
  @Post('/signin')
  @UseGuards(LocalAuthGuard)
  async signIn(@Req() request: Request, @Body() signInUserDto: SignInUserDto) {
    console.log(request.session)
    return request.user
  }

  @Post('/signout')
  @UseGuards(IsAuthenticatedGuard)
  async signOut(@Req() request: Request) {
    const logoutError = await new Promise((resolve) =>
      request.logOut({ keepSessionInfo: false }, (error) => resolve(error))
    )

    if (logoutError) {
      console.error(logoutError)

      throw new InternalServerErrorException('Could not log out user')
    }

    return {
      logout: true,
    }
  }

  @Get('/discord')
  @UseGuards(AuthGuard('discord'))
  async discordAuth() {}

  @Get('/discord/callback')
  @UseGuards(AuthGuard('discord'))
  async discordAuthCallback(@Req() request: Request, @Res() response: Response) {
    const { user } = request
    response.redirect('http://localhost:3000')
  }
}
