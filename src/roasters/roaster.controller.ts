import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { Controller, Get, Post, Request, Delete, Put, Body, Param, UseGuards } from '@nestjs/common';
import { Roaster } from './interfaces/roaster.interface';
import { RoasterService } from './roaster.service';

@Controller('roaster')
export class RoastersController {
    constructor(private readonly roasterService: RoasterService) {}

    
    
    @Get('all')
    findAll(): Promise<Roaster[]> {
        return this.roasterService.findAll();
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('read')
    getUserRoaster(@Request() req): Promise<Roaster[]> {
        console.log(req.user)
        return this.roasterService.findByUser(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    addRoaster(@Body() body: any, @Request() req): Promise<Roaster> {
        return this.roasterService.addRoaster(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('updateOrRemove')
    updateOrRemove(@Body() body: any, @Request() req): Promise<Roaster> {
        return this.roasterService.updateOrRemove(body, req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteTeam(@Param('id') id): Promise<Roaster> {
        return this.roasterService.deleteRoaster(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Body() updateTeam: Roaster, @Param('id') id): Promise<Roaster> {
        return this.roasterService.update(id, updateTeam);
    }
}
