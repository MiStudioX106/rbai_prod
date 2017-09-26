
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


const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://ccumissa.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'Rbai-Admin-API',
    issuer: "https://ccumissa.auth0.com/",
    algorithms: ['RS256']
});

app.get('/api/deals/private', authCheck, (req, res)=>{
    let deals = [
        {
          id: 14423,
          name: 'Tesla S',
          description: 'Ride in style and say goodbye to paying for gas. The Tesla S is the car of the future.',
          originalPrice: 90000.00,
          salePrice: 75000.00
        },
        {
          id: 14553,
          name: 'DJI Phantom 4',
          description: 'The Drone revolution is here. Take to the skies with the DJI Phantom 4.',
          originalPrice: 1299.99,
          salePrice: 749.99
        },
        {
          id: 15900,
          name: 'iPhone 7 - Jet Black',
          description: 'Get the latest and greatest iPhone in the limited edition jet black.',
          originalPrice: 899.99,
          salePrice: 799.99
        },
        {
          id: 16000,
          name: '70" Samsung 4K HDR TV',
          description: 'Watch as if you were there with the latest innovations including 4K and HDR.',
          originalPrice: 2999.99,
          salePrice: 2499.99
        },
        {
          id: 17423,
          name: 'Canon t8i DSLR',
          description: 'Capture life\'s moments with the amazing Canon t8i DSLR',
          originalPrice: 999.99,
          salePrice: 549.99
        },
        {
          id: 17423,
          name: 'Xbox One S',
          description: 'Get the latest Xbox and play the best first party games including Gears of War and Forza.',
          originalPrice: 299.99,
          salePrice: 279.99
        },
        ];
        res.json(deals);
});

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
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
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