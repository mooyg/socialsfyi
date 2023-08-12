import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("/auth")
export class AuthController {
  constructor(private readonly _authService: AuthService) {}
  @Get("/users")
  async getUsers() {
    return await this._authService.getUsers();
  }
}
