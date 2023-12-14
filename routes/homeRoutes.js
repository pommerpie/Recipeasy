const router = require('express').Router();
const { Ingredidents } = require('../models')

router.get('/', async (req, res) => {
    res.render('landing', { loggedIn: req.session.loggedIn });
});

router.get('/login', async (req, res) => {
    res.render('login', { loggedIn: req.session.loggedIn });
});

router.get('/signup', async (req, res) => {
    res.render('signup', { loggedIn: req.session.loggedIn });
});

router.get('/myrecipes', async (req, res) => {
    res.render('recipe', { loggedIn: req.session.loggedIn })
})

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
router.get('/recipes', async (req,res) => {
    
})
router.get('/byIngredient/:ingredients', async (req, res) => {
    let ingredients = req.params.ingredients
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${ingredients}&ranking=1&ignorePantry=true&number=5`
    const response = await fetch(url);
    const data = await response.json();
    res.render('recipe', { loggedIn: req.session.loggedIn, data: data, style: "../css/search.css", script: "../js/recipe.js" });
})
module.exports = router;