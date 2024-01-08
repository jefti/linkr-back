import { Request, Response } from 'express';
import httpStatus from 'http-status';

function healthFunction(req: Request, res: Response) {
  res.status(httpStatus.OK).send('The application is up and running.');
}

export const healthController = { healthFunction };
