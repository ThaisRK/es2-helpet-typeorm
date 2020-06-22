import {Router} from 'express';
import { getRepository, getCustomRepository, Repository } from 'typeorm';
import Pet from '../models/Pet';
//import PetRepository from '../repositories/PetRepository';

const petRouter = Router();

// cria
petRouter.post('/', async (request, response) => {
    try{
    const repo = getRepository(Pet);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
    }catch(err){
        console.log('err.message :>> ', err.message);
    }
})

// lista todos
petRouter.get('/', async (request, response) => {
    response.json(await getRepository(Pet).find())
})

// atualiza
petRouter.put('/:id', async (request, response) => {
    // desestruturar o user
    try {
        const repo = getRepository(Pet);
        let res = await repo.findOne(request.params);
        res.name = request.body.name;
        console.log(res);
        const updateIt = await repo.save(res);
        response.json(updateIt);
    } catch (err) {
        return response.status(400).json({Erro: err.message})
    }
});

// pesquisa por nome
/*
petRouter.get('/:name', async (request, response) => {
    const repository = getCustomRepository(PetRepository);
    const res = await repository.findByName(request.params.name)
    response.json(res);
});*/


export default petRouter;