import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  age: number;

  @IsBoolean()
  isActive: boolean;
}
