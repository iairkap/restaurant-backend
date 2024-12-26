import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Restaurants } from '../restaurants/restaurants.entity';

@Entity()
export class OpeningHours {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Restaurants, (restaurant) => restaurant.openingHours, {
    nullable: false,
  })
  restaurant: Restaurants;

  @Column({ type: 'varchar', nullable: false })
  day: string; // e.g., 'monday', 'tuesday'

  @Column({ type: 'time', nullable: false })
  open: string; // e.g., '09:00'

  @Column({ type: 'time', nullable: false })
  close: string; // e.g., '17:00'

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
