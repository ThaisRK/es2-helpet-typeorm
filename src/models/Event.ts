import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  OneToOne,
  JoinColumn,
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
  @ManyToOne(type => User, events => Event, { eager: true })
  users: User;

  // oneToOne não pode eager?
  @OneToOne(type => Pet, event => Event, { eager: true })
  @JoinColumn()
  pet: Pet;

  @CreateDateColumn({ name: 'created_At' })
  created_At: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updated_At: Date;
}
