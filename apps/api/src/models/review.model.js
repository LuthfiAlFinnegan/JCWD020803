import {Model, DataTypes} from 'sequelize'
export default class Review extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Review.belongsTo(models.Customer)
    Review.belongsTo(models.Branch)
  }
}

export const init = (sequelize) => {
  Review.init({
    messages: DataTypes.STRING,
    ratings: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};