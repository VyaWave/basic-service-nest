import { Injectable } from '@nestjs/common';
import { CommonInterface } from './common.interface';

@Injectable()
export class CommonService {
  private readonly commons: CommonInterface[] = [];

  create(cat: CommonInterface) {
    this.commons.push(cat);
  }

  findAll(): CommonInterface[] {
    return this.commons;
  }
}
