import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/* Each enitity class represents a SQL table. By default TypeORM will name the SQL table based on our classname in lowercase */
/* coffee- could override this by passing a string to entity decorator */
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
