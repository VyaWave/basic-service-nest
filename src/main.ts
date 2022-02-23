import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 8000;

  console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');

  console.log(`Server is start on http://127.0.0.1:${port}`);
  console.log(`Server is start on http://localhost:${port}`);

  console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');

  await app.listen(port);
}
bootstrap();
