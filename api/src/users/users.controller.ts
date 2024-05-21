import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async create(
    @Body()
    createUserDto: {
      username: string;
      password: string;
      displayName: string;
      role: string;
    },
  ) {
    return this.usersService.create(
      createUserDto.username,
      createUserDto.password,
      createUserDto.displayName,
      createUserDto.role,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findById(id);
  }
}
