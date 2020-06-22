import { Router } from 'express';
import userRouter from './user.routes';
import petRouter from './pet.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/pet', petRouter);

export default routes;
