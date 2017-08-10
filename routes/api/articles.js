var express = require('express');
var router = express.Router();
var Article = require('../../models/article');
var User = require('../../models/user');

router.get('/', function(req, res, next) {
  Article.find().limit(50).exec().then(function(docs) {
    res.json(docs);
  }).catch(function(err) {
    console.error(err);
    next();
  });
});

router.get('/:id', function(req, res, next) {
  Article.findOne({'_id': req.params.id}).exec().then(function(doc) {
    res.json(doc);
  }).catch(function(err) {
    console.error(err);
    next();
  });
});

router.post('/', function(req, res, next) {
  var article = new Article();
  article.title = req.body.title;
  article.content = req.body.content;
  /*  article.publisher = req.body.;*/
  article.save().then(function(doc) {
    res.json({type: 'success', msg: 'Article created!'});
  }).catch(function(err) {
    res.json({type: 'danger', msg: 'Article could not be created'});
  });
});

router.put('/:id', function(req, res, next) {
  Article.findOneAndUpdate({
    '_id': req.params.id
  }, {
    title: req.body.title,
    content: req.body.content
  }).then(function() {
    req.res({type: 'success', msg: 'Article updated'});
  }).catch(function(err) {
    res.json({type: 'danger', msg: 'Article could not be updated'});
  });
});

router.delete('/:id', function(req, res, next) {
  Article.remove({'_id': req.params.id}).then(function() {
    req.res({type: 'success', msg: 'Article deleted'});
  }).catch(function(err) {
    res.json({type: 'danger', msg: 'Article could not be deleted'});
  });
});

module.exports = router;
