import { Model, DataTypes } from 'sequelize';

export default class Product_image extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Product_image.belongsTo(models.Product)
  }
}

export const init = (sequelize) => {
  Product_image.init({
    product_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product_image',
  });
  return Product_image;
};