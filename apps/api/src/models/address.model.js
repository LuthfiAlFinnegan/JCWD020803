import { Model, DataTypes } from 'sequelize';

export default class Address extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Address.belongsTo(models.Customer)
    Address.belongsTo(models.City)
  }
}

export const init = (sequelize) => {
  Address.init({
    longitude: DataTypes.DECIMAL,
    latitude: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};