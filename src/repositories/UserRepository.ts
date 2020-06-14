import {EntityRepository, Repository } from "typeorm";
import User from '../models/User'
import { request } from "express";

@EntityRepository(User)
export default class UserRepository extends Repository<User>{

    public async findByName(name:string) : Promise<any> {
        return this.find({
            where: {
                name,
            },
        });
    };

    public async deleteById(id:number) : Promise<any> {
        return this.find({
            where: {
                id,
            }
        });
    };
}