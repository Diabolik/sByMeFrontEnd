var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mixins', function(req, res, next) {
  res.render('using_mixins', { title: 'Express Mixins' });
});

module.exports = router;