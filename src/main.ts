import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  let runningPort = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }))

  await app.listen((runningPort), () => {
    console.log(`Server running at port: ${runningPort}!`)
  });
}
bootstrap();