import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import {
  IsEmail,
  Min,
  Max,
  MaxLength,
  MinLength,
  minLength,
} from 'class-validator';
import Pet from './Pet';
import Event from './Event';
import AdoptionRequest from './AdoptionRequest';
import Person from './Person';

@Entity('user')
export default class User extends Person {
  @Column({
    length: 11,
    unique: true,
  })
  cpf: string;

  // relação
  @OneToMany(type => Pet, users => User)
  pets: Pet[];

  @OneToMany(type => Event, users => User)
  events: Event[];

  @OneToMany(type => AdoptionRequest, sendBy => User)
  adoptionRequests: AdoptionRequest[];
}
