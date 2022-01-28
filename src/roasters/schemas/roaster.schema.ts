import * as mongoose from 'mongoose';

export const RoasterSchema = new mongoose.Schema({
    date: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
});