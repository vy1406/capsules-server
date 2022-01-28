import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, Post, Request, Delete, Put, Body, Param, UseGuards } from '@nestjs/common';
import { Roaster } from './interfaces/roaster.interface';
import { RoasterService } from './roaster.service';

@Controller('roaster')
export class RoastersController {
    constructor(private readonly roasterService: RoasterService) {}

    @Get('read')
    findAll(): Promise<Roaster[]> {
        return this.roasterService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    addTeam(@Body() team: Roaster): Promise<Roaster> {
        return this.roasterService.addTeam(team);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteTeam(@Param('id') id): Promise<Roaster> {
        return this.roasterService.deleteTeam(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Body() updateTeam: Roaster, @Param('id') id): Promise<Roaster> {
        return this.roasterService.update(id, updateTeam);
    }
}
