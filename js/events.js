//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
});

function getIt() {

  $('p').on('click', function() {
    alert('Hey!');

  })


}

function frameIt() {

  $('img').on('load', function(){

    $('img').addClass('tasty')

  })
}

function pressIt() {
  $('')
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which == 71) {
      alert("ehhh you pressed g")
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("your form is going to be submitted now")
  })
}
