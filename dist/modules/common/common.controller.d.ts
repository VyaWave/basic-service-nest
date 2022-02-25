import { Request } from 'express';
import { CommonService } from './common.service';
import { CommonInterface } from './common.interface';
export declare class CommonController {
    private Service;
    constructor(Service: CommonService);
    findAll(request: Request): string;
    index(request: Request): string;
    create(commonItem: CommonInterface): void;
    redirect(): string;
    getCalendar(): string;
}
