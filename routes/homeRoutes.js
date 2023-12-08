const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('landing', {loggedIn: req.session.loggedIn});
});

router.get('/login', async (req, res) => {
    res.render('login', {loggedIn: req.session.loggedIn});
});

router.get('/signup', async (req, res) => {
    res.render('signup', {loggedIn: req.session.loggedIn});
});

module.exports = router;