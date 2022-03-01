import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & import("./entities/user.entity").User>;
    findAll(pager: {
        page: number;
        size: number;
    }): Promise<{
        data: import("./entities/user.entity").User[];
        code: number;
        message: string;
    }>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
    patchUpdate(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<any>;
}
