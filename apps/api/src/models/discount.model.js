import { Model, DataTypes } from 'sequelize';

export default class Discount extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Discount.belongsTo(models.Branch_product)
  
  }
}

export const init = (sequelize) => {
  Discount.init({
    description: DataTypes.STRING,
    nominal: DataTypes.INTEGER,
    minimum_spent: DataTypes.INTEGER,
    maximum_discount: DataTypes.INTEGER,
    discount_type: DataTypes.ENUM('Product Discount', 'Price Break Discount', 'Quantity Discount'),
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    isPercentage: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Discount',
  });
  return Discount;
};