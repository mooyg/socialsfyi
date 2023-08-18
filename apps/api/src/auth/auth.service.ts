import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { compare } from "bcrypt";
import { InsertUserSchema } from "@socialsfyi/drizzle/inserts/user";
@Injectable()
export class AuthService {
  constructor(private readonly _userService: UserService) {}

  async validateUser(username: string, inputPassword: string) {
    const user = await this._userService.findOne(username);
    if (user && (await compare(inputPassword, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async createUser({ email, password, username }: InsertUserSchema) {
    return await this._userService.createUser({ email, password, username });
  }
}
