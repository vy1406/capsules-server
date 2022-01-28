import { Controller, Get, Post, Request, Delete, Put, Body, Param } from '@nestjs/common';
import { Team } from './interfaces/team.interface';
import { TeamsService } from './teams.service';

@Controller('team')
export class TeamsController {
    constructor(private readonly teamsService: TeamsService) {}

    @Get('read')
    findAll(): Promise<Team[]> {
        return this.teamsService.findAll();
    }

    @Post('create')
    addTeam(@Body() team: Team): Promise<Team> {
        return this.teamsService.addTeam(team);
    }

    @Delete(':id')
    deleteTeam(@Request() req): Promise<Team> {
        const team: Team = req.body;
        return this.teamsService.deleteTeam(team);
    }

    @Put(':id')
    update(@Body() updateTeam: Team, @Param('id') id): Promise<Team> {
        return this.teamsService.update(id, updateTeam);
    }
}
