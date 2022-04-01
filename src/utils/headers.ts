import { Response } from 'express';

export const setHeaders = (
  res: Response,
  headers: { [key: string]: string },
): void => {
  Object.keys(headers).forEach((key) => {
    res.setHeader(key, headers[key]);
  });
};
