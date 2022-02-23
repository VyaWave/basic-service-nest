import { LoggerService } from '@nestjs/common';

export class Logger implements LoggerService {
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    console.log(`===== [Log log] ==== ${message}`);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    console.error(`===== [Log Error] ==== ${message}`);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    console.warn(`===== [Log Error] ==== ${message}`);
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    console.debug(`===== [Log Error] ==== ${message}`);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    console.info(`===== [Log Error] ==== ${message}`);
  }
}
