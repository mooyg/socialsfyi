import { Inject, Injectable } from "@nestjs/common";
import { Drizzle } from "../types";
import { Profile } from "passport-discord";
import { User, users } from "../db/schema";
import { eq } from "drizzle-orm";
import { DRIZZLE_ORM } from "@socialsfyi/api/constants";

@Injectable()
export class AuthService {
  constructor(@Inject(DRIZZLE_ORM) private readonly _drizzle: Drizzle) {}

  async validateUser(profile: Profile): Promise<User> {
    const { id: discordId, username, email } = profile;
    const isUser = await this._drizzle.query.users.findFirst({
      where: eq(users.discordId, discordId),
    });
    if (!isUser) {
      return (
        await this.createUser({
          discordId,
          name: username,
          email: email!,
        })
      )[0];
    } else {
      return isUser;
    }
  }

  async createUser({
    discordId,
    name,
    email,
  }: {
    discordId: string;
    name: string;
    email: string;
  }): Promise<User[]> {
    return await this._drizzle
      .insert(users)
      .values({
        discordId: discordId,
        name,
        email,
      })
      .returning();
  }
  async findUser(discordId: string) {
    return await this._drizzle.query.users.findFirst({
      where: eq(users.discordId, discordId),
    });
  }
}
