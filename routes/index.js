const express = require('express');

const recipeRouter = require('./recipes');
const ingredientRouter = require('./ingredient')

const app = express();

app.use('/recipies', recipeRouter);
app.use('/byingredient', ingredientRouter);

module.exports = app;