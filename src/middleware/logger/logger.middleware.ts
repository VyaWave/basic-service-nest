import { Request, Response } from 'express';
/* eslint-disable-next-line*/
const nodeLogColor = require('node-color-log');

export function logger(req: Request, res: Response, next: () => void): void {
  nodeLogColor.info(
    `======== [Request In] URL: ${req.url} Method: ${req.method} ========`,
  );

  next();

  nodeLogColor.info(
    `======== [Request Out] URL: ${req.url} Code: ${res.statusCode} Method: ${req.method}  ========`,
  );
}
