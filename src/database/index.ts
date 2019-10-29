import { Sequelize, Model } from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';

class Database {
  public connection: Sequelize;

  public models: Model[];

  constructor() {
    this.connection = new Sequelize(databaseConfig);
    this.models = [User];
    this.init();
  }

  init() {
    this.models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
