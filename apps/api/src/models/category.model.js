import { Model, DataTypes } from 'sequelize';

export default class Category extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Category.hasMany(models.Product)
    Category.hasMany(models.Sub_category)
  }
}

export const init = (sequelize) =>{
  Category.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};