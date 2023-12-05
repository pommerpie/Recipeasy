const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('landing')
});

module.exports = router;