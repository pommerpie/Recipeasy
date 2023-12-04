const byingredient = require('express').Router();

byingredient.get('/', async (req, res) => {
    const ingredients = ['chicken','milk','cheese','butter']
    for (let index in ingredients) {
        ingredients[index] = ingredients[index] + ',+'
    }
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=077448ed5ae54a95a34829c3e60eee0f&includeIngredients=milk,cheese,butter,chicken,onions,salt,pepper&fillIngredients=true`
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})
module.exports = byingredient;