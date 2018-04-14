var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'), 
  bodyParser = require('body-parser');
  
var Item = require('./models/item.js');
var configDB = require('./config/database.js');
var User = require('./models/user.js')
/*
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.connect(configDB.url,options); // connect to our database
*/

mongoose.connect(configDB.url); // connect to our database


//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


var routes = require('./routes/routes'); //importing route
routes(app); //register the route

app.listen(port);