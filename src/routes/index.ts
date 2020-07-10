import { Router } from 'express';
import userRouter from './user.routes';
import petRouter from './pet.routes';
import eventRouter from './event.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/pet', petRouter);
routes.use('/event', eventRouter);

export default routes;
