import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantService } from './restaurants.service';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { Restaurants } from './restaurants.entity';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  findAll(): Promise<Restaurants[]> {
    return this.restaurantService.findAll();
  }

  @Post()
  create(@Body() data: CreateRestaurantDto): Promise<Restaurants> {
    return this.restaurantService.create(data);
  }
}
