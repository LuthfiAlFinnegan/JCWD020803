import {Model, DataTypes} from 'sequelize'

export default class Transaction_product extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Transaction_product.belongsTo(models.Product)
    Transaction_product.belongsTo(models.Transaction)
  }
}

export const init = (sequelize) => {
  Transaction_product.init({
    quantity: DataTypes.INTEGER,
    product_discount: DataTypes.INTEGER,
    product_total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction_product',
  });
  return Transaction_product;
};