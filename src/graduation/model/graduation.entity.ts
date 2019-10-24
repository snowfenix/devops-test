import { Entity, Column } from 'typeorm';

@Entity()
export class Graduation {
  @Column()
  graduationDate: Date;

  @Column('text')
  username: string;
}
