import { Inject, Injectable } from "@nestjs/common";
import { DRIZZLE_ORM } from "../constants";
import { user } from "../db/schema";
import { Drizzle } from "../types";

@Injectable()
export class AuthService {
  constructor(@Inject(DRIZZLE_ORM) private _drizzle: Drizzle) {}

  async getUsers() {
    return await this._drizzle.select().from(user);
  }
}
