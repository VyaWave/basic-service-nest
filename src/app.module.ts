import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonController } from './common/common.controller';
import { CommonService } from './common/common.service';

@Module({
  imports: [],
  controllers: [AppController, CommonController],
  providers: [AppService, CommonService],
})
export class AppModule {}
