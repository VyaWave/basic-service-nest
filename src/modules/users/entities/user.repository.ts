import { UserEntity } from './user.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(UserEntity)
export class UserRepository {}
