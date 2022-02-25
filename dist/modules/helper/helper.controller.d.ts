import { HelperService } from './helper.service';
import { CreateHelperDto } from './dto/create-helper.dto';
import { UpdateHelperDto } from './dto/update-helper.dto';
export declare class HelperController {
    private readonly helperService;
    constructor(helperService: HelperService);
    create(createHelperDto: CreateHelperDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHelperDto: UpdateHelperDto): string;
    remove(id: string): string;
}
