$(document).ready(function(){

$('button').on('click', function(){
  num1 = $('#num1').val();
  num2 = $('#num2').val();
  console.log(num1);
  console.log(num2);

  //create an object with the two numbers
  //pass the object into ajax post
  //change #finalValue h2 text to new finalValue

});//ends on click

var quickObject = {num1: 3, num2: 4};

  $.ajax({
    type: 'POST',
    url: '/add',
    data: quickObject,
    success: function(response){
      console.log(response);

    }//ends success
    // error: function(error){
    //   console.log('The "/TEST" ajax POST request failed with error: ', error);
    // }
  });//ends post ajax

  
function appendValue(){
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
