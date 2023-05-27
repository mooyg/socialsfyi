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
import { LocalAuthGuard } from './guards/local-auth.guard'
import { Request, Response } from 'express'
import { SignInUserDto } from './dto/sign-in-user.dto'
import { AuthGuard } from '@nestjs/passport'
import { AuthenticatedGuard } from './guards/is-authenticated.guard'

@Controller('auth')
export class AuthController {
  @Post('/signin')
  @UseGuards(LocalAuthGuard)
  async signIn(@Req() request: Request, @Body() signInUserDto: SignInUserDto) {
    console.log(request.session)
    return request.user
  }

  @Post('/signout')
  @UseGuards(AuthenticatedGuard)
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
    response.redirect(`${process.env.FRONTEND_URL}/dashboard`)
  }
}
