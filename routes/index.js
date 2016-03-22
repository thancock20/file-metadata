var express = require('express');

var router = express.Router();

var port = process.env.PORT || 8080;

router.route('/')
.all(function(req, res, next) {
  next();
})
.get(function(req, res, next) {
  res.render('index');
})
.post(function(req, res, next) {

});

module.exports = router;
