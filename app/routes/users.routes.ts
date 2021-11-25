import express from 'express';
import UsersController from '../controllers/user.controller';

class UsersRoutes {
  router: express.Router;

  basePath: string;

  constructor() {
    this.router = express.Router();
    this.basePath = '/users';
  }

  initialise() {
    this.router.route(`${this.basePath}`)
      .get(UsersController.list)
      .post(UsersController.create);

    this.router.route(`${this.basePath}/:id`)
      .all()
      .get(UsersController.findOne)
      .put(UsersController.update)
      .patch(UsersController.patch)
      .delete(UsersController.delete);

    return this.router;
  }
}

const userRoutes = new UsersRoutes();

export default userRoutes.initialise();
