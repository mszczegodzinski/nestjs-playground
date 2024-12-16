import { Product } from 'src/products/Product';

export interface Dish {
  id: number;
  name: string;
  servings: number;
  description?: string;
  products: Product[];
}
