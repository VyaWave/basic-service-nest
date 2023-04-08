import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { ExperienceCommentsEntity } from './entities/entity';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

@Injectable()
export class ExperienceCommentsService {
  constructor(
    @InjectRepository(ExperienceCommentsEntity)
    private experienceCommentsRepository: Repository<ExperienceCommentsEntity>,
  ) {}

  create(createDto: CreateDto) {
    return this.experienceCommentsRepository.save(createDto).then(({ id }) => {
      return {
        id,
      };
    });
  }

  findAll(pager: {
    page: number;
    size: number;
  }): Promise<{ list: ExperienceCommentsEntity[]; count: number }> {
    return this.experienceCommentsRepository
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

  findOne(id: number) {
    return this.experienceCommentsRepository.findOne(id).then((res) => {
      return res;
    });
  }

  findByEmail(email: string) {
    return this.experienceCommentsRepository.find({}).then((res) => {
      return res;
    });
  }

  async update(id: number, updateDto: UpdateDto) {
    return this.experienceCommentsRepository
      .update(id, updateDto)
      .then((res) => {
        if (res) {
        }
      });
  }

  remove(id: number) {
    return this.experienceCommentsRepository
      .delete(+id)
      .then(({ affected }) => {
        if (affected) {
          return 'delete ok!';
        } else {
          return 'delete failed!';
        }
      });
  }
}
