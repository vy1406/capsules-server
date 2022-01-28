import { Controller, Get, Post, Request, Delete, Put, Body, Param } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly usersSevice: UsersService) {}

    @Get('read')
    findAll(): Promise<User[]> {
        return this.usersSevice.findAll();
    }

    @Post('create')
    addTeam(@Body() user: User): Promise<User> {
        return this.usersSevice.addUser(user);
    }

    @Delete(':id')
    deleteTeam(@Param('id') id): Promise<User> {
        return this.usersSevice.deleteUser(id);
    }

    @Put(':id')
    update(@Body() updateUser: User, @Param('id') id): Promise<User> {
        return this.usersSevice.update(id, updateUser);
    }
}
