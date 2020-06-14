import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        length:100
    })    
    name: string;

    @Column({
        length:11,
        unique:true,
    })    
    cpf: string;
    
    @Column({
        unique:true
    })    
    email: string;

    @Column()    
    phone: string;


    @CreateDateColumn({name: 'created_At'})
    created_At: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updated_At: Date;

}
