$(document).ready(function(){
var calcScreen = $('#finalValue'); //the calculator screen
var operator = ''; //operator set to empty string to be used within other functions

  $('.operator').on('click', function(){
    operator = this.value;
  });

  $('#clear').on('click', function(){
    clearData();
  })

$('#submit').on('click', function(){
  //putting numbers from inputs into variable
  var numOne = $('#num1').val(); //sets the first input number to numOne
  var numTwo = $('#num2').val(); //sets the second input number to numTwo
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
      updateCalcScreen();
    }
  });//ends post ajax
}
function updateCalcScreen(){
  $.ajax({
      type: 'GET',
      url: '/calculateGet',
      success: function(response){
        console.log(response);
        calcScreen.text(response);
      }
  });//ends get ajax
}

function clearData(){
  calcScreen.text(0);
  $('input[type="number"], textarea').val('');
}

});//ends docready
