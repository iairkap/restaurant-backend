import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Req,
  UnauthorizedException,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { Request } from 'express';
import { NotFoundException } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
  @Get('email/:email')
  findByEmail(@Param('email') email: string, @Req() req: Request) {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.userService.findByEmail(email);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
  @Patch(':uid')
  async updateName(
    @Param('uid') uid: string,
    @Body() { name }: { name: string },
  ) {
    const updateResult = await this.userService.updateName(uid, name);
    if (updateResult.affected === 0) {
      throw new NotFoundException(`User with ID ${uid} not found`);
    }
    return { message: 'User name updated successfully' }; // Respuesta explícita
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
