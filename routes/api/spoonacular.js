const router = require('express').Router();

router.post('/byIngredient', async (req, res) => {
    const ingredients = req.body
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${ingredients.join(',+')}&ranking=1&ignorePantry=true&number=5`
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})
module.exports = router;

router.get('/instructions/:recipeId', async (req, res) => {
    const url = `https://api.spoonacular.com/recipes/${req.params.recipeId}/analyzedInstructions?apiKey=${process.env.API_KEY}`
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})

// const url3 = `https://api.spoonacular.com/recipes/${recipeId}/summary`