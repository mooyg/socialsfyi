import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { User } from "../db/schema";
import { Done } from "../types";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly _authService: AuthService) {
    super();
  }
  serializeUser(user: User, done: Done) {
    console.log(user, "serializedUser");
    done(null, user);
  }
  async deserializeUser(user: User, done: Done) {
    console.log(user, "deserializeUser");
    const userDB = await this._authService.findUser(user.id);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
