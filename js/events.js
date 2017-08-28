//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
});

function getIt() {

  $('p').on('click', function() {
    alert('Hey!');
  })

}

function frameIt() {
  console.log('got here')
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}
