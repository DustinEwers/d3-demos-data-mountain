var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('d3_simple', { title: 'D3 - Simple' });
});

module.exports = router;
