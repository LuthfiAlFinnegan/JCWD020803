import { Model, DataTypes } from 'sequelize';

export default class Voucher extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Voucher.hasMany(models.User_voucher)
  
  }
}

export const init = (sequelize) => {
  Voucher.init({
    voucher_name: DataTypes.STRING,
    description: DataTypes.STRING,
    nominal: DataTypes.INTEGER,
    minimum_spent: DataTypes.INTEGER,
    maximum_discount: DataTypes.INTEGER,
    isPercentage: DataTypes.BOOLEAN,
    voucher_type: DataTypes.ENUM('Product Voucher', 'Shipping Fee Voucher', 'Referral Voucher'),
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    voucher_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};