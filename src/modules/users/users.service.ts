import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findOne(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne(id);
  }

  findAll(pager: { page: number; size: number }): Promise<UserEntity[]> {
    return this.usersRepository.find({
      skip: pager.page - 1,
      take: pager.size,
    });
  }

  remove(id: string): Promise<any> {
    return this.usersRepository.delete(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }
}
