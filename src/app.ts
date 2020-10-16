import express from 'express';
import path from 'path';
import cors from 'cors';

import './database/conection';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();
app
  .use(cors())
  .use(express.json())
  .use(routes)
  .use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
  .use(errorHandler);

export { app };
