var express = require('express');
var router = express.Router();

var userRoutes = require('./api/users');
var articleRoutes = require('./api/articles');

router.use('/users', userRoutes);
router.use('/articles', articleRoutes);

module.exports = router;
