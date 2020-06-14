import {Router, request, response} from 'express';
import { getRepository, getCustomRepository, Repository } from 'typeorm';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

const userRouter = Router();

// cria
userRouter.post('/', async (request, response) => {
    try{
    const repo = getRepository(User);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
    }catch(err){
        console.log('err.message :>> ', err.message);
    }
})

// lista todos
userRouter.get('/', async (request, response) => {
    response.json(await getRepository(User).find())
})


// atualiza

userRouter.put('/:id', async (request, response) => {
    try {
        const repo = getRepository(User);
        const res = repo.findOne(request.params);
        const updateIt = await res.save(request.body);
        response.json(updateIt);
    } catch (err) {
        return response.status(400).json({Erro: err.message})
    }
});


// deleta
/*userRouter.delete('/:id', async (request, response)=>{
    //const { id } = request.params;
    try {
        const repo = getCustomRepository(UserRepository);
        const res = await repo.deleteById(request.params.id);
        response.json(res);
    } catch (err) {
        return response.status(400).json({Erro: err.message})
    }
});*/

// pesquisa por nome
userRouter.get('/:name', async (request, response) => {
    const repository = getCustomRepository(UserRepository);
    const res = await repository.findByName(request.params.name)
    response.json(res);
});


export default userRouter;