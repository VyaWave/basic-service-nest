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

import { ExperienceSystemsService } from './experience-systems.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('experience/systems')
export class ExperienceSystemsController {
  constructor(
    private readonly experienceSystemsService: ExperienceSystemsService,
  ) {}

  @Get()
  findOne(@Query() query: { uniq_system_key: string }) {
    return this.experienceSystemsService.findOne(query.uniq_system_key);
  }

  @Post()
  create(@Body() updateAccountDto: UpdateDto) {
    console.log('=== Log Log 222 ===');
    return this.experienceSystemsService.create(updateAccountDto);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateDto) {
    return this.experienceSystemsService.update(+id, updateAccountDto);
  }

  @Patch(':id')
  patchUpdate(@Param('id') id: string, @Body() updateAccountDto: UpdateDto) {
    return this.experienceSystemsService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceSystemsService.remove(+id);
  }
}
