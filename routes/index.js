var express = require('express');
var router = express.Router();
var path = require('path');

var admin = require('./admin/index');
var client = require('./client/index');

router.use('/img', express.static(path.join(__dirname, '../public/img')));
router.use('/doc', express.static(path.join(__dirname,'../public/doc')));
router.use('/wysiwyg', express.static(path.join(__dirname,'../public/wysiwyg')));
router.use('/admin', express.static(path.join(__dirname, '../public/admin/dist')), admin);

router.use(express.static(path.join(__dirname, '../public/client/dist')), client);

module.exports = router;