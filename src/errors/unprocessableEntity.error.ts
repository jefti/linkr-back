import httpStatus from 'http-status';
import { CustomError } from './customError.error';

export function unprocessableEntityError(message: string) {
  return new CustomError(httpStatus.UNPROCESSABLE_ENTITY, message);
}
