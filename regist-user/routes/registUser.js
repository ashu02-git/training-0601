var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var age = req.body.age;

  res.render('registUser', { 
    title: 'ユーザー作成完了',
    name: name,
    age: age
  });
});

module.exports = router;
