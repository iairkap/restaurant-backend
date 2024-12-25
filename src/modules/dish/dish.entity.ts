import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Menu } from '../menus/menu.entity';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Menu, (menu) => menu.dishes, { nullable: false })
  menu: Menu;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar', array: true, nullable: true })
  picture: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
