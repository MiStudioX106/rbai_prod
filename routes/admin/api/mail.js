var express = require('express');
var router = express.Router();
var sendmail = require('sendmail');

var Maillist = require('../../../schema/maillist');

router.post('/', function (req, res, next) {
    var mail = req.body;
    
    Maillist.findOne({
        class: mail.to,
    }, function (err, maillist) {
        if (err) {
            console.log(err);
        } else {
            console.log(maillist.email);
            
            sendmail({
                from: 'u02530058@ccu.edu.tw',
                to: maillist.email,
                subject: mail.subject,
                html: mail.content,
                attachments: [{
                    filename: mail.attachment
                }]
            }, function(err, reply) {
                console.log(err && err.stack);
                console.dir(reply);
            });
        }
    });
    
   

});

module.exports = router;