import { PassportStrategy } from "@nestjs/passport";
import { ENV } from "@socialsfyi/api/main";
import { Profile, Strategy } from "passport-discord";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";
import { Done } from "@socialsfyi/api/types";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, "discord") {
  constructor(private readonly _authService: AuthService) {
    super({
      clientID: ENV.DISCORD_CLIENT_ID,
      clientSecret: ENV.DISCORD_CLIENT_SECRET,
      callbackURL: ENV.DISCORD_CALLBACK_URL,
      scope: ["identify", "email"],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done: Done
  ) {
    if (!profile.email) {
      throw new Error("No email provided by Discord");
    }
    const user = await this._authService.validateUser(profile);
    console.log(user, "DiscordStrategy");

    done(null, user);
  }
}
