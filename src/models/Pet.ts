import {Entity,Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinTable} from "typeorm";
import { MaxLength, MinLength } from 'class-validator';
import User from "./User";

enum Gender {
    Male = 'male',
    Female = 'female'
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
    gender: Gender;

    @ManyToOne(type => User)
    @JoinTable()
    users: User;

    @CreateDateColumn({name: 'created_At'})
    created_At: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updated_At: Date;

}
