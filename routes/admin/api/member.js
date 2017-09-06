var express = require('express');
var router = express.Router();

var Member = require('../../../schema/member.js');


//create member
router.post('/', function (req, res, next) {
    var member = new Member(req.body);
    member.save(function (err, result) {
       if (err) {
            res.send({
                error_code: 1,
                err: err
            });
        } else {
            res.json({
                error_code: 0
            });
        };
    });
});
//update member
router.put('/:id', function (req, res, next) {
    var member = req.body
    Member.findOneAndUpdate({
        _id: req.params.id
    }, member, function (err, result) {
         if (err) {
            res.send({
                error_code: 1,
                err: err
            });
        } else {
            res.json({
                error_code: 0
            });
        };
    });
});
//delete member
router.delete('/:id', function(req, res) {
    Member.findOneAndRemove({
       _id: req.params.id
    }, function(err, result) {
        if (err) {
            res.send({
                error_code: 1,
                err: err
            });
        } else {
            res.json({
                error_code: 0
            });
        }
    });
});

module.exports = router;