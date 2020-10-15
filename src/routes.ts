import { Router } from 'express';
import multer from 'multer';
import orphanageController from './controllers/OrphanagesController';
import uploadConfigs from './config/upload';

const OrphanageRouter = Router();
const upload = multer(uploadConfigs);

OrphanageRouter.post(
  '/orphanage',
  upload.array('images'),
  orphanageController.create,
);
OrphanageRouter.get('/orphanage', orphanageController.index);
OrphanageRouter.get('/orphanage/:id', orphanageController.show);

export default OrphanageRouter;
