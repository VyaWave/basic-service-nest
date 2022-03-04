import { User } from './user.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(User)
export class UserRepository {}
