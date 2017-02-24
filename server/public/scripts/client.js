$(document).ready(function(){

$('button').on('click', function(){
  num1 = $('#num1').val();
  num2 = $('#num2').val();
  console.log(num1);
  console.log(num2);

  //data var = the radio button that was checked

});//ends on click

var quickObject = {num1: 3, num2: 4};

  $.ajax({
    type: 'POST',
    url: '/test',
    data: quickObject,
    success: function(response){
      console.log(response);
      // return quickObject[num1] + quickObject[num2];
    }//ends success
    // error: function(error){
    //   console.log('The "/TEST" ajax POST request failed with error: ', error);
    // }
  });//ends ajax
});//ends docready
