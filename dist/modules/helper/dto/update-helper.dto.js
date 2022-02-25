"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHelperDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_helper_dto_1 = require("./create-helper.dto");
class UpdateHelperDto extends (0, mapped_types_1.PartialType)(create_helper_dto_1.CreateHelperDto) {
}
exports.UpdateHelperDto = UpdateHelperDto;
//# sourceMappingURL=update-helper.dto.js.map