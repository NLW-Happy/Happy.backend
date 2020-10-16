import { Router } from 'express';
import userController from '../controllers/User.Controller';

const userRouter = Router();

userRouter.post('/', userController.create);

export default userRouter;
