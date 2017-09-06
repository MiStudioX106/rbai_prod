var express = require('express');
var router = express.Router();

var News = require('../../../schema/news.js');


//create news
router.post('/', function (req, res, next) {
    var news = new News(req.body);
    news.save(function (err, result) {
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
//update news
router.put('/:id', function (req, res, next) {
    var news = req.body
    News.findOneAndUpdate({
        _id: req.params.id
    }, news, function (err, result) {
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
//delete news
router.delete('/:id', function(req, res) {
    News.findOneAndRemove({
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
        };
    });
});

module.exports = router;