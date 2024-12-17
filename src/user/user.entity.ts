import { Dish } from 'src/recipe/dishes/dish.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  username: string;

  @OneToMany(() => Dish, (dish: Dish) => dish.user)
  dishes: Dish[];
}
