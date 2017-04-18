var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nvd3', { title: 'NVD3 Examples' });
});

module.exports = router;
