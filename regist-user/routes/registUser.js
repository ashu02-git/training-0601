var express = require('express');
var router = express.Router();
const fs = require("fs");

const databasePath = 'user.txt'

/* GET home page. */
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var age = req.body.age;
  const data = `${name} , ${age} \n`;
  const options = {
    flag: 'a'
  };

  fs.writeFile(databasePath, data, options, (err) => {
    if(err) console.log(err);
    else console.log('write end');
  });
  
  res.render('registUser', { 
    title: 'ユーザー作成完了',
    name: name,
    age: age
  });
});

module.exports = router;
