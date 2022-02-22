// https://docs.nestjs.cn/8/controllers?id=%e8%b7%af%e7%94%b1
import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Header,
  Redirect,
} from '@nestjs/common';
import { Request } from 'express';

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg" aria-label="Calendar" role="img" viewBox="0 0 512 512">
  <path d="M512 455c0 32-25 57-57 57H57c-32 0-57-25-57-57V128c0-31 25-57 57-57h398c32 0 57 26 57 57z" fill="#e0e7ec" />
  <path
    d="M484 0h-47c2 4 4 9 4 14a28 28 0 1 1-53-14H124c3 4 4 9 4 14A28 28 0 1 1 75 0H28C13 0 0 13 0 28v157h512V28c0-15-13-28-28-28z"
    fill="#dd2f45" />
  <g fill="#f3aab9">
    <circle cx="470" cy="142" r="14" />
    <circle cx="470" cy="100" r="14" />
    <circle cx="427" cy="142" r="14" />
    <circle cx="427" cy="100" r="14" />
    <circle cx="384" cy="142" r="14" />
    <circle cx="384" cy="100" r="14" />
  </g>
  <text id="month" x="32" y="164" fill="#fff" font-family="monospace" font-size="140px"
    style="text-anchor: left">$month</text>
  <text id="day" x="256" y="400" fill="#333" font-family="monospace" font-size="256px"
    style="text-anchor: middle">$day</text>
  <text id="weekday" x="256" y="480" fill="#66757f" font-family="monospace" font-size="64px"
    style="text-anchor: middle">$weekday</text>
</svg>
`;

@Controller('common')
export class CatsController {
  @Get('all')
  @HttpCode(200)
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post('create')
  @HttpCode(200)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('redirect')
  @Header('Cache-Control', 'none')
  @Redirect('https://nestjs.com', 302)
  redirect() {
    return ';;';
  }

  @Get('calendar')
  getCalendar() {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const weekday = new Date().getDay();

    const MonthMap = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    const WeekdayMap = [
      'Monday',
      'Tuesday',
      'Monday',
      'Wednesday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    const TPL = svgCode
      .replace(/\$month/g, MonthMap[month])
      .replace(/\$day/g, `${day}`)
      .replace(/\$weekday/g, WeekdayMap[weekday]);

    return TPL;
  }
}
