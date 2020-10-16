import { Router } from 'express';

import orphanageRouter from './orphanage.routes';
import sessionRouter from './session.routes';

const routes = Router();

routes.use('/orphanage', orphanageRouter);
routes.use('/session', sessionRouter);

export default routes;
