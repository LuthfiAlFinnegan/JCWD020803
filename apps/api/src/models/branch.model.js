import { Model, DataTypes } from 'sequelize';

export default class Branch extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Branch.belongsTo(models.Admin)
    Branch.belongsTo(models.City)
    Branch.hasOne(models.Branch_product)
  }
}

export const init = (sequelize) => {
  Branch.init({
    branch_name: DataTypes.STRING,
    longitude: DataTypes.DECIMAL,
    latitude: DataTypes.DECIMAL,
    isDisabled: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};