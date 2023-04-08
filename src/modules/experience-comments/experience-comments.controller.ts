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

import { ExperienceCommentsService } from './experience-comments.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('experience/comments')
export class ExperienceCommentsController {
  constructor(
    private readonly experienceCommentsService: ExperienceCommentsService,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceCommentsService.findOne(+id);
  }

  @Get()
  findAll(@Query() pager: { page: number; size: number }) {
    console.info('pager', pager);
    return this.experienceCommentsService.findAll(pager);
  }

  @Post()
  create(@Body() createAccountDto: CreateDto) {
    return this.experienceCommentsService.create({
      ...createAccountDto,
    });
  }

  @Patch(':id')
  patchUpdate(@Param('id') id: string, @Body() updateAccountDto: UpdateDto) {
    return this.experienceCommentsService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceCommentsService.remove(+id);
  }
}
