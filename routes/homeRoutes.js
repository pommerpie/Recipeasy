const router = require('express').Router();
const { Ingredidents } = require('../models')
// Landing page
router.get('/', async (req, res) => {
    res.render('landing', { loggedIn: req.session.loggedIn });
});
// Login page
router.get('/login', async (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
});
// Signup page
router.get('/signup', async (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn });
});
// User saved recipes
router.get('/myrecipes', async (req, res) => {
    res.render('recipe', { loggedIn: req.session.loggedIn })
})
// Loading search page with ingredients in database
router.get('/search', async (req, res) => {
    try {
        const dbingredients = await Ingredidents.findAll({
            order: [
                ['name', 'ASC']
            ],
        });
        const ingredients = dbingredients.map((ingredient) =>
            ingredient.get({ plain: true })
        );
        res.render('search', {
            ingredients,
            loggedIn: req.session.loggedIn,
            userID: req.session.userID
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})
// Search by selected ingredients and render result page
router.get('/byIngredient/:ingredients', async (req, res) => {
    let ingredients = req.params.ingredients
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${ingredients}&ranking=1&ignorePantry=true&number=5`
    const response = await fetch(url);
    const data = await response.json();
    res.render('recipe', { loggedIn: req.session.loggedIn, data: data, style: "../css/search.css", script: "../js/recipe.js" });
})

// getting recipe instuctions based on id
router.get('/instructions/:recipeId', async (req, res) => {
    const url =`https://api.spoonacular.com/recipes/${req.params.recipeId}/summary?apiKey=${process.env.API_KEY}`
    const url2 = `https://api.spoonacular.com/recipes/${req.params.recipeId}/analyzedInstructions?apiKey=${process.env.API_KEY}`
    const response = await fetch(url);
    const summary = await response.json();
    const response2 = await fetch(url2);
    const data = await response2.json();
    const instructions = data[0].steps
    console.log(instructions)
    res.render('singleRecipe', { loggedIn: req.session.loggedIn, summary, instructions, style: "../css/search.css", script: "" });
})

module.exports = router;
