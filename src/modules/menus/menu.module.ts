import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from './menu.entity';
import { MenuService } from './menu.services';
import { MenuController } from './menu.controller';
import { RestaurantsModule } from '../restaurants/restaurants.module';

@Module({
  imports: [TypeOrmModule.forFeature([Menu]), RestaurantsModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
