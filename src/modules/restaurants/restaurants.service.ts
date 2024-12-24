import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurants } from './restaurants.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurants)
    private readonly restaurantRepository: Repository<Restaurants>,
  ) {}

  findAll(): Promise<Restaurants[]> {
    return this.restaurantRepository.find();
  }

  create(data: Partial<Restaurants>): Promise<Restaurants> {
    const restaurant = this.restaurantRepository.create(data);
    return this.restaurantRepository.save(restaurant);
  }
}
