import { Inject, Injectable } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { Drizzle } from "../types";
import { eq } from "drizzle-orm";
import { profile, user } from "@socialsfyi/drizzle/schema";
import { EntityNotFoundException } from "../exceptions/entity-not-found.exception";
import { UpdateDashboardDto } from "./dto/update-dashboard.dto";
import { UploadService } from "../upload/upload.service";

@Injectable()
export class ProfileService {
  constructor(
    @Inject(DRIZZLE_ORM) private readonly _drizzle: Drizzle,
    private readonly _upload: UploadService
  ) {}

  async findProfileByUserId(userId: string) {
    const userProfile = await this._drizzle.query.user.findFirst({
      where: eq(user.id, userId),
      with: {
        profile: true,
      },
      columns: {
        password: false,
      },
    });
    if (!userProfile) {
      throw new EntityNotFoundException();
    }
    return userProfile;
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

    return await this._drizzle
      .update(profile)
      .set({
        ...updateDashboard,
      })
      .where(eq(profile.id, existingUser.profile.id))
      .returning();
  }
}
