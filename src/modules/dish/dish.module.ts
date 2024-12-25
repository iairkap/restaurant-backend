import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dish.entity';
import { DishService } from './dish.services';
import { DishController } from './dish.controller';
import { RestaurantsModule } from '../restaurants/restaurants.module';

@Module({
  imports: [TypeOrmModule.forFeature([Dish]), RestaurantsModule],
  providers: [DishService],
  controllers: [DishController],
})
export class DishModule {}
