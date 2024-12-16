import { Module } from '@nestjs/common';
import { DishesController } from './dishes/dishes.controller';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/product.service';
import { DishService } from './dishes/dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/Product';
import { Dish } from './dishes/Dish';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Dish])],
  controllers: [DishesController, ProductsController],
  providers: [ProductService, DishService],
})
export class RecipeModule {}
