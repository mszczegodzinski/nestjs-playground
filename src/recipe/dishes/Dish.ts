import { Product } from 'src/recipe/products/Product';

export interface Dish {
  id: number;
  name: string;
  servings: number;
  description?: string;
  products: Product[];
}
