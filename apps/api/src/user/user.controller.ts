import {
  Controller,
  Get,
  NotFoundException,
  Req,
  UseGuards,
} from "@nestjs/common";
import { isAuthenticated } from "../guards/isAuthenticated";
import { UserService } from "./user.service";
import { Request } from "express";

@Controller("user")
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get("/me")
  @UseGuards(isAuthenticated)
  async me(@Req() request: Request) {
    if (!request.user) {
      throw new NotFoundException();
    }
    return this._userService.me(request.user.id);
  }
}
