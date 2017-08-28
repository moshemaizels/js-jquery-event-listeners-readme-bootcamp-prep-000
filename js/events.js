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
  $('img').on('load', function(){
  //actions you want to happen
  console.log("HEYYYYY")
});

}

function frameIt() {

  $('img').on('load', function(){

    $('img').addClass('tasty')
  })
}
