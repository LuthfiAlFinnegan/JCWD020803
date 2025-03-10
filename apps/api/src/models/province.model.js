import { Model, DataTypes } from 'sequelize';

export default class Province extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Province.hasMany(models.City)
  }
}
export const init = (sequelize) => {
  Province.init({
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Province',
  });
  return Province;
};