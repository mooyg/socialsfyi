import { PassportStrategy } from "@nestjs/passport";
import { ENV } from "@socialsfyi/api/main";
import { Profile, Strategy } from "passport-discord";
import { Injectable } from "@nestjs/common";
import { Done } from "@socialsfyi/api/types";
import { UserService } from "@socialsfyi/api/user/user.service";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, "discord") {
  constructor(private readonly _userService: UserService) {
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
    const user = await this._userService.validateUser(profile);

    done(null, user);
  }
}
