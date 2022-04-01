import { RedirectGetInterceptor } from './redirect.interceptor';

describe('WrapperResponseInterceptor', () => {
  it('should be defined', () => {
    expect(new RedirectGetInterceptor('')).toBeDefined();
  });
});
