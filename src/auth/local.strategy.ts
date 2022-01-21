import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super(); // config will be here.
                 // for example "passport-facebook"
                 // https://www.passportjs.org/packages/passport-facebook/  --> look for passport.use(New ...)
    }

    async validate(username: string, password: string): Promise<any> {
        console.log('username,', username)
        console.log('password,', password)
        const user = await this.authService.validateUser(username, password);
        console.log('validate?: ', user)
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}