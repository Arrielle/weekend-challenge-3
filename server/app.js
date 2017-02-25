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
  } else if (operator == '%'){
    return num1 % num2;
  }
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//addition
app.post('/calculate', function(req, res){
  operation = req.body.operation; //finds out which operation was chosen
  firstNum = parseFloat(req.body.num1); //turns the first number from the input field into a # and stores it to a variable
  secondNum = parseFloat(req.body.num2); //turns the second number from teh input field into a # and stores it to a variable
  finalValue = operatorFunction(operation, firstNum, secondNum); //passes the first number, second number, and operation into my function
  finalValue = (finalValue).toFixed(4);
  finalValueString = finalValue.toString(); //converts the returned value to a string so it can be passed back to the client side in my GET
  res.send(finalValueString);
  res.sendStatus(200); //successssssssss
});


//server port! :)
app.listen(5000);
