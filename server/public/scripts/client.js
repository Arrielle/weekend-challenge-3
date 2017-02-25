$(document).ready(function(){

var operator = '';

  $('.operator').on('click', function(){
    operator = this.value;
  });

$('button').on('click', function(){
  //putting numbers from inputs into variable
  var numOne = $('#num1').val();
  var numTwo = $('#num2').val();
  console.log(operator);

  //putting numbers from inputs into object
  var quickObject = {num1: numOne, num2: numTwo, operation: operator};
  console.log(quickObject);
  // console.log(quickObject);
  getDataAddition(quickObject);

});//ends on click

function getDataAddition(object){
  $.ajax({
    type: 'POST',
    url: '/add',
    data: object,
    success: function(response){
      console.log(response);
      appendValueAddition();
    }
  });//ends post ajax
}
function appendValueAddition(){
  $.ajax({
      type: 'GET',
      url: '/add2',
      success: function(response){
        console.log(response);
        $('#finalValue').text(response);
      }
  });//ends get ajax
}

});//ends docready
