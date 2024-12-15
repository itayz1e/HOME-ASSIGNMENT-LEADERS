import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const port = process.env.REACT_APP_API_URL || 3000;
  await app.listen(port);
}
bootstrap();
