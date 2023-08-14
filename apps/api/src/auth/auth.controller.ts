import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";
import { ENV } from "../main";

@Controller("auth")
export class AuthController {
  @Get("/discord/signin")
  @UseGuards(AuthGuard("discord"))
  async discordAuth() {}

  @Get("/discord/callback")
  @UseGuards(AuthGuard("discord"))
  async discordAuthCallback(@Req() request: Request, @Res() res: Response) {
    console.log(request.session, "DiscordAuthCallback");
    if (!request.user) return res.redirect("/discord/signin");
    request.logIn(request.user, (e: Error) => {
      if (e) {
        console.error(e);
      } else {
        return res.redirect(ENV.CLIENT_URL);
      }
    });
  }
}
