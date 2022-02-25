"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonController = void 0;
const common_1 = require("@nestjs/common");
const common_service_1 = require("./common.service");
const calendar_1 = require("./calendar");
let CommonController = class CommonController {
    constructor(Service) {
        this.Service = Service;
    }
    findAll(request) {
        return 'This action returns all cats';
    }
    index(request) {
        return 'This action returns all cats';
    }
    create(commonItem) {
        return this.Service.create(commonItem);
    }
    redirect() {
        return ';;';
    }
    getCalendar() {
        const day = new Date().getDate();
        const month = new Date().getMonth();
        const weekday = new Date().getDay();
        const MonthMap = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
        ];
        const WeekdayMap = [
            'Monday',
            'Tuesday',
            'Monday',
            'Wednesday',
            'Friday',
            'Saturday',
            'Sunday',
        ];
        const TPL = calendar_1.CalendarSvgCode.replace(/\$month/g, MonthMap[month])
            .replace(/\$day/g, `${day}`)
            .replace(/\$weekday/g, WeekdayMap[weekday]);
        return TPL;
    }
};
__decorate([
    (0, common_1.Get)('all'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CommonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/index'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CommonController.prototype, "index", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('redirect'),
    (0, common_1.Header)('Cache-Control', 'none'),
    (0, common_1.Redirect)('https://nestjs.com', 302),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommonController.prototype, "redirect", null);
__decorate([
    (0, common_1.Get)('calendar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommonController.prototype, "getCalendar", null);
CommonController = __decorate([
    (0, common_1.Controller)('common'),
    __metadata("design:paramtypes", [common_service_1.CommonService])
], CommonController);
exports.CommonController = CommonController;
//# sourceMappingURL=common.controller.js.map