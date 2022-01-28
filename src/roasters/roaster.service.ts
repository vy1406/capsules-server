import { USER_IDS_ROASTERS } from './../users/mock';
import { Injectable } from '@nestjs/common';
import { Roaster } from './interfaces/roaster.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoasterService {
    constructor(@InjectModel('Roaster') private readonly roasterModel: Model<Roaster>) { }

    async findAll(): Promise<any[]> {
        return await this.roasterModel.find().populate("users");
    }

    async addTeam(team: Roaster): Promise<any> {
        return await this.roasterModel.create(team)
    }

    async deleteTeam(id): Promise<any> {
        return await this.roasterModel.findByIdAndRemove(id)
    }

    async update(id: string, team: Roaster): Promise<Roaster> {
        return await this.roasterModel.findByIdAndUpdate(id, team, { new: true });
    }
    
    async populateMock(): Promise<Roaster[]> {
        return await this.roasterModel.create(USER_IDS_ROASTERS);
    }
}
