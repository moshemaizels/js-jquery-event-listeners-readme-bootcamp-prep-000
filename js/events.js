//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
});

function getIt() {

  $('p').on('load', function() {
    alert('Hey!');
    
  })

}

function frameIt() {

  $('img').on('load', function(){

    $('img').addClass('tasty')
  })
}
