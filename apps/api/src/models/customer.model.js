import { Model, DataTypes } from 'sequelize';

export default class Customer extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Customer.hasMany(models.Transaction)
    Customer.hasMany(models.Address)
    Customer.hasOne(models.Cart)
    Customer.hasOne(models.Favourite)
    Customer.hasMany(models.User_voucher)
  }
}

export const init = (sequelize) => {
  Customer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    images: DataTypes.STRING,
    referral_code: DataTypes.STRING,
    point: DataTypes.INTEGER,
    isVerified: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};