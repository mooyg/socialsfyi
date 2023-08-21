import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { isAuthenticated } from "../guards/isAuthenticated";
import { Request } from "express";

@Controller("profile")
export class ProfileController {
  constructor(private readonly _profileService: ProfileService) {}

  @Get("/me")
  @UseGuards(isAuthenticated)
  async profile(@Req() request: Request) {
    return await this._profileService.findProfileByUserId(request.user!.id);
  }

  @Post("/update/dashboard")
  async updateDashboard() {
    return await this._profileService.updateDashboard();
  }
}
