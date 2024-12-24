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
@Entity()
export class Restaurants {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.restaurants) // Relación con el usuario (propietario)
  user: User;

  @OneToMany(() => Menu, (menu) => menu.restaurant) // Relación con los menus
  menus: Menu[];

  @OneToMany(() => Order, (order) => order.restaurant) // Relación con pedidos
  orders: Order[];

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
