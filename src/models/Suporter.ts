import { Entity, Column } from 'typeorm';
import Person from './Person';

@Entity('suporter')
export default class Suporter extends Person {
  @Column({
    length: 11,
    unique: true,
  })
  cnpj: string;

  @Column({
    unique: true,
  })
  website: string;
}
