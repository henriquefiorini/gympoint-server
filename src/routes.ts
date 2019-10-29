import { Router as ExpressRouter, Response } from 'express';

class Router {
  public routes: ExpressRouter;

  public constructor() {
    this.routes = ExpressRouter();
    this.init();
  }

  private init() {
    this.routes.get('/', (_, res: Response) => {
      return res.json('Hello World!');
    });
  }
}

export default new Router().routes;
