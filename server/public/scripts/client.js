$(document).ready(function(){
var calcScreen = $('#finalValue'); //the calculator screen
var operator = ''; //operator set to empty string to be used within other functions
var numOne = 0;
var numTwo = 0;
var numThree = 0;

numberInput();
submit();

//sets the chosen operator
$('.operator').on('click', function(){
  operator = this.value;
  console.log('numOne and operator', numOne, operator);
});

//clears all values in calc
$('#clear').on('click', function(){
  numOne = 0;
  numTwo = 0;
  operator = '';
  calcScreen.text(0);
  $('input[type="number"], textarea').val('');
});


function numberInput(){
  $('.number').on('click', function(){
    if (operator == '' && numOne !== 0 && numThree !== 0){ //can't append numbers after submit has been clicked
      numOne = numOne;
      calcScreen.text(numOne);
    } else if (operator == '' && numOne == 0){ //initial number one
      numOne = this.value;
      calcScreen.text(numOne);
    } else if (operator == '' && numOne !== 0 ){//if more numbers are pressed to make numOne longer
      numOne += this.value;
      calcScreen.text(numOne);
    } else if (operator !== '' && numTwo == 0){//if an operator has been pressed, num one is done and it's time to find num2
      numTwo = this.value;
      calcScreen.text(numTwo);
    } else if (operator !== '' && numTwo !==0){//if more numbers are pressed to make num2 larger
      numTwo += this.value;
      calcScreen.text(numTwo);
    }
  });
}

//submit function makes the object to be passed into the ajax POST
function submit(){
$('#submit').on('click', function(){
  //putting numbers from inputs into variable
  numOne = parseFloat(numOne); //sets the first input number to numOne
  numTwo = parseFloat(numTwo); //sets the second input number to numTwo
  var mathObject = {num1: numOne, num2: numTwo, operation: operator}; //puts the two numbers from the inputs, as well as the selected operator into an object so it can be passed into my POST request
  doMath(mathObject); //does math (look at getData)
  // numThree = calcScreen.text();
  // // numOne = parseInt(numThree);
});//ends on click
}

//doMath function takes the object from the submit function and does math based on server side functions
function doMath(object){
  $.ajax({
    type: 'POST',
    url: '/calculate',
    data: object,
    success: function(response){
      console.log('domath response', response);
      numThree = parseFloat(response);
      calcScreen.text(numThree);
      numOne = numThree //num one is now num three
      numTwo = 0; //num two is 0 again so that whatever the previous value was can be operated on
      operator = ''; //operator set back to zero for that same reason
    }
  });
}

});//ends docready
