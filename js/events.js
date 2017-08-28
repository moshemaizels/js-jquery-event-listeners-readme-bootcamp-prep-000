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

  $('img').on('keydown', function(){
    
    $('img').addClass('tasty')
  })
}
