import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  BadGatewayException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class WrapperResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((value) => {
          return value;
        }),
      )
      .pipe(
        map((value) => (value === null ? '' : value)), // null ==> ''
      )
      .pipe(
        map((data) => {
          return {
            data: data,
            msg: 'success',
            code: 200,
          };
        }),
      )
      .pipe(
        catchError((err) => {
          console.info('error', err);
          return throwError(() => new BadGatewayException(err)); // Error Catch
        }),
      );
  }
}
