import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { User } from "../db/schema";
import { Done } from "../types";

export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }
  serializeUser(user: User, done: Done) {
    done(null, user);
  }
  async deserializeUser(user: User, done: Done) {
    const userDB = await this.authService.findUser(user.discordId);
    return userDB ? done(null, userDB) : done(null, null);
  }
}
