import { Response } from 'express';

export const setCookies = (
  res: Response,
  cookies: { [key: string]: string },
): void => {
  Object.keys(cookies).forEach((key) => {
    res.cookie(key, cookies[key], {
      maxAge: 48 * 3600 * 1000,
      httpOnly: false,
    });
  });
};
