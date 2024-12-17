import { Module } from '@nestjs/common';
import { DishesController } from './dishes/dishes.controller';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/product.service';
import { DishService } from './dishes/dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/product.entity';
import { Dish } from './dishes/dish.entity';
import { IngredientsController } from './ingredients/ingredients.controller';
import { Ingredient } from './ingredients/ingredient.entity';
import { IngredientService } from './ingredients/ingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Dish, Ingredient])],
  controllers: [DishesController, ProductsController, IngredientsController],
  providers: [ProductService, DishService, IngredientService],
})
export class RecipeModule {}
