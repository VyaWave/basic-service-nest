import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
} from '@nestjs/common';
import { ViewsService } from './views.service';
import { CalendarSvgCode } from './tpls';

@Controller('views')
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) {}

  @Get('form-test')
  testForm() {
    return `<form action="/api/account/login" method="post">
    <input id="email" name='email' placeholder="email"/>
    <input id="password"  name='password' placeholder="password"/>
    <button type='submit'>提交</button>
    </form>`;
  }

  @Get('calendar')
  @Header('Cache-Control', 'none')
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

    const TPL = CalendarSvgCode.replace(/\$month/g, MonthMap[month])
      .replace(/\$day/g, `${day}`)
      .replace(/\$weekday/g, WeekdayMap[weekday]);

    return TPL;
  }
}
