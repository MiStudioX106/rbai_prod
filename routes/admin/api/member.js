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
//
router.put('/', function (req, res, next) {
    var members = req.body
    var errors =[];
   for(var i =0;i<members.length;i++)
    {
        Member.findOneAndUpdate({
            _id: members[i]._id
        }, members[i], function (err, result) {
            if (err) {
                errors.push(err);
            } 
        });
    }
    if (errors.length>0) {
        res.send({
            error_code: 1,
            err: errors
        });
    } else {
        res.json({
            error_code: 0
        });
    }
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
//get Member by E-mail
router.get('/email/:email', function (req, res, next) {
    Member.findOne({
        email: req.params.email
    }, function (err, members) {
        if (err) {
            res.send(err).status(404);
        } else {
            res.json(members).status(200);
        }
    });
});

module.exports = router;