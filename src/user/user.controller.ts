import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/update-user.dto.js';
import { UpdateUserDto } from './dto/create-user.dto.js';
import { UserService } from './user.service.js';

//@Get('all)       //GET user/all
//@Get(':id')      //GET user/:id - dynamic segment
//@Post()          //POST /user
//@Put('/:id')     //PUT /user/:id
//@Delete('/:id')  //DELETE /user/:id

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user
  @Get()
  getUsers(@Query('name') name: string) {
    return this.userService.findAllUsers(name);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id, name: 'ana' };
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return { data: createUserDto, message: 'User created successfully' };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      data: { id, ...updateUserDto },
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    if (id) {
      return { message: 'deleted successfully' };
    }
    return { message: 'Fail' };
  }
}
