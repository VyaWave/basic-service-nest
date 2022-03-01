import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    findOne(id: string): Promise<User>;
    findAll(pager: {
        page: number;
        size: number;
    }): Promise<{
        data: User[];
        code: number;
        message: string;
    }>;
    remove(id: string): Promise<any>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
}
