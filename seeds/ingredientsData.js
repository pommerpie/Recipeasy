const { Ingredients } = require('../models');
const data = require('../ingredients.json')

const dropIngredients = () => Ingredients.truncate()
const seedData = () => Ingredients.bulkCreate(data)

dropIngredients()
seedData()
