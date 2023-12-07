const router = require('express').Router();

const byIngredient = require('./ingredient');
const recipes = require('./recipes');
const user = require('./user')

router.use('/byIngredient', byIngredient);
router.use('/recipes', recipes);
router.use('/user', user)

module.exports = router;
