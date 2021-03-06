$(document).ready(function(){
  var calcScreen = $('#finalValue'); //the calculator screen
  var operator = ''; //operator set to empty string to be used within other functions
  var numOne = 0;
  var numTwo = 0;
  var numThree = 0;
  var dotCounter = 0;

  numberInput(); //determines if it's the first or second number
  submit(); //does math

  $('.operator').on('click', function(){ //sets the chosen operator
    if (numTwo == 0){ //ensures that if another operator was pressed on accident after the second number was chosen, nothing happens
      operator = this.value;
      dotCounter = 0;
    }
  })
  $('#clear').on('click', function(){
    numOne = 0;
    numTwo = 0;
    numThree = 0;
    operator = '';
    dotCounter = 0;
    calcScreen.text(0);
    $('input[type="number"], textarea').val('');
  });

  function submit(){ //submit function makes the object to be passed into the ajax POST and passes it
    $('#submit').on('click', function(){
      numOne = parseFloat(numOne); //sets the first input number to numOne
      numTwo = parseFloat(numTwo); //sets the second input number to numTwo
      var mathObject = {num1: numOne, num2: numTwo, operation: operator}; //puts the two numbers from the inputs, as well as the selected operator into an object so it can be passed into my POST request
      whatOperation(mathObject); //does math
    });//ends on click
  }

  function division(object){
    $.ajax({
      type: 'POST',
      url: '/division',
      data: object,
      success: function(response){
successNumberFunc(response);
      }
    });
  }

  function multiplication(object){
    $.ajax({
      type: 'POST',
      url: '/multiplication',
      data: object,
      success: function(response){
successNumberFunc(response);
      }
    });
  }

  function addition(object){
    $.ajax({
      type: 'POST',
      url: '/addition',
      data: object,
      success: function(response){
        successNumberFunc(response);
      }
    });
  }

  function subtraction(object){
    $.ajax({
      type: 'POST',
      url: '/subtraction',
      data: object,
      success: function(response){
        successNumberFunc(response);
      }
    });
  }

  function modulo(object){
    $.ajax({
      type: 'POST',
      url: '/modulo',
      data: object,
      success: function(response){
        successNumberFunc(response);
      }
    });
  }

  function successNumberFunc(response){
    numThree = parseFloat(response);
    calcScreen.text(numThree);
    numOne = numThree //num one is now num three
    numTwo = 0; //num two is 0 again so that whatever the previous value was can be operated on
    operator = ''; //operator set back to zero for that same reason
  }

  function whatOperation(object){
    if (object.operation == '*'){
      multiplication(object);
    } else if (object.operation == '/') {
      division(object);
    } else if (object.operation == '-') {
      subtraction(object);
    } else if (object.operation == '+') {
      addition(object);
    } else if (object.operation == '%') {
      modulo(object);
    }
  }

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

//

function decimalCounter(){
  var dotCheck = calcScreen.text();
  if (dotCheck.slice(-1) == '.'){
    dotCounter = 1;
  }
}

decimalCounter();

$('#decimal').on('click', function(){
  if (dotCounter !== 0){
    //do nothing
  } else if (dotCounter == 0 && operator == '' && numOne !== 0 && numThree !== 0){ //can't append numbers after submit has been clicked
  numOne = numOne;
  dotCounter = 1;
  calcScreen.text(numOne);
} else if (dotCounter == 0 && operator == '' && numOne == 0){ //initial number one
  numOne = this.value;
  dotCounter = 1;
  calcScreen.text(numOne);
} else if (dotCounter == 0 && operator == '' && numOne !== 0 ){//if more numbers are pressed to make numOne longer
  numOne += this.value;
  dotCounter = 1;
  calcScreen.text(numOne);
} else if (dotCounter == 0 && operator !== '' && numTwo == 0){//if an operator has been pressed, num one is done and it's time to find num2
numTwo = this.value;
dotCounter = 1;
calcScreen.text(numTwo);
} else if (dotCounter == 0 && operator !== '' && numTwo !==0){//if more numbers are pressed to make num2 larger
  numTwo += this.value;
  dotCounter = 1;
  calcScreen.text(numTwo);
}
});


});//ends docready

//if numOne == 0 append -
//if numOne !== 0 && numTwo == 0 append -
//else do nothing.
