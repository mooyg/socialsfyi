import { PassportSerializer } from "@nestjs/passport";
import { User } from "../db/schema";
import { Done } from "../types";
import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly _userService: UserService) {
    super();
  }
  serializeUser(user: User, done: Done) {
    done(null, user);
  }
  async deserializeUser(user: User, done: Done) {
    const userDB = await this._userService.findUser(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
