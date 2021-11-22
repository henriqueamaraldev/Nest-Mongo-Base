import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  let runningPort = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  await app.listen((runningPort), () => {
    console.log(`Server running at port: ${runningPort}!`)
  });
}
bootstrap();