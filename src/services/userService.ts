import { findAll, insertMany } from '../dataAccess/userRepository';
import { User } from '../types/user';

export const getAllUser = async () => {
    const users = await findAll();

    return {
        data: users,
        results: {
            code: 200,
            message: 'Success',
        },
    };
};

export const createUsers = async (users: User[]) => {
    await insertMany(users);

    return {
        data: {},
        results: {
            code: 200,
            message: 'Success',
        },
    };
};
