import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import './database';
import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };
