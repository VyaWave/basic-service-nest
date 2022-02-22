import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = 6668;

  console.log('==================== 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ===================');

  console.log(`Server is start on http://127.0.0.1:${port}`);

  console.log('================= 🔥🔥🔥🔥🔥🔥🔥🔥🔥 ======================');

  await app.listen(port);
}
bootstrap();
