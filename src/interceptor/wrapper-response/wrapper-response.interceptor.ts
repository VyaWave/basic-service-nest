// DOCS: NESTJS
// https://docs.nestjs.com/fundamentals/execution-context
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  BadGatewayException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { OopMethodKeyMap } from './oopWrapper';

@Injectable()
export class WrapperResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const methodNameKey: string = context.getHandler().name; // Function Name: "create"
    // const controllerClassName: string = context.getClass().name; // Controller Name: "CatsController"

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
          if (OopMethodKeyMap[methodNameKey]) {
            return data;
          } else {
            return {
              data: data,
              msg: 'success',
              code: 200,
            };
          }
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
