import express, { Application } from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  public server: Application;

  public constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes() {
    this.server.use(routes);
  }
}

export default new App().server;
