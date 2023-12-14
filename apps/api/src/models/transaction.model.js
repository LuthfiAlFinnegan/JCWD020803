import {Model, DataTypes} from 'sequelize'

export default class Transaction extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Transaction.hasMany(models.Transaction_product)
    Transaction.belongsTo(models.Customer)
    Transaction.belongsTo(models.Payment_method)
    Transaction.belongsTo(models.Branch)
  }
}

export const init = (sequelize) => {
  Transaction.init({
    payment_proof: DataTypes.STRING,
    status: DataTypes.ENUM('Waiting Payment', 'Waiting Payment Confirmation', 'Payment Confirmed', 'On Process', 'Shipping Order', 'Order Completed', 'Order Cancelled'),
    sub_total: DataTypes.INTEGER,
    discount: DataTypes.STRING,
    shipment_fee: DataTypes.INTEGER,
    shipment_method: DataTypes.STRING,
    isPaymentConfirmed: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};