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
} from '@nestjs/common';

import { Response } from 'express';
import { setCookies, setHeaders } from '../../utils/index';

/* eslint-disable-next-line*/
const md5 = require('md5');

import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

import { LoginInterface } from '../interface/index';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Get()
  findAll(@Query() pager: { page: number; size: number }) {
    console.info('pager', pager);
    return this.accountService.findAll(pager);
  }

  @Redirect()
  redirectUrl(url: string) {
    console.info('222', url);
    return {
      url,
      statusCode: 302,
    };
  }

  @Post('login')
  login(
    @Body() account: LoginInterface,
    @Res({
      passthrough: true,
    })
    response: Response,
  ) {
    console.info('=========  account[0] =========', 1);

    const pass = md5(account.password);
    return this.accountService.findByEmail(account.email).then((account) => {
      if (account[0] && account[0].password == pass) {
        console.info('=========   account[0] =========', account[0]);

        setHeaders(response, {
          token: pass,
        });
        setCookies(response, {
          name: 'jiaweiya',
          userInfo: encodeURIComponent(JSON.stringify(account)),
        });

        this.redirectUrl('https://essay.weiya.design/');
        // response.location('https://essay.weiya.design/');
        // response.redirect(302, 'https://essay.weiya.design/');

        //   code: 200,
        //   msg: 'Login Success!',
        // });

        // response.status(200).send({});
      } else {
        return response.status(200).send({
          code: -1,
          msg: 'no valid account!',
        });
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
