var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/name/', function(req, res, next) {
  res.render('index', { name: 'Mike' });
});

module.exports = router;
