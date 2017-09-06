var express = require('express');
var router = express.Router();
var path = require('path');

var api = require('./api');
var news = require('./api/news');
var login = require('./api/login');

router.use('/api', api);
router.use('/api/news', news);
router.use('/api/login', login);

router.use(function(req, res) {
   res.render(path.join(__dirname, '../../public/client/dist/index.html'));
});

module.exports = router;