var express = require('express');
var router = express.Router();

var Login = require('../../../schema/login.js');

router.post('/',function(req,res,next){
    var login = req.body;
    Login.findOne({
        userid: login.userid,
        userpwd: login.userpwd
    },function(err,login){
        if(err){
            console.log(err);
        }else{
            console.log(login);
            // res.send({redirect: '/admin/admin-menu'});
             res.redirect('/admin/admin-menu');
            // res.location('/admin/admin-menu');
            
        }
    });
})

module.exports= router;