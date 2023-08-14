import { Inject, Injectable } from "@nestjs/common";
import { Drizzle } from "../types";
import { DRIZZLE_ORM } from "../constants";
import { eq } from "drizzle-orm";
import { User, users } from "../db/schema";
import { Profile } from "passport-discord";
import { EntityNotFoundException } from "../exceptions/entity-not-found.exception";

@Injectable()
export class UserService {
  constructor(@Inject(DRIZZLE_ORM) private readonly _drizzle: Drizzle) {}
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
  async findUser(id: string) {
    const user = await this._drizzle.query.users.findFirst({
      where: eq(users.id, id),
    });
    if (!user) {
      throw new EntityNotFoundException();
    }
    return user;
  }

  async me(id: string) {
    const user = await this.findUser(id);
    return user;
  }
}
