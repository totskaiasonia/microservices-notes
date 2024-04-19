import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose
    .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rqnmipt.mongodb.net/`)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB error", err));