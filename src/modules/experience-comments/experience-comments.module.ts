import { Module } from '@nestjs/common';

import { ExperienceCommentsService } from './experience-comments.service';
import { ExperienceCommentsController } from './experience-comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExperienceCommentsEntity } from './entities/entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExperienceCommentsEntity])],
  controllers: [ExperienceCommentsController],
  providers: [ExperienceCommentsService],
  exports: [ExperienceCommentsService],
})
export class ExperienceCommentsModule {}
