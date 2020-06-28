import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity('suporter')
export default class Suporter {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
    unique: true,
  })
  name: string;

  @Column({
    length: 11,
    unique: true,
  })
  cnpj: string;

  @Column()
  phone: string;

  @Column({
    unique: true,
  })
  website: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_At' })
  created_At: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updated_At: Date;
}
