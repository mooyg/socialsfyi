import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { isAuthenticated } from "../guards/isAuthenticated";
import { Request } from "express";
import { UpdateDashboardDto } from "./dto/update-dashboard.dto";

@Controller("profile")
export class ProfileController {
  constructor(private readonly _profileService: ProfileService) {}

  @Get("/me")
  @UseGuards(isAuthenticated)
  async profile(@Req() request: Request) {
    return await this._profileService.findProfileByUserId(request.user!.id);
  }

  @Post("/update/dashboard")
  @UseGuards(isAuthenticated)
  async updateDashboard(
    @Req() request: Request,
    @Body() updateDashboard: UpdateDashboardDto
  ) {
    console.log(updateDashboard);
    return await this._profileService.updateDashboard(
      request.user!.id,
      updateDashboard
    );
  }
}
