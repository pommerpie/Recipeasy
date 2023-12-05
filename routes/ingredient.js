const byingredient = require('express').Router();

byingredient.get('/', async (req, res) => {
    const ingredients = ['milk','cheese','butter',5062]
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=077448ed5ae54a95a34829c3e60eee0f&ingredients=${ingredients}&ranking=1&ignorePantry=true`
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})
module.exports = byingredient;

// const url2 = `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=077448ed5ae54a95a34829c3e60eee0f`
// const url3 = `https://api.spoonacular.com/recipes/${recipeId}/summary`