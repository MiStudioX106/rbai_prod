var express = require('express');
var router = express.Router();
var path = require('path');

var news = require('./api/news');
var member = require('./api/member');
var recruit = require('./api/recruit');
var upload = require('./api/upload');
var wysiwyg = require('./api/wysiwyg');
var mail = require('./api/mail');
var maillist = require('./api/maillist');
var document = require('./api/document');
var exam = require('./api/exam');
var course = require('./api/course');


router.use('/api/news', news);
router.use('/api/member', member);
router.use('/api/recruit', recruit);
router.use('/api/upload', upload);
router.use('/api/wysiwyg', wysiwyg);
router.use('/api/maillist', maillist);
router.use('/api/mail', mail);
router.use('/api/document', document);
router.use('/api/exam', exam);
router.use('/api/course',course);



router.use(function (req, res) {
    res.render(path.join(__dirname, '../../public/admin/dist/index.html'));
});

module.exports = router;