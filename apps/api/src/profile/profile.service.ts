import { Inject, Injectable } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { Drizzle } from "../types";
import { profile, socials, user } from "@socialsfyi/drizzle/schema";
import { EntityNotFoundException } from "../exceptions/entity-not-found.exception";
import { UpdateDashboardDto } from "./dto/update-dashboard.dto";
import { UpdateSocialsDto } from "./dto/update-socials.dto";
import { eq } from "drizzle-orm";

@Injectable()
export class ProfileService {
  constructor(@Inject(DRIZZLE_ORM) private readonly _drizzle: Drizzle) {}

  async findByProfileUsername(username: string) {
    const existingUser = await this._drizzle.query.user.findFirst({
      where: eq(user.username, username),
      with: {
        profile: {
          with: {
            socials: true,
          },
        },
      },
      columns: {
        password: false,
      },
    });
    if (!existingUser) {
      throw new EntityNotFoundException();
    }
    return existingUser;
  }

  async findProfileByUserId(userId: string) {
    const existingUser = await this._drizzle.query.user.findFirst({
      where: eq(user.id, userId),
      with: {
        profile: {
          with: {
            socials: true,
          },
        },
      },
      columns: {
        password: false,
      },
    });

    if (!existingUser) {
      throw new EntityNotFoundException();
    }

    return existingUser;
  }

  async updateDashboard(userId: string, updateDashboard: UpdateDashboardDto) {
    const existingUser = await this._drizzle.query.user.findFirst({
      where: eq(user.id, userId),
      with: {
        profile: true,
      },
      columns: {
        password: false,
      },
    });
    if (!existingUser) {
      throw new EntityNotFoundException();
    }

    return (
      await this._drizzle
        .update(profile)
        .set(updateDashboard)
        .where(eq(profile.id, existingUser.profile.id))
        .returning()
    )[0];
  }

  async updateSocials(userId: string, updateSocials: UpdateSocialsDto) {
    console.log(updateSocials);
    const exisitingUser = await this._drizzle.query.user.findFirst({
      where: eq(user.id, userId),
      columns: {
        password: false,
      },
      with: {
        profile: true,
      },
    });
    if (!exisitingUser) {
      throw new EntityNotFoundException();
    }

    const userProfile = await this._drizzle.query.profile.findFirst({
      where: eq(profile.id, exisitingUser.profile.id),
      with: {
        socials: true,
      },
    });
    if (!userProfile) {
      throw new EntityNotFoundException();
    }

    return (
      await this._drizzle
        .update(socials)
        .set(updateSocials)
        .where(eq(socials.id, userProfile.socials.id))
        .returning()
    )[0];
  }
}
