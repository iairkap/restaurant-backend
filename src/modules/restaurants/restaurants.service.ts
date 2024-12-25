import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurants } from './restaurants.entity';
import { User } from '../users/user.entity';
import { CreateRestaurantDto } from './create-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurants)
    private readonly restaurantsRepository: Repository<Restaurants>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Método para obtener todos los restaurantes con sus usuarios
  async findAll(): Promise<Restaurants[]> {
    return this.restaurantsRepository.find({
      relations: ['user'], // Incluir el usuario en la respuesta
    });
  }

  // Método para crear un restaurante con validación del user_id
  async create(data: CreateRestaurantDto): Promise<Restaurants> {
    const user = await this.userRepository.findOne({
      where: { id: data.user_id }, // Buscar el usuario por id
    });

    if (!user) {
      throw new Error('User not found');
    }
    const restaurant = this.restaurantsRepository.create({
      ...data,
      user, // Asociar el restaurante con el usuario
    });

    return this.restaurantsRepository.save(restaurant);
  }
}
