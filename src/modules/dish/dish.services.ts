import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dish } from './dish.entity';
import { CreateDishDto, UpdateDishDto } from './dish.dto';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish)
    private readonly dishRepository: Repository<Dish>,
  ) {}

  findAll(): Promise<Dish[]> {
    return this.dishRepository.find();
  }

  findOne(id: number): Promise<Dish> {
    return this.dishRepository.findOne({ where: { id } });
  }

  create(createDishDto: CreateDishDto): Promise<Dish> {
    const dish = this.dishRepository.create(createDishDto);
    return this.dishRepository.save(dish);
  }

  async update(id: number, updateDishDto: UpdateDishDto): Promise<Dish> {
    await this.dishRepository.update(id, updateDishDto);
    return this.dishRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.dishRepository.delete(id);
  }
}
