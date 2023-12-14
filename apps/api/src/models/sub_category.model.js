
import { Model, DataTypes } from 'sequelize';

export default class Sub_category extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Sub_category.hasMany(models.Product)
    Sub_category.belongsTo(models.Category)
  }
}

export const init = (sequelize) => {
  Sub_category.init({
    sub_category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sub_category',
  });
  return Sub_category;
};