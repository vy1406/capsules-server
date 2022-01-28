import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team'},
    color: String,
    isTeamLeader: Boolean,
});