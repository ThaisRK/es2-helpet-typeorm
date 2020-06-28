import { Router } from 'express';
import { getRepository, getCustomRepository } from 'typeorm';
import Event from '../models/Event';
import EventRepository from '../repositories/EventRepository';


const eventRouter = Router();

// cria
eventRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Event);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

// lista todos
eventRouter.get('/', async (request, response) => {
  response.json(await getRepository(Event).find());
});

// atualiza
eventRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, description } = request.body;
  try {
    const repo = getRepository(Event);
    const res = await repo.findOne(request.params);
      if (!res) {
        response.status(400).send();
      } else {
        res.title = title;
        res.description = description;

        console.log(res);
        const updateIt = await repo.save(res);
        response.json(updateIt);
      }
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }

});

// pesquisa por nome
eventRouter.get('/:title', async (request, response) => {
  const repository = getCustomRepository(EventRepository);
  const res = await repository.findByTitle(request.params.title);
  response.json(res);
});

export default eventRouter;
