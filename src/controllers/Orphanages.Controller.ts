import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';
import Image from '../models/Image';
import orphanageView from '../views/OrphanagesView';
import * as Yup from 'yup';

class OrphanageController {
  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanageRepository = getRepository(Orphanage);

    try {
      const orphanage = await orphanageRepository.findOneOrFail(id, {
        relations: ['images'],
      });

      return response.status(200).json(orphanageView.render(orphanage));
    } catch (err) {
      return response.status(404).json({ error: 'Orfanato não encontrado!' });
    }
  }

  public async index(request: Request, response: Response) {
    const orphanageRepository = getRepository(Orphanage);

    const orphanages = await orphanageRepository.find({
      relations: ['images'],
    });

    return response.status(200).json(orphanageView.renderMany(orphanages));
  }

  public async create(request: Request, response: Response) {
    const {
      about,
      instructions,
      latitude,
      longitude,
      open_on_weekends,
      name,
      user_id,
      opening_hours,
    } = request.body as Orphanage;

    const orphanageRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];
    const images: Image[] = requestImages.map(image => ({
      path: image.filename,
    }));

    const dataOrphanage = {
      user_id,
      about,
      instructions,
      latitude,
      longitude,
      open_on_weekends: Boolean(open_on_weekends),
      opening_hours,
      name,
      images,
    };

    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array().required(),
    });

    await schema.validate(dataOrphanage, {
      abortEarly: false,
    });

    const orphanage = orphanageRepository.create(dataOrphanage);

    await orphanageRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }
}

export default new OrphanageController();
