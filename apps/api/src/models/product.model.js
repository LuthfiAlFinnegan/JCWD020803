import { Model, DataTypes } from 'sequelize';

export default class Product extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Product.hasMany(models.Product_image)
    Product.hasMany(models.Favourite)
    Product.hasMany(models.Branch_product)
    Product.hasMany(models.Cart_detail)
    Product.hasMany(models.Transaction_product)
    Product.belongsTo(models.Category)
    Product.belongsTo(models.Sub_category)
  }
}

export const init = (sequelize) => {
  Product.init({
    product_name: DataTypes.STRING,
    descriptions: DataTypes.STRING,
    price: DataTypes.INTEGER,
    isDisabled: DataTypes.BOOLEAN,
    isDeleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};