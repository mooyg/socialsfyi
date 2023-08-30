import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { isAuthenticated } from "../guards/isAuthenticated";
import { Request } from "express";
import { UpdateDashboardDto } from "./dto/update-dashboard.dto";
import { UpdateSocialsDto } from "./dto/update-socials.dto";

@Controller("profile")
export class ProfileController {
  constructor(private readonly _profileService: ProfileService) {}

  @Get("/me")
  @UseGuards(isAuthenticated)
  async profile(@Req() request: Request) {
    return await this._profileService.findProfileByUserId(request.user!.id);
  }
  @Get("/:username")
  async profileByUsername(@Param("username") username: string) {
    return await this._profileService.findByProfileUsername(username);
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

  @Post("/update/socials")
  @UseGuards(isAuthenticated)
  async updateSocials(
    @Req() request: Request,
    @Body() updateSocials: UpdateSocialsDto
  ) {
    return await this._profileService.updateSocials(
      request.user.id,
      updateSocials
    );
  }
}
