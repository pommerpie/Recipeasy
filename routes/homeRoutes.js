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

module.exports = router;