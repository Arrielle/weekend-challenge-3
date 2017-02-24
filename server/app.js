console.log('Log 2: Starting up the server!');
//variables that link modules to the app.js
var bodyParser = require('body-parser');
var express = require('express');
// var multiplication = require('./routes/multiplication');
// var division = require('./routes/division');
// var addition = require('./routes/addition');
// var subtraction = require('.routes/subtraction');
var app = express();
//
var mathWasDone = 0;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//addition
app.post('/add', function(req, res){
  mathWasDone = parseInt(req.body.num1) + parseInt(req.body.num2);
  console.log(mathWasDone);
  res.sendStatus(200);
});

//subtraction
app.post('/sub', function(req, res){
  mathWasDone = parseInt(req.body.num1) - parseInt(req.body.num2);
  console.log(mathWasDone);
  res.sendStatus(200);
});

//multiplication
app.post('/mult', function(req, res){
  mathWasDone = parseInt(req.body.num1) - parseInt(req.body.num2);
  console.log(mathWasDone);
  res.sendStatus(200);
});

//division
app.post('/mult', function(req, res){
  mathWasDone = parseInt(req.body.num1) - parseInt(req.body.num2);
  console.log(mathWasDone);
  res.sendStatus(200);
});



//server port! :)
app.listen(5000);
