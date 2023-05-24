import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma'
import { SignInUserDto } from './dto/sign-in-user.dto'
import { UsersService } from 'src/users/users.service'
import { compare } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private readonly _usersService: UsersService) {}

  async signIn(signInUserDto: SignInUserDto) {
    const user = await this._usersService.findByEmail(signInUserDto.email)
    if (!user) {
      throw new Error('No user found')
    }
    const isPasswordCorrect = await compare(signInUserDto.password, user.password)
    if (!isPasswordCorrect) {
      throw new Error('Incorrect password')
    }
    delete user.password
    return user
  }
}
