const router = require('express').Router();

const byIngredient = require('./ingredient');
const recipes = require('./recipes');

router.use('/byIngredient', byIngredient);
router.use('/recipes', recipes);

module.exports = router;
