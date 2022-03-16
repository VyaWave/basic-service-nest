import { IsBoolean, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
