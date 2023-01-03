import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        id: String,
        mailAddress: String,
        password: String,
    },
    { timestamps: true }
);

export const user = mongoose.model('user', userSchema);
