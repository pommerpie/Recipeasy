const ingredient = require('express').Router();

ingredient.get('/', async (req, res) =>{
    const ingredients = 'chicken,+milk,+cheese,+bacon'
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=077448ed5ae54a95a34829c3e60eee0f&ingredients=${ingredients}&ignorePantry=true`
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
    
})
module.exports = ingredient;