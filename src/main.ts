import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use(logger);

  const port = 6668;

  console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');

  console.log(`Server is start on: http://127.0.0.1:${port}`);
  console.log(`Server is start on: http://localhost:${port}`);

  console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');

  await app.listen(port);
}
bootstrap();
