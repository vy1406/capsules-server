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
    deleteTeam(@Param('id') id): Promise<Team> {
        return this.teamsService.deleteTeam(id);
    }

    @Put(':id')
    update(@Body() updateTeam: Team, @Param('id') id): Promise<Team> {
        return this.teamsService.update(id, updateTeam);
    }
}
