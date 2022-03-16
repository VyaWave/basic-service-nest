import { Get, Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountRepository.save(createAccountDto).then(({ id }) => {
      return {
        id,
      };
    });
  }

  findAll(pager: {
    page: number;
    size: number;
  }): Promise<{ list: Account[]; count: number }> {
    return this.accountRepository
      .findAndCount({
        skip: pager.page - 1,
        take: pager.size,
      })
      .then(([list, count]) => {
        return {
          list,
          count,
        };
      });
  }

  findOne(id: number) {
    return this.accountRepository.findOne(id).then((res) => {
      return res;
    });
  }

  findByEmail(email: string) {
    return this.accountRepository
      .find({
        email: email,
      })
      .then((res) => {
        return res;
      });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.accountRepository.update(id, updateAccountDto).then((res) => {
      if (res) {
      }
    });
  }

  remove(id: number) {
    return this.accountRepository.delete(+id).then(({ affected }) => {
      if (affected) {
        return 'delete ok!';
      } else {
        return 'delete failed!';
      }
    });
  }
}
