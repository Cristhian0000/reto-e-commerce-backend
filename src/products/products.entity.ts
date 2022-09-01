import {
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  image: string;
  @Column()
  rating: {};
}
