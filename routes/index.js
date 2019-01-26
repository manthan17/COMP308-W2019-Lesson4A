var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

router.get('about/', (req, res, next) => {
  res.render('index', { title: 'About' });
});

router.get('contact/', (req, res, next) => {
  res.render('index', { title: 'Contact' });
});

router.get('product/', (req, res, next) => {
  res.render('index', { title: 'Products' });
});

router.get('services/', (req, res, next) => {
  res.render('index', { title: 'Services' });
});


module.exports = router;
