import { Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { user } from "@socialsfyi/api/db/schema";
import { ENV } from "@socialsfyi/api/main";
import { Drizzle } from "@socialsfyi/api/types";
import { eq } from "drizzle-orm";
import { Profile, Strategy } from "passport-discord";

export class DiscordStrategy extends PassportStrategy(Strategy, "discord") {
  constructor(private readonly _drizzle: Drizzle) {
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
    cb: (err: Error | null, profile?: Profile) => void
  ) {
    try {
      if (!profile.email) {
        throw new Error("No email provided by Discord");
      }
      const userExists = await this._drizzle
        .selectDistinct()
        .from(user)
        .where(eq(user.email, profile.email));
      Logger.log("THE USER EXISTS", userExists);
      cb(null, profile);
    } catch (e) {}
  }
}
