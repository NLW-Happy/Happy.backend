import { Router } from 'express';

import orphanageRouter from './orphanage.routes';
import sessionRouter from './session.routes';
import userRouter from './user.routes';

const routes = Router();

routes.use('/orphanage', orphanageRouter);
routes.use('/session', sessionRouter);
routes.use('/user', userRouter);

export default routes;
