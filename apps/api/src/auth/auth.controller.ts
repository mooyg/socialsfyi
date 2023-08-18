import { Body, Controller, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { InsertUserDto } from "./dto/insert-user.dto";
import { Request, Response } from "express";
import { LocalAuthGuard } from "../guards/local-auth.guard";

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
      return response.send(request.user);
    });
  }

  @Post("/login")
  @UseGuards(LocalAuthGuard)
  async login(@Req() request: Request, @Res() response: Response) {
    console.log(request.user);
    return response.send(request.user);
  }
}
