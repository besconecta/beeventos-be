import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './shared/exceptions/global-exception.filter';
import { setupSwagger } from './shared/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const loggerInstance = app.get(Logger);
  const httpAdapter = app.get(HttpAdapterHost);

  app.useGlobalFilters(new GlobalExceptionFilter(httpAdapter, loggerInstance));
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );

  app.setGlobalPrefix('api/v1');

  setupSwagger(app);

  const currentTime = new Date();
  await app.listen(3000, () => console.log(currentTime));
}
bootstrap();
