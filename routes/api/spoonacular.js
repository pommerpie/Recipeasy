const router = require('express').Router();

router.get('/byIngredient', async (req, res) => {
    const ingredients = ['milk','cheese','butter', 5062]
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=077448ed5ae54a95a34829c3e60eee0f&ingredients=${ingredients}&ranking=1&ignorePantry=true&number=5`
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})
module.exports = router;

router.get('/instructions/:recipeId', async (req, res) => {
    const recipeId = '640494'
    const url = `https://api.spoonacular.com/recipes/${req.params.recipeId}/analyzedInstructions?apiKey=077448ed5ae54a95a34829c3e60eee0f`
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})

// const url3 = `https://api.spoonacular.com/recipes/${recipeId}/summary`