import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser'; // Importing the default export

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
