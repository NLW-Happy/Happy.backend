import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import User from '../entities/User';
import userView from '../views/UserView';
import * as Yup from 'yup';

class UserController {
  public async create(request: Request, response: Response) {
    const { bio, email, name, password } = request.body as User;

    const userData = { bio, email, name, password };

    const schema = Yup.object().shape({
      bio: Yup.string().required().max(300),
      email: Yup.string().required(),
      password: Yup.string().required(),
      name: Yup.string().required(),
    });

    await schema.validate(userData, {
      abortEarly: false,
    });

    const usersRepository = getRepository(User);
    const userExists = await usersRepository.findOne({ where: { email } });

    if (userExists) {
      return response
        .status(400)
        .json({ error: 'Email already exists on system' });
    }

    const hashPassword = await hash(password, 8);

    const user = usersRepository.create({
      ...userData,
      password: hashPassword,
    });

    await usersRepository.save(user);

    return response.status(201).json(userView.render(user));
  }
}

export default new UserController();
