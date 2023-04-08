// https://docs.nestjs.cn/8/controllers?id=%e8%b7%af%e7%94%b1
import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Body,
  Redirect,
} from '@nestjs/common';
import { Request } from 'express';
import { CommonService } from './common.service';
import { CommonInterface } from './common.interface';

@Controller('common')
export class CommonController {
  constructor(private Service: CommonService) {}

  @Get('all')
  @HttpCode(200)
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('calendar')
  @HttpCode(200)
  findCalendar(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Get('/index')
  @HttpCode(200)
  index(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post('create')
  @HttpCode(200)
  create(@Body() commonItem: CommonInterface): void {
    return this.Service.create(commonItem);
  }

  @Get('redirect')
  @Header('Cache-Control', 'none')
  @Redirect('https://nestjs.com', 302)
  redirect() {
    return ';;';
  }
}
