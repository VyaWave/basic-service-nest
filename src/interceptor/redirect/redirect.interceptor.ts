// DOCS: NESTJS
// https://docs.nestjs.com/fundamentals/execution-context
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
/**
 * INFO:
 * Scoped Redirect Interceptor
 * No Need Return any data in Use
 * @export
 * @class RedirectGetInterceptor
 * @implements {NestInterceptor}
 */
@Injectable()
export class RedirectGetInterceptor implements NestInterceptor {
  constructor(private readonly target: string) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse();
    response.redirect(this.target);

    return next.handle();
  }
}
