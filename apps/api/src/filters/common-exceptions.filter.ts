import {
  ArgumentsHost,
  ConflictException,
  ExceptionFilter,
  NotFoundException,
} from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { EntityNotFoundException } from "../exceptions/entity-not-found.exception";
import { EntityConflictException } from "../exceptions/entity-conflict.exception";

export class CommonExceptionsFilter
  extends BaseExceptionFilter
  implements ExceptionFilter
{
  catch(exception: any, host: ArgumentsHost) {
    switch (true) {
      case exception instanceof EntityNotFoundException: {
        return super.catch(new NotFoundException(exception.message), host);
      }
      case exception instanceof EntityConflictException: {
        return super.catch(new ConflictException(exception.message), host);
      }
      default: {
        return super.catch(exception, host);
      }
    }
  }
}
