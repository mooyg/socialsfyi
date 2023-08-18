import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { UserService } from "./user.service";
import { isAuthenticated } from "../guards/isAuthenticated";
@Controller("user")
export class UserController {
  constructor(private readonly _userService: UserService) {}
  @Get("/me")
  @UseGuards(isAuthenticated)
  async me(@Req() request: Request) {
    return await this._userService.findByUsername(request.user?.username);
  }
}
