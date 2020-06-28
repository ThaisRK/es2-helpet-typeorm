import { Router } from 'express';
import { getRepository, getCustomRepository, Binary } from 'typeorm';
import Pet from '../models/Pet';
import PetRepository from '../repositories/PetRepository';

const petRouter = Router();

// cria
petRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Pet);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
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
  const { name, birth, type, size, gender, castratedd, state } = request.body;
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
        res.castrated = castratedd;
        res.state = state;

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

export default petRouter;
