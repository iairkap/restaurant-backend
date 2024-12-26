import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { RestaurantService } from './restaurants.service';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { Restaurants } from './restaurants.entity';
import { Request } from 'express';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get()
  findAll(): Promise<Restaurants[]> {
    return this.restaurantService.findAll();
  }

  @Post()
  create(
    @Body() data: CreateRestaurantDto,
    @Req() req: Request,
  ): Promise<Restaurants> {
    if (!req.user) {
      throw new UnauthorizedException('User not authenticated');
    }
    return this.restaurantService.create(data);
  }
}
