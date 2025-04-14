import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('app.port')?? 3001; 
  app.enableCors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  await app.listen(port);
}
bootstrap();
