import { Sequelize, Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static load(sequelize: Sequelize) {
    return super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING,
      },
      {
        sequelize,
        hooks: {
          beforeSave: async (user: User) => {
            if (user.password) {
              user.password_hash = await bcrypt.hash(user.password, 8);
            }
          },
        },
      }
    );
  }

  public verifyPassword(password: string) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
