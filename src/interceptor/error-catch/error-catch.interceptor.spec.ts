import { ErrorsInterceptor } from './error-catch.interceptor';

describe('ErrorCatchInterceptor', () => {
  it('should be defined', () => {
    expect(new ErrorsInterceptor()).toBeDefined();
  });
});
