import { Module } from '@nestjs/common';

import { ExperienceSystemsService } from './experience-systems.service';
import { ExperienceSystemsController } from './experience-systems.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExperienceSystemsEntity } from './entities/entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExperienceSystemsEntity])],
  controllers: [ExperienceSystemsController],
  providers: [ExperienceSystemsService],
  exports: [ExperienceSystemsService],
})
export class ExperienceSystemsModule {}
