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
  OneToMany,
} from 'typeorm';
import { MaxLength, MinLength } from 'class-validator';
import User from './User';
import Event from './Event';
import AdoptionRequest from './AdoptionRequest';

enum Type {
  Dog = 'Cachorro',
  Cat = 'Gato',
  Other = 'Outro',
}

enum Size {
  Small = 'Pequeno',
  Medium = 'Médio',
  Large = 'Grande',
}

enum Gender {
  Male = 'Macho',
  Female = 'Fêmea',
}

enum State {
  Perdido = 'Perdido',
  Encontrado = 'Encontrado',
  ParaAdocao = 'Para Adoção',
  Adotado = 'Adotado',
}

@Entity('pet')
export default class Pet {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @MaxLength(50)
  @MinLength(2)
  name: string;

  @Column()
  birth: Date;

  @Column('int')
  type: Type;

  @Column('int')
  size: Size;

  @Column('int')
  gender: Gender;

  @Column()
  castrated: boolean;

  @Column('int')
  state: State;

  // relação
  @ManyToOne(type => User, pets => Pet)
  @JoinTable()
  users: User;

  @OneToOne(type => Event, pet => Pet)
  @JoinColumn()
  event: Event;

  @OneToMany(type => AdoptionRequest, pets => Pet)
  @JoinTable()
  adoptionRequests: AdoptionRequest;

  @CreateDateColumn({ name: 'created_At' })
  created_At: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updated_At: Date;
}
