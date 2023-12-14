import { Model, DataTypes } from 'sequelize';

export default class Favourite extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Favourite.belongsTo(models.Customer)
    Favourite.belongsTo(models.Product)
  }
}

export const init = (sequelize) => {
  Favourite.init({
    
  }, {
    sequelize,
    modelName: 'Favourite',
  });
  return Favourite;
};