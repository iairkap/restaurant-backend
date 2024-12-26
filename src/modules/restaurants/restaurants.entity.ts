import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Menu } from '../menus/menu.entity';
import { Order } from '../orders/order.entity';
import { OpeningHours } from '../opening-hours/opening-hours.entity';
@Entity()
export class Restaurants {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.restaurants, { nullable: false })
  user: User;

  @OneToMany(() => Menu, (menu) => menu.restaurant) // Relación con los menus
  menus: Menu[];

  @OneToMany(() => Order, (order) => order.restaurant) // Relación con pedidos
  orders: Order[];

  @Column({ type: 'varchar', array: true, nullable: true })
  picture: string[];

  @OneToMany(() => OpeningHours, (openingHours) => openingHours.restaurant, {
    cascade: true, // Propaga cambios automáticamente
  })
  openingHours: OpeningHours[];

  @Column({ type: 'varchar', nullable: false })
  cuisine_type: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
