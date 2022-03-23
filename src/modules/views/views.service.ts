import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewsService {
  create(createViewDto: any) {
    return 'This action adds a new view';
  }

  findAll() {
    return `This action returns all views`;
  }

  findOne(id: number) {
    return `This action returns a #${id} view`;
  }

  update(id: number, updateViewDto: any) {
    return `This action updates a #${id} view`;
  }

  remove(id: number) {
    return `This action removes a #${id} view`;
  }
}
