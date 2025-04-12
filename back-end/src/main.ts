import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips non-whitelisted properties
      forbidNonWhitelisted: true, // throws error if non-whitelisted properties are present
      transform: true, // transforms payloads to be objects typed according to their DTO classes
    }),
  );

  // await app.listen(process.env.PORT ?? 3000);
  await app.listen(3001);
}
bootstrap();
