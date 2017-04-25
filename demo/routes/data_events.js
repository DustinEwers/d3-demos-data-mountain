var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data_events', { title: 'D3 - Data Events' });
});

module.exports = router;
