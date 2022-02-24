import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { UsersModule, CommonModule } from './modules/index';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { HelperModule } from './modules/helper/helper.module';
import { AllExceptionsFilter } from './filters/any-exception/any-exception.filter';

@Module({
  imports: [CommonModule, UsersModule, HelperModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
