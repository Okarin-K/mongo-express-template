import express from 'express';
import mongoose from 'mongoose';
import crypto from 'crypto';
import { createUsers, getAllUser } from './services/userService';
import { User } from './types/user';

// DBとの接続
const mongoDB = 'mongodb://okarin:password@127.0.0.1/';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('catch', console.error.bind(console, 'Mongo DB connection error.'));

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users', async (req, res, next) => {
    const response = await getAllUser();

    res.send(response);
});

app.post('/users', async (req, res, next) => {
    const body = req.body;

    console.log(body);

    const users: User[] = [
        {
            id: crypto.randomUUID(),
            mailAddress: body.mailAddress,
            password: body.password,
        },
    ];

    const response = await createUsers(users);

    res.send(response);
});

app.listen(3000, () => {
    console.log('Listening to server...');
});
