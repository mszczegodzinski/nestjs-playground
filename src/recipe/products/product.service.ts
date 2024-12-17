import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './Product';
import { DishService } from '../dishes/dish.service';

@Injectable()
export class ProductService {
  private dishService: DishService;

  constructor(@Inject(forwardRef(() => DishService)) dishService: DishService) {
    this.dishService = dishService;
  }
  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = new Product();
    Object.assign(newProduct, product);
    newProduct.dish = await this.dishService.getOneById(product.dishId);
    return newProduct.save();
  }

  read(): Promise<Product[]> {
    return Product.find();
  }

  async getOneById(productId: number): Promise<Product> {
    const product = await Product.findOne({ where: { id: productId } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async update(product: UpdateProductDto): Promise<Product> {
    const productToUpdate = await this.getOneById(product.id);
    Object.assign(productToUpdate, product);
    return productToUpdate.save();
  }

  async delete(productId: number): Promise<Product> {
    const productToRemove = await this.getOneById(productId);
    return productToRemove.remove();
  }
}
