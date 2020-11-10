import { Router } from 'express';

import orphanageRouter from './modules/Orphanages/routes';
import { sessionRouter, userRouter } from './modules/Users/routes';

const routes = Router();

routes.use('/orphanage', orphanageRouter);
routes.use('/session', sessionRouter);
routes.use('/users', userRouter);

export default routes;
