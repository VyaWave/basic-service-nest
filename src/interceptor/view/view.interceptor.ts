import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  BadGatewayException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/**
 *
 * Scoped View Return Interceptor
 * Return tpl
 *  WARNING: But Execution before Global
 * @export
 * @class ViewInterceptor
 * @implements {NestInterceptor}
 */
@Injectable()
export class ViewInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((value) => {
          console.info('=========  value  =========', value);
          return value;
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
