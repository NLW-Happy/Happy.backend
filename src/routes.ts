import { Router } from 'express';
import multer from 'multer';
import OrphanageController from './controllers/OrphanagesController';
import uploadConfigs from './config/upload';

const OrphanageRouter = Router();
const upload = multer(uploadConfigs);

OrphanageRouter.post(
  '/orphanage',
  upload.array('images'),
  OrphanageController.create,
);
OrphanageRouter.get('/orphanage', OrphanageController.index);
OrphanageRouter.get('/orphanage/:id', OrphanageController.show);

export default OrphanageRouter;
