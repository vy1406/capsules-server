import { Controller, Get, Post, Request, Delete, Put, Body, Param } from '@nestjs/common';
import { Roaster } from './interfaces/roaster.interface';
import { RoasterService } from './roaster.service';

@Controller('roaster')
export class RoastersController {
    constructor(private readonly roasterService: RoasterService) {}

    @Get('read')
    findAll(): Promise<Roaster[]> {
        return this.roasterService.findAll();
    }

    @Post('create')
    addTeam(@Body() team: Roaster): Promise<Roaster> {
        return this.roasterService.addTeam(team);
    }

    @Delete(':id')
    deleteTeam(@Param('id') id): Promise<Roaster> {
        return this.roasterService.deleteTeam(id);
    }

    @Put(':id')
    update(@Body() updateTeam: Roaster, @Param('id') id): Promise<Roaster> {
        return this.roasterService.update(id, updateTeam);
    }
}
