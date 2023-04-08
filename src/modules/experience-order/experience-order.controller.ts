import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  Res,
} from '@nestjs/common';

import { ExperienceOrderService } from './experience-order.service';
import { CreateExperienceOrderDto } from './dto/create-experience-order.dto';
// import { UpdateExperienceOrderDto } from './dto/update-experience-order.dto';

@Controller('experience/orders')
export class ExperienceOrderController {
  constructor(
    private readonly experienceOrderService: ExperienceOrderService,
  ) {}

  @Get('people')
  findAllPeople(@Query() pager: { page: number; size: number }) {
    return this.experienceOrderService.findAllPeople();
  }

  @Get('getOne')
  finOne(@Query() query: { id: string }) {
    return this.experienceOrderService.findOne(+query.id);
  }

  @Get('getList')
  finList(@Query() query: { page: number; size: number; status: number }) {
    return this.experienceOrderService.findAll(query);
  }

  @Post('comments')
  createComments(@Body() createAccountDto: CreateExperienceOrderDto) {
    return this.experienceOrderService.createComments(createAccountDto);
  }

  @Post()
  create(@Body() createAccountDto: CreateExperienceOrderDto) {
    return this.experienceOrderService.create(createAccountDto);
  }

  @Patch('updateOne')
  update(@Body() createAccountDto: CreateExperienceOrderDto) {
    const { id, ...args } = createAccountDto;

    const process_users = args.process_users;

    return this.experienceOrderService.update(+id, {
      ...args,
      ...(process_users ? { status: 2 } : {}),
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceOrderService.remove(+id);
  }
}
