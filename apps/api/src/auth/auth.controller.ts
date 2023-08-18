import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { InsertUserDto } from "./dto/insert-user.dto";
import { AuthGuard } from "@nestjs/passport";
import { Request, Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post("/register")
  async register(
    @Body() insertUser: InsertUserDto,
    @Req() request: Request,
    @Res() response: Response
  ) {
    const user = await this._authService.createUser(insertUser);
    request.logIn(user, (err) => {
      if (err) {
        throw new Error();
      }
      response.redirect(`${process.env.CLIENT_URL}/dashboard`);
    });
  }

  @Post("/login")
  @UseGuards(AuthGuard("local"))
  async login(@Req() request: Request, @Res() response: Response) {
    request.logIn(request.user!, (err) => {
      if (err) {
        throw new Error();
      }

      response.redirect(`${process.env.CLIENT_URL}/dashboard`);
    });
  }
}
