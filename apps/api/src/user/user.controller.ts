import { Controller, Get, UseGuards } from "@nestjs/common";
import { isAuthenticated } from "../guards/isAuthenticated";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get("/me")
  //   @UseGuards(isAuthenticated)
  async me() {
    return this._userService.me("8bd12b4a-3abc-11ee-8924-00155dc0f5de");
  }
}
