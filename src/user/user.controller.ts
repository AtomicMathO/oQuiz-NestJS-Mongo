import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id): Promise<User> {
    return this.userService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateUserDto: UserDto,
    @Param('id', ParseIntPipe) id,
  ): Promise<User> {
    return this.userService.update(id, updateUserDto);
  }
}
