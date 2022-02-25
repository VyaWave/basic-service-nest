"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const nodeLogColor = require('node-color-log');
function logger(req, res, next) {
    nodeLogColor.info(`======== [Request In] URL: ${req.url} Method: ${req.method} ========`);
    next();
    nodeLogColor.info(`======== [Request Out] URL: ${req.url} Code: ${res.statusCode} Method: ${req.method}  ========`);
}
exports.logger = logger;
//# sourceMappingURL=logger.middleware.js.map