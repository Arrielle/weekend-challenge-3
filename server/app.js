var bodyParser = require('body-parser');
var express = require('express');
// var multiplication = require('./routes/multiplication'); //didn't use because of my operatorFunction
// var division = require('./routes/division'); //didn't use because of my operatorFunction
// var addition = require('./routes/addition'); //didn't use because of my operatorFunction
// var subtraction = require('.routes/subtraction'); //didn't use because of my operatorFunction
var app = express();
//setting variables
var finalValue = 0;
var finalValueString = '';
//determines what kind of math will be done to my numbers so that I don't need 5 separate post requests
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
//one post to rule them all
app.post('/calculate', function(req, res){
  operation = req.body.operation; //finds out which operation was chosen
  firstNum = parseFloat(req.body.num1); //turns the first number from the input field into a # and stores it to a variable
  secondNum = parseFloat(req.body.num2); //turns the second number from the input field into a # and stores it to a variable
  finalValue = operatorFunction(operation, firstNum, secondNum); //passes the first number, second number, and operation into my function
  finalValue = (finalValue).toFixed(4); //fixed to 4 decimals to limit long ass decimals from the calculations
  finalValueString = finalValue.toString(); //converts the returned value to a string so it can be passed back to the client side via my res.send();
  res.send(finalValueString); //sends results back client side !!
  res.sendStatus(200); //successssssssss
});
//server port! :)
app.listen(5000);
