var bodyParser = require('body-parser');
var express = require('express');
var multiplication = require('./routes/multiplication'); //didn't use because of my operatorFunction
var division = require('./routes/division'); //didn't use because of my operatorFunction
var addition = require('./routes/addition'); //didn't use because of my operatorFunction
var subtraction = require('./routes/subtraction'); //didn't use because of my operatorFunction
var modulo = require('./routes/modulo');
var app = express();
//setting variables

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.post('/modulo', modulo);
app.post('/multiplication', multiplication);
app.post('/division', division);
app.post('/addition', addition);
app.post('/subtraction', subtraction);

//server port! :)
app.listen(5000);
