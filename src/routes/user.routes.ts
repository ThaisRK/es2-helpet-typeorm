import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import User from '../models/User';
import UserRepository from '../repositories/UserRepository';

const userRouter = Router();

// cria
userRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(User);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
  }
});

// lista todos
userRouter.get('/', async (request, response) => {
  response.json(await getRepository(User).find());
});

// atualiza
userRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { name, cpf, phone, city, email } = request.body;
  try {
    const repo = getRepository(User);
    const res = await repo.findOne(request.params);
      if (!res) {
        response.status(400).send();
      } else {
        res.name = name;
        res.cpf = cpf;
        res.phone = phone;
        res.city = city;
        res.email = email;

        console.log(res);
        const updateIt = await repo.save(res);
        response.json(updateIt);
      }
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }

});

/*
// deleta
userRouter.delete('/:id', async (request, response)=>{
    const { id } = request.params;
    try {
        const repo = getRepository(User);
        const del = await repo.findOne(request.params);
        if (!del) {
          return{message:'Nenhum registro encontrado com o id informado'}
        }else{
          const deleteIt = await repo.delete(del);
          //response.status(204).send();
          response.json(deleteIt);
          return {message: `${id} removido com sucesso!`};
        }
    } catch (err) {
      return response.status(400).json({Erro: err.message})
    }
});*/

// pesquisa por nome
userRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(UserRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

export default userRouter;
