import { Sequelize, Model } from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

const models: Model[] = [User];

class Database {
  public connection: Sequelize = new Sequelize(databaseConfig);

  constructor() {
    this.init();
  }

  protected init() {
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
