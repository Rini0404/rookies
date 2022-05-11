const withAuth = require('../utils/auth');
const router = require('express').Router();
const { User, Player } = require('../models');
const res = require('express/lib/response');

router.get('/', (req, res) => {
  res.render('homepage');
});


// GET homepage
router.get('/', (req, res) => {
  try {
    res.render('homepage', {loggedIn: req.session.loggedIn});  
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/', (req, res) => {
  try {
    res.render('homepage', {logged_out: req.session.logged_out});  
  } catch (err) {
    res.status(500).json(err)
  }
});



router.get('dashboard', withAuth, (req, res) => {
  try {
    res.render('dashboard', {
      players: req.session.players
    });
  } catch (err) {
    res.status(500).json(err);

  }
});

router.get('/login', (req, res) => {
  try {
    if (req.session.loggedIn) {
      return;
    }
    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
})


module.exports = router;
