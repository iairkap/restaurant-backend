import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Restaurants } from '../restaurants/restaurants.entity';
import { Dish } from '../dish/dish.entity';
import { User } from '../users/user.entity';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders) // Relación con el cliente
  client: User;

  @ManyToOne(() => Restaurants, (restaurant) => restaurant.orders) // Relación con el restaurante
  restaurant: Restaurants;

  @ManyToOne(() => Dish, (dish) => dish.menu) // Relación con el plato
  dish: Dish;

  @Column({ type: 'integer' })
  quantity: number;

  @Column({
    type: 'enum',
    enum: ['pending', 'in-progress', 'completed', 'canceled'],
    default: 'pending',
  })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
