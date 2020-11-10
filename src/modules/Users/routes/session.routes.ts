import { Router } from 'express';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  return response.status(200).json({ email, password });
});

export default sessionsRouter;
