import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Ingredient } from '../ingredients/ingredient.entity';

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

  @ManyToOne(() => User, (user: User) => user.dishes, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'boolean', default: false })
  isPublic: number;

  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.dish, {
    onDelete: 'CASCADE',
  })
  ingredients: Ingredient[];
}
