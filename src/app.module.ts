import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';

dotenv.config();

console.log('Database Host:', process.env.DATABASE_HOST);
console.log('Database Port:', process.env.DATABASE_PORT);
console.log('Database User:', process.env.DATABASE_USER);
console.log('Database Password:', process.env.DATABASE_PASSWORD);
console.log('Database Name:', process.env.DATABASE_NAME);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true, // Cambiar a false en producción
    }),
    RestaurantsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
