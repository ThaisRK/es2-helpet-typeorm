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

@Entity('adoptionRequest')
export default class AdoptionRequest {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  accepted: boolean;

  // relação
  @ManyToOne(type => Pet, AdoptionRequests => AdoptionRequest, { eager: true })
  pets: Pet;

  @ManyToOne(type => User, AdoptionRequests => AdoptionRequest, { eager: true })
  sendBy: User;

  @CreateDateColumn({ name: 'created_At' })
  created_At: Date;
}
