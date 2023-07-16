import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

/* Each enitity class represents a SQL table. By default TypeORM will name the SQL table based on our classname in lowercase */
/* coffee- could override this by passing a string to entity decorator */
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, //['insert'] falvors that belong to a newly created coffee will be autromatically inserted into the batabase for us
  })
  flavors: Flavor[];
}
