import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import './db/index.js';
import router from './routers/AuthRouter.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(router);

    
app.listen(PORT, () => {
    console.log("Server listens on port", PORT);
});
