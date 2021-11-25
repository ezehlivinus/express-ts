import express from 'express';
import usersRoutes from './users.routes';

class Routes {
  public static init(app: express.Application) {
    app.use('/api/v1', usersRoutes);
  }
}

export default Routes;
