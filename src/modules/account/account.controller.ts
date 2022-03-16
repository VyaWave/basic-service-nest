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
  Response,
} from '@nestjs/common';

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

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    const password = md5(createAccountDto.password);

    return this.accountService.create({
      ...createAccountDto,
      password: password,
    });
  }

  @Post('login')
  login(@Body() account: LoginInterface) {
    const pass = md5(account.password);
    return this.accountService.findByEmail(account.email).then((account) => {
      if (account[0] && account[0].password == pass) {
        return true;
      } else {
        return false;
      }
    });
  }

  @Post('register')
  register(@Body() account: LoginInterface) {
    return this.create(account);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
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
