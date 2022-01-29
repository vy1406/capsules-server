import { User } from './../users/interfaces/user.interface';
import { USER_IDS_ROASTERS } from './../users/mock';
import { Injectable } from '@nestjs/common';
import { Roaster } from './interfaces/roaster.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RoasterService {
    constructor(@InjectModel('Roaster') private readonly roasterModel: Model<Roaster>) { }



    async findAll(): Promise<any[]> {
        return await this.roasterModel.find().populate({
            path:'users',
            select:'id username color isTeamLeader teamId'
       });
    }

    async findByUser(id: string): Promise<Roaster[]> {
        return this.roasterModel.find({ "$in" : [id]}).populate({
            path:'users',
            select:'id username color isTeamLeader teamId'
       })
    }

    async updateOrRemove(dates: any, user: User):  Promise<any> {
        const conditionsToAdd = {
            'users': { $ne: user.id }
        }
        const conditionsToRemove = {
            'users': { $in: user.id }
        }
        try { 
            dates.datesToAdd.map(async (date) => {
                await this.roasterModel.findOneAndUpdate(conditionsToAdd, { date, $addToSet: { users: user.id } }, { upsert: true })
            })
            dates.datesToRemove.map(async (date) => {
                await this.roasterModel.findOneAndUpdate(conditionsToRemove, { date, $pull: { users: user.id }}, { safe: true, multi:true })
            })  
        } 
        catch (e) {
            console.log(e)
            return false
        }
        finally {
            return true
        }
    }
    async addRoaster(dates: Date[], user: User):  Promise<any> {
        // const stringDates = this.datesToString(dates);
        // const conditions = {
        //     'users': { $ne: user.id }
        // }
        // try { 
        //     stringDates.map(async (date) => {
        //         await this.roasterModel.findOneAndUpdate(conditions, { date, $addToSet: { users: user.id } }, { upsert: true })
        //     })
        // } 
        // catch (e) {
        //     return false
        // }
        // finally {
        //     return true
        // }
        return null;
    }

    async deleteRoaster(id): Promise<any> {
        return await this.roasterModel.findByIdAndRemove(id)
    }

    async update(id: string, team: Roaster): Promise<Roaster> {
        return await this.roasterModel.findByIdAndUpdate(id, team, { new: true });
    }
    
    async populateMock(): Promise<Roaster[]> {
        return await this.roasterModel.create(USER_IDS_ROASTERS);
    }
}
