import { Injectable } from '@nestjs/common';
import { CommonInterface } from './common.interface';

@Injectable()
export class CommonService {
  private readonly common: CommonInterface[] = [];

  create(cat: CommonInterface) {
    this.common.push(cat);
  }

  findAll(): CommonInterface[] {
    return this.common;
  }
}
