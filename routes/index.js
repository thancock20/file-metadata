var express = require('express');
var multer = require('multer');

var router = express.Router();

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var port = process.env.PORT || 8080;

router.route('/')
.all(function(req, res, next) {
  next();
})
.get(function(req, res, next) {
  res.render('index');
})
.post(upload.single('upl'), function(req, res, next) {
  res.json({
    fileSize: req.file.size
  });
});

module.exports = router;
