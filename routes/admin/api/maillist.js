var express = require('express');
var router = express.Router();

var Maillist = require('../../../schema/maillist');

router.get('/',function(req,res,next){
    Maillist.find({}, function (err, maillist) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(maillist).status(200);
        }
    });
});

module.exports = router;