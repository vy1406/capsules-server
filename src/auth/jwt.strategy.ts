import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'SECRET', // ENV
            ignoreExpiration: false,
        })
    }

    async validate(payload: any) {
        console.log("   ")
        console.log(payload)
        // const user = await this.usersService.getById(payload.sub)
        // will be saved in request.user
        return {
            id: payload.sub,
            username: payload.username
        }
    }
}