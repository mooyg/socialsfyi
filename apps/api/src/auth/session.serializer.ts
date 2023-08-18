import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { Done, User } from "../types";
import { UserService } from "../user/user.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly _userService: UserService) {
    super();
  }
  serializeUser(user: User, done: Done) {
    return done(null, {
      email: user.email,
      id: user.id,
      username: user.username,
    });
  }
  async deserializeUser(user: User, done: Done) {
    const userDb = await this._userService.findByUsername(user.username);
    return userDb ? done(null, userDb) : done(null, null);
  }
}
