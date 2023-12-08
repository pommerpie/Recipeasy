const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model {}

Ingredients.init(
  {
    ing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'Ingredients',
  }
);

module.exports = Ingredients;
