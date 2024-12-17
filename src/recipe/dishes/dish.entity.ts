import { Product } from 'src/recipe/products/product.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Dish extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal' })
  servings: number;

  @Column({ nullable: true, type: 'text' })
  description?: string;

  @OneToMany(() => Product, (product: Product) => product.dish)
  products: Product[];

  @ManyToOne(() => User, (user: User) => user.dishes, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'boolean', default: false })
  isPublic: number;
}
