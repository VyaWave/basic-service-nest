import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { logger } from './middleware/logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // 全局中间件
  app.use(logger);

  app.use(cookieParser());

  // 全局通道
  // app.useGlobalPipes(new ValidatePipe());

  const port = 8001;

  console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');

  console.log(`Server is start on: http://127.0.0.1:${port}`);
  console.log(`Server is start on: http://localhost:${port}`);

  console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');

  await app.listen(port);
}
bootstrap();
