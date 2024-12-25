import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DishService } from './dish.services';
import { CreateDishDto, UpdateDishDto } from './dish.dto';

@Controller('dishes')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  findAll() {
    return this.dishService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.dishService.findOne(id);
  }

  @Post()
  create(@Body() createDishDto: CreateDishDto) {
    return this.dishService.create(createDishDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDishDto: UpdateDishDto) {
    return this.dishService.update(id, updateDishDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.dishService.remove(id);
  }
}
