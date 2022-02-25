import { CommonInterface } from './common.interface';
export declare class CommonService {
    private readonly commons;
    create(cat: CommonInterface): void;
    findAll(): CommonInterface[];
}
