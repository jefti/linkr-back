import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { CustomError } from '@/errors';

export function ErrorHandler(
  error: CustomError | Error,
  req: Request,
  res: Response,
  next: NextFunction, // eslint-disable-line @typescript-eslint/no-unused-vars
) {
  if ('statusCode' in error && 'message' in error) {
    return res.status(error.statusCode).send(error.message);
  } else {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Erro interno do servidor' });
  }
}
