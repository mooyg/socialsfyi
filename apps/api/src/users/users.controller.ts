import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  NotFoundException,
  UseGuards,
  Req,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { Request } from 'express'
import { User } from '@prisma/client'
import { AuthenticatedGuard } from 'src/auth/guards/is-authenticated.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}
  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this._usersService.create(createUserDto)
    } catch {
      throw new ConflictException()
    }
  }
  @Post('/me')
  @UseGuards(AuthenticatedGuard)
  async me(@Req() request: Request) {
    const reqUser = request.user as Omit<User, 'password'>
    return await this._usersService.findById(reqUser.id)
  }
  @Post('/me/discord')
  @UseGuards(AuthenticatedGuard)
  async meDiscord(@Req() request: Request) {
    const reqUser = request.user as Omit<User, 'password'>
    console.log(reqUser)
    return await this._usersService.findById(reqUser.id)
  }

  @Get()
  async findAll() {
    return await this._usersService.findAll()
  }

  @Get(':id')
  async findByID(@Param('id') id: string) {
    try {
      return await this._usersService.findById(id)
    } catch {
      throw new NotFoundException()
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this._usersService.remove(id)
  }

  @Post('/gen/api')
  @UseGuards(AuthenticatedGuard)
  async generateApiKey(@Req() request: Request) {
    return await this._usersService.generateApiKey(request.user.id)
  }
}
