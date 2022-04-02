import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Res,
  Redirect,
  UseInterceptors,
} from '@nestjs/common';

import { Response } from 'express';
import { setCookies, setHeaders } from '../../utils/index';

/* eslint-disable-next-line*/
const md5 = require('md5');

import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

import { LoginInterface } from '../interface/index';

import { RedirectGetInterceptor } from '../../interceptor/index';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('dec-redirect')
  @Redirect('//essay.weiya.design', 302)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  redirectUrl(): void {}

  @Get('inter-redirect')
  @UseInterceptors(new RedirectGetInterceptor('//lofter.com'))
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  redirectInter(@Res() res): void {}

  @Get('manu-redirect')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  testRedirect(
    @Res()
    response: Response,
  ) {
    console.info('manu-redirect');
    setHeaders(response, {
      token: 'token',
    });
    setCookies(response, {
      name: 'jiaweiya',
      userInfo: encodeURIComponent(JSON.stringify({})),
    });
    response.setHeader('Location', '//essay.weiya.design');
    response.status(302);
    response.end();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Get()
  findAll(@Query() pager: { page: number; size: number }) {
    console.info('pager', pager);
    return this.accountService.findAll(pager);
  }

  @Post('login')
  login(@Body() account: LoginInterface) {
    const pass = md5(account.password);
    return this.accountService.findByEmail(account.email).then((account) => {
      if (account[0] && account[0].password == pass) {
        return {
          code: 200,
          msg: 'login success!',
          account: account,
          nextUrl: 'https://essay.weiya.design',
        };
      } else {
        return {
          code: -1,
          msg: 'no valid account!',
          account: account,
        };
      }
    });
  }

  @Post('register')
  register(@Body() account: LoginInterface) {
    console.info('=========    account[0] =========', 1);

    return this.accountService.create(account);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    console.info('=========    account[0] =========', 1);

    return this.accountService.update(+id, updateAccountDto);
  }

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    console.info('=========   * account[0] =========', 1);

    const password = md5(createAccountDto.password);

    return this.accountService.create({
      ...createAccountDto,
      password: password,
    });
  }

  @Patch(':id')
  patchUpdate(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
