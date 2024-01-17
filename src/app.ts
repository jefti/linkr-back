import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { ErrorHandler } from '@/middlewares';
import { healthRouter, postRouter } from '@/routes';

const app = express();

app.use(json());
app.use(cors());
app.use(healthRouter);
app.use(postRouter);
app.use(ErrorHandler);

export default app;
