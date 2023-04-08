import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { ExperienceSystemsEntity } from './entities/entity';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

@Injectable()
export class ExperienceSystemsService {
  constructor(
    @InjectRepository(ExperienceSystemsEntity)
    private experienceSystemsRepository: Repository<ExperienceSystemsEntity>,
  ) {}

  create(createDto: CreateDto) {
    return this.experienceSystemsRepository.save(createDto).then(({ id }) => {
      return {
        id,
      };
    });
  }

  findAll(pager: {
    page: number;
    size: number;
  }): Promise<{ list: ExperienceSystemsEntity[]; count: number }> {
    return this.experienceSystemsRepository
      .findAndCount({
        skip: pager.page - 1,
        take: pager.size,
      })
      .then(([list, count]) => {
        return {
          list,
          count: 1,
        };
      });
  }

  findOne(uniq_system_key: string) {
    return this.experienceSystemsRepository
      .findAndCount({
        uniq_system_key: uniq_system_key,
      })
      .then((res) => {
        return res;
      });
  }

  async update(id: number, updateDto: UpdateDto) {
    return this.experienceSystemsRepository
      .update(id, updateDto)
      .then((res) => {
        if (res) {
        }
      });
  }

  remove(id: number) {
    return this.experienceSystemsRepository.delete(+id).then(({ affected }) => {
      if (affected) {
        return 'delete ok!';
      } else {
        return 'delete failed!';
      }
    });
  }
}
