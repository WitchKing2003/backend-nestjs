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

//@Get('all)       //GET user/all
//@Get(':id')      //GET user/:id - dynamic segment
//@Post()          //POST /user
//@Put('/:id')     //PUT /user/:id
//@Delete('/:id')  //DELETE /user/:id
@Controller('user')
export class UserController {
  // GET /user
  @Get()
  //   getUser() {
  //     return [
  //       { id: 1, name: 'John doe' },
  //       { id: 1, name: 'John dan' },
  //     ];
  //   }
  getUser(@Query('name') name: string) {
    const users = [
      {
        id: 1,
        name: 'doe',
      },
      { id: 1, name: 'dan' },
    ];

    if (name) {
      return users.filter((user) =>
        user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()),
      );
    }
    return users;
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
