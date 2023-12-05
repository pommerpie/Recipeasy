import { DataTypes, Model } from '@sequelize/core';
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

  export class Recipes extends Model {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    id;
  
    @Attribute(DataTypes.STRING)
    @NotNull
    recName;
  
    @Attribute(DataTypes.INTEGER)
    @NotNull
    userId;
  }

  export class Ingredients extends Model {
    @Attribute(DataTypes.STRING)
    @NotNull
    ingName;
  
    @Attribute(DataTypes.INTEGER)
    @NotNull
    recId;
  }

