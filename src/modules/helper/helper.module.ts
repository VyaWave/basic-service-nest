import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, Global } from '@nestjs/common';

import { HelperService } from './helper.service';
import { Helper } from './entities/helper.entity';
import { HelperController } from './helper.controller';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Helper])],
  controllers: [HelperController],
  providers: [HelperService],
})
export class HelperModule {}
