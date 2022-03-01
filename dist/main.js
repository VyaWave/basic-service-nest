"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middleware/logger/logger.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.use(logger_middleware_1.logger);
    const port = 8000;
    console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');
    console.log(`Server is start on: http://127.0.0.1:${port}`);
    console.log(`Server is start on: http://localhost:${port}`);
    console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map