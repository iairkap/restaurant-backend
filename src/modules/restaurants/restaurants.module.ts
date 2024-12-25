import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurants } from './restaurants.entity';
import { RestaurantService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { UserModule } from '../users/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurants]), UserModule],
  controllers: [RestaurantsController],
  providers: [RestaurantService],
})
export class RestaurantsModule {}
