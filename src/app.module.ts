// https://docs.nestjs.cn/8/techniques?id=%e6%95%b0%e6%8d%ae%e5%ba%93
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_PIPE, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { UsersModule, CommonModule, AccountModule } from './modules/index';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { AllExceptionsFilter } from './filters/any-exception/any-exception.filter';
import { ValidatePipe } from './pipe/index';
import { WrapperResponseInterceptor } from './interceptor/index';
import { ViewsModule } from './modules/views/views.module';

import config from './config/index';

const mysqlCfg = config.mysql;
@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlCfg),
    CommonModule,
    UsersModule,
    AccountModule,
    ViewsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
    {
      provide: APP_PIPE,
      useClass: ValidatePipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: WrapperResponseInterceptor,
    },
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}

  // 注意：这里很重要，_next*是nextjs静态资源请求的前缀，这里这么处理是将静态资源相关的请求由Nest转交个Next处理
  // private static handleAssets(consumer: MiddlewareConsumer): void {
  //   consumer.apply(NextMiddleware).forRoutes({
  //     path: '_next*',
  //     method: RequestMethod.GET,
  //   });
  // }
}
