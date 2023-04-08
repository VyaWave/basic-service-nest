import { Module } from '@nestjs/common';

import { ExperienceOrderService } from './experience-order.service';
// import { ExperienceCommentsModule } from '../experience-comments/experience-comments.module';
import { ExperienceCommentsEntity } from '../experience-comments/entities/entity';
import { ExperienceOrderController } from './experience-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExperienceOrderEntity } from './entities/experience-order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExperienceOrderEntity, ExperienceCommentsEntity]),
  ],
  controllers: [ExperienceOrderController],
  providers: [ExperienceOrderService],
  exports: [ExperienceOrderService],
})
export class ExperienceOrderModule {}
