import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        if (user && user.password === password) {
            const { password, ...rest } = user;
            return rest;
        }

        return null;
    }

    async login(user: User) {

        const payload = { username: user.username, sub: user.id };
        const token = await this.jwtService.sign(payload)
        const logged_user = await this.usersService.findById(user.id);

        return {
            token,
            logged_user
        }
    }
}
