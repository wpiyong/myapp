var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('node express angular and mongodb');
});

module.exports = router;
