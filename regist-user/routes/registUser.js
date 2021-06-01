var express = require('express');
var router = express.Router();
const fs = require("fs");
const promiseFs = require('fs').promises;

const textPath = "./database/user.txt"



/* GET home page. */
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var age = req.body.age;
  const data = `${name} , ${age} \n`;
  const options = {
    flag: 'a'
  };


  // fs.writeFile(textPath, data, options, (err) => {
  //   if(err) console.log(err);
  //   else console.log('write end');
  // });

  // promise表記
  promiseFs
    .writeFile(textPath, data, options)
      .then((data) =>{
        console.log('ユーザー情報保存完了')
      })
      .catch((err) => {
        console.log(err);
        console.log('catch end');
      });
      // console.log('function end');

  res.render('registUser', { 
    title: 'ユーザー作成完了',
    name: name,
    age: age
  });
});

module.exports = router;
