const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

//model for the 'Users' table
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
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Users;