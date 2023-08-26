import { Inject, Injectable } from "@nestjs/common";
import { Drizzle } from "../types";
import { DRIZZLE_ORM } from "../constants";
import { eq } from "drizzle-orm";
import { profile, socials, user } from "@socialsfyi/drizzle/schema";
import { InsertUserSchema } from "@socialsfyi/drizzle/inserts/user";
import { hash } from "bcrypt";
import { EntityConflictException } from "../exceptions/entity-conflict.exception";
import { SelectUserSchema } from "@socialsfyi/drizzle";
@Injectable()
export class UserService {
  constructor(@Inject(DRIZZLE_ORM) private readonly _drizzle: Drizzle) {}
  async findOne(username: string) {
    return await this._drizzle.query.user.findFirst({
      where: eq(user.username, username),
    });
  }

  async findByUsername(username: string) {
    return await this._drizzle.query.user.findFirst({
      where: eq(user.username, username),
      columns: {
        password: false,
      },
    });
  }

  async createUser({
    email,
    password,
    username,
  }: InsertUserSchema): Promise<SelectUserSchema> {
    const hashedPassword = await hash(password, 10);

    try {
      await this._drizzle.transaction(async (tx) => {
        const { password, ...createdUser } = (
          await tx
            .insert(user)
            .values({
              email,
              password: hashedPassword,
              username,
            })
            .returning()
        )[0];
        const createdProfile = await tx
          .insert(profile)
          .values({
            userId: createdUser.id,
          })
          .returning();
        await tx.insert(socials).values({
          profileId: createdProfile[0].id,
        });
      });

      const createdUser = await this._drizzle.query.user.findFirst({
        where: eq(user.username, username),
        columns: {
          password: false,
        },
      });
      return createdUser!;
    } catch (e) {
      throw new EntityConflictException();
    }
  }
}
