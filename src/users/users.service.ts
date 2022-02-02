import { DUMMY_USERS } from './mock';
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DUMMY_USERS as mockUsers, DUMMY_USER_DATA as userData } from '../users/mock';
import { selectWithoutPassword } from 'src/utils/utils';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async findAll(): Promise<any[]> {
        return await this.userModel.find().populate("teamId");
    }

    async findOne(username: string): Promise<User | undefined> {
        return mockUsers.find(user => user.username === username);
    }

    
    async findTeammates(id: string): Promise<User[] | undefined> {
        const foundUser = await this.userModel.findById(id)
        return this.findTeamMembers(foundUser.teamId);
    }

    async findTeamMembers(teamId: string): Promise<User[] | undefined> {
        return this.userModel.find({ teamId}).select(selectWithoutPassword);
    }

    async findById(id: string): Promise<User | undefined> {
        return mockUsers.find(user => user.id === id);
    }

    async getUserData(user: User): Promise<any> {
        return userData
    }

    async addUser(user: User): Promise<User> {
        return await this.userModel.create(user)
    }

    async deleteUser(id: string): Promise<User> {
        return await this.userModel.findByIdAndRemove(id)
    }

    async update(updatedUser: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate({ _id: updatedUser.id} , updatedUser, { new: true });
    }

    async populateMock(): Promise<User[]> {
        return await this.userModel.create([])
    }
    
}
