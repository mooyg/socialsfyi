import { Inject, Injectable } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { Drizzle } from "../types";
import { eq } from "drizzle-orm";
import { user } from "@socialsfyi/drizzle/schema";
import { EntityNotFoundException } from "../exceptions/entity-not-found.exception";

@Injectable()
export class ProfileService {
  constructor(@Inject(DRIZZLE_ORM) private readonly _drizzle: Drizzle) {}

  async findProfileByUserId(id: string) {
    const userProfile = await this._drizzle.query.user.findFirst({
      where: eq(user.id, id),
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
  async updateDashboard() {}
}
