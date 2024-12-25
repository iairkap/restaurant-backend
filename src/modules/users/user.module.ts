import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { OrderModule } from '../orders/order.module';
@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(() => OrderModule)], // Uso de forwardRef aquí
  providers: [UserService],
  controllers: [UserController],
  exports: [TypeOrmModule],
})
export class UserModule {}
