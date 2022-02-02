import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, Post, Request, Delete, Put, Body, Param, UseGuards } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    constructor(private readonly usersSevice: UsersService) {}

    @Get('read')
    findAll(): Promise<User[]> {
        return this.usersSevice.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    addTeam(@Body() user: User): Promise<User> {
        return this.usersSevice.addUser(user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('TEAMMATES')
    findTeammembers(@Request() req): Promise<User[]> {
        return this.usersSevice.findTeammates(req.user.id);
    }


    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteTeam(@Param('id') id): Promise<User> {
        return this.usersSevice.deleteUser(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('update')
    update(@Body() updatedUser: User): Promise<User> {
        return this.usersSevice.update(updatedUser);
    }
}
