$(document).ready(function(){
var calcScreen = $('#finalValue'); //the calculator screen
var operator = ''; //operator set to empty string to be used within other functions
var numOne = 0;
var numTwo = 0;

  $('.number').on('click', function(){
    if (operator == '' && numOne == 0){
      numOne = this.value;
      calcScreen.text(numOne);
    } else if (operator == '' && numOne !== 0){
      numOne += this.value;
      calcScreen.text(numOne);
      console.log(numOne);
    } else if (operator !== '' && numTwo == 0){
      numTwo = this.value;
      calcScreen.text(numTwo);
    } else if (operator !== '' && numTwo !==0){
      numTwo += this.value;
      calcScreen.text(numTwo);
    }
  });

  $('.operator').on('click', function(){
    operator = this.value;
    console.log(numOne, operator);
    calcScreen.text(numOne, operator);
  });

  $('#clear').on('click', function(){
    numOne = 0;
    numTwo = 0;
    operator = '';
    calcScreen.text(0);
    $('input[type="number"], textarea').val('');
  });

$('#submit').on('click', function(){
  //putting numbers from inputs into variable
  numOne = parseInt(numOne); //sets the first input number to numOne
  numTwo = parseInt(numTwo); //sets the second input number to numTwo
  var mathObject = {num1: numOne, num2: numTwo, operation: operator}; //puts the two numbers from the inputs, as well as the selected operator into an object so it can be passed into my POST request
  doMath(mathObject); //does math (look at getData)

});//ends on click

function doMath(object){
  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: object,
    success: function(response){
      console.log(response);
      calcScreen.text(response);
    }
  });//ends post ajax
}

// function clearData(){
//   calcScreen.text(0);
//   $('input[type="number"], textarea').val('');
// }

});//ends docready


// first number needs to be selected
// if NaN nothing is added to the screen
// if a number it's added to the screen and stored and numOne
// if another number is chosen it's appended to the first number 'string'
// when a operator is chosen, that first number is stored as numOne and the operator is selected
// if another operator is selected, the last operator is replaced
// once another number is selected, it is added to the screen
// if more numbers are selected, they are appended to that new number and stored as numTwo
// once = is pressed, the object is made and then passed through the ajax request
