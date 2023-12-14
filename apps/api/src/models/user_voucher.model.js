import { Model, DataTypes } from 'sequelize';

export default class User_voucher extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    User_voucher.belongsTo(models.Customer)
    User_voucher.belongsTo(models.Voucher)
  }
}
export const init = (sequelize) => {
  User_voucher.init({
    vouchers_amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_voucher',
  });
  return User_voucher;
};