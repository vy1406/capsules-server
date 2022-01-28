import { UsersService } from 'src/users/users.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { TeamsService } from './teams/teams.service';
import { RoasterService } from './roasters/roaster.service';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly teamService: TeamsService,
    private readonly roasterService: RoasterService,
  ) {}

  @Get()
  getHello(): any {
    return {
      msg: "hello world"
    };
  }


  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user)
  }

  
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getProtected(): any {
    return {
      msg: "protected"
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('userdata')
  getUserData(@Request() req): any {
    return this.userService.getUserData(req.user)
  }


  @Get('all')
  getAll(@Request() req): any {
    return this.userService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post('add')
  addUser(@Request() req): any {
    console.log(process.env.MONGO)
    return {
      msg: "add user..."
    };
  }

  // @Get('populate_users')
  // popuplate(@Request() req): any {
  //   return this.userService.populateMock()
  // }

  // @Get('populate_roaster')
  // popuplateRoaster(@Request() req): any {
  //   return this.roasterService.populateMock()
  // }
}
