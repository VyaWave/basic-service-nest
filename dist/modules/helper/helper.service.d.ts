import { CreateHelperDto } from './dto/create-helper.dto';
import { UpdateHelperDto } from './dto/update-helper.dto';
export declare class HelperService {
    create(createHelperDto: CreateHelperDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHelperDto: UpdateHelperDto): string;
    remove(id: number): string;
}
