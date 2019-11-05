import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Graduation {
  @PrimaryColumn()
  graduationDate: Date;

  @PrimaryColumn()
  username: string;
}
