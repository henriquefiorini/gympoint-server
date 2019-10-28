import express from 'express';

class Router {
  routes: express.Router;

  constructor() {
    this.routes = express.Router();
    this.init();
  }

  init() {
    this.routes.get('/', (_, res: express.Response) => {
      return res.json('Hello World!');
    });
  }
}

export default new Router().routes;
