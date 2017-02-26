var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  firstNum = parseFloat(req.body.num1); //turns the first number from the input field into a # and stores it to a variable
  secondNum = parseFloat(req.body.num2); //turns the second number from the input field into a # and stores it to a variable
  finalValue = firstNum + secondNum; //passes the first number, second number, and operation into my function
  finalValue = (finalValue).toFixed(4); //fixed to 4 decimals to limit long ass decimals from the calculations
  finalValueString = finalValue.toString(); //converts the returned value to a string so it can be passed back to the client side via my res.send();
  res.send(finalValueString); //sends results back client side !!
  res.sendStatus(200); //successssssssss
});

module.exports = router;
