import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _authService: AuthService) {
    super();
  }

  async validate(username: string, password: string, done: any) {
    try {
      const user = await this._authService.validateUser(username, password);
      if (!user) {
        return done(null, false, {
          message: "Incorrect username or password.",
        });
      }
      return done(null, user);
    } catch (e) {
      done(e);
    }
  }
}
