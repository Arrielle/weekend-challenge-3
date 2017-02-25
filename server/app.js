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
var finalValueObject = {finalValue: 0};
var finalValue = 0;
var finalValueString = '';

function operatorFunction(operator, num1, num2) {
  if (operator == '+'){
    return num1 + num2;
  } else if (operator == '-'){
    return num1 - num2;
  } else if (operator == '/'){
    return num1 / num2;
  } else if (operator == '*'){
    return num1 * num2;
  }
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//addition
app.post('/add', function(req, res){
  operation = req.body.operation;
  firstNum = parseInt(req.body.num1);
  secondNum = parseInt(req.body.num2);
  // console.log('inside post: ', parseInt(req.body.operation));
  // finalValueObject.finalValue = + " " + operator + " " + parseInt(req.body.num2);
  // finalValue = parseInt(req.body.num1), operator, parseInt(req.body.num2);
  // console.log('finalValue num post: ', finalValue);

  finalValue = operatorFunction(operation, firstNum, secondNum);
  console.log(finalValue);

  finalValueString = finalValue.toString();
  console.log('finalValue: ', finalValue.toString()); //logs in terminal
  console.log('finalValueObject: ', finalValueObject); //logs in terminal
  res.sendStatus(200);
});

app.get('/add2', function(req, res){
  console.log('in get', finalValueObject);
  console.log('in Get', finalValue);
  res.status(200);
  res.send(finalValueString);
});
//
// //subtraction
// app.post('/sub', function(req, res){
//   mathWasDone = parseInt(req.body.num1) - parseInt(req.body.num2);
//   console.log(mathWasDone);
//   res.sendStatus(200);
// });
//
// //multiplication
// app.post('/mult', function(req, res){
//   mathWasDone = parseInt(req.body.num1) - parseInt(req.body.num2);
//   console.log(mathWasDone);
//   res.sendStatus(200);
// });
//
// //division
// app.post('/div', function(req, res){
//   finalValue = parseInt(req.body.num1) - parseInt(req.body.num2);
//   finalValueObject =
//   console.log(mathWasDone);
//   res.sendStatus(200);
// });
//


//server port! :)
app.listen(5000);
