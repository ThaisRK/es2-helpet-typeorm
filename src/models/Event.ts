import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { MaxLength, MinLength } from 'class-validator';
import User from './User';
import Pet from './Pet';

@Entity('event')
export default class Event {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @MaxLength(120)
  @MinLength(3)
  title: string;

  @Column()
  description: string;

  // relação
  @ManyToOne(type => User, events => Event)
  @JoinTable()
  users: User;

  @OneToOne(type => Pet, event => Event)
  pet: Pet;

  @CreateDateColumn({ name: 'created_At' })
  created_At: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updated_At: Date;
}
