import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _authService: AuthService) {
    super({
      usernameField: 'email',
    })
  }

  async validate(email: string, password: string, done: Function): Promise<any> {
    try {
      const user = await this._authService.signIn({
        email,
        password,
      })
      if (!user) {
        throw new UnauthorizedException()
      }
      return done(null, user)
    } catch (e) {
      done(e, null)
    }
  }
}
