const router = require('express').Router();

router.get('/instructions/:recipeId', async (req, res) => {
    const url = `https://api.spoonacular.com/recipes/${req.params.recipeId}/analyzedInstructions?apiKey=${process.env.API_KEY}`
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
})

// const url3 = `https://api.spoonacular.com/recipes/${recipeId}/summary`
module.exports = router;