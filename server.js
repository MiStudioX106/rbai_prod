
var path = require('path');
var mongoose = require('mongoose');
var config = require('config');


//
var route = require('./routes/index');


//configs
var port = config.get('serverConfig.port');
var dbUrl = config.get('dbConfig.url');
var dbOpt = config.get('dbConfig.opt');

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());





//connect to DB
mongoose.connect(dbUrl, dbOpt, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully connected to ' + dbUrl);
    }
});


app.set('views', path.join(__dirname, '../public/'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


// allow CROS
app.use(function (req, res, next) {

    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();

    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    // next();
})

// route



app.use(route);
  
app.listen(port, function () {
    console.log('Server started on port ' + port);
});