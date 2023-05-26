import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request } from 'express'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly _usersService: UsersService) {}
  async canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest()
    const key = request.headers['x-api-key'] as string
    const userId = request.headers['user-id'] as string

    return this._usersService.isApiKeyValid(key, userId)
  }
}
