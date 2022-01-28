import { Injectable, Body, Param } from '@nestjs/common';
import { Team } from './interfaces/team.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TeamsService {
    constructor(@InjectModel('Team') private readonly teamModel: Model<Team>) { }

    async findAll(): Promise<any[]> {
        return await this.teamModel.find();
    }

    async addTeam(team: Team): Promise<any> {
        return await this.teamModel.create(team)
    }

    async deleteTeam(id): Promise<any> {
        return await this.teamModel.deleteOne(id)
    }

    async update(id: string, team: Team): Promise<Team> {
        return await this.teamModel.findByIdAndUpdate(id, team, { new: true });
    }
}
