import { DUMMY_USERS } from './mock';
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DUMMY_USERS as mockUsers, DUMMY_USER_DATA as userData } from '../users/mock';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async findAll(): Promise<any[]> {
        return await this.userModel.find().populate("teamId");
    }

    async findOne(username: string): Promise<User | undefined> {
        return mockUsers.find(user => user.username === username);
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

    async update(id: string, team: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, team, { new: true });
    }

    async populateMock(): Promise<User[]> {
        return await this.userModel.create([])
    }
    
}
