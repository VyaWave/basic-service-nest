import { PartialType } from '@nestjs/mapped-types';
import { CreateExperienceOrderDto } from './create-experience-order.dto';

export class UpdateExperienceOrderDto extends PartialType(
  CreateExperienceOrderDto,
) {
  id?: number;
}
