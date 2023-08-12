import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";

@Controller("auth")
export class AuthController {
  @Get("/discord/signin")
  @UseGuards(AuthGuard("discord"))
  async discordAuth() {}

  @Get("/discord/callback")
  @UseGuards(AuthGuard("discord"))
  async discordAuthCallback(@Req() _request: Request, @Res() res: Response) {
    res.redirect("http://localhost:3000");
  }
}
