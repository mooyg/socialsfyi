import { CanActivate, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

export class IsAuthenticatedGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    return Boolean(context.switchToHttp().getRequest<Request>().user)
  }
}
