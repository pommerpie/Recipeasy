const router = require('express').Router();

const spoonacular = require('./spoonacular');
const user = require('./user')

router.use('/spoonacular', spoonacular);
router.use('/user', user);

module.exports = router;
