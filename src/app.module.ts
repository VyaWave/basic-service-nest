// https://docs.nestjs.cn/8/techniques?id=%e6%95%b0%e6%8d%ae%e5%ba%93
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule, CommonModule } from './modules/index';
import { AllExceptionsFilter } from './filters/any-exception/any-exception.filter';
import config from './config/index';

const mysqlCfg = config.mysql;
@Module({
  imports: [TypeOrmModule.forRoot(mysqlCfg), CommonModule, UsersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
