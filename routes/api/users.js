var express = require('express');
var router = express.Router();
var User = require('../../models/user');

router.get('/', function(req, res, next) {
  User.find().limit(50).exec().then(function(docs) {
    res.json(docs);
  }).catch(function(err) {
    console.error(err);
    next();
  });
});

router.get('/:id', function(req, res, next) {
  User.findOne({'_id': req.params.id}).exec().then(function(doc) {
    res.json(doc);
  }).catch(function(err) {
    console.error(err);
    next();
  });
});

router.post('/', function(req, res, next) {
  next();
});

router.put('/:id', function(req, res, next) {
  next();
});

router.delete('/:id', function(req, res, next) {
  next();
});

module.exports = router;
