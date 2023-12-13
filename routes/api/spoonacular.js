const router = require('express').Router();
let ingredients;

router.get('/byIngredient/:ingredients', async (req, res) => {
    ingredients = req.params.ingredients
    console.log(ingredients)
    res.send("send")
})

router.get('/recipes', async (req,res) => {
    console.log('here')
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${ingredients}&ranking=1&ignorePantry=true&number=5`
    const response = await fetch(url);
    const data = await response.json();
    res.render('landing', data);
})

router.get('/instructions/:recipeId', async (req, res) => {
    const url = `https://api.spoonacular.com/recipes/${req.params.recipeId}/analyzedInstructions?apiKey=${process.env.API_KEY}`
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})

// const url3 = `https://api.spoonacular.com/recipes/${recipeId}/summary`

module.exports = router;