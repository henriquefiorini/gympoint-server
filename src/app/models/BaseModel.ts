import { Model } from 'sequelize';

abstract class BaseModel extends Model<BaseModel> {
  public associate?(models: BaseModel[]): void;
}

export default BaseModel;
