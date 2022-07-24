import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import bitcoin_routes from './routes/bitcoin';

const app = express();

dotenv.config();

/* app.use(bodyParser.json({ limit: "31mb", extended: true } as any));
app.use(bodyParser.urlencoded({ limit: "31mb", extended: true }));
app.use(cors()) */;

app.use('/bitcoin', bitcoin_routes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL as any)
    .then(() => app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`)))
    .catch((error) => console.log(error.message));