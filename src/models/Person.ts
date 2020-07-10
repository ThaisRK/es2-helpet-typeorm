import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MinLength, MaxLength, IsEmail } from 'class-validator';

// @Entity('person')
export default abstract class Person {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  @MinLength(9)
  @MaxLength(16)
  phone: string;

  @Column()
  city: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column()
  @MinLength(7)
  @MaxLength(15)
  password: string;

  @CreateDateColumn({ name: 'created_At' })
  created_At: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updated_At: Date;
}
