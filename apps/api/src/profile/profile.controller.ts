import { Controller, Post } from "@nestjs/common";
import { ProfileService } from "./profile.service";

@Controller("profile")
export class ProfileController {
  constructor(private readonly _profileService: ProfileService) {}

  @Post("/update/dashboard")
  async updateDashboard() {
    return await this._profileService.updateDashboard();
  }
}
