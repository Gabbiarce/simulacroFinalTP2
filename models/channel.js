'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Channel.belongsTo(models.Device)
      Channel.belongsTo(models.Category)
      Channel.hasMany(models.Favorite)
    }
  }
  Channel.init({
    name: DataTypes.STRING,
    logo_url: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    deviceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Channel',
  });
  return Channel;
};