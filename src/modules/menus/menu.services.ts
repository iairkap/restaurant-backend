import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';
import { CreateMenuDto, UpdateMenuDto } from './menu.dto';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}

  findAll(): Promise<Menu[]> {
    return this.menuRepository.find();
  }

  findOne(id: number): Promise<Menu> {
    return this.menuRepository.findOne({ where: { id } });
  }

  create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = this.menuRepository.create(createMenuDto);
    return this.menuRepository.save(menu);
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    await this.menuRepository.update(id, updateMenuDto);
    return this.menuRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }
}
