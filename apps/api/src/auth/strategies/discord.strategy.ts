import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-discord'
import { config } from 'dotenv'
import { DiscordProfile } from 'src/types'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
config()

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
  constructor(private readonly _usersService: UsersService) {
    super({
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL,
      scope: process.env.DISCORD_SCOPES.split(' '),
      sessions: true,
      successRedirect: 'http://localhost:8000/dashboard',
    })
  }
  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: DiscordProfile,
    done: Function
  ) {
    try {
      const user = await this._usersService.findByDiscordId(profile.id)
      if (!user) {
        const createdUser = await this._usersService.createDiscordUser({
          discordId: profile.id,
          email: profile.email,
          discordUsername: profile.username,
        })
        done(null, createdUser)
      } else {
        done(null, user)
      }
    } catch (e) {
      done(e, null)
    }
  }
}
