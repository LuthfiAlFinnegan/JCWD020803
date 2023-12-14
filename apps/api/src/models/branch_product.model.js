import { Model, DataTypes } from 'sequelize';

export default class Branch_product extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Branch_product.belongsTo(models.Branch)
    Branch_product.belongsTo(models.Product)
    Branch_product.hasMany(models.Discount)
  }
}

export const init = (sequelize) => {
  Branch_product.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Branch_product',
  });
  return Branch_product;
};