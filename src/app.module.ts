import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DishesController } from './dishes/dishes.controller';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/product.service';
import { DishService } from './dishes/dish.service';

@Module({
  imports: [],
  controllers: [AppController, DishesController, ProductsController],
  providers: [AppService, ProductService, DishService],
})
export class AppModule {}
