import { Controller, Get, Res, Req, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    // 把原本由Nest处理的主页转交给next
    return (this as any).next.render('/index', req, res);
  }
}
