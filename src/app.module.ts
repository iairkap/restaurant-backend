import { Module, RequestMethod } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { UserModule } from './modules/users/user.module';
import { OrderModule } from './modules/orders/order.module';
import { DishModule } from './modules/dish/dish.module';
import { MenuModule } from './modules/menus/menu.module';
import { User } from './modules/users/user.entity';
import { Order } from './modules/orders/order.entity';
import { Restaurants } from './modules/restaurants/restaurants.entity';
import { Dish } from './modules/dish/dish.entity';
import { TestModule } from './modules/firebase/test.module';
import { FirebaseAuthService } from './auth/firebase-auth.service';
import { FirebaseAuthMiddleware } from './middleware/firebase-auth.middleware';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User, Order, Restaurants, Dish],
      autoLoadEntities: true,
      synchronize: true, // Cambiar a false en producción
    }),
    RestaurantsModule,
    UserModule,
    OrderModule,
    DishModule,
    MenuModule,
    TestModule,
  ],
  controllers: [],
  providers: [FirebaseAuthService],
})
export class AppModule {
  configure(consumer) {
    consumer
      .apply(FirebaseAuthMiddleware) // Aplica el middleware
      .forRoutes(
        { path: 'users/email/:email', method: RequestMethod.GET }, // Solo para esta ruta
      );
  }
}
