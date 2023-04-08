import { Injectable } from '@nestjs/common';
import { CreateExperienceOrderDto } from './dto/create-experience-order.dto';
import { UpdateExperienceOrderDto } from './dto/update-experience-order.dto';
import { ExperienceOrderEntity } from './entities/experience-order.entity';
import { ExperienceCommentsEntity } from '../experience-comments/entities/entity';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
// 工单状态
export enum Status {
  pending = 1,
  inProcess = 2,
  done = 3,
}

// 问题反馈类型
export enum FeedbackTypes {
  experience = 1,
  feature = 2,
  bugs = 3,
  other = 4,
}

// 消息类型
export enum MessageTypes {
  orderMessage = 1,
  systemItemMessage = 2,
  globalSystemMessage = 3,
}

// 是否已读
export enum ReadStatus {
  read = 1,
  unRead = 2,
}

@Injectable()
export class ExperienceOrderService {
  constructor(
    @InjectRepository(ExperienceOrderEntity)
    private experienceOrderRepository: Repository<ExperienceOrderEntity>,

    @InjectRepository(ExperienceCommentsEntity)
    private commentsService: Repository<ExperienceCommentsEntity>,
  ) {}

  create(createExperienceOrderDto: CreateExperienceOrderDto) {
    return this.experienceOrderRepository
      .save(createExperienceOrderDto)
      .then(({ id }) => {
        return {
          id,
        };
      });
  }

  createComments(createExperienceOrderDto: CreateExperienceOrderDto) {
    return this.commentsService
      .save(createExperienceOrderDto)
      .then(({ id }) => {
        return {
          id,
        };
      })
      .then(() => {
        return this.experienceOrderRepository
          .update(createExperienceOrderDto.parent_id, { status: 3 })
          .then(({ affected }) => {
            return affected ? 'success' : 'failed';
          });
      });
  }

  findAll(pager: {
    page: number;
    size: number;
    status: number;
  }): Promise<{ list: ExperienceOrderEntity[]; count: number }> {
    return this.experienceOrderRepository
      .findAndCount({
        skip: pager.page - 1,
        take: pager.size,
        where: {
          status: pager.status,
        },
      })
      .then(([list, count]) => {
        return {
          list: list,
          count: count,
        };
      });
  }
  findAllPeople(): Promise<{ list: any[]; count: number }> {
    return Promise.resolve({
      list: [
        {
          ldap: 'renxiaojuan1',
          name: 'renxiaojuan1',
          deptName: 'xxx',
        },
        {
          ldap: 'renxiaojuan2',
          name: 'renxiaojuan2',
          deptName: 'xxx',
        },
        {
          ldap: 'renxiaojuan3',
          name: 'renxiaojuan3',
          deptName: 'xxx',
        },
        {
          ldap: 'renxiaojuan4',
          name: 'renxiaojuan4',
          deptName: 'xxx',
        },
        {
          ldap: 'renxiaojuan5',
          name: 'renxiaojuan5',
          deptName: 'xxx',
        },
        {
          ldap: 'renxiaojuan6',
          name: 'renxiaojuan6',
          deptName: 'xxx',
        },
        {
          ldap: 'renxiaojuan7',
          name: 'renxiaojuan7',
          deptName: 'xxx',
        },
      ],
      count: 100,
    });
  }

  findOne(id: number) {
    return this.commentsService
      .find({
        parent_id: id,
      })
      .then((comments) => {
        return this.experienceOrderRepository.findOne(id).then((res) => {
          return {
            ...res,
            system: {
              id: 10,
              uniq_system_key: 'experience',
              system_name: '国际化金融全民体验',
              system_origin: '/experience/',
              admins: '',
              extra: '',
              logo: 'https://s3-us01.didiglobal.com/silver-bullet-img/2023-03-09/s601vD/__200_200.png',
              createdAt: '2023-03-31T05:15:13.000Z',
              updatedAt: '2023-03-31T05:15:13.000Z',
            },
            comments: comments,
          };
        });
      });
  }

  async update(id: number, updateExperienceOrderDto: UpdateExperienceOrderDto) {
    return this.experienceOrderRepository
      .update(id, updateExperienceOrderDto)
      .then(({ affected }) => {
        return affected ? 'success' : 'failed';
      });
  }

  remove(id: number) {
    return this.experienceOrderRepository.delete(+id).then(({ affected }) => {
      if (affected) {
        return 'delete ok!';
      } else {
        return 'delete failed!';
      }
    });
  }
}
