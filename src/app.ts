import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { ErrorHandler } from '@/middlewares';
import { healthRouter } from '@/routes';

const app = express();

app.use(json());
app.use(cors());
app.use(healthRouter);
app.use(ErrorHandler);

export default app;
