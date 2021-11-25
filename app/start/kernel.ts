import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// 
import Routes from '../routes/index.routes';

import asyncErrors from '../middlewares/async-errors.middleware';

const kernel = (app: express.Application) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());

  Routes.init(app);

  app.use(asyncErrors);
};

export default kernel;
