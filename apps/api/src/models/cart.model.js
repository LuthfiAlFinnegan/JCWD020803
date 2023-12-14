import { Model, DataTypes } from 'sequelize';

export default class Cart extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Cart.hasOne(models.Cart_detail)
    Cart.belongsTo(models.Customer)
  }
}

export const init = (sequelize) => {
  Cart.init({
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};