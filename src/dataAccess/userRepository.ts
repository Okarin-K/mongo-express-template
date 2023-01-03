import { user } from '../models/userModel';
import { User } from '../types/user';

export const findAll = async () => {
    const users = user.find().lean().exec();

    return users;
};

export const insertMany = async (users: User[]) => {
    await user.insertMany(users);
};
