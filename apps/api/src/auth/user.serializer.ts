import { Injectable } from '@nestjs/common'
import { PassportSerializer } from '@nestjs/passport'
import { User } from '@prisma/client'
import { UsersService } from '../users/users.service'

@Injectable()
export class UserSerializer extends PassportSerializer {
  constructor(private readonly _userService: UsersService) {
    super()
  }

  serializeUser(user: User, done: Function) {
    done(null, user)
  }

  async deserializeUser(userRef: User, done: Function) {
    const user = await this._userService.findByEmail(userRef.email)

    delete user.password
    if (!user) {
      return done(`Could not deserialize user: user with ${userRef.email} could not be found`, null)
    }

    done(null, user)
  }
}
