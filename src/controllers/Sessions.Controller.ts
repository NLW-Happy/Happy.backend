import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import Session from '../models/User';
import * as Yup from 'yup';

class SessionController {
  public async create(request: Request, response: Response) {
    const { email, password } = request.body as Session;

    const sessionRepository = getRepository(Session);

    const user = await sessionRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email or password');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect email or password');
    }

    return response.status(404).json({ user });
  }
}

export default new SessionController();
