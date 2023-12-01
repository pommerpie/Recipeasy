const ingredient = require('express').Router();

ingredient.get('/', (req, res) =>{
    res.json('found me')
})
module.exports = ingredient;