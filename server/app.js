var bodyParser = require('body-parser');
var express = require('express');
// var multiplication = require('./routes/multiplication'); //didn't use because of my operatorFunction
// var division = require('./routes/division'); //didn't use because of my operatorFunction
// var addition = require('./routes/addition'); //didn't use because of my operatorFunction
// var subtraction = require('./routes/subtraction'); //didn't use because of my operatorFunction
var modulo = require('./routes/modulo');
var app = express();
//setting variables
var finalValue = 0;
var finalValueString = '';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.use('/modulo', modulo);

app.post('/division', function(req, res){
    firstNum = parseFloat(req.body.num1); //turns the first number from the input field into a # and stores it to a variable
    console.log('first: ', firstNum);
    secondNum = parseFloat(req.body.num2); //turns the second number from the input field into a # and stores it to a variable
    console.log('second: ', secondNum);
    finalValue = firstNum / secondNum; //passes the first number, second number, and operation into my function
    console.log('finalVal: ', finalValue)
    finalValue = (finalValue).toFixed(4); //fixed to 4 decimals to limit long ass decimals from the calculations
    finalValueString = finalValue.toString(); //converts the returned value to a string so it can be passed back to the client side via my res.send();
    console.log('finalString: ', finalValueString);
    res.send(finalValueString); //sends results back client side !!
    res.sendStatus(200); //successssssssss
});

app.post('/multiplication', function(req, res){
  firstNum = parseFloat(req.body.num1); //turns the first number from the input field into a # and stores it to a variable
  console.log('first: ', firstNum);
  secondNum = parseFloat(req.body.num2); //turns the second number from the input field into a # and stores it to a variable
  console.log('second: ', secondNum);
  finalValue = firstNum * secondNum; //passes the first number, second number, and operation into my function
  console.log('finalVal: ', finalValue)
  finalValue = (finalValue).toFixed(4); //fixed to 4 decimals to limit long ass decimals from the calculations
  finalValueString = finalValue.toString(); //converts the returned value to a string so it can be passed back to the client side via my res.send();
  console.log('finalString: ', finalValueString);
  res.send(finalValueString); //sends results back client side !!
  res.sendStatus(200); //successssssssss
});

app.post('/addition', function(req, res){
  firstNum = parseFloat(req.body.num1); //turns the first number from the input field into a # and stores it to a variable
  console.log('first: ', firstNum);
  secondNum = parseFloat(req.body.num2); //turns the second number from the input field into a # and stores it to a variable
  console.log('second: ', secondNum);
  finalValue = firstNum + secondNum; //passes the first number, second number, and operation into my function
  console.log('finalVal: ', finalValue)
  finalValue = (finalValue).toFixed(4); //fixed to 4 decimals to limit long ass decimals from the calculations
  finalValueString = finalValue.toString(); //converts the returned value to a string so it can be passed back to the client side via my res.send();
  console.log('finalString: ', finalValueString);
  res.send(finalValueString); //sends results back client side !!
  res.sendStatus(200); //successssssssss
});

app.post('/subtraction', function(req, res){
  firstNum = parseFloat(req.body.num1); //turns the first number from the input field into a # and stores it to a variable
  console.log('first: ', firstNum);
  secondNum = parseFloat(req.body.num2); //turns the second number from the input field into a # and stores it to a variable
  console.log('second: ', secondNum);
  finalValue = firstNum - secondNum; //passes the first number, second number, and operation into my function
  console.log('finalVal: ', finalValue)
  finalValue = (finalValue).toFixed(4); //fixed to 4 decimals to limit long ass decimals from the calculations
  finalValueString = finalValue.toString(); //converts the returned value to a string so it can be passed back to the client side via my res.send();
  console.log('finalString: ', finalValueString);
  res.send(finalValueString); //sends results back client side !!
  res.sendStatus(200); //successssssssss
});

//server port! :)
app.listen(5000);
