import { User } from './../users/interfaces/user.interface';
import { USER_IDS_ROASTERS } from './../users/mock';
import { Injectable } from '@nestjs/common';
import { Roaster } from './interfaces/roaster.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from 'src/users/users.service';
import { selectWithoutPassword } from 'src/utils/utils';

@Injectable()
export class RoasterService {
    constructor(
        @InjectModel('Roaster') private readonly roasterModel: Model<Roaster>,
        private readonly usersService: UsersService
        ) { }

    async findAll(): Promise<any[]> {
        return await this.roasterModel.find().populate({
            path:'users',
            select: selectWithoutPassword
       });
    }

    async findTeamRoasters(user: User): Promise<Roaster[]> {
        const dbUser = await this.usersService.findById(user.id);
        const teamMembers = await this.usersService.findTeamMembers(dbUser.teamId);
        const teamIds = teamMembers.map(member => member.id)
        const teamRoasters = await this.roasterModel.find({ 'users': {"$in" : teamIds}}).populate({
            path:'users',
            select: selectWithoutPassword
        })
        return teamRoasters;
    }

    async findByUser(id: string): Promise<Roaster[]> {
        return this.roasterModel.find({ 'users': {"$in" : [id]}}).populate({
            path:'users',
            select: selectWithoutPassword
       })
    }

    async updateOrRemove(dates: any, user: User):  Promise<any> {
        try { 
            dates.datesToAdd.map(async (date) => {
                await this.roasterModel.updateOne(
                    { "date": date },
                    { $addToSet: { "users": user.id }},
                    { upsert: true, new: true }
                )
            })
            dates.datesToRemove.map(async (date) => {
                await this.roasterModel.updateOne(
                    { "date": date },
                    { "$pull": { "users": user.id }},
                    { upsert: false, multi: true },
                )
            })  
        } 
        catch (e) {
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
