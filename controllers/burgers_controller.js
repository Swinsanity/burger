var express = require('express');
var router = express.Router();
var burgers = require('../models/burgers');

router.get('/', function (req, res) {
  res.redirect('burgers');
});

router.get('/burgers', function (req, res) {
  burgers.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/create', function (req, res) {
  burgers.insertOne(['burger_name'], [req.body.burger_name], function (data) {
    res.redirect('/burgers');
  });
});

module.exports = router;
