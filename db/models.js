import { Sequelize, DataTypes, Model } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';

export class User extends Model {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    id;
  
    @Attribute(DataTypes.STRING)
    @NotNull
    user;
  
    @Attribute(DataTypes.STRING)
    @NotNull
    passWord;
  }
