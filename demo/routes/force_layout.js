var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('force_layout', { title: 'Force Layout' });
});

module.exports = router;
