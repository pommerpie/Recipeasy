const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

//model for the 'Recipes' table
Recipes.init({
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  recipeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  steps: {
    type: DataTypes.JSON
  }
});

module.exports = Recipes;