import { Controller, Get, Logger, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";

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
    request.logIn(request.user, (e) => {
      if (e) {
        Logger.log(e);
      } else {
        return res.redirect("api/auth/me");
      }
    });
  }

  @Get("/me")
  @UseGuards(AuthGuard("session"))
  async me(@Req() request: Request) {
    return {
      isAuthenticated: request.isAuthenticated(),
    };
  }
}
