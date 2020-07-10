import { Router, json } from 'express';
import { getRepository, getCustomRepository, Binary } from 'typeorm';
import { validate } from 'class-validator';
import Pet from '../models/Pet';
import PetRepository from '../repositories/PetRepository';

const petRouter = Router();

// cria
petRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Pet);
    const {
      name,
      birth,
      type,
      size,
      gender,
      castrated,
      state,
      users,
    } = request.body;
    const pet = repo.create({
      name,
      birth,
      type,
      size,
      gender,
      castrated,
      state,
      users,
    });
    const errors = await validate(pet);
    if (errors.length === 0) {
      const res = await repo.save(pet);
      return response.status(201).json(res);
    }
    response.status(400).json(errors);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

// lista todos
petRouter.get('/', async (request, response) => {
  response.json(await getRepository(Pet).find());
});

// atualiza
petRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const {
    name,
    birth,
    type,
    size,
    gender,
    castrated,
    state,
    users,
  } = request.body;
  try {
    const repo = getRepository(Pet);
    const res = await repo.findOne(request.params);
    if (!res) {
      response.status(400).send();
    } else {
      res.name = name;
      res.birth = birth;
      res.type = type;
      res.size = size;
      res.gender = gender;
      res.castrated = castrated;
      res.state = state;
      res.users = users;

      console.log(res);
      const updateIt = await repo.save(res);
      response.json(updateIt);
    }
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

// pesquisa por nome
petRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(PetRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});

// deleta
petRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  try {
    const repo = getRepository(Pet);
    const del = await repo.findOne(id);
    console.log(del);
    if (!del) {
      return { message: 'Nenhum registro encontrado com o id informado' };
    }
    const deleteIt = await repo.delete(del.id);
    response.status(204).send();
    response.json(deleteIt);
    console.log('Removido com sucesso');
    // return response.status(204).json({ message: `${id} removido com sucesso!` });
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default petRouter;
