var express = require('express');
var router = express.Router();

var Document = require('../../../schema/document.js');



//create document
router.post('/', function (req, res, next) {
    var document = new Document(req.body);
    document.save(function (err, result) {
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
//update document
router.put('/:id', function (req, res, next) {
    var document = req.body
    Document.findOneAndUpdate({
        _id: req.params.id
    }, document, function (err, result) {
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
//delete document
router.delete('/:id', function(req, res) {
    Document.findOneAndRemove({
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