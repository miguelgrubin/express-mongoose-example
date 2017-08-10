var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().
    limit(50).
    sort({ username: -1 }).
    exec(function(err, results){
      if(err) res.send(err);
      res.json(results);
    });
});

/* POST create user. */
router.post('/', function(req, res, next) {
  var user = new User();
  user.name.first = req.body.first_name;
  user.name.last = req.body.last_name;
  user.username = req.body.username;
  user.save(function(err) {
    if(err) res.send(err);
    res.json({ msg: 'User created!' });
  });
});

module.exports = router;
