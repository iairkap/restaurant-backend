import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './Order.entity';
import { OrderService } from './order.services';
import { OrderController } from './order.controller';
import { UserModule } from '../users/user.module';
@Module({
  imports: [TypeOrmModule.forFeature([Order]), forwardRef(() => UserModule)], // Uso de forwardRef aquí
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
