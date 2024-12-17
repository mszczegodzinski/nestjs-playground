import { Injectable, NotFoundException } from '@nestjs/common';
import { Dish } from './dish.entity';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(Dish) private dishRepository: Repository<Dish>,
  ) {}

  create(dish: CreateDishDto): Promise<Dish> {
    return this.dishRepository.save(dish);
  }

  read(): Promise<Dish[]> {
    return this.dishRepository.find({ relations: ['products'] });
  }

  async getOneById(id: number): Promise<Dish> {
    const dish = await this.dishRepository.findOne({
      where: { id },
      relations: ['products'],
    });
    if (!dish) {
      throw new NotFoundException('Dish not found');
    }
    return dish;
  }

  async update(dish: UpdateDishDto) {
    await this.getOneById(dish.id);
    return this.dishRepository.update(dish.id, dish);
  }

  async delete(dishId: number): Promise<Dish> {
    const dishToRemove = await this.getOneById(dishId);
    return this.dishRepository.remove(dishToRemove);
  }
}
