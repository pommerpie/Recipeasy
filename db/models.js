import { DataTypes, Model } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull } from '@sequelize/core/decorators-legacy';


//model for the 'Users' table
export class Users extends Model {
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

//model for the 'Recipes' table
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

//model for the 'Ingredients' table
export class Ingredients extends Model {
  @Attribute(DataTypes.STRING)
  @NotNull
  ingName;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  recId;
}

