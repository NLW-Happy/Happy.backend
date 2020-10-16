import { Router } from 'express';
import multer from 'multer';
import orphanageController from '../controllers/Orphanages.Controller';
import uploadConfigs from '../config/upload';

const OrphanageRouter = Router();
const upload = multer(uploadConfigs);

OrphanageRouter.post('/', upload.array('images'), orphanageController.create);
OrphanageRouter.get('/', orphanageController.index);
OrphanageRouter.get('/:id', orphanageController.show);

export default OrphanageRouter;
