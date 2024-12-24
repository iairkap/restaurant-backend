import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Dish } from '../dish/dish.entity'; // Relación con los platos
import { Restaurants } from '../restaurants/restaurants.entity';
@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => Restaurants, (restaurant) => restaurant.menus)
  restaurant: Restaurants;

  @OneToMany(() => Dish, (dish) => dish.menu)
  dishes: Dish[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
