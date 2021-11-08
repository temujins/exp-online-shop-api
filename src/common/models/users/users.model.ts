import * as mongoose from 'mongoose';
import { IUser } from 'src/typings';

const usersSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true, unique: true },

    fullName: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    shopId: { type: String },

    shopName: { type: String },
  },
  { timestamps: true },
);

export const usersModel = mongoose.model<IUser>('users', usersSchema);
