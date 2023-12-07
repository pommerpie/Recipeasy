const { Recipe } = require('../models');

const recipeData = [
  {
    title: 'Spaghetti',
    ingredients: ['Noodes', 
                  'Red sauce'],
    instructions: 'Cook noodles until aldente, add sauce and serve',
    dish_id: 1,
    filename: 'filename',
    description:
      'It`s spaghetti what do you want from me',
  }]

  const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;