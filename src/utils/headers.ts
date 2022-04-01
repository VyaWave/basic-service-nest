import { Response } from 'express';

export const setHeaders = (
  res: Response,
  headers: { [key: string]: string },
): void => {
  console.info('========= res   =========');
  Object.keys(headers).forEach((key) => {
    res.setHeader(key, headers[key]);
  });
};
