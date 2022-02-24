import { Module, Global } from '@nestjs/common';
import { HelperService } from './helper.service';
import { HelperController } from './helper.controller';

@Global()
@Module({
  controllers: [HelperController],
  providers: [HelperService],
})
export class HelperModule {}
