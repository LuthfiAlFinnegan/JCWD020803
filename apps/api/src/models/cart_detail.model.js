import { Model, DataTypes } from 'sequelize';

export default class Cart_detail extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Cart_detail.belongsTo(models.Product)
    Cart_detail.belongsTo(models.Cart)
  }
}
export const init = (sequelize) => {
  Cart_detail.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_detail',
  });
  return Cart_detail;
};